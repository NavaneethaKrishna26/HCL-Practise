//package com.springsecurityapp.demo.Controller;
//
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class HelloController
//{
//    @GetMapping("")
//    public String getHello(HttpServletRequest request){
//        return "Hello "+request.getSession().getId();
//    }
//
//    @GetMapping("/krishna")
//    public String getName(HttpServletRequest request){
//        return "Hello Krishna "+request.getSession().getId();
//    }
//
//    //Role based access
//    @PreAuthorize("hasRole('USER')")
//    @GetMapping("/user")
//    public String getUser(){
//        return "Hello, User!!!";
//    }
//
//    @PreAuthorize("hasRole('ADMIN')")
//    @GetMapping("/admin")
//    public String getAdmin(){
//        return "Hello, Admin!!!";
//    }
//}
