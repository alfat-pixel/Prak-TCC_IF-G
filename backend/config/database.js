import { Sequelize } from "sequelize";

const db = new Sequelize ("tugas-3-tcc-01","root","",{
    host: "localhost",
    dialect : "mysql",
});

export default db
