import { Router } from "express";
import path from "path"
import { student } from "../module/student";
import { readjsonfile_s, writejsonfile } from "../middleware/writejsonfile";
import { stuvalidation } from "../middleware/validstu";
import { validationResult } from "express-validator";

const regroute = Router();

regroute.get("/register", (req, res) => {
   res.sendFile(path.join(__dirname, "../../public/register.html"))
});

regroute.post("/register", stuvalidation(), async (req: any, res: any) => {
   try {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.json({ error: errors.array() }) ;
      }

      const { studentname, id, email, password } = req.body;
      const data = new student(studentname, id, email, password);
      let read = await readjsonfile_s();
      let check = read.find(u => u.email === email && u.id === id && u.studentname === studentname)
      if (check) {
         return res.json({ error: "the student is already exist" }) ;
      }
      await writejsonfile("student.json", data);
      res.redirect("/login");
   }
   catch (e) {
      console.log("error");
   }
});

export default regroute;