import { Router } from "express";
import path from "path"
import { course } from "../module/course";
import { writejsonfile } from "../middleware/writejsonfile";
import { student } from "../module/student";
const courseroute = Router();
courseroute.get("/course", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/course.html"))
});

courseroute.post("/course", async (req, res) => {

  const courses: { studentId: student; courses: course }[] = [];
  const newcourse: course = req.body;
  const id: any = req.session.student?.id;
  courses.push({ studentId: id, courses: newcourse });
  await writejsonfile("course.json", courses);

  res.redirect("/profile");

});
export default courseroute;