import express from "express";
import { Session } from "inspector/promises";
import path from "path";
import session from "express-session";
import { student } from "./module/student";
import { course } from "./module/course";
import homeroute from "./route/homeroute";
import loginroute from "./route/loginroute";
import regroute from "./route/registerroute";
import profileroute from "./route/profileroute";
import courseroute from "./route/courseroute";

const app = express();

const port = 8000 ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use(session({
    secret: "key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));

declare module "express-session"
{
    interface SessionData {
        student?: {
            studentname: string,
            id: number,
            email: string
            password: string
        }
        course?: {
            coursename: string[],
            id: student["id"]
        }
    }
}

app.use("/", homeroute);
app.use("/", loginroute);
app.use("/", regroute);
app.use("/", profileroute);
app.use("/", courseroute);

app.listen(port, () => {
    console.log(`server run on http://localhost:${port}`);
});