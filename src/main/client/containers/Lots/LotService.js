import * as api from '../../api';
class LotService{
    getPaginationWiseLots = async() => {
        
         let lots = await api.GET('/app/rest/v1/getLots/'+1);
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
}

export default new LotService();