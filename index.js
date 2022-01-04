const express = require("express");
const cors = require("cors");
const Courses = require("./config");
const app = express();

app.use(express.json());
app.use(cors({origin: true}));

// Anyone get Courses
app.get("/getCourses", async (req, res) => {
  const snapshot = await Courses.get();
  const list = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  res.send(list);
});

// Admin add Courses
app.post("/addCourse", async (req, res)=> {
  const data = req.body;
  await Courses.add(data);
  res.send({msg: "Course added"});
});

// Admin update Course
app.post("/updateCourse", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await Courses.doc(id).update(data);
  res.send({msg: "Updated Course"});
});

// Admin delete Course
app.post("/deleteCourse", async (req, res) => {
  const id = req.body.id;
  await Courses.doc(id).delete();
  res.send({msg: "Deleted Course"});
});

app.listen(4000, ()=> console.log("server is runng at port 4000"));