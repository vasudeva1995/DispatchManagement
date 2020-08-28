package DefaultPackage.modules.RetailerBills.RetailerBillModels;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Map;

@Entity
     public class RetailerBill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RetailerBill() {
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

    public Integer getRetailerNo() {
        return retailerNo;
    }

    public void setRetailerNo(Integer retailerNo) {
        this.retailerNo = retailerNo;
    }

    public Map<String, Object> getSizeJson() {
        return sizeJson;
    }

    public void setSizeJson(Map<String, Object> sizeJson) {
        this.sizeJson = sizeJson;
    }

    public Integer getAmountPaid() {
        return amountPaid;
    }

    public void setAmountPaid(Integer amountPaid) {
        this.amountPaid = amountPaid;
    }

    @Column
    @NotNull
    Integer companyId;

    @NotNull
    @Column
    Integer billNo;

    public Integer getBillNo() {
        return billNo;
    }

    public void setBillNo(Integer billNo) {
        this.billNo = billNo;
    }

    @NotNull
    @Column
    Integer lotNo;

    @NotNull
    @Column
    Integer retailerNo;

    @NotNull
    @Column
    @Convert(converter = HashMapConverter.class)
    Map<String,Object> sizeJson;

    @NotNull
    @Column
    Integer amountPaid;

    public Integer getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Integer totalAmount) {
        this.totalAmount = totalAmount;
    }

    public RetailerBill(@NotNull Integer companyId, @NotNull Integer billNo, @NotNull Integer lotNo, @NotNull Integer retailerNo, @NotNull Map<String, Object> sizeJson, @NotNull Integer amountPaid, @NotNull Integer totalAmount) {
        this.companyId = companyId;
        this.billNo = billNo;
        this.lotNo = lotNo;
        this.retailerNo = retailerNo;
        this.sizeJson = sizeJson;
        this.amountPaid = amountPaid;
        this.totalAmount = totalAmount;
    }

    @NotNull
    @Column
    Integer totalAmount;

}
