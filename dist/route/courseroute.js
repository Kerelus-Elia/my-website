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
const courseroute = (0, express_1.Router)();
courseroute.get("/course", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../public/course.html"));
});
courseroute.post("/course", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const courses = [];
    const newcourse = req.body;
    const id = (_a = req.session.student) === null || _a === void 0 ? void 0 : _a.id;
    courses.push({ studentId: id, courses: newcourse });
    yield (0, writejsonfile_1.writejsonfile)("course.json", courses);
    res.redirect("/profile");
}));
exports.default = courseroute;
