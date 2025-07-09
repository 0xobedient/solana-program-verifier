import {
  GetProgramBuildLogParams,
  handleError,
  OSEC_ENDPOINT_URI,
  OSEC_ROUTER,
} from "../shared";

export async function get_program_build_log({
  address,
}: GetProgramBuildLogParams) {
  try {
    const response = await fetch(
      OSEC_ENDPOINT_URI + OSEC_ROUTER.GET_PROGRAM_BUILD_LOG + address
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "get_program_build_log"));
  }
}
