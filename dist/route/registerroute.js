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
const student_1 = require("../module/student");
const writejsonfile_1 = require("../middleware/writejsonfile");
const validstu_1 = require("../middleware/validstu");
const express_validator_1 = require("express-validator");
const regroute = (0, express_1.Router)();
regroute.get("/register", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public/register.html"));
});
regroute.post("/register", (0, validstu_1.stuvalidation)(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.json({ error: errors.array() });
        }
        const { studentname, id, email, password } = req.body;
        const data = new student_1.student(studentname, id, email, password);
        let read = yield (0, writejsonfile_1.readjsonfile_s)();
        let check = read.find(u => u.email === email && u.id === id && u.studentname === studentname);
        if (check) {
            return res.json({ error: "the student is already exist" });
        }
        yield (0, writejsonfile_1.writejsonfile)("student.json", data);
        res.redirect("/login");
    }
    catch (e) {
        console.log("error");
    }
}));
exports.default = regroute;
