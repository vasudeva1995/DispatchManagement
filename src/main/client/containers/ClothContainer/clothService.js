import * as api from '../../api';
class clathService {

  getAllClothData = async() => {
    const url = '/app/rest/v1/cloth';
    const result = await api.GET(url);
    return result.data;
  }

  addCloth = async(data) => {
    const url = '/app/rest/v1/add-cloth';
    const result = await api.POST(url, data);
    return result.data;
  }

  makeClothTableHeaderColumns = () => {
    const columns = [
      {
        id: 'id', label: 'Id', align: 'left', minWidth: 50,
      },
      {
        id: 'name', label: 'Name', align: 'left', minWidth: 200,
      },
      {
        id: 'sautNumber', label: 'Saut Number', align: 'left', minWidth: 100,
      },
      {
        id: 'type',
        label: 'Type',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString(),
      },
      {
        id: 'unit',
        label: 'Unit',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString(),
      },
      {
        id: 'cost',
        label: 'Cost',
        minWidth: 100,
        align: 'left',
        format: (value) => value,
      },
    ];
    return columns;
  }
  makeTableData = clothTableData => {
    const array = [];
    clothTableData.forEach((item) => {
      array.push({
        id: item.id,
        name: item.name,
        sautNumber: item.sautNumber,
        type: item.type,
        unit: item.unit,
        cost: item.cost,
      });
    });
    return array;
  }
}

export default new clathService();