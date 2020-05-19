package com.cadeodinheiro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;

@SpringBootApplication
@EnableWebFluxSecurity
public class CadeODinheiroApplication {

	public static void main(String[] args) {
		SpringApplication.run(CadeODinheiroApplication.class, args);
	}

}
