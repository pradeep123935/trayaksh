interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up expired entries every 10 minutes to avoid memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of rateLimitMap.entries()) {
      if (now > entry.resetTime) {
        rateLimitMap.delete(ip);
      }
    }
  }, 10 * 60 * 1000);
}

export interface RateLimitResult {
  isRateLimited: boolean;
  remaining: number;
  resetTimeMinutes: number;
}

/**
 * Public rate limiter for unauthenticated API routes.
 * @param ip Client IP Address
 * @param limit Maximum allowed requests within duration window (default: 5)
 * @param windowMs Time window in milliseconds (default: 15 minutes = 900,000 ms)
 */
export function checkRateLimit(
  ip: string,
  limit = 5,
  windowMs = 15 * 60 * 1000
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    // New or expired window
    const newResetTime = now + windowMs;
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: newResetTime,
    });

    return {
      isRateLimited: false,
      remaining: limit - 1,
      resetTimeMinutes: Math.ceil(windowMs / (60 * 1000)),
    };
  }

  if (entry.count >= limit) {
    // Exceeded limit
    const remainingMs = entry.resetTime - now;
    const resetTimeMinutes = Math.ceil(remainingMs / (60 * 1000));

    return {
      isRateLimited: true,
      remaining: 0,
      resetTimeMinutes,
    };
  }

  // Increment count
  entry.count += 1;
  const remainingMs = entry.resetTime - now;
  const resetTimeMinutes = Math.ceil(remainingMs / (60 * 1000));

  return {
    isRateLimited: false,
    remaining: limit - entry.count,
    resetTimeMinutes,
  };
}
