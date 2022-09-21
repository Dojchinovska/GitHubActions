package com.talent.notes.api;

import com.talent.notes.model.User;
import com.talent.notes.security.SecurityService;
import com.talent.notes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private UserService userService;

    private SecurityService securityService;

    public UserController(UserService userService, SecurityService securityService) {
        this.userService = userService;
        this.securityService = securityService;
    }

    @GetMapping("/api/users")
    public List<User> findUsers() {

        return userService.findUsers();
    }

    @GetMapping("/api/users/me")
    public User findAuthenticatedUser() {
        return securityService.getAuthenticatedUser();
    }

}
