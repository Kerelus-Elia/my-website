"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const homeroute_1 = __importDefault(require("./route/homeroute"));
const loginroute_1 = __importDefault(require("./route/loginroute"));
const registerroute_1 = __importDefault(require("./route/registerroute"));
const profileroute_1 = __importDefault(require("./route/profileroute"));
const courseroute_1 = __importDefault(require("./route/courseroute"));
const app = (0, express_1.default)();
const port = 4003;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use((0, express_session_1.default)({
    secret: "key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));
app.use("/", homeroute_1.default);
app.use("/", loginroute_1.default);
app.use("/", registerroute_1.default);
app.use("/", profileroute_1.default);
app.use("/", courseroute_1.default);
app.listen(port, () => {
    console.log(`server run on http://localhost:${port}`);
});
