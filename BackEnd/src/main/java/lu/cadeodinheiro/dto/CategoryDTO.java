package lu.cadeodinheiro.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CategoryDTO {
    private long idCategory;
    private String categoryType;
    private String description;
    private long upperCategory;
    private boolean active;
}
