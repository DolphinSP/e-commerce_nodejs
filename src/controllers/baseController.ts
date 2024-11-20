import { Container } from 'typedi'
import {UserRepository} from "../repositories/UserRepository";
import {HashService} from "../services/HashService";
import {TokenService} from "../services/TokenService";
import {ValidationService} from "../services/ValidationService";
import {SendEmailService} from "../services/SendEmailService";


export class BaseController {
    protected userRepository: UserRepository
    protected hashService: HashService
    protected tokenService: TokenService
    protected validationService: ValidationService
    protected sendEmailService: SendEmailService

    constructor() {
        this.userRepository = Container.get(UserRepository)
        this.hashService = Container.get(HashService)
        this.tokenService = Container.get(TokenService)
        this.validationService = Container.get(ValidationService)
        this.sendEmailService = Container.get(SendEmailService)
    }
}
