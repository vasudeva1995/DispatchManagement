import * as api from '../../api';
class RetailerBillService{
    getPaginationWiseBills = async(paginationConfig) => {  
         let bills = await api.GET('/app/rest/v1/getRetailerBills/'+[paginationConfig.pageNumber]);
        return bills.data;
    }
    getTableColumns = () => {
        const columns = [
          {
            title: 'Bill Number',
            dataIndex: 'billNo',
            key: 'billNo',
            width: 200,
            align: 'center',
            
          },
            {
              title: 'Lot Number',
              dataIndex: 'lotNo',
              key: 'lotNo',
              width: 200,
              align: 'center',
              
            },
            {
              title: 'Retailer',
              dataIndex: 'retailerNo',
              key: 'retailerNo',
              width: 200,
              align: 'center',
              
            },
            {
                title: 'Sizes',
                dataIndex: 'sizeJson',
                key: 'sizeJson',
                width: 200,
                align: 'center'
            },
            {
              title: 'Total Amount',
              dataIndex: 'totalAmount',
              key: 'totalAmount',
              width: 200,
              align: 'center',
          },
            {
                title: 'Amount Paid',
                dataIndex: 'amountPaid',
                key: 'amountPaid',
                width: 200,
                align: 'center',
            },
          {
            title: 'Amount Yet Not Received',
            dataIndex: 'billNo',
            key: 'amountYetNotReceived',
            width: 200,
            align: 'center',
        },
            {
              title: 'Pay Now',
              dataIndex: 'billNo',
              key: 'payNow',
              width: 200,
              align: 'center',
          },
          ];
          return columns;
    }
    getSizeWiseObject = (sizes) => {
         return Object.values(sizes).reduce((acc,val)=>{
            acc[val.size] = val;
            return acc;
         },{})
    }
    addBillData = async (bill) => {
      const result = await api.POST('/app/rest/v1/setRetailerBill',bill);
      return result;
    }
    
    getDataStores = async () => {
      return Promise.all([api.GET('/app/rest/v1/get-retailer')
                          ]).then(response=>({
              retailers:response[0].data,
                       
      })
      )
    }

    convertListToMap = (dataList,key) => {
      return dataList.reduce((acc,obj)=> {
        acc[obj[key]] = obj;
        return acc;
      },{})
    }

    formatDataStores = (dataStores) => {
        dataStores.retailers = this.convertListToMap(dataStores.retailers,'id');
        return dataStores;
    }

    updateAmountPaid = async (billNo,amountPaid) => {
      const result = await api.PUT('/app/rest/v1/updateBills',{billNo,amountPaid});
      return result;
    }

    setStatusToLots = (lots,statusList) => {

     for(let i = 0; i < lots.length ; i++)
     {
       let lot = lots[i];
       for(status of statusList){
         lot[status] = status;
       }
       lots[i] = lot;
     }
       return lots;
    }

    getTotalAmount(sizeJson){
      return Object.values(sizeJson).reduce((acc,val)=>{
        acc += parseInt(val.quantity,10) * parseInt(val.price,10);
        return acc;
      },0);
    }
 }

export default new RetailerBillService();