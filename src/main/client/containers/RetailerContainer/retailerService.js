import * as api from '../../api';
class RetailerService {
  makeRetailerTableHeader = () => {
    const columns = [
      {
        id: 'id', label: 'Id', align: 'left', minWidth: 50,
      },
      {
        id: 'name', label: 'Name', align: 'left', minWidth: 200,
      },
      {
        id: 'mobile', label: 'Mobile No.', align: 'left', minWidth: 100,
      },
      {
        id: 'address', label: 'Address', minWidth: 100, align: 'left',
      },
      {
        id: 'shopname', label: 'Shop Name', minWidth: 100, align: 'left',
      },
    ];
    return columns;
  }
  makeTableData = data => {
    const array = [];
    data.forEach((item) => {
      array.push({
        id: item.id,
        name: item.name,
        mobile: item.mobile,
        address: item.adress,
        shopname: item.shopName,
      });
    });
    return array;
  }
  getAllRetailerData = async() => {
    const url = '/app/rest/v1/get-retailer';
    const result = await api.GET(url);
    return result.data;
  }
  addRetailer = async(data) => {
    const url = '/app/rest/v1/add-retailer';
    const result = await api.POST(url, data);
    return result.data;
  }
}

export default new RetailerService();