const EMAIL = /[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g;
const URL = /(?:https?:\/\/|www\.)\S+/gi;
const PHONE = /(?<!\w)(?:\+?\d[\d ()-]{7,}\d)(?!\w)/g;

export function sanitizeResume(text: string) {
  return text
    .replace(EMAIL, "[EMAIL REDACTED]")
    .replace(URL, "[URL REDACTED]")
    .replace(PHONE, "[PHONE REDACTED]");
}
