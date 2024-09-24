import { DelegateForm } from "../models/delegateModel";

type SponsorsForm = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  email: string;
  mobile: string;
  interestedIn: string;
  consent: boolean;
  terms: boolean;
};

export function validateDelegateFormData(formData: DelegateForm): boolean {
  // Validate required fields
  const requiredFields = [
      'title', 'fullName', 'email', 'mobile', 'industry', 'country', 
      'role', 'solution', 'nos_employees', 'budget', 'time_period'
  ];
  
  for (const field of requiredFields) {
      if (!formData[field as keyof DelegateForm]) {
          console.log(`Field ${field} is required.`);
          return false;
      }
  }

  // Validate email format
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(formData.email) || (formData.referEmail && !emailRegex.test(formData.referEmail))) {
      console.log("Invalid email format.");
      return false;
  }

  // Validate mobile phone format
  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(formData.mobile) || (formData.referPhoneNumber && !phoneRegex.test(formData.referPhoneNumber))) {
      console.log("Invalid mobile number format.");
      return false;
  }

  return true;
}

export function validateSponsorsFormData(formData: SponsorsForm): boolean {
  // Check required string fields are not empty
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.mobile ||
    !formData.companyName ||
    !formData.jobTitle ||
    !formData.interestedIn
  ) {
    console.log("Required fields must not be empty.");
    return false;
  }

  // Validate email format using simple regex
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(formData.email)) {
    console.log("Invalid email format.");
    return false;
  }

  // Validate mobile number as a sequence of digits (simplified validation)
  const mobileRegex = /^\d+$/;
  if (!mobileRegex.test(formData.mobile)) {
    console.log("Invalid mobile number format.");
    return false;
  }

  // Check if both consent and terms are true
  if (!formData.consent || !formData.terms) {
    console.log("Consent and terms must be accepted.");
    return false;
  }

  return true;
}
