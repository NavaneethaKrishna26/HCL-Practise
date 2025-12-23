package com.ecomapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
public class UserController
{
    @Autowired
   private UserService userservice;
    @GetMapping("ecomapp/users")
    public List<User> getAllUsers(){
        return userservice.fetchAllUsers();
    }

    @GetMapping("ecomapp/users/{id}")
    public User getSingleUser(@PathVariable Long id){
        return userservice.getUser(id);
    }


    @PostMapping("ecomapp/users")
    public String postUser(@RequestBody User user){
        return userservice.addNewUser(user);
    }
}
