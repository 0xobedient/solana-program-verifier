import {
  handleError,
  OSEC_ENDPOINT_URI,
  OSEC_ROUTER,
  VerifySyncParams,
} from "../shared";

export async function verify_program_sync(params: VerifySyncParams) {
  try {
    const response = await fetch(
      OSEC_ENDPOINT_URI + OSEC_ROUTER.VERIFY_SYNC_PROGRAM,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    if (response.ok) {
      return await response.json();
    }

    return await response.text();
  } catch (error) {
    throw new Error(handleError(error, "verify_program_sync"));
  }
}
