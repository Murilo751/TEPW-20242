package br.edu.unichristus.repository;

import br.edu.unichristus.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByLoginAndPassword(String login, String password);

}
