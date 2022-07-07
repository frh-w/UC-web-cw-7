let courses = [];

function addCourse() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let course = document.getElementById("course").value;
  const newCourse = {
    name: "Farah",
    phone: "95562122",
    id: "123456",
    course: "Summer",
  };
  courses.push(newCourse);
}

function load() {
  let container = document.getElementById("container");
  courses.forEach((course) => {
    `<div><h1>${course.name} - ${course.id}</h1></h3>${course.course}</div>`;
  });
}
