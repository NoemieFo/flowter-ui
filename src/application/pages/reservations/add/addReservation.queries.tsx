// export const getLocationsQuery: AppQuery = {
//   name: "getLocations",
//   func: async () => {
//     const res = await fetch("");
//     return res.json();
//   },
// };

export const getReasonsQuery = async () => {
  const res = await fetch("http://localhost:8000/api/motives?page=1", {
    method: "GET",
  });
  return res.json();
};

export const getCompaniesQuery = async () => {
  const res = await fetch("http://localhost:8000/api/companies?page=1", {
    method: "GET",
  });
  return res.json();
};
