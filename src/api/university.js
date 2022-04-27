export const getUniversity = () =>
  fetch("http://universities.hipolabs.com/search?country=United+Kingdom").then(
    (response) => response.json()
  );
