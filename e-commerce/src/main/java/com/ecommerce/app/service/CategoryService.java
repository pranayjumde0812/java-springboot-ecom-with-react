package com.ecommerce.app.service;

import com.ecommerce.app.dto.request.CategoryDTO;
import com.ecommerce.app.dto.response.CategoryResponse;
import com.ecommerce.app.model.Category;

public interface CategoryService {

    CategoryResponse getAllCategories();

    CategoryDTO addCategory(CategoryDTO categoryDTO);

    String deleteCategory(Long categoryId);

    CategoryDTO updateCategory(Long categoryId, CategoryDTO category);
}
