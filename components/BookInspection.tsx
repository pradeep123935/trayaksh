"use client";

import { useState } from "react";
import { validateInspectionForm, ValidationErrors } from "@/lib/validation";

export default function BookInspection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    notes: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSuccessMessage(null);

    // 1. Client-Side Validation
    const validation = validateInspectionForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // 2. Call Next.js Server API route with rate limiting & backend validation
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.sanitizedData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        if (json.errors) {
          setErrors(json.errors);
        }
        setServerError(
          json.error || "An error occurred while submitting your request."
        );
      } else {
        setSuccessMessage(json.message);
        // Reset form upon successful DB save
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          location: "",
          notes: "",
        });
      }
    } catch {
      setServerError("Network error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#faf7f2] py-6 sm:py-7 lg:py-8 relative overflow-hidden"
      aria-labelledby="book-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Description (5/12) */}
          <div className="lg:col-span-5 space-y-2.5 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-[#a38753] uppercase block">
              BOOK AN INSPECTION
            </span>
            <h2
              id="book-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0f172a] leading-tight"
            >
              Let&apos;s Get Your <br className="hidden sm:inline" />
              Property Inspected
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              Fill in the details below and our team will get in touch with you shortly to schedule your property inspection.
            </p>
          </div>

          {/* Right Column: 2-Column Grid Inspection Booking Form Card (7/12) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-white p-4 sm:p-5 lg:p-6 shadow-lg border border-teal-900/10">
              
              {/* Server Success Banner */}
              {successMessage ? (
                <div className="rounded-lg bg-emerald-50 p-4 sm:p-5 border border-emerald-200 text-center space-y-2">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-emerald-900">
                    Inspection Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                    {successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccessMessage(null)}
                    className="mt-2 inline-flex items-center text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  
                  {/* Server Error / Rate Limit Alert */}
                  {serverError && (
                    <div className="sm:col-span-2 rounded-md bg-rose-50 p-3 border border-rose-200 text-xs text-rose-800 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 shrink-0 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label htmlFor="fullName" className="text-xs font-semibold text-[#0f172a] flex justify-between">
                      <span>Full Name <span className="text-red-500">*</span></span>
                      {errors.fullName && <span className="text-rose-500 text-[11px] font-normal">{errors.fullName}</span>}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full rounded-md border px-3 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-hidden transition-all ${
                        errors.fullName
                          ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-200 bg-slate-50/50 focus:border-[#0d3b3b] focus:bg-white"
                      }`}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold text-[#0f172a] flex justify-between">
                      <span>Email Address <span className="text-red-500">*</span></span>
                      {errors.email && <span className="text-rose-500 text-[11px] font-normal">{errors.email}</span>}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`w-full rounded-md border px-3 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-hidden transition-all ${
                        errors.email
                          ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-200 bg-slate-50/50 focus:border-[#0d3b3b] focus:bg-white"
                      }`}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label htmlFor="phoneNumber" className="text-xs font-semibold text-[#0f172a] flex justify-between">
                      <span>Phone Number <span className="text-red-500">*</span></span>
                      {errors.phoneNumber && <span className="text-rose-500 text-[11px] font-normal">{errors.phoneNumber}</span>}
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full rounded-md border px-3 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-hidden transition-all ${
                        errors.phoneNumber
                          ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-200 bg-slate-50/50 focus:border-[#0d3b3b] focus:bg-white"
                      }`}
                    />
                  </div>

                  {/* Property Location */}
                  <div className="space-y-1">
                    <label htmlFor="location" className="text-xs font-semibold text-[#0f172a] flex justify-between">
                      <span>Property Location <span className="text-red-500">*</span></span>
                      {errors.location && <span className="text-rose-500 text-[11px] font-normal">{errors.location}</span>}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter property location"
                        className={`w-full rounded-md border pl-3 pr-8 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-hidden transition-all ${
                          errors.location
                            ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                            : "border-slate-200 bg-slate-50/50 focus:border-[#0d3b3b] focus:bg-white"
                        }`}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-slate-400">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details (Optional) - Full Width */}
                  <div className="space-y-1 sm:col-span-2">
                    <label htmlFor="notes" className="text-xs font-semibold text-[#0f172a] flex justify-between">
                      <span>Additional Details <span className="text-slate-400 font-normal">(Optional)</span></span>
                      {errors.notes && <span className="text-rose-500 text-[11px] font-normal">{errors.notes}</span>}
                    </label>
                    <textarea
                      name="notes"
                      id="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any specific requirements or notes?"
                      className={`w-full rounded-md border px-3 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:outline-hidden transition-all resize-none ${
                        errors.notes
                          ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-slate-200 bg-slate-50/50 focus:border-[#0d3b3b] focus:bg-white"
                      }`}
                    ></textarea>
                  </div>

                  {/* Submit Button - Full Width */}
                  <div className="pt-1 sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:brightness-110 active:scale-98 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <span className="text-base leading-none" aria-hidden="true">&rarr;</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Sub-text - Full Width */}
                  <p className="text-[11px] text-center text-slate-500 font-normal sm:col-span-2">
                    We&apos;ll get back to you within 5 hours.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
