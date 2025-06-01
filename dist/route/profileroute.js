"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const profilepage = path_1.default.join(__dirname, "../../public/profile.html");
const profileroute = (0, express_1.Router)();
profileroute.get("/profile", (req, res) => {
    res.sendFile(profilepage);
});
profileroute.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});
exports.default = profileroute;
