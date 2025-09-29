import fs from "node:fs/promises";
import express from "express";
import { createServer as createServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const app = express();

/** @type {import('vite').ViteDevServer | undefined} */
let vite;

vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  base,
});
app.use(vite.middlewares);

app.get("/api/films/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-EN&page=1`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_API_KEY}`,
        },
      }
    );
    const data = await response.json();

    const films = data.results?.map((f) => ({
      id: f.id,
      title: f.title,
      poster: `https://image.tmdb.org/t/p/original${f.poster_path}`,
      description: f.overview,
      category,
    }));

    res.json(films);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener películas" });
  }
});

app.get("/api/films/recomended/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recomendations?language=en-EN&page=1`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_API_KEY}`,
        },
      }
    );
    const data = await response.json();

    const films = data.results?.map((f) => ({
      id: f.id,
      title: f.title,
      poster: `https://image.tmdb.org/t/p/original${f.poster_path}`,
      description: f.overview,
      category: "recomendations",
    }));

    res.json(films);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener películas" });
  }
});

app.use("*all", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    /** @type {string} */
    let template;
    /** @type {import('./src/entry-server.js').render} */
    let render;

    template = await fs.readFile("./index.html", "utf-8");
    template = await vite.transformIndexHtml(url, template);
    render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;

    const rendered = await render(url);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
