import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from 'morgan';
import { MORGAN_FORMAT } from "./libs/config";

/** 1 - ENTRANCE **/
const app = express(); // loyihamiz BSSR usulida quriladi va bu cod sourcelarni butun brauzerlarga ochib beradi
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public"))); // Middleware DP > publicni ochiqlayapti
app.use(express.urlencoded({ extended: true })); // Middleware DP > Traditional APIga hizmat qilyapti
app.use(express.json()); // Middleware DP > REST APIga hizmat qilyapti
app.use(morgan(MORGAN_FORMAT));

/** 2 - SESSIONS **/

/** 3 - VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

/** 4 - ROUTERS **/
app.use("/admin", routerAdmin);     // EJS
app.use("/", router);               // REACT   // Middleware Design Pattern

export default app;