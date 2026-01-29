package com.AuthApp.demoAuth.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;

import javax.naming.Name;
@Data
@Entity(name="users")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique=true, nullable=false)
    private String username;

    @Column(nullable = false)
    private String password;
    private String role;
}
