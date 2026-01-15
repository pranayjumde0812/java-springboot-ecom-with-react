package com.ecommerce.app.service;

import com.ecommerce.app.dto.request.ProductDTO;
import com.ecommerce.app.model.Product;

public interface ProductService {
    ProductDTO addProduct(Long categoryId, Product product);

}
