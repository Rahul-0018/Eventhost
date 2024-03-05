package skcet.project.eventnest.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import skcet.project.eventnest.model.Users;

public interface UsersRepository extends JpaRepository<Users, String> {
    Optional<Users> findByEmail(String email);
}
