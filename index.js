require("dotenv").config();
const express = require('express');
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const port=process.env.PORT || 3000;

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

let pokemon = undefined;

//Rotas
app.get('/', function (req, res) {
    
  res.render("index", {pokedex, pokemon});
});


app.post("/add", (req, res) => {
    pokemon=req.body;
    pokemon.numero = pokedex.length + 1;
    pokedex.push(pokemon);
    res.redirect("/#card");
    
});

app.get("/detalhes/:numero", (req,res)=>{
    const numero= +req.params.numero;
    pokemon = pokedex.find((pokemon) => pokemon.numero===numero);
    res.redirect("/#cadastro");
});

app.post("/update/:numero", (req, res) => {
    const numero= +req.params.numero-1;
    const newPokemon = req.body;
    newPokemon.numero=numero+1;
    pokedex[numero]=newPokemon;
    pokemon=undefined;
    res.redirect("/#card");

});

app.get("/delete/:numero", (req, res) =>{
    const numero= +req.params.numero-1;
    delete pokedex[numero];
    res.redirect("/#card");
});

app.listen(port, ()=> 
console.log(`Servidor rodando em http://localhost:${port}`));
