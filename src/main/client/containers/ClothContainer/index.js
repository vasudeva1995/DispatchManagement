import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ClothTable from '../../components/ClothTable';
import { getClothData } from './clothAction';

class Cloth extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { getCloths } = this.props;
    getCloths();
  }

  render() {
    const { clothTableData } = this.props;
    return (
      <div className="cloth-setting-container">
        <ClothTable clothTableData={clothTableData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clothTableData: state.cloth.clothTable,
});

const mapDispatchToProps = {
  getCloths: getClothData,
};

Cloth.propTypes = {
  getCloths: PropTypes.func.isRequired,
  clothTableData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cloth);
