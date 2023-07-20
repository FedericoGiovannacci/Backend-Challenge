import express from "express";
import axios from "axios";
import methodOverride from "method-override";
import movies from "./routes/movies";
import users from "./routes/users";
const db = require("./database/models");

const app = express();

//Initial population of the DB
type StarWarsMovie = {
  title: String;
  episode_id: Number;
  opening_crawl: String;
  director: String;
  producer: String;
  release_date: String;
};

async function populate() {
  try {
    const response = await axios.get("https://swapi.dev/api/films");
    const data = response.data.results;
    for (let movie of data) {
      await db.Movies.create({
        title: movie.title,
        description: movie.opening_crawl,
        director: movie.director,
        producer: movie.producer,
        release_date: movie.release_date,
      });
    }
  } catch (error) {
    console.warn(error);
  }
}

populate();

//Middlewares
app.use(express.json());
app.use(methodOverride("_method"));

//Routes
app.use("/", movies);
app.use("/", users);

//Port listen
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
