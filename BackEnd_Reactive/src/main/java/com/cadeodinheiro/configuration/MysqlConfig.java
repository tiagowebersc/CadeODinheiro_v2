package com.cadeodinheiro.configuration;

import dev.miku.r2dbc.mysql.MySqlConnectionConfiguration;
import dev.miku.r2dbc.mysql.MySqlConnectionFactory;
import dev.miku.r2dbc.mysql.constant.SslMode;
import dev.miku.r2dbc.mysql.constant.TlsVersions;
import dev.miku.r2dbc.mysql.constant.ZeroDateOption;
import io.r2dbc.spi.ConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.r2dbc.config.AbstractR2dbcConfiguration;
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories;

import java.time.Duration;

@Configuration
@EnableR2dbcRepositories
public class MysqlConfig extends AbstractR2dbcConfiguration {
    @Value("${spring.r2dbc.host}")
    private String host;
    @Value("${spring.r2dbc.port}")
    private String port;
    @Value("${spring.r2dbc.database}")
    private String database;
    @Value("${spring.r2dbc.username}")
    private String username;
    @Value("${spring.r2dbc.password}")
    private String password;


    @Override
    @Bean
    public ConnectionFactory connectionFactory() {
        MySqlConnectionConfiguration configuration = MySqlConnectionConfiguration.builder()
                .host(host)
                .username(username)
                .port(Integer.parseInt(port)) // optional, default 3306
                .password(password) // optional, default null, null means has no password
                .database(database) // optional, default null, null means not specifying the database
                .connectTimeout(Duration.ofSeconds(10)) // optional, default null, null means no timeout
                //.sslMode(SslMode.VERIFY_IDENTITY) // optional, default SslMode.PREFERRED
                //.sslCa("/path/to/mysql/ca.pem") // required when sslMode is VERIFY_CA or VERIFY_IDENTITY, default null, null means has no server CA cert
                //.sslKeyAndCert("/path/to/mysql/client-cert.pem", "/path/to/mysql/client-key.pem", "key-pem-password-in-here") // optional, default has no client key and cert
                //.tlsVersion(TlsVersions.TLS1_1, TlsVersions.TLS1_2, TlsVersions.TLS1_3) // optional, default is auto-selected by the server
                .zeroDateOption(ZeroDateOption.USE_NULL) // optional, default ZeroDateOption.USE_NULL
                .build();
        ConnectionFactory connectionFactory = MySqlConnectionFactory.from(configuration);
        return connectionFactory;

// Creating a Mono using Project Reactor
        //Mono<Connection> connectionMono = Mono.from(connectionFactory.create());
    }
}