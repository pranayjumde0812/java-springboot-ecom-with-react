package com.ecommerce.app.controller;

import com.ecommerce.app.dto.response.CategoryResponse;
import com.ecommerce.app.model.Category;
import com.ecommerce.app.service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/public/categories")
    public ResponseEntity<CategoryResponse> getCategories() {
        CategoryResponse categoryResponse = categoryService.getAllCategories();
        return new ResponseEntity<>(categoryResponse, HttpStatus.OK);
    }

    @PostMapping("/public/categories")
    public ResponseEntity<String> createCategory(@Valid @RequestBody Category category) {
        categoryService.addCategory(category);
        return new ResponseEntity<>("Category created successfully.", HttpStatus.CREATED);
    }

    @DeleteMapping("/admin/categories/{categoryId}")
    public ResponseEntity<String> createCategory(@PathVariable Long categoryId) {

        String status = categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>(status, HttpStatus.OK);

    }

    @PutMapping("/public/categories/{categoryId}")
    public ResponseEntity<String> updateCategory(@Valid @PathVariable Long categoryId,
                                                 @RequestBody Category category) {
        categoryService.updateCategory(categoryId, category);
        return new ResponseEntity<>("Category with Id : " + categoryId + " updated.", HttpStatus.OK);

    }

}
