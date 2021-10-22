import { User } from "../entities/User";

export interface IUsersRepository {

    // Método para buscar um usuário pelo email
        // Recebe email como parâmetro
        // Retorna usuário do tipo <User>
    findByEmail(email: string): Promise<User>;

    // Método para cadastrar usuário no DB
    // Recebe usuário como parâmetro
    // Não retorna nenhum dado, apenas salva o usuário
    save(user: User): Promise<void>;
}