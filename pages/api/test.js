export const config = {
  runtime: "edge",
};

export default async function handler(request, response) {
  await console.log("test");
  response.send("Done!");
}
