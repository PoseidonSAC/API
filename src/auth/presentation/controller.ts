import { Login, Register, Session } from "../domain/usecases";
import { Request, Response } from "express";
import { ValidateTokenUseCase } from "./../domain/usecases/validate.token";
export class UserController {
  private loginUseCase: Login;
  private registerUseCase: Register;
  private sessionUseCase: Session;
  private validateTokenUseCase: ValidateTokenUseCase;
  constructor() {
    this.loginUseCase = new Login();
    this.registerUseCase = new Register();
    this.sessionUseCase = new Session(this.loginUseCase);
    this.validateTokenUseCase = new ValidateTokenUseCase();
  }
  login = async (req: Request, res: Response) => {
    const { token, user, refreshToken } = await this.sessionUseCase.execute(
      req.body
    );
    try {
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .cookie("refresh_token", refreshToken, {
          httpOnly: true,
        })
        .json(user);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  register = async (req: Request, res: Response) => {
    try {
      const user = await this.registerUseCase.execute(req.body);
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };

  validateToken = async (req: Request, res: Response) => {
    try {
      const token = req.cookies.access_token;
      if (!token) {
        res.status(400).json({ error: "Token not provided" });
        return;
      }
      const data = await this.validateTokenUseCase.execute(token);
      if (data.isValid) {
        res.status(200).json(data.user);
        return;
      }

      const refreshToken = req.cookies.refresh_token;
      if (!refreshToken) {
        res.status(400).json({ error: "Refresh token not provided" });
        return;
      }

      const dataRefresh = await this.validateTokenUseCase.execute(refreshToken);
      if (dataRefresh.isValid) {
        if (!dataRefresh.user) {
          res.status(400).json({ error: "Invalid token" });
          return;
        }
        const { user, token: newtoken } =
          await this.sessionUseCase.refreshToken(dataRefresh.user);
        res
          .cookie("access_token", newtoken, {
            httpOnly: true,
          })
          .json(user);
        return;
      }

      res.status(400).json({ error: "Invalid token" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  logout = async (req: Request, res: Response) => {
    res.clearCookie("access_token", { path: "/" });
    res.clearCookie("refresh_token", { path: "/" });
    res.status(200).json({ message: "Logged out" });
  };
}
