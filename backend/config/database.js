import { Sequelize } from "sequelize";

const db = new Sequelize ("notes-01","root","notes123",{
    host: "107.178.221.91",
    dialect : "mysql",
});

export default db
