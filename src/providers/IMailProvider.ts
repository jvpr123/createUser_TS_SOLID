// Interface que define nome e email para envio de email após cadastro
interface IAdress {
    name: string;
    email: string;
}

// Interface que define formato em que o email será enviado
export interface IMessage {
    to: IAdress;
    from: IAdress;
    subject: string;
    body: string;
}

// Interface que define como será a comunicação com a API de envio de emails
export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>;
}