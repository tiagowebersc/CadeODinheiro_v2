package lu.cadeodinheiro.controller;

import lu.cadeodinheiro.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token", "Authorization"})
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping(value = "/categories")
    public ResponseEntity<?> findAll(){
        return ResponseEntity.ok(categoryService.findAll());
    }

    @GetMapping(value = "/categories/{id}")
    public ResponseEntity<?> findById(@PathVariable(value = "id") Long id){
        return ResponseEntity.ok(categoryService.findById(id));
    }
}
