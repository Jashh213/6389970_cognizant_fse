package com.example.jwt_auth.controller;
import com.example.jwt_auth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(Authentication auth) {
        String token = jwtUtil.generateToken(auth.getName());
        return Collections.singletonMap("token", token);
    }
}