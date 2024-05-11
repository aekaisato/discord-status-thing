import fs from "fs";

const token = fs.readFileSync("./auth.txt");
const url = "https://discord.com/api/v9/users/@me/settings";

export const setStatus = async (status, authToken = token) => {
  const data = { custom_status: { text: status } };
  const payload = JSON.stringify(data);
  return await fetch(url, {
    method: "PATCH",
    headers: { Authorization: authToken, "Content-Type": "application/json" },
    body: payload,
  });
};
