import { greenBright, yellowBright, blueBright, white, redBright } from "chalk";

export const domain =
  process.env.NODE_ENV === "production" ? process.env.DOMAIN : "localhost";
export const port = process.env.PORT || 3001;
export const api_url = process.env.API_URL || "/api";
export const auth_url = process.env.AUTH_URL || "/auth";
export const db_uri =
  process.env.DB_URI ||
  "mongodb+srv://someperson:somepassword@cluster0.vljookl.mongodb.net/fswdjan23t2-auth-demo?retryWrites=true&w=majority";
export const salt_length = process.env.SALT_LENGTH
  ? Number(process.env.SALT_LENGTH)
  : 10;
export const access_token_secret =
  process.env.ACCESS_TOKEN_SECRET || "sup3rs3cr3t4cc3ss";
export const access_token_ttl = process.env.ACCESS_TOKEN_TTL || "10s";
export const refresh_token_secret =
  process.env.REFRESH_TOKEN_SECRET || "ad1ff3r3nts3cret4r3fr3sh";
export const refresh_token_ttl = process.env.REFRESH_TOKEN_TTL || "30d";
export const cookie_secret =
  process.env.COOKIE_SECRET || "c00k13jarcanth0ldm3back";
export const cookie_name = process.env.COOKIE_NAME || "authrt";
export const cookie_TTL = process.env.COOKIE_TTL
  ? Number(process.env.COOKIE_TTL)
  : 30 * 24 * 60 * 60 * 1000;
export const cookie_options = {
  sameSite: "lax",
  domain: domain,
  secure: false,
  signed: true,
  httpOnly: true,
  maxAge: cookie_TTL,
};
export const cors_options = {
  origin: [
    process.env.NODE_ENV === "production"
      ? process.env.CLIENT_HOST
      : "http://localhost:3000",
  ],
  credentials: true,
};

export function onDbConnectSuccess() {
  console.log(
    `${greenBright("[Database]")} ${white("Connection established")}`
  );
}
export function onDbConnectError(error) {
  console.log(
    `${redBright("[Database]")} ${yellowBright("Connection failed:")}`,
    error
  );
}

export function onServerListenSuccess() {
  console.log(
    `${greenBright("[Server]")} ${blueBright(
      "Now listening for requests on port"
    )} ${yellowBright(port)}`
  );
}
