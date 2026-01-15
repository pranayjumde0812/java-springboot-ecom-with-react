package com.ecommerce.app.controller;

import com.ecommerce.app.dto.request.ProductDTO;
import com.ecommerce.app.dto.response.ProductResponse;
import com.ecommerce.app.model.Product;
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
    public ResponseEntity<ProductDTO> addProduct(@RequestBody Product product,
                                                 @PathVariable Long categoryId) {

        ProductDTO createdProduct = productService.addProduct(categoryId, product);

        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    @GetMapping("/public/products")
    public ResponseEntity<ProductResponse> getAllProducts() {
        ProductResponse productResponse = productService.getAllProducts();

        return new ResponseEntity<>(productResponse, HttpStatus.OK);
    }

    @GetMapping("/public/categories/{categoryId}/products")
    public ResponseEntity<ProductResponse> getProductByCategory(@PathVariable Long categoryId) {
        ProductResponse productResponse = productService.getAllProductsByCategoryId(categoryId);

        return new ResponseEntity<>(productResponse, HttpStatus.OK);
    }

    @GetMapping("/public/products/keyword/{keyword}")
    public ResponseEntity<ProductResponse> getProductByKeyword(@PathVariable String keyword) {
        ProductResponse productResponse = productService.getAllProductsByKeyword(keyword);

        return new ResponseEntity<>(productResponse, HttpStatus.OK);
    }
}
