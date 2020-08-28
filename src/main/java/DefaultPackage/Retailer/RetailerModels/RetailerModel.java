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

    public Long getId() {
        return id;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public String getName() {
        return name;
    }

    public Long getMobile() {
        return mobile;
    }

    public String getAdress() {
        return adress;
    }

    public String getShopName() {
        return shopName;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

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

    public RetailerModel(){
        super();
    }

    public RetailerModel(Integer companyId, String name, Long mobile, String adress, String shopName){
        super();
        this.companyId = companyId;
        this.name = name;
        this.mobile = mobile;
        this.adress = adress;
        this.shopName = shopName;
    }
}
