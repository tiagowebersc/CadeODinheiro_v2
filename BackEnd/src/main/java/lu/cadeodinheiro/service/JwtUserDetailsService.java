package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.user.User;
import lu.cadeodinheiro.dto.UserDTO;
import lu.cadeodinheiro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("javainuse".equals(username)) {
            return new org.springframework.security.core.userdetails.User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
                    new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
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
