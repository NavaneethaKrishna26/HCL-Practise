package com.ecomapp;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService
{
    private long id=0;
    private List<User> userList = new ArrayList<>();
    public List<User> fetchAllUsers(){
        return userList;
    }

    public Optional<User> getUser(Long id){
        return userList.stream().filter((user)->user.getId().equals(id)).findFirst();
    }


    public String addNewUser(User user){
        user.setId(id);
        id++;
        userList.add(user);
        return "User added successfully";
    }

    public boolean putnewUser(long id,User Updateduser){
       return userList.stream().filter(user ->user.getId()==id)
               .findFirst().map(user ->{
                   user.setFirstName(Updateduser.getFirstName());
                   user.setLastName(Updateduser.getLastName());
                   return true;
               }).orElse(false);
    }
}
