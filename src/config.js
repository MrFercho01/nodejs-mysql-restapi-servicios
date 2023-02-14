import { config } from "dotenv";

config();

/*
export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
}*/

export const DB_HOST = process.env.DB_HOST || ""
export const DB_DATABASE = process.env.DB_DATABASE || ""
export const DB_USER = process.env.DB_USER || ""
export const DB_PASSWORD = process.env.DB_PASSWORD || ""
export const DB_PORT = process.env.DB_PORT || ""
