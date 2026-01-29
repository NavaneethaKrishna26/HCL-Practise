package com.AuthApp.demoAuth.controller;

import com.AuthApp.demoAuth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class AuthController
{
   @Autowired
   private AuthService authService;

    @PostMapping("/auth/signup")
    public ResponseEntity<?> signup(@RequestBody Map<String,String> request){
        authService.signup(request.get("username"),
                request.get("password"),request.get("email"));
        return ResponseEntity.ok("User registed successfully");
    }
}
