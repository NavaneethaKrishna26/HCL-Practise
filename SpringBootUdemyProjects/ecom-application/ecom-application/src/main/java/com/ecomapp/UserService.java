package com.ecomapp;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserService
{
    private long id=0;
    private List<User> userList = new ArrayList<>();
    public List<User> fetchAllUsers(){
        return userList;
    }

    public User getUser(Long id){
        for(User user:userList){
            if(user.getId().equals(id)){
                return user;
            }
        }
        return null;
    }


    public String addNewUser(User user){
        user.setId(id);
        id++;
        userList.add(user);
        return "User added successfully";
    }
}
