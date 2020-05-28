package lu.cadeodinheiro.service;

import lu.cadeodinheiro.domain.user.User;
import lu.cadeodinheiro.dto.UserChangeDTO;
import lu.cadeodinheiro.dto.UserChangePasswordDTO;
import lu.cadeodinheiro.dto.UserDTO;
import lu.cadeodinheiro.repository.UserRepository;
import lu.cadeodinheiro.utils.AuthenticationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Date;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    private AuthenticationUtil authenticationUtil;

    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public User changePasswordUser(UserChangePasswordDTO userDTO){
        if (userDTO == null || userDTO.getUsername().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User empty");
        }
        if (!isUsernameSameAuthenticated(userDTO.getUsername())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User doesn't match");
        }
        if (userDTO.getOldPassword().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password not informed");
        }
        if (userDTO.getNewPassword().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Password not informed");
        }
        if (!userDTO.getNewPassword().equals(userDTO.getConfirmPassword())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Passwords don't match");
        }
        User user = userRepository.findByUsername(userDTO.getUsername());
        if (user == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect user");
        }

        boolean matches = bcryptEncoder.matches(userDTO.getOldPassword(), user.getHashPassword());
        if (!matches){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Passwords don't match");
        }
        user.setHashPassword(bcryptEncoder.encode(userDTO.getNewPassword()));
        return userRepository.save(user);
    }

    public User changeUser(UserChangeDTO userDTO){
        if (userDTO == null || userDTO.getUsername().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User empty");
        }
        if (!isUsernameSameAuthenticated(userDTO.getUsername())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User doesn't match");
        }
        if (userDTO.getName().isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Name not informed");
        }
        User user = userRepository.findByUsername(userDTO.getUsername());
        if (user == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect user");
        }
        user.setName(userDTO.getName());
        return userRepository.save(user);
    }

    public User save(UserDTO user){
        User newUser = new User();
        newUser.setCreationDate(new Date(System.currentTimeMillis()));
        newUser.setUsername(user.getUsername());
        newUser.setHashPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setName(user.getName());
        return userRepository.save(newUser);
    }

    public boolean isUsernameSameAuthenticated(String username){
        return username.equals(authenticationUtil.getUsernameAuthenticated());
    }
}



