export const getReasonsQuery = async () => {
  const res = await fetch("http://localhost:4000/motives", {
    method: "GET",
  });
  return res.json();
};

export const getCompaniesQuery = async () => {
  const res = await fetch("http://localhost:4000/companies", {
    method: "GET",
  });
  return res.json();
};
