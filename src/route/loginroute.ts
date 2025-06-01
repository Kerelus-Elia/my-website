import { Router } from "express";
import path from "path"
import { student } from "../module/student";
import { readjsonfile_s } from "../middleware/writejsonfile";
import { error } from "console";

const loginroute = Router();

loginroute.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/login.html"))
});

loginroute.post("/login", async (req: any, res: any) => {

    try {
        const { id, password } = req.body;
        if (!id || !password) {
            return res.json({ error: "ID and password are req!" });
        }
        const data: student[] = await readjsonfile_s();
        const find = data.find(u => u.id === id && u.password === password)
        if (!find) {
            return res.json({ error: 'Invalid ID or password!' });
        }
        req.session.student = find;
        res.redirect("/");
    }
    catch (e) {
        console.log("error", e);
    }
});
export default loginroute;