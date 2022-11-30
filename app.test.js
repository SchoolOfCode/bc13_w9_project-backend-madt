const request = require("supertest");
const baseURL = "http://localhost:3001/api";
/** This test adds data to our sql database and then removes it to test that the endpoints are working  */
describe("GET /posts", () => {
  const newposts = {
    user_name: "cmnd",
    title: "Drink water",
    description: "making an app to drink water",
    stack: "React",
  };
  beforeAll(async () => {
    await request(baseURL).post("/post").send(newposts);
  });

  afterAll(async () => {
    await request(baseURL).delete(`/post/?username=${newposts.user_name}`);
  });

  it("should return 200", async () => {
    const response = await request(baseURL).get("/post");
    expect(response.statusCode).toBe(200);
  });

  it("should return posts", async () => {
    const response = await request(baseURL).get("/post");

    expect(response.body.length < 5).toBe(true);
  });

  it("should contain only valid cards in Order", async () => {
    const response = await request(baseURL).get("/post");
    expect(response.body.payload[1]).toEqual({
      description:
        "Nisi vitae suscipit tellus mauris. Sollicitudin aliquam ultrices sagittis orci. Nulla pellentesque dignissim enim sit amet venenatis. Odio ut sem nulla pharetra diam sit amet nisl.",
      postid: 2,
      stack: "react and express",
      title: "dating app for cats",
      user_name: "bigT",
    });
  });
});
