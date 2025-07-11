package com.cognizant.spring_learn.service;
import com.cognizant.spring_learn.dto.UserDTO;
import com.cognizant.spring_learn.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public UserDTO getUserById(int id) {
        // Simulated response
        User user = new User(id, "User" + id, "user" + id + "@example.com");
        return new UserDTO(user.getName(), user.getEmail());
    }
}