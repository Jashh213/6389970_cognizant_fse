package com.cognizant.spring_learn.service;
import com.cognizant.spring_learn.dto.UserDTO;

public interface UserService {
    UserDTO getUserById(int id);
}