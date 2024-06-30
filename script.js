document.addEventListener("DOMContentLoaded", () => {
  // Update my current time in UTC
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  function updateTimeAndDay() {
    const now = new Date();
    const utcString = now.toUTCString();
    currentTimeUTC.textContent = utcString.slice(-12, -4);
    currentDay.textContent = utcString.slice(0, 3);
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});
