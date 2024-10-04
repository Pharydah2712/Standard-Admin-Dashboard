const today = new Date();
// Format the date (e.g., October 3, 2024)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);
// Display the date in the div
document.getElementById('date').innerText = formattedDate;