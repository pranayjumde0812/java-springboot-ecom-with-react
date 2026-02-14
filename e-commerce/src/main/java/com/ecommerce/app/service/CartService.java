package com.ecommerce.app.service;

import com.ecommerce.app.dto.request.CartDTO;

public interface CartService {
    CartDTO addProductToCart(Long productId, Integer quantity);
}
