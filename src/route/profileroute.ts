import { Router } from "express";
import path from "path";
import session from "express-session";

const profilepage = path.join(__dirname, "../../public/profile.html")

const profileroute = Router();

profileroute.get("/profile", (req, res) => {
    res.sendFile(profilepage);
});

profileroute.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/") ;
    });
});

export default profileroute ;
