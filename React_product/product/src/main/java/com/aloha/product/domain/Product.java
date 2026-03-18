package com.aloha.product.domain;

import java.util.Date;
import java.util.UUID;

import lombok.Data;

@Data
public class Product {
    
    private String id;
    private String name;
    private Integer price;
    private Integer stock;
    private Date createdAt;

    public Product() {
        this.id = UUID.randomUUID().toString();
    }

}
