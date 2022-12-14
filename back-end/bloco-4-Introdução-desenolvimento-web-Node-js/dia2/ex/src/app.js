// Crie uma função de leitura do JSON com o modulo fs.

const express = require('express');

const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

// Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.

app.get('/movies/:id', async (req, res) => {
  try {
     const movies = await readFile();
     const movie = movies.find(({ id }) => id === Number(req.params.id));
     res.status(200).json(movie);
   } catch (err) {
     res.status(500).send({ message: err.message });
   }
 });

// Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.

 app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;