import {
  handleError,
  OSEC_ENDPOINT_URI,
  OSEC_ROUTER,
  VerifyParams,
  VerifyProgramResponse,
} from "../shared";

export async function verify_program(
  params: VerifyParams
): Promise<VerifyProgramResponse | null> {
  try {
    const response = await fetch(
      OSEC_ENDPOINT_URI + OSEC_ROUTER.VERIFY_PROGRAM,
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

    return null;
  } catch (error) {
    throw new Error(handleError(error, "verify_program"));
  }
}
