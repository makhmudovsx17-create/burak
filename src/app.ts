import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from 'morgan';
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "session",  // MongoDB ga "sessions" nomi bilan yangi collection ochamiz
});

/** 1 - ENTRANCE **/
const app = express(); // loyihamiz BSSR usulida quriladi va bu cod sourcelarni butun brauzerlarga ochib beradi
app.use(express.static(path.join(__dirname, "public"))); // Middleware DP > publicni ochiqlayapti
app.use(express.urlencoded({ extended: true })); // Middleware DP > Traditional APIga hizmat qilyapti
app.use(express.json()); // Middleware DP > REST APIga hizmat qilyapti
app.use(morgan(MORGAN_FORMAT));

/** 2 - SESSIONS **/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET), // sessionlarni hosil qiladigan kod
        cookie: {
            maxAge: 1000 * 3600 * 6,  // 6h  // sessionlarni amal qilish muddati
        },
        store: store, // MongoDBdagi sessions collectioniga murojaat etadi
        resave: true, // ohirgi kirgandan so'ng 3 soat mobaynida 
        saveUninitialized: true
    })
);

/** 3 - VIEWS **/
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

/** 4 - ROUTERS **/
app.use("/admin", routerAdmin);     // SSR
app.use("/", router);               // SPA   // Middleware Design Pattern

export default app;