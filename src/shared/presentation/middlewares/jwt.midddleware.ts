import { RequestHandler } from "express";
import { Session } from "../../../auth/domain/usecases/session";
import { ValidateTokenUseCase } from "../../../auth/domain/usecases/validate.token";
import { Login } from "../../../auth/domain/usecases/login";

const sessionUseCase = new Session(new Login());
const validateTokenUseCase = new ValidateTokenUseCase();

export const jwtMiddleware: RequestHandler = async (req, res, next) => {
  const sendUnauthorized = (error: string) => {
    res.status(401).json({ error });
  };

  const accessToken = req.cookies.access_token;

  if (accessToken) {
    const { isValid, user } = await validateTokenUseCase.execute(accessToken);
    if (isValid && user) {
      req.body.session = user;
      next();
      return;
    }
  }

  const refreshToken = req.cookies.refresh_token;
  if (!refreshToken) {
    sendUnauthorized("Usuario no autenticado");
    return;
  }

  const { isValid, user } = await validateTokenUseCase.execute(refreshToken);
  if (!isValid || !user) {
    sendUnauthorized("Refresh token inválido");
    return;
  }

  const { token: newAccessToken } = await sessionUseCase.accessToken(user);
  res.cookie("access_token", newAccessToken, {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
  });

  req.body.session = user;
  next();
};
