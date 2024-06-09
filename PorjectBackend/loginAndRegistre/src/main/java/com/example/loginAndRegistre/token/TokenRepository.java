package com.example.loginAndRegistre.token;

import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TokenRepository extends MongoRepository<Token, Integer> {


  List<Token> findAllValidTokenByUser(String id);

  Optional<Token> findByToken(String token);
}
