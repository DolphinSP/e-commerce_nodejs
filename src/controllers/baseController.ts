import { Container } from 'typedi'
import {UserRepository} from "../repositories/UserRepository";
import {HashService} from "../services/HashService";
import {TokenService} from "../services/TokenService";
import {ValidationService} from "../services/ValidationService";
import {SendEmailService} from "../services/SendEmailService";

import { CategoryRepository, ProductRepository, SubCategoryRepository } from '../repositories';


export class BaseController {
    protected userRepository: UserRepository
    protected hashService: HashService
    protected tokenService: TokenService
    protected validationService: ValidationService
    protected sendEmailService: SendEmailService

    protected categoryRepository:CategoryRepository
    protected subCategoryRepository:SubCategoryRepository
    protected productRepository:ProductRepository

    constructor() {
        this.userRepository = Container.get(UserRepository)
        this.hashService = Container.get(HashService)
        this.tokenService = Container.get(TokenService)
        this.validationService = Container.get(ValidationService)
        this.sendEmailService = Container.get(SendEmailService)

        this.productRepository=Container.get(ProductRepository)
        this.categoryRepository=Container.get(CategoryRepository)
        this.subCategoryRepository=Container.get(SubCategoryRepository)
    }
}
