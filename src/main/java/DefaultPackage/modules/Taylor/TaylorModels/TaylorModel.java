package DefaultPackage.modules.Taylor.TaylorModels;

import com.sun.istack.internal.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "Taylor")
public class TaylorModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @NotNull
    @Column
    private Integer companyId;


    @NotNull
    @Column
    private Integer taylorNo;


    @NotNull
    @Column
    private String name;


    @NotNull
    @Column
    private String address;


    @NotNull
    @Column
    private String mobileNo;
}
