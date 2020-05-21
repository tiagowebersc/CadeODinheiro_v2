package com.cadeodinheiro.service;

import com.cadeodinheiro.auth.JWTUser;
import com.cadeodinheiro.domain.Role;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
public class JWTUserService {

    // this is just an example, you can load the user from the database from the repository

    private Map<String, JWTUser> data;

    @PostConstruct
    public void init(){
        data = new HashMap<>();
        //username:passwowrd -> user:user
        data.put("user", new JWTUser("user", "cBrlgyL2GI2GINuLUUwgojITuIufFycpLG4490dhGtY=", true, Arrays.asList(Role.ROLE_USER)));
        //username:passwowrd -> admin:admin
        data.put("admin", new JWTUser("admin", "dQNjUIMorJb8Ubj2+wVGYp6eAeYkdekqAcnYp+aRq5w=", true, Arrays.asList(Role.ROLE_ADMIN)));
    }

    public Mono<JWTUser> findByUsername(String username) {
        if (data.containsKey(username)) {
            return Mono.just(data.get(username));
        } else {
            return Mono.empty();
        }
    }

}