package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.category.Category;
import lu.cadeodinheiro.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Iterable<Category> findAll(){
        return categoryRepository.findAll();
    }

    public  Category findById(long id){
        return categoryRepository.findById(id).orElseThrow();
    }
}
