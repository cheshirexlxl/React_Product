package com.aloha.product.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.product.domain.Product;
import com.aloha.product.mapper.ProductMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/products")
public class ProductController {
    
    private final ProductMapper productMapper;
    
    // 전체 조회
    @GetMapping()
    public List<Product> getAll() {
        return productMapper.selectAll();
    }
    
    // 단건 조회
    @GetMapping("/{id}")
    public Product getOne(@PathVariable("id") String id) {
        return productMapper.selectOne(id);
    }
    
    // 등록
    @PostMapping()
    public Product create(@RequestBody Product product) {
        productMapper.insert(product);
        return product;
    }
    
    // 수정
    @PutMapping("/{id}")
    public Product update(@PathVariable("id") String id, @RequestBody Product product) {
        product.setId(id);
        productMapper.update(product);
        return productMapper.selectOne(id);
    }
    
    // 삭제
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") String id) {
        productMapper.delete(id);        
    }

}
