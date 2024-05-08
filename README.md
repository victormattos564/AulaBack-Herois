# Gerenciamento de Heróis

Este é um aplicativo simples para gerenciamento de heróis, onde você pode cadastrar, atualizar, visualizar e excluir heróis, além de realizar batalhas entre eles. O aplicativo utiliza Node.js com Express para o backend e PostgreSQL como banco de dados.

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/gerenciamento-herois.git
```

2. Instale as dependências:

```bash
cd gerenciamento-herois
npm install
npm intall express pg
npm init -y
npm intall -g nodemon
```

3. Certifique-se de ter o PostgreSQL instalado e configurado corretamente.

4. Crie um banco de dados chamado `gerenciamento_herois`.

5. Execute o script SQL fornecido em `database.sql` para criar a tabela `heroes`.

6. Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme sua configuração do PostgreSQL.

7. Inicie o servidor:

```bash
npm run dev
```

```bash
entre no pack.json entre em scripts e coloque "dev": "node index.js"
```

## Uso

### Endpoints

#### Heróis

- `POST /heroes`: Cadastra um novo herói.
- `GET /heroes`: Retorna todos os heróis cadastrados.
- `GET /heroes/:id`: Retorna um herói específico pelo ID.
- `PUT /heroes/:id`: Atualiza os dados de um herói pelo ID.
- `DELETE /heroes/:id`: Exclui um herói pelo ID.
- `GET /heroes/name/:name`: Retorna um herói pelo nome.
- `GET /heroes/power/:power`: Retorna heróis pelo poder.
- `GET /heroes/level/:level`: Retorna heróis pelo nível.
- `GET /heroes/hp/:hp`: Retorna heróis pela quantidade de pontos de vida.

#### Batalhas

- `POST /battles`: Realiza uma batalha entre dois heróis.
- `GET /battles`: Retorna todas as batalhas realizadas.
- `GET /battles/:id`: Retorna uma batalha específica pelo ID.
- `DELETE /battles/:id`: Exclui uma batalha pelo ID.

#### Frase Aleatória

- `GET /`: Retorna uma frase aleatória.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

```