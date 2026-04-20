// JS Date Practice - Exploring Date methods

// 1. Current timestamp
const timestamp = Date.now();
console.log("Timestamp (ms):", timestamp);

// 2. Create current date object
const now = new Date();
console.log("Current Date Object:", now);

// 3. Extract parts
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0=Sun):", now.getDay());

// 4. Time parts
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// 5. ISO and readable formats
console.log("ISO String:", now.toISOString());
console.log("Locale String:", now.toLocaleString());

// 6. Custom date
const customDate = new Date("2025-01-01");
console.log("Custom Date:", customDate);

// 7. Modify date
customDate.setFullYear(2030);
customDate.setMonth(5); // June
customDate.setDate(15);
console.log("Modified Date:", customDate);

// 8. Compare dates
const future = new Date("2030-01-01");
if (future > now) {
  console.log("Future date is ahead 🚀");
}

// 9. Difference between dates (in days)
const diffMs = future - now;
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log("Days until 2030:", diffDays);

// 10. Simple utility function
function formatDate(date) {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

console.log("Formatted Date:", formatDate(now));