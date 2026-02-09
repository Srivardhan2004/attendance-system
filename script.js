function login() {
  window.location.href = "dashboard.html";
}

function addStudent() {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push({
    id: sid.value,
    name: name.value,
    class: class.value
  });
  localStorage.setItem("students", JSON.stringify(students));
  alert("Student Added");
}

function markAttendance() {
  let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
  attendance.push({
    id: aid.value,
    date: date.value,
    status: status.value
  });
  localStorage.setItem("attendance", JSON.stringify(attendance));
  alert("Attendance Saved");
}

window.onload = function () {
  let data = JSON.parse(localStorage.getItem("attendance")) || [];
  let table = document.getElementById("report");
  if (table) {
    data.forEach(d => {
      table.innerHTML += `<tr><td>${d.id}</td><td>${d.date}</td><td>${d.status}</td></tr>`;
    });
  }
};
