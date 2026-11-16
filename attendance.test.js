// Simple tests for attendance.js. Run with: node attendance.test.js
const assert = require("assert");
const { attendanceRecords, calculatePercentage, getSummary, getStatus } = require("./attendance.js");

assert.strictEqual(calculatePercentage(36, 40), 90);
assert.strictEqual(calculatePercentage(2, 3), 66.67);
assert.strictEqual(calculatePercentage(0, 0), 0);

const summary = getSummary(attendanceRecords);
assert.strictEqual(summary.totalClasses, 175);
assert.strictEqual(summary.attendedClasses, 148);
assert.strictEqual(summary.percentage, 84.57);

assert.strictEqual(getStatus(75), "Good");
assert.strictEqual(getStatus(74.99), "Low");

console.log("All attendance tests passed.");
