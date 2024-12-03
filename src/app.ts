import { Server } from "./server";
import { ENV } from "./core/constants/secret_jwt";

const server = new Server(ENV.PORT);
server.run();
