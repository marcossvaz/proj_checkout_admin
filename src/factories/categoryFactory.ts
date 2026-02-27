import { CategoryRepository } from "../repositories/categoryRepository.js";
import { CategoryService } from "../services/categoryService.js";


export const CategoryRepositoryFactory = new CategoryRepository();
export const CategoryServiceFactory = new CategoryService(CategoryRepositoryFactory);