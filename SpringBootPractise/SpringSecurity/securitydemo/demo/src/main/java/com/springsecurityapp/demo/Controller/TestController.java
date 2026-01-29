package com.springsecurityapp.demo.Controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController
{
    @GetMapping("/api/hello")
    public String hello(Authentication authentication) {
        String username = authentication.getName();
        return "Hello " + username + ", JWT is working!";
    }
}
