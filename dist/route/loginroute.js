"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const writejsonfile_1 = require("../middleware/writejsonfile");
const loginroute = (0, express_1.Router)();
loginroute.get("/login", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public/login.html"));
});
loginroute.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, password } = req.body;
        if (!id || !password) {
            return res.json({ error: "ID and password are req!" });
        }
        const data = yield (0, writejsonfile_1.readjsonfile_s)();
        const find = data.find(u => u.id === id && u.password === password);
        if (!find) {
            return res.json({ error: 'Invalid ID or password!' });
        }
        req.session.student = find;
        res.redirect("/");
    }
    catch (e) {
        console.log("error", e);
    }
}));
exports.default = loginroute;
