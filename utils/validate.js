// Validate Zip Code

export function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}
