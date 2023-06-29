const dateFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
});

const today = new Date();

console.log(dateFormat.format(today));
