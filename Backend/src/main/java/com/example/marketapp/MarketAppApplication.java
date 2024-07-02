package com.example.marketapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

public class MarketAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(MarketAppApplication.class, args);
    }

}