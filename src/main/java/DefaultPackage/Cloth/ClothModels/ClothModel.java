package DefaultPackage.Cloth.ClothModels;

import com.sun.istack.internal.NotNull;

import javax.persistence.*;

@Entity

public class ClothModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column
    private Integer companyId;

    public Long getId() {
        return id;
    }

    public Integer getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    public String getSautNumber() {
        return sautNumber;
    }

    public void setSautNumber(String sautNumber) {
        this.sautNumber = sautNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    @NotNull
    @Column
    private String sautNumber;

    @Column
    @NotNull
    private String name;

    @Column
    @NotNull
    private String type;

    @Column
    @NotNull
    private Integer cost;

    @Column
    private String unit;

    public ClothModel() {
        super();
        // TODO Auto-generated constructor stub
    }



    /**
     * @param name
     * @param type
     * @param cost
     * @param unit
     */

    public ClothModel(Integer companyId, String sautNumber, String name, String type, Integer cost, String unit ){
        super();
        this.companyId = companyId;
        this.sautNumber =  sautNumber;
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.unit = unit;
    }
}
