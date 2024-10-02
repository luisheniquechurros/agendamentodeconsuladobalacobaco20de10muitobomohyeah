import { useSQLiteContext } from "expo-sqlite"

export type UsuariosDatabase = {
    id: number;
    email: string;
    senha: string;
    nome: string;
    cep: string;
    endereco: string;
    numero: string;
    complemento: string;
    telefone: string;
    planos: string;
}

export function useUsuariosDatabase() {
    
    const database = useSQLiteContext()

    async function create(email: string, senha: string,  nome: string, cep: string, endereco: string, numero: string, complemento: string, telefone: string, planos: string) {
        try {

            const query = "SELECT * FROM USUARIOS WHERE email = ?";
            const result = await database.getAllAsync(query, [email])

            if (result.length != 0) {
                throw new Error("Usuário já cadastrado")
            }
            console.log(email, senha, nome, cep, endereco, numero, complemento, telefone, planos);
            await database.execSync(`INSERT INTO usuarios (email, senha, nome, cep, endereco, numero, complemento, telefone, planos)
                                    VALUES ('${email}', '${senha}', '${nome}', '${cep}', '${endereco}', '${numero}', '${complemento}', '${telefone}', '${planos}')`)
            return true
        } catch (error) {
            throw error
        }
    }

    async function login(email: string, senha: string) {
        try {
            const query = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
            const resultado = await database.getFirstAsync<UsuariosDatabase>(query, [email, senha]);

            if (resultado) {
                return resultado;
            } else {
               
                return false;
            }
        } catch (error) {
            throw error;
        }
    }

    async function listar() {
        try {
            const query = "SELECT * FROM usuarios";
            const resultado = await database.getAllAsync<UsuariosDatabase>(query);
            return resultado;
        } catch (error) {
            throw error;
        }

    }

    return { create, login, listar };
}