import {
  GetProgramVerificationStatusParams,
  GetProgramVerificationStatusResponse,
  handleError,
  OSEC_ENDPOINT_URI,
  OSEC_ROUTER,
} from "../shared";

export async function get_program_verification_status({
  address,
}: GetProgramVerificationStatusParams): Promise<GetProgramVerificationStatusResponse> {
  try {
    const response = await fetch(
      OSEC_ENDPOINT_URI + OSEC_ROUTER.GET_PROGRAM_VERIFICATION_STATUS + address
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "get_program_verification_status"));
  }
}
