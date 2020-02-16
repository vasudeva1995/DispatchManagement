import * as api from '../../api';
class LotService{
    getPaginationWiseLots = async(paginationConfig) => {
        
         let lots = await api.GET('/app/rest/v1/getLots/'+[paginationConfig.pageNumber]);
        return lots.data;
    }
    getTableColumns = () => {
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
                title: 'Sizes',
                dataIndex: 'sizes',
                key: 'sizes',
                width: 200,
                align: 'center'
              },
              {
                title: 'Current Status',
                dataIndex: 'status',
                key: 'status',
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
}

export default new LotService();