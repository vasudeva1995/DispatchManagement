import React from 'react';
import PropTypes from 'prop-types';
import { Button, message } from 'antd';
import { connect } from 'react-redux';

import { getRetailerData } from './retailerAction';
import TableWithPagination from '../../components/TableWithPagination/TableWithPagination';
import retailerService from './retailerService';

class Reatiler extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    const { getRetailers } = this.props;
    getRetailers();
  }
  render(){
    const { retailerTableData } = this.props;
    return (
      <div className="retailer-container">
        <TableWithPagination
          header={retailerService.makeRetailerTableHeader()}
          tableData={retailerService.makeTableData(retailerTableData)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  retailerTableData: state.retailer.retailerTable,
});
  
const mapDispatchToProps = {
  getRetailers: getRetailerData
};
  
Reatiler.propTypes = {
  getRetailers: PropTypes.func.isRequired,
  retailerTableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reatiler);