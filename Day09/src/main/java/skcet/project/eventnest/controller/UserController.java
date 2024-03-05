package skcet.project.eventnest.controller;

import static skcet.project.eventnest.utils.MyConstant.USER;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Hidden;
import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.UserResponse;
import skcet.project.eventnest.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @Hidden
    @PostMapping
    public ResponseEntity<BasicResponse<UserResponse>> getAllUser() {
        BasicResponse<UserResponse> response = new BasicResponse<>();
        try {
            response = userService.getAllUser();
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

}
