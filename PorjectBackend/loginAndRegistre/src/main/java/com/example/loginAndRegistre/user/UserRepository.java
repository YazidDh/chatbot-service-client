package com.example.loginAndRegistre.user;

import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer> {

  Optional<User> findByEmail(String email);

  User findById(String id);

  List<User> findAllByRole(String role);
  long countByGenderAndRole(String gender,String role);

  long countByGenderAndIdInAndRole(String gender, String userId, String role);



}
