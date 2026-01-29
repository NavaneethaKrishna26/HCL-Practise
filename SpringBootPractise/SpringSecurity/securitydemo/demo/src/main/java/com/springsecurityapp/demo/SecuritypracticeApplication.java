package com.springsecurityapp.demo;

import com.springsecurityapp.demo.entity.User;
import com.springsecurityapp.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SecuritypracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecuritypracticeApplication.class, args);
	}
	@Bean
	CommandLineRunner initUsers(UserRepository userRepository,
								PasswordEncoder passwordEncoder) {

		return args -> {
			if (userRepository.findByUsername("krishna").isEmpty()) {

				User user = new User();
				user.setUsername("krishna");
				user.setPassword(passwordEncoder.encode("mypassword"));
				user.setRole("ROLE_USER");

				userRepository.save(user);

				System.out.println("✅ Test user created: krishna / mypassword");
			}
		};
	}

}
