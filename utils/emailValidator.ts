const publicDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "icloud.com"];

export const validateEmail = (email: string) => {
  const domain = email.split('@')[1];
  if (publicDomains.includes(domain)) {
    return "Public email domains are not allowed."; // Return an error message
  }
  return undefined; // Return undefined when valid
};