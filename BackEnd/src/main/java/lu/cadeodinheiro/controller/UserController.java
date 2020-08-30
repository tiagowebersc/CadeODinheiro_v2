package lu.cadeodinheiro.controller;

import lu.cadeodinheiro.dto.UserChangeDTO;
import lu.cadeodinheiro.utils.JwtTokenUtil;
import lu.cadeodinheiro.auth.JwtRequest;
import lu.cadeodinheiro.auth.JwtResponse;
import lu.cadeodinheiro.dto.UserChangePasswordDTO;
import lu.cadeodinheiro.dto.UserDTO;
import lu.cadeodinheiro.service.JwtUserDetailsService;
import lu.cadeodinheiro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
//todo: change cross origin
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private JwtUserDetailsService userDetailsService;
    @Autowired
    private UserService userService;

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    @PostMapping(value ="/register")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user){
        return ResponseEntity.ok(userService.save(user));
    }

    @GetMapping(value = "/user")
    public ResponseEntity<?> getUser(){
        return ResponseEntity.ok(userService.getUser());
    }

    @PutMapping(value = "/user")
    public ResponseEntity<?> updateUser(@RequestBody UserChangeDTO user){
        return ResponseEntity.ok(userService.changeUser(user));
    }

    @PutMapping(value = "/user/change_password")
    public ResponseEntity<?> changePasswordUser(@RequestBody UserChangePasswordDTO user){
        return ResponseEntity.ok(userService.changePasswordUser(user));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}