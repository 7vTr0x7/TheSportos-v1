export const fetchMatchesData = async (apiUrl) => {
  const res = await fetch(`${apiUrl}/api/user/matches`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to get data");
  return res.json();
};

export const fetchBlogsData = async (apiUrl) => {
  const res = await fetch(`${apiUrl}/api/user/blogs`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to get data");
  return res.json();
};
export const fetchPlayersData = async (apiUrl) => {
  const res = await fetch(`${apiUrl}/api/user/players`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to get data");
  return res.json();
};

export const fetchStandingsData = async (apiUrl) => {
  const res = await fetch(`${apiUrl}/api/user/standings`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to get data");
  return res.json();
};
export const fetchLeagues = async (apiUrl) => {
  const res = await fetch(`${apiUrl}/api/user/leagues`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to get data");
  return res.json();
};
