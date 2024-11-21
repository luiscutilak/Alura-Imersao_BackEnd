import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
    
        {
            id: 1,
            descricao: "Uma foto teste",
            imagem: "https://placecats.com/millie/300/150",
        },
        {
            id: 2,
            descricao: "Gato curioso olhando pela janela",
            imagem: "https://placekitten.com/400/200",
        },
        {
            id: 3,
            descricao: "Gatinho dormindo em uma caixa",
            imagem: "https://placekitten.com/200/300",
        },
        {
            id: 4,
            descricao: "Dois gatos brincando com um novelo de lã",
            imagem: "https://placekitten.com/500/300",
        },
        {
            id: 5,
            descricao: "Gata tomando sol na janela",
            imagem: "https://placekitten.com/300/200",
        },
        {
            id: 6,
            descricao: "Gatinho miando para um passarinho",
            imagem: "https://placekitten.com/400/200",
        }
    ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

app.get("/posts", async(req, res) => {
    const posts = await getTodosPosts()
    res.status(200).json(posts);
});

// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// };

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id)
//     res.status(200).json(posts[index]);
// });