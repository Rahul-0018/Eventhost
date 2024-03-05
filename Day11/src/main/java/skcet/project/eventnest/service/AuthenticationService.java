package skcet.project.eventnest.service;

import skcet.project.eventnest.dto.request.LoginRequest;
import skcet.project.eventnest.dto.request.RegisterRequest;
import skcet.project.eventnest.dto.response.LoginResponse;
import skcet.project.eventnest.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
    
}
