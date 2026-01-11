package com.ecommerce.app.service.impl;

import com.ecommerce.app.model.Category;
import com.ecommerce.app.service.CategoryService;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Primary
public class CategoryServiceImpl implements CategoryService {

    private List<Category> categories = new ArrayList<>();
    private Long categoryId = 1L;

    @Override
    public List<Category> getAllCategories() {
        return categories;
    }

    @Override
    public void addCategory(Category category) {
        category.setCategoryId(categoryId++);
        categories.add(category);
    }

    @Override
    public String deleteCategory(Long categoryId) {

        Category category = categories.stream()
                .filter(c -> c.getCategoryId().equals(categoryId))
                .findFirst().orElse(null);

        if (category != null) {
            categories.remove(category);
            return "Category with category id " + categoryId + " deleted";
        } else {
            return "Category with category id " + categoryId + " not found";
        }


    }


}
