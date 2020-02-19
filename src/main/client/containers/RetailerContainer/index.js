import React from 'react';
import PropTypes from 'prop-types';
import { Button, message } from 'antd';
import { connect } from 'react-redux';

import { getRetailerData, addRetailer } from './retailerAction';
import TableWithPagination from '../../components/TableWithPagination/TableWithPagination';
import retailerService from './retailerService';
import CustomDrawer from '../../components/CustomDrawer';
import AddRetailerForm from './addRetailerForm';
import './Retailer.scss';

class Reatiler extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isDrawerOpen: false
    }
  }
  componentDidMount(){
    const { getRetailers } = this.props;
    getRetailers();
  }
  toggleDrawer = () => {
    const { isDrawerOpen } = this.state;
    this.setState({
      isDrawerOpen: !isDrawerOpen
    })
  }
  retailerForm = () => {
    return (
      <div className="cloth-form">
        <AddRetailerForm  addRetailer={this.addRetailer}/>
      </div>
    )
  }
  addRetailer = retailerData => {
    const { addRetailer } = this.props;
    return new Promise((resolve, reject) => {
      addRetailer({companyId: 1, ...retailerData}, resolve, reject);
    })
    .then(success=>{
      message.success('Successfully added');
      this.toggleDrawer();
    })
    .catch(error=> {
      message.error("Server error please try again");
    })
  }
  render(){
    const { retailerTableData } = this.props;
    const { isDrawerOpen } = this.state;
    return (
      <div className="retailer-container">
        <div className="retailer-setting-actions">
          <Button style={{marginLeft:'calc(100% - 100px)'}} onClick = {this.toggleDrawer}>+ Add Retailer</Button>
        </div>
        <TableWithPagination
          header={retailerService.makeRetailerTableHeader()}
          tableData={retailerService.makeTableData(retailerTableData)}
        />
        <CustomDrawer
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={this.toggleDrawer}
          jsxToRender={this.retailerForm()}
          title="Add Retailer"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  retailerTableData: state.retailer.retailerTable,
});
  
const mapDispatchToProps = {
  getRetailers: getRetailerData,
  addRetailer: addRetailer
};
  
Reatiler.propTypes = {
  getRetailers: PropTypes.func.isRequired,
  retailerTableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reatiler);