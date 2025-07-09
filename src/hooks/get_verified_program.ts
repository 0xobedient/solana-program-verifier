import { handleError, OSEC_ENDPOINT_URI, OSEC_ROUTER } from "../shared";

export async function get_verified_programs() {
  try {
    const response = await fetch(
      OSEC_ENDPOINT_URI + OSEC_ROUTER.GET_VERIFIED_PROGRAM
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "get_verified_programs"));
  }
}
