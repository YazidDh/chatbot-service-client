package com.example.loginAndRegistre.auth;

import com.example.loginAndRegistre.user.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;


  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(
      @RequestBody RegisterRequest request
  ) {
    return ResponseEntity.ok(service.register(request));
  }
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(service.authenticate(request));
  }

  @PutMapping("/user/{id}")
  public void updateUser(@PathVariable("id") String id,
                         @RequestBody updateUserRequest updateUserRequest) {
    service.updateUser(id, updateUserRequest);
  }

  @GetMapping("/user/{email}")
  public Optional<User> getUser(@PathVariable("email") String email) {
    return service.getUser(email);

  }



}
