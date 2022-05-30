const express = require('express');
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex =[
{
    numero: 1,
    nome: "Bulbasaur",
    tipo: "Grass, poison",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    peso:"6.9 KG",
    altura:"0.7m",
    categoria:"Seed",
    habilidades:"Overgrow"
},
{
    numero: 2,
    nome: "Charmander",
    tipo: "fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    peso:"8.5 KG",
    altura:"0.6m",
    categoria:"lizard",
    habilidades:"blaze"
},
{
    numero: 3,
    nome: "Squirtle",
    tipo: "water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    peso:"9.0 KG",
    altura:"0.5m",
    categoria:"tiny turtle",
    habilidades:"torrent"
}
];



//Rotas
app.get('/', function (req, res) {
  res.render("index", {pokedex});
});

app.post("/add", (req, res) => {
    const pokemon=req.body;

    pokedex.push(pokemon);

    res.redirect("/");
    
});

app.listen(3000, ()=> 
console.log("Servidor rodando em http://localhost:3000"));
