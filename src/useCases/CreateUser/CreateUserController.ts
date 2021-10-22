import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    // Props: 
    private createUserUseCase: CreateUserUseCase;

    // Constructor:
    constructor(createUserUseCase: CreateUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        // Getting request information
        const { name, email, password } = request.body;

        try {
            await this.createUserUseCase.execute({
                name: name,
                email: email,
                password: password
            });

            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({ message: error.message || 'Unexpected error.'});
        }
    }
}