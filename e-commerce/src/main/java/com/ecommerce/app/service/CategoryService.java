package com.ecommerce.app.service;

import com.ecommerce.app.dto.response.CategoryResponse;
import com.ecommerce.app.model.Category;

public interface CategoryService {

    CategoryResponse getAllCategories();

    void addCategory(Category category);

    String deleteCategory(Long categoryId);

    Category updateCategory(Long categoryId, Category category);
}
