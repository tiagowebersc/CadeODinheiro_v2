package lu.cadeodinheiro.domain.category;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lu.cadeodinheiro.domain.user.User;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCategory;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    private Date creationDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoryType categoryType;

    @Column(length = 60, nullable = false)
    private String description;

    private boolean isActive;

    @ManyToOne
    @JoinColumn(name = "upperCategory_id")
    private Category category;


}
