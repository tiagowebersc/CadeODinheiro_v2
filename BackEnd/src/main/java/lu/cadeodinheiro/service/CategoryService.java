package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.category.Category;
import lu.cadeodinheiro.domain.category.CategoryType;
import lu.cadeodinheiro.dto.CategoryDTO;
import lu.cadeodinheiro.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private UserService userService;

    public Iterable<Category> findAll(){
        return categoryRepository.findAll();
    }

    public  Category findById(long id){
        return categoryRepository.findById(id).orElseThrow();
    }

    public Category save(CategoryDTO category){
        if (category == null ||
                category.getCategoryType() == null ||
                category.getDescription() == null ||
                category.getCategoryType().isEmpty() ||
                category.getDescription().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incomplete request!");
        }
        Category newCategory = new Category();
        newCategory.setCreationDate(new Date(System.currentTimeMillis()));
        newCategory.setUser(userService.getUser());
        newCategory.setCategoryType(CategoryType.valueOf(category.getCategoryType()));
        newCategory.setDescription(category.getDescription());
        newCategory.setActive(category.isActive());
        if (category.getUpperCategory() > 0){
            Optional<Category> upperCategory = categoryRepository.findById(category.getUpperCategory());
            newCategory.setUpperCategory(upperCategory.get());
        }
        return categoryRepository.save(newCategory);
    }
}
