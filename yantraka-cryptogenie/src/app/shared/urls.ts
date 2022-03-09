import { environment } from "src/environments/environment";

const API_BASE_URL = environment.API_URL

export const GET_PAYLOAD = API_BASE_URL + '/cryptogenie/v1/predictions?'

export const TEST_URL = "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/signup"
 