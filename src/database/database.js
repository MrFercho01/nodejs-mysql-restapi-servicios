import mysql from "promise-mysql";
//import mysql from "mysql";

import {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    DB_PORT
} from '../config.js';

const connection = mysql.createConnection({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
});

export const getConnection = () => {
    return connection;
};

export default () => {
    return connection;;
  };

//module.exports = getConnection;