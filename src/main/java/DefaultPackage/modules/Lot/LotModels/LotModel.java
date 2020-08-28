package DefaultPackage.modules.Lot.LotModels;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Map;

@Entity
@Table(name = "lots")
public class LotModel {
    public LotModel(String status,@NotNull Integer companyId, @NotNull Integer lotNo, @NotNull Integer clothNo, String brand, Map<String, Object> challans, Map<String, Object> sizes) {
        this.companyId = companyId;
        this.lotNo = lotNo;
        this.clothNo = clothNo;
        this.brand = brand;
        this.challans = challans;
        this.sizes = sizes;
        this.status = status;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public Integer getLotNo() {
        return lotNo;
    }

    public void setLotNo(Integer lotNo) {
        this.lotNo = lotNo;
    }

    public Integer getClothNo() {
        return clothNo;
    }

    public void setClothNo(Integer clothNo) {
        this.clothNo = clothNo;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Map<String, Object> getChallans() {
        return challans;
    }

    public void setChallans(Map<String, Object> challans) {
        this.challans = challans;
    }

    public Map<String, Object> getSizes() {
        return sizes;
    }

    public void setSizes(Map<String, Object> sizes) {
        this.sizes = sizes;
    }

    @NotNull
    @Column
    Integer companyId;

    public LotModel() {
    }

    @NotNull
    @Column
    Integer lotNo;

    @NotNull
    @Column
    Integer clothNo;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @NotNull
    @Column
    String status;

    @Column
    String brand;

    @Column(columnDefinition="TEXT")
    @Convert(converter = HashMapConverter.class)
    private Map<String, Object> challans;  // status wise (taylor,washing,packing) json

    @Column(columnDefinition="TEXT")
    @Convert(converter = HashMapConverter.class)
    private Map<String, Object> sizes;  // size wise count json

}
