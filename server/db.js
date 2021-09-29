const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password:"aryan",
    database:"todolist",
    port: 5432,
    host: "localhost"
});

module.exports = pool;