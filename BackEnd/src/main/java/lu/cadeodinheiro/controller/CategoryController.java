package lu.cadeodinheiro.controller;

import lu.cadeodinheiro.dto.CategoryDTO;
import lu.cadeodinheiro.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders={"content-type", "x-auth-token", "x-requested-with", "x-xsrf-token", "Authorization"})
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

    @PostMapping(value ="/categories")
    public ResponseEntity<?> createAccount(@RequestBody CategoryDTO account){
        return ResponseEntity.ok(categoryService.save(account));
    }
}
