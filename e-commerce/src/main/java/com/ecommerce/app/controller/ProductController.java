package com.ecommerce.app.controller;

import com.ecommerce.app.dto.request.ProductDTO;
import com.ecommerce.app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/admin/categories/{categoryId}/product")
    public ResponseEntity<ProductDTO> addProduct(@RequestBody ProductDTO productDTO,
                                                 @PathVariable Long categoryId) {

        ProductDTO createdProduct = productService.addProduct(categoryId, productDTO);

        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }
}
