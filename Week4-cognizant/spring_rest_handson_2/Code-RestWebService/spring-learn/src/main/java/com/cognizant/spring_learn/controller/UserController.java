package com.cognizant.spring_learn.controller;
import com.cognizant.spring_learn.dto.UserDTO;
import com.cognizant.spring_learn.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id) {
        LOGGER.info("Start: getUserById()");
        UserDTO user = userService.getUserById(id);
        LOGGER.info("End: getUserById()");
        return ResponseEntity.ok(user);
    }
}