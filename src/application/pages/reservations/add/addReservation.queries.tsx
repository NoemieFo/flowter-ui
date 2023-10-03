export const getReasonsQuery = async () => {
  const res = await fetch("localhost:8080/api/motives?page=1", {
    method: "GET",
  });
  return res.json();
};

export const getCompaniesQuery = async () => {
  const res = await fetch("localhost:8080/api/companies?page=1", {
    method: "GET",
  });
  console.log(res.json());
  return res.json();
};
