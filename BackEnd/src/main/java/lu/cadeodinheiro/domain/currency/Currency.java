package lu.cadeodinheiro.domain.currency;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "currency")
public class Currency {
    @Id
    @Column(length = 6)
    private String acronym;

    @Column(length = 60, nullable = false)
    private String name;

    @Column(length = 5)
    private String prefix;

    @Column(length = 5)
    private String suffix;

}
