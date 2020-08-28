package DefaultPackage.modules.RetailerBills.RetailerBillRepositories;

import DefaultPackage.modules.RetailerBills.RetailerBillModels.RetailerBill;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface RetailerBillRepository extends JpaRepository<RetailerBill,Long> {

    @Query("select a from RetailerBill a where a.companyId = ?1")
    Page<RetailerBill> findPaginatedBills(Integer companyId, Pageable pageSpecification);

    @Query("select case when count(l)>0 then true else false end from RetailerBill l where l.billNo = ?1")
    Boolean checkUniqueBillNumber(Integer billNumber);

    @Modifying
    @Transactional
    @Query("update RetailerBill l set l.amountPaid = ?2 where l.billNo = ?1")
    void updateAmountForBillNo(Integer billNo, Integer amountPaid);

}
