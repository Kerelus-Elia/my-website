import { Router } from "express";
import path from "path";
import { student } from "../module/student";

const homepage = path.join(__dirname, "../../public/index.html");

const homeroute = Router();

homeroute.get("/", (req, res) => {
    res.sendFile(homepage);
})
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
export default homeroute;