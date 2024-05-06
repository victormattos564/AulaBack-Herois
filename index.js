const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "gerenciamento_herois",
    password: "ds564",
    port: 7007,
});


app.post("/heroes", async (req, res) => {
    const { name_heroes, power_heroes, level, hp_heroes } = req.body;
    try {
        const { rows } = await pool.query(
            "INSERT INTO heroes (name_heroes, power_heroes, level, hp_heroes) VALUES ($1, $2, $3, $4) RETURNING *",
            [name_heroes, power_heroes, level, hp_heroes]
        );
        res.json({
            message: "Herói cadastrado com sucesso",
            hero: rows[0],
        });
    } catch (error) {
        console.error("Erro ao cadastrar herói:", error);
        res.status(500).json({ error: "Erro ao cadastrar herói" });
    }
});

app.get("/heroes", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM heroes");
        res.json({
            total: result.rowCount,
            heroes: result.rows,
        });
    } catch (error) {
        console.error("Erro ao obter heróis:", error);
        res.status(500).send("Erro ao obter heróis");
    }
});

app.get("/heroes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM heroes WHERE id = $1", [id]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: "Herói não encontrado" });
        } else {
            res.json(result.rows);
        }
    } catch (error) {
        console.error("Erro ao obter herói por id:", error);
        res.status(500).send("Erro ao obter herói por id");
    }
});
app.put("/heroes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name_heroes, power_heroes, level, hp_heroes } = req.body;
        await pool.query(
            "UPDATE heroes SET name_heroes = $1, power_heroes = $2, level = $3, hp_heroes = $4 WHERE id = $5",
            [name_heroes, power_heroes, level, hp_heroes, id]
        );
        res.status(200).send({ mensagem: "Herói atualizado com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar herói:", error);
        res.status(500).send("Erro ao atualizar herói");
    }
});

app.delete("/heroes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM heroes WHERE id = $1", [id]);
        res.status(200).send({ mensagem: "Herói excluído com sucesso" });
    } catch (error) {
        console.error("Erro ao excluir herói:", error);
        res.status(500).send("Erro ao excluir herói");
    }
});

app.get("/heroes/name/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const result = await pool.query("SELECT * FROM heroes WHERE name_heroes = $1", [name]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: "Herói não encontrado" });
        } else {
            res.json(result.rows);
        }
    } catch (error) {
        console.error("Erro ao obter herói por nome:", error);
        res.status(500).send("Erro ao obter herói por nome");
    }
});

app.get("/heroes/power/:power", async (req, res) => {
    try {
        const { power } = req.params;
        const result = await pool.query("SELECT * FROM heroes WHERE power_heroes = $1", [power]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: "Herói não encontrado" });
        } else {
            res.json(result.rows);
        }
    } catch (error) {
        console.error("Erro ao obter herói por poder:", error);
        res.status(500).send("Erro ao obter herói por poder");
    }
});

app.get("/heroes/level/:level", async (req, res) => {
    try {
        const { level } = req.params;
        const result = await pool.query("SELECT * FROM heroes WHERE level = $1", [level]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: "Herói não encontrado" });
        } else {
            res.json(result.rows);
        }
    } catch (error) {
        console.error("Erro ao obter herói por level:", error);
        res.status(500).send("Erro ao obter herói por level");
    }
});

app.get("/heroes/hp/:hp", async (req, res) => {
    try {
        const { hp } = req.params;
        const result = await pool.query("SELECT * FROM heroes WHERE hp_heroes = $1", [hp]);
        if (result.rowCount === 0) {
            res.status(404).send({ mensagem: "Herói não encontrado" });
        } else {
            res.json(result.rows);
        }
    } catch (error) {
        console.error("Erro ao obter herói por hp:", error);
        res.status(500).send("Erro ao obter herói por hp");
    }
});


app.listen(PORT, () => {
    console.log(`Servidor de herois rodando na porta ${PORT} 🦸‍♂️🎇`);
});

const frases = [
    "A jornada de mil milhas começa com um único passo.",
    "A imaginação é a chave para abrir as portas da criatividade.",
    "Nada é impossível para uma mente determinada.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Grandes coisas nunca vêm de conforto.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "A criatividade é contagiosa, passe adiante.",
    "A vida é uma obra de arte, faça dela uma obra-prima.",
    "As limitações vivem apenas na nossa mente. Mas se usarmos nossa imaginação, nossas possibilidades se tornam infinitas.",
    "A criatividade é a inteligência se divertindo.",
    "Quanto mais você usa, mais você tem.",
    "A persistência é o caminho do êxito.",
    "Cada criança é um artista. O problema é como permanecer um artista quando crescemos.",
    "O único modo de fazer um excelente trabalho é amar o que você faz.",
    "O verdadeiro segredo para a criatividade é conhecer como esconder as fontes.",
    "Sonhe como se fosse viver para sempre, viva como se fosse morrer hoje.",
];

app.get("/", async (req, res) => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    res.status(200).send({ mensagem: fraseAleatoria });
});
