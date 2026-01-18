package com.ecommerce.app.repository;

import com.ecommerce.app.model.Category;
import com.ecommerce.app.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
//    List<Product> findByCategoryOrderByPriceAsc(Category category);

    Page<Product> findByCategoryOrderByPriceAsc(Category category, Pageable pageable);

//    List<Product> findByProductNameLikeIgnoreCase(String keyword);

    Page<Product> findByProductNameContainingIgnoreCase(String keyword, Pageable pageDetails);
}
