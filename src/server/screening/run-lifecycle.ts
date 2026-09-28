export async function finalizeRunFailure<T>(
  process: () => Promise<T>,
  markFailed: () => Promise<void>,
) {
  try {
    return await process();
  } catch (error) {
    try {
      await markFailed();
    } catch {
      // The original processing error is the useful error to return to the UI.
      // A disconnected database can also make this best-effort status write fail.
    }
    throw error;
  }
}
