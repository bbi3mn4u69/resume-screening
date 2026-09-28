function errorText(error: unknown): string {
  if (!(error instanceof Error)) return "";
  const responseBody =
    "responseBody" in error && typeof error.responseBody === "string"
      ? error.responseBody
      : "";
  return `${error.message}\n${responseBody}\n${errorText(error.cause)}`;
}

function isGroqJsonValidationFailure(error: unknown) {
  const details = errorText(error).toLowerCase();
  return (
    details.includes("json_validate_failed") ||
    details.includes("failed to validate json") ||
    details.includes("failed to generate json")
  );
}

export async function generateWithJsonFallback<T>(
  strictGeneration: () => Promise<T>,
  fallbackGeneration: () => Promise<T>,
) {
  try {
    return await strictGeneration();
  } catch (error) {
    if (!isGroqJsonValidationFailure(error)) throw error;
    return fallbackGeneration();
  }
}
