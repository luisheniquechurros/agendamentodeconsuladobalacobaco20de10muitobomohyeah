import { type SQLiteDatabase } from "expo-sqlite";

export async function inicializeDatabase(database: SQLiteDatabase){
    await database.execAsync(
        `
        -- DROP TABLE usuarios;

        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            senha TEXT NOT NULL,
            nome TEXT,
            cep TEXT,
            endereco TEXT,
            numero TEXT,
            complemento TEXT,
            telefone TEXT,
            planos TEXT
        );

        -- INSERT INTO usuarios (email, senha) VALUES ('churros@gmail.com', '123456');
        
        `
    )
}