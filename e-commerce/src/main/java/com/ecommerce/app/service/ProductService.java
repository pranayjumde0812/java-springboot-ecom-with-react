package com.ecommerce.app.service;

import com.ecommerce.app.dto.request.ProductDTO;

public interface ProductService {
    ProductDTO addProduct(Long categoryId, ProductDTO productDTO);

}
