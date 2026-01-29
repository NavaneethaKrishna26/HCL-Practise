package com.AuthApp.demoAuth.service;

import com.AuthApp.demoAuth.config.SecurityConfig;
import com.AuthApp.demoAuth.entity.User;
import com.AuthApp.demoAuth.repository.UserRepository;
import jakarta.transaction.UserTransaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService
{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SecurityConfig securityConfig;

    public void signup(String username,String password,String email){
        if(userRepository.findByUsername(username).isPresent()){
            throw new RuntimeException("User Already Exists");
        }
        User user=new User();
        user.setUsername(username);
        user.setPassword(securityConfig.passwordEncoder().encode(password));
        user.setRole("ROLE-USER");
        userRepository.save(user);

    }
}
