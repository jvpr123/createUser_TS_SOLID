import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
    private usersRepository: IUsersRepository;
    private mailProvider: IMailProvider;

    constructor(usersRepository: IUsersRepository, emailProvider: IMailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = emailProvider;
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists) {
            throw new Error('User already exists.');
        }
        else {
            // Save user in DB
            const user = new User(data);
            await this.usersRepository.save(user);

            // Send a welcome email to the new user
            await this.mailProvider.sendMail({
                to: {
                    name: data.name,
                    email: data.email,
                },
                from: {
                    name: 'Equipe S.O.L.I.D.',
                    email: 'equipe@solid.com'
                },
                subject: 'Seja bem-vindo à plataforma!',
                body: '<p>Você já pode fazer login em nossa plataforma</p>'
            })
        }
    }
}