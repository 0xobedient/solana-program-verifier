import {
  GetVerificationJobStatusParams,
  GetVerificationJobStatusResponse,
  handleError,
  OSEC_ENDPOINT_URI,
  OSEC_ROUTER,
} from "../shared";

export async function get_verification_job_status({
  job_id,
}: GetVerificationJobStatusParams): Promise<GetVerificationJobStatusResponse> {
  try {
    const response = await fetch(
      OSEC_ENDPOINT_URI + OSEC_ROUTER.GET_VERIFICATION_JOB_STATUS + job_id
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "get_verification_job_status"));
  }
}
