export const handleError = (error: unknown | Error, name: string) => {
  if (error instanceof Error) {
    return JSON.stringify({
      status: "error",
      error: error.message,
      message: "Error: " + name,
    });
  }
  return JSON.stringify({
    status: "error",
    error: "UNKNOWN_ERROR: " + String(error),
    message: "Error: " + name,
  });
};
