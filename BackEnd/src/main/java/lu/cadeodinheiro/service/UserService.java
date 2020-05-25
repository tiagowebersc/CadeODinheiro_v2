package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.user.User;
import lu.cadeodinheiro.dto.UserDTO;
import lu.cadeodinheiro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public User save(UserDTO user){
        User newUser = new User();
        newUser.setCreationDate(new Date(System.currentTimeMillis()));
        newUser.setUsername(user.getUsername());
        newUser.setHashPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setName(user.getName());
        return userRepository.save(newUser);
    }
}
