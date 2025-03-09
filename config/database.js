import { Sequelize } from "sequelize";

const db = new Sequelize ("tugas-3-tcc-01","root","123220001Belajar",{
    host: "34.71.73.223",
    dialect : "mysql",
});

export default db
