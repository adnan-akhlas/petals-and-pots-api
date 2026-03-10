import http, { Server } from "node:http";
import app from "./app";
import connectDb from "./config/db";
import env from "./config/env";

const port = env.PORT;
let server: Server | null;

(async function (): Promise<void> {
  try {
    server = http.createServer(app);
    server.listen(port, () => {
      console.log(`Server is listening to PORT: ${port}`);
    });
    await connectDb();
  } catch (error: unknown) {
    console.error(error);
    process.exit(1);
  }
})();
