"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const homepage = path_1.default.join(__dirname, "../../public/index.html");
const homeroute = (0, express_1.Router)();
homeroute.get("/", (req, res) => {
    res.sendFile(homepage);
});
homeroute.get("/check-session", (req, res) => {
    if (req.session.student) {
        res.json({
            id: req.session.student.id,
            password: req.session.student.password,
            studentname: req.session.student.studentname,
            email: req.session.student.email,
        });
    }
    else {
        res.json({});
    }
});
exports.default = homeroute;
