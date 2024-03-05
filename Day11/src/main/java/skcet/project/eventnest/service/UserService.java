package skcet.project.eventnest.service;

import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
