package lu.cadeodinheiro.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CategoryDTO {
    private String idCategory;
    private String categoryType;
    private String description;
    private String upperCategory;
    private boolean active;
}
