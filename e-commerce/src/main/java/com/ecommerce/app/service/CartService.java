package com.ecommerce.app.service;

import com.ecommerce.app.dto.request.CartDTO;

import java.util.List;

public interface CartService {
    CartDTO addProductToCart(Long productId, Integer quantity);

    List<CartDTO> getAllCarts();

    CartDTO getUserCart(String email, Long cartId);
}
