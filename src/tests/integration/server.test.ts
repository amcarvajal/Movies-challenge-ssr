describe("Server Integration", () => {
  const BASE_URL = "http://localhost:5173";

  it("GET / to return html of website", async () => {
    const res = await fetch(BASE_URL + "/");
    const html = await res.text();

    expect(res.status).toBe(200);
    expect(html).toContain('<div id="root">');
    expect(html).toContain("movies-ssr");
  });

  it("GET /api/films/popular to return films lists", async () => {
    const res = await fetch(BASE_URL + "/api/films/popular");
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    if (data.length > 0) {
      expect(data[0]).toHaveProperty("id");
      expect(data[0]).toHaveProperty("title");
      expect(data[0]).toHaveProperty("poster");
    }
  });
});
