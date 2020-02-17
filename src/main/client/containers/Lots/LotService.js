import * as api from '../../api';
class LotService{
    getPaginationWiseLots = async(paginationConfig) => {
        
         let lots = await api.GET('/app/rest/v1/getLots/'+[paginationConfig.pageNumber]);
        return lots.data;
    }
    getTableColumns = (statusMap) => {
        const statusArray = Object.keys(statusMap).reduce((acc,status)=>{
          const statusObj = {
            title: `${status} status`,
            dataIndex: `${status}-status`,
            key: `${status}-status`,
            width: 200,
            align: 'center',
          };
          acc.push(statusObj);
          return acc;
        },[]);

        const columns = [
            {
              title: 'Lot Number',
              dataIndex: 'lotNo',
              key: 'lotNo',
              width: 200,
              align: 'center',
              
            },
            {
              title: 'Cloth',
              dataIndex: 'clothNo',
              key: 'clothNo',
              width: 200,
              align: 'center',
              
            },
            {
              title: 'Brand',
              dataIndex: 'brand',
              key: 'brand',
              width: 200,
              align: 'center',
              
            },
            {
              title: 'Current Status',
              dataIndex: 'status',
              key: 'status',
              width: 200,
              align: 'center'
            },
            {
                title: 'Sizes',
                dataIndex: 'sizes',
                key: 'sizes',
                width: 200,
                align: 'center'
            },
            {
                title: 'Move Status',
                dataIndex: 'moveStatus',
                key: 'moveStatus',
                width: 200,
                align: 'center',
            },
          ];
          columns.splice.apply(columns, [5, 0].concat(statusArray));
          return columns;
    }
    getSizeWiseObject = (sizes) => {
         return Object.values(sizes).reduce((acc,val)=>{
            acc[val.size] = val;
            return acc;
         },{})
    }
    addLotData = async (lot) => {
      const result = await api.POST('/app/rest/v1/setLot',lot);
      return result;
    }
    
    getDataStores = async () => {
      return Promise.all([api.GET('/app/rest/v1/brands'),
                          api.GET('/app/rest/v1/cloth'),
                          api.GET('/app/rest/v1/taylors')]).then(response=>({
              brands:response[0].data,
              cloths:response[1].data,
              taylors:response[2].data              
      })
      )
    }

    convertListToMap = (dataList) => {
      console.log(dataList);
      return dataList.reduce((acc,obj)=> {
        acc[obj.id] = obj;
        return acc;
      },{})
    }

    formatDataStores = (dataStores) => {
        dataStores.cloths = this.convertListToMap(dataStores.cloths);
        dataStores.brands = this.convertListToMap(dataStores.brands);
        dataStores.tailors = this.convertListToMap(dataStores.taylors);
        return dataStores;
    }
 }

export default new LotService();