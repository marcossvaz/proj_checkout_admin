import type { CategoryRepository } from "../repositories/categoryRepository.js";

export class CategoryService {
    
    constructor(private readonly categoryRepository: CategoryRepository) { };
    
    async getAll() {
        return await this.categoryRepository.getAll();
    }
}