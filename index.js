import express from "express";
import cors from "cors";
import session from "express-session";
import db from "./config/Database.js";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import MahasiswaRoute from "./routes/MahasiswaRoute.js";
import SequelizeStore from "connect-session-sequelize";
import OperatorRoute from "./routes/OperatorRoute.js";
import DosenwaliRoute from "./routes/Dosenwali.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import IrsRoute from "./routes/IrsRoute.js";
import PklRoute from "./routes/PklRoute.js";
import SkripsiRoute from "./routes/SkripsiRoute.js";
import KhsRoute from "./routes/KhsRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,

    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(OperatorRoute);
app.use(MahasiswaRoute);
app.use(DosenwaliRoute);
app.use(IrsRoute);
app.use(PklRoute);
app.use(SkripsiRoute);
app.use(KhsRoute);

// store.sync();

// db.sync({
//   force: true,
//   alter: true,
// }).then(() => {
//   console.log('🔄 User Model synced');
//  });


app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
