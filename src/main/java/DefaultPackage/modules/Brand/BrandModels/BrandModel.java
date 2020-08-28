package DefaultPackage.modules.Brand.BrandModels;

import com.sun.istack.internal.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "Brand")
public class BrandModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public Integer getCompanyId() {
        return companyId;
    }

    public BrandModel(Integer companyId, String name, String productId) {
        this.companyId = companyId;
        this.name = name;
        this.productId = productId;
    }

    public BrandModel() {
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    @NotNull
    @Column
    private Integer companyId;

    @NotNull
    @Column
    private String name;

    @NotNull
    @Column
    private String productId;

}
