import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig() || {};
export const LOGIN_ENDPOINT = "admin/login";
export const SIGNUP_ENDPOINT = "admin/signup";
export const USER_ENDPOINT = "api/user";

console.info("🚀 ~ LOGIN_ENDPOINT:", LOGIN_ENDPOINT);
