import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { withAlert } from "react-alert";

import ClothTable from '../../components/ClothTable';
import { getClothData, addClothData } from './clothAction';
import CustomDrawer from '../../components/CustomDrawer';
import AddClothForm from './AddClothForm';

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
    const { addCloth, alert } = this.props;
    return new Promise((resolve, reject) => {
      addCloth({companyId: 1, ...clothData}, resolve, reject);
    })
    .then(success=>{
      alert.success("Cloth added succussfully")
      this.toggleDrawer();
    })
    .catch(error=> {
      alert.error("Server error please try again")
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
        <ClothTable clothTableData={clothTableData} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withAlert()(Cloth));
