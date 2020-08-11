package DefaultPackage.modules.Lot.LotModels;

import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import javax.persistence.*;
import java.util.Map;

@Document(indexName = "dispatchManagement", type = "Lots")
public class ESLotModel {
    @Id
    Long id;

    public ESLotModel(Long id, Integer companyId, Integer lotNo, Integer clothNo, String status, String brand, Map<String, Object> challans, Map<String, Object> sizes) {
        this.id = id;
        this.companyId = companyId;
        this.lotNo = lotNo;
        this.clothNo = clothNo;
        this.status = status;
        this.brand = brand;
        this.challans = challans;
        this.sizes = sizes;
    }

    public ESLotModel() {
    }

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

    Integer companyId;

    Integer lotNo;

    Integer clothNo;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    String status;

    String brand;

    @Field(type=FieldType.Text)
    @Convert(converter = HashMapConverter.class)
    private Map<String, Object> challans;  // status wise (taylor,washing,packing) json

    @Field(type=FieldType.Text)
    @Convert(converter = HashMapConverter.class)
    private Map<String, Object> sizes;  // size wise count json

}
