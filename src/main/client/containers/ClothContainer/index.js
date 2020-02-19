import React from 'react';
import PropTypes from 'prop-types';
import { Button, message } from 'antd';
import { connect } from 'react-redux';

import TableWithPagination from '../../components/TableWithPagination/TableWithPagination';
import { getClothData, addClothData } from './clothAction';
import CustomDrawer from '../../components/CustomDrawer';
import AddClothForm from './AddClothForm';
import clothService from './clothService';

import './Cloth.scss';

class Cloth extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
  }

  componentDidMount() {
    const { getCloths } = this.props;
    getCloths();
  }

  toggleDrawer = () => {
    const { isDrawerOpen } = this.state;
    this.setState({
      isDrawerOpen: !isDrawerOpen
    })
  }
  clothForm = () => {
    return (
      <div className="cloth-form">
        <AddClothForm addCloth={this.addCloth} />
      </div>
    )
  }
  addCloth = clothData => {
    const { addCloth } = this.props;
    return new Promise((resolve, reject) => {
      addCloth({companyId: 1, ...clothData}, resolve, reject);
    })
    .then(success=>{
      message.success('Successfully added');
      this.toggleDrawer();
    })
    .catch(error=> {
      message.error("Server error please try again");
    })
  }
  render() {
    const { clothTableData } = this.props;
    const { isDrawerOpen } = this.state;
    return (
      <div className="cloth-setting-container">
        <div className="cloth-setting-actions">
          <Button style={{marginLeft:'calc(100% - 100px)'}} onClick = {this.toggleDrawer}>+ Add Cloth</Button>
        </div>
        <TableWithPagination
          header={clothService.makeClothTableHeaderColumns()}
          tableData={clothService.makeTableData(clothTableData)}
        />
        <div>
          <CustomDrawer
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={this.toggleDrawer}
            jsxToRender={this.clothForm()}
            title="Add Cloths"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clothTableData: state.cloth.clothTable,
});

const mapDispatchToProps = {
  getCloths: getClothData,
  addCloth: addClothData
};

Cloth.propTypes = {
  getCloths: PropTypes.func.isRequired,
  clothTableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cloth);
