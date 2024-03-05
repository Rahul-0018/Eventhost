package skcet.project.eventnest.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.UserResponse;
import skcet.project.eventnest.model.Users;
import skcet.project.eventnest.repository.UsersRepository;
import skcet.project.eventnest.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UsersRepository usersRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<Users> users = usersRepository.findAll();
        List<UserResponse> userResponse = users.stream()
                .map(user -> UserResponse.builder()
                        .id(user.getId())
                        .name(user.getName())
                        .email(user.getEmail())
                        .password(user.getPassword())
                        .role(user.getRole())
                        .build())
                .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("User data fetched successfully!").data(userResponse)
                .build();
    }
}
