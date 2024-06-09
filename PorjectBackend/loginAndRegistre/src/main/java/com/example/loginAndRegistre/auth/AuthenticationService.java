package com.example.loginAndRegistre.auth;


import com.example.loginAndRegistre.config.JwtService;
import com.example.loginAndRegistre.token.Token;
import com.example.loginAndRegistre.token.TokenRepository;
import com.example.loginAndRegistre.token.TokenType;
import com.example.loginAndRegistre.user.Role;
import com.example.loginAndRegistre.user.User;
import com.example.loginAndRegistre.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
  private final UserRepository repository;
  private final TokenRepository tokenRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  public AuthenticationResponse register(RegisterRequest request) {
    Optional<User>  verifyUser = repository.findByEmail(request.getEmail());
    if (verifyUser.isPresent()) {
      return   AuthenticationResponse.builder()
              .userExists("Email already used !")
              .build();
    }
    var user = User.builder()
        .fullname(request.getFullname())
        .gender(request.getGender())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();
    var savedUser = repository.save(user);
    var jwtToken = jwtService.generateToken(user);
    saveUserToken(savedUser, jwtToken);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );
    var user = repository.findByEmail(request.getEmail())
        .orElseThrow();
    var jwtToken = jwtService.generateToken(user);
    revokeAllUserTokens(user);
    //saveUserToken(user, jwtToken);
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }

  private void saveUserToken(User user, String jwtToken) {
    var token = Token.builder()
        .token(jwtToken)
        .tokenType(TokenType.BEARER)
        .expired(false)
        .revoked(false)
        .build();
    tokenRepository.save(token);
  }

  private void revokeAllUserTokens(User user) {
    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
    if (validUserTokens.isEmpty())
      return;
    validUserTokens.forEach(token -> {
      token.setExpired(true);
      token.setRevoked(true);
    });
    tokenRepository.saveAll(validUserTokens);
  }


  public Optional<User> getUser(String email) {
    return repository.findByEmail(email);
  }

  public void updateUser(String id, updateUserRequest updateUserRequest) {
    User user = repository.findById(id);
    user.setFullname(updateUserRequest.getFullname());
    user.setEmail(updateUserRequest.getEmail());
    repository.save(user);
  }
}
