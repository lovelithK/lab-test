// Basic student attendance data and helpers.

const attendanceRecords = [
  { subject: "Mathematics", totalClasses: 40, attendedClasses: 36 },
  { subject: "Physics", totalClasses: 35, attendedClasses: 28 },
  { subject: "Chemistry", totalClasses: 30, attendedClasses: 21 },
  { subject: "Computer Science", totalClasses: 45, attendedClasses: 43 },
  { subject: "English", totalClasses: 25, attendedClasses: 20 }
];

const MIN_PERCENTAGE = 75;

function calculatePercentage(attended, total) {
  if (total <= 0) {
    return 0;
  }
  return Math.round((attended / total) * 10000) / 100;
}

function getSummary(records) {
  let total = 0;
  let attended = 0;
  records.forEach(function (record) {
    total += record.totalClasses;
    attended += record.attendedClasses;
  });
  return {
    totalClasses: total,
    attendedClasses: attended,
    percentage: calculatePercentage(attended, total)
  };
}

function getStatus(percentage) {
  return percentage >= MIN_PERCENTAGE ? "Good" : "Low";
}

function renderAttendance() {
  const tableBody = document.getElementById("attendance-body");
  if (!tableBody) {
    return;
  }

  attendanceRecords.forEach(function (record) {
    const percentage = calculatePercentage(record.attendedClasses, record.totalClasses);
    const row = document.createElement("tr");
    row.innerHTML =
      "<td>" + record.subject + "</td>" +
      "<td>" + record.totalClasses + "</td>" +
      "<td>" + record.attendedClasses + "</td>" +
      "<td>" + percentage + "%</td>" +
      '<td class="status ' + getStatus(percentage).toLowerCase() + '">' + getStatus(percentage) + "</td>";
    tableBody.appendChild(row);
  });

  const summary = getSummary(attendanceRecords);
  document.getElementById("total-classes").textContent = summary.totalClasses;
  document.getElementById("attended-classes").textContent = summary.attendedClasses;
  document.getElementById("attendance-percentage").textContent = summary.percentage + "%";
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", renderAttendance);
}

if (typeof module !== "undefined") {
  module.exports = { attendanceRecords, calculatePercentage, getSummary, getStatus, MIN_PERCENTAGE };
}
