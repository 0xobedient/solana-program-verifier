import {
  handleError,
  OSEC_ENDPOINT_URI,
  OSEC_ROUTER,
  CheckVerifyParams,
  CheckVerifyProgramResponse,
} from "../shared";

export async function check_verify_program(
  params: CheckVerifyParams
): Promise<CheckVerifyProgramResponse | null> {
  try {
    const response = await fetch(
      OSEC_ENDPOINT_URI + OSEC_ROUTER.CHECK_VERIFY_PROGRAM,
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
    throw new Error(handleError(error, "check_verify_program"));
  }
}
