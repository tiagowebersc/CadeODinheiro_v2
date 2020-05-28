package lu.cadeodinheiro.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserChangePasswordDTO {
    private String username;
    private String oldPassword;
    private String newPassword;
    private String confirmPassword;
}
