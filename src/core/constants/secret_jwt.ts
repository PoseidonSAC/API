import dotenv from "dotenv";

dotenv.config();

if (!process.env.PORT) {
  throw new Error("PORT must be defined");
}
if (!process.env.SECRET_JWT) {
  throw new Error("JWT_SECRET must be defined");
}
if (!process.env.SECRET_HASH) {
  throw new Error("SECRET_HASH must be defined");
}

export const ENV = {
  PORT: process.env.PORT,
  SECRET_JWT: process.env.SECRET_JWT,
  SECRET_HASH: process.env.SECRET_HASH,
};
