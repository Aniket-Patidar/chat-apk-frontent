export const HOST = "http://localhost:8080"
const AUTH_ROUTE = `${HOST}/api/auth`;
const MESSAGE_ROUTE = `${HOST}/api/message`;
export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/user`
export const UPLOAD_USER_ROUTE = `${AUTH_ROUTE}/uploadImg`
export const SIGNUP_USER_ROUTE = `${AUTH_ROUTE}/signUp`
export const GETALL_USER_ROUTE = `${AUTH_ROUTE}/getAlluser`
export const SEND_MESSAGE_ROUTE = `${MESSAGE_ROUTE}/send-message`
export const GET_MESSAGE_ROUTE = `${MESSAGE_ROUTE}/get-message`




