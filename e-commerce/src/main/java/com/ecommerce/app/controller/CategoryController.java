package com.ecommerce.app.controller;

import com.ecommerce.app.model.Category;
import com.ecommerce.app.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
//    @Qualifier("categoryServiceImpl")
    private CategoryService categoryService;

    @GetMapping("/api/public/categories")
    public List<Category> getCategories() {
        return categoryService.getAllCategories();
    }

    @PostMapping("/api/public/categories")
    public String createCategory(@RequestBody Category category) {
        categoryService.addCategory(category);
        return "Category Created!!!!!";
    }

    @DeleteMapping("/api/admin/categories/{categoryId}")
    public String createCategory(@PathVariable Long categoryId) {
        return categoryService.deleteCategory(categoryId);
    }

}
