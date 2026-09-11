export interface InspectionFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  notes?: string;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  location?: string;
  notes?: string;
}

export function validateInspectionForm(data: Partial<InspectionFormData>): {
  isValid: boolean;
  errors: ValidationErrors;
  sanitizedData: InspectionFormData;
} {
  const errors: ValidationErrors = {};

  const fullName = (data.fullName || "").trim();
  const email = (data.email || "").trim().toLowerCase();
  const phoneNumber = (data.phoneNumber || "").trim();
  const location = (data.location || "").trim();
  const notes = (data.notes || "").trim();

  // Full Name Validation
  if (!fullName) {
    errors.fullName = "Full Name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Full Name must be at least 2 characters.";
  } else if (fullName.length > 100) {
    errors.fullName = "Full Name cannot exceed 100 characters.";
  }

  // Email Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address (e.g. name@example.com).";
  } else if (email.length > 150) {
    errors.email = "Email address cannot exceed 150 characters.";
  }

  // Phone Number Validation
  const digitsOnly = phoneNumber.replace(/\D/g, "");
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  if (!phoneNumber) {
    errors.phoneNumber = "Phone Number is required.";
  } else if (!phoneRegex.test(phoneNumber) || digitsOnly.length < 7) {
    errors.phoneNumber = "Please enter a valid phone number with at least 7 digits.";
  } else if (digitsOnly.length > 15) {
    errors.phoneNumber = "Phone Number cannot exceed 15 digits.";
  }

  // Property Location Validation
  if (!location) {
    errors.location = "Property Location is required.";
  } else if (location.length < 3) {
    errors.location = "Location must be at least 3 characters.";
  } else if (location.length > 200) {
    errors.location = "Location cannot exceed 200 characters.";
  }

  // Additional Notes Validation (Optional)
  if (notes && notes.length > 1000) {
    errors.notes = "Additional details cannot exceed 1000 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: {
      fullName,
      email,
      phoneNumber,
      location,
      notes,
    },
  };
}
