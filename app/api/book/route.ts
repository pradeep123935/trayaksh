import { NextRequest, NextResponse } from "next/server";
import { initDb, getDbPool } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateInspectionForm } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    // Extract IP address for rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : realIp || "127.0.0.1";

    // 1. Rate Limiting Check (5 requests per 15 minutes per IP)
    const rateLimit = checkRateLimit(clientIp, 5, 15 * 60 * 1000);
    if (rateLimit.isRateLimited) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many requests from your IP. Please try again in ${rateLimit.resetTimeMinutes} minutes.`,
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON Payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request payload. Expected JSON body.",
        },
        { status: 400 }
      );
    }

    // 3. Form Validation
    const { isValid, errors, sanitizedData } = validateInspectionForm(body);
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the highlighted errors.",
          errors,
        },
        { status: 400 }
      );
    }

    // 4. Initialize DB Table & Insert Request
    await initDb();
    const db = getDbPool();

    const insertQuery = `
      INSERT INTO inspection_requests (full_name, email, phone_number, location, notes, ip_address)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, created_at;
    `;

    const values = [
      sanitizedData.fullName,
      sanitizedData.email,
      sanitizedData.phoneNumber,
      sanitizedData.location,
      sanitizedData.notes || null,
      clientIp,
    ];

    const result = await db.query(insertQuery, values);
    const createdRecord = result.rows[0];

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your inspection request has been submitted successfully. Our team will contact you shortly.",
        data: {
          id: createdRecord.id,
          createdAt: createdRecord.created_at,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("API error submitting inspection request:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
