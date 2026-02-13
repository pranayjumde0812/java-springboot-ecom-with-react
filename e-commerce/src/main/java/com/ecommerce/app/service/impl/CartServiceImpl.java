package com.ecommerce.app.service.impl;

import com.ecommerce.app.repository.CartRepository;
import com.ecommerce.app.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;
}
