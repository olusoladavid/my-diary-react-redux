import transformDate from "../dateTransformer";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

it("should transform current date without throwing when not supplied arguments", () => {
  const result = transformDate();
  expect(result.day.length).toBe(2);
  expect(months.includes(result.month)).toBe(true);
});

it("should transform given date without throwing", () => {
  const dateString = "2018-10-15T17:20:38.738Z";
  const result = transformDate(dateString);
  expect(result.day).toEqual("15");
  expect(result.month).toBe("October");
});

it("should prefix day with zero if day of the month is single digit", () => {
  const dateString = "2018-10-05T17:20:38.738Z";
  const result = transformDate(dateString);
  expect(result.day).toEqual("05");
});
