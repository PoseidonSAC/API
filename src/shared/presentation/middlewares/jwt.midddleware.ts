import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.access_token;
  const SECRET_JWT = process.env.SECRET_JWT;
  if (!SECRET_JWT) {
    throw new Error("No se ha definido un SECRET_JWT");
  }
  if (!token) {
    res.status(401).send("No se ha enviado un token");
    return;
  }
  try {
    const data = jwt.verify(token, SECRET_JWT);
    req.body.session = data;
    next();
  } catch (error) {
    res.status(401).send("Token inválido");
    return;
  }
};
