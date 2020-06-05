package lu.cadeodinheiro.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Getter
public class ApiError{
    private Date timestamp;
    private int status;
    private String error;
    private String message;
    private String path;
    private List<String> errors;

    public ApiError(HttpStatus status, String message, String path, List<String> errors) {
        super();
        this.timestamp = new Date();
        this.status = status.value();
        this.error = status.name();
        this.message = message;
        this.path = path;
        this.errors = errors;
    }

    public ApiError(HttpStatus status, String message, String path, String error) {
        super();
        this.timestamp = new Date();
        this.status = status.value();
        this.error = status.name();
        this.message = message;
        this.path = path;
        errors = Arrays.asList(error);
    }
}