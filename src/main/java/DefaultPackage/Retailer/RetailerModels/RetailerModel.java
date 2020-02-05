package DefaultPackage.Retailer.RetailerModels;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by navyug on 5/2/20.
 */
@Entity
public class RetailerModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    @NotNull
    private Integer companyId;

    @Column
    private String name;

    @Column
    private Long mobile;

    @Column
    private String adress;

    @Column
    private String shopName;
}
