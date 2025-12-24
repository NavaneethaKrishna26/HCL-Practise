package com.ecomapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("ecomapp/users")
public class UserController
{
    @Autowired
    private UserService userservice;
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.status(200).body(userservice.fetchAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getSingleUser(@PathVariable Long id){

        Optional<User> optionalUser = userservice.getUser(id);
        if(optionalUser.isPresent()){
            User user=optionalUser.get();
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<String> postUser(@RequestBody User user){
        return ResponseEntity.status(201).body(userservice.addNewUser(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> putUser(@PathVariable long id,@RequestBody User user){
        if(userservice.putnewUser(id,user)) {
            ResponseEntity.status(201).body("Update Success");
        }
        return ResponseEntity.notFound().build();
    }
}
