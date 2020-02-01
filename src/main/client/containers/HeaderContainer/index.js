import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import './style.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuButton: 'menus',
      userButton: 'user',
    };
  }

  render() {
    const { menuButton, userButton } = this.state;
    return (
      <div className="header-container">
        <div className="app-header">
          <div>
            <Button variant="contained" color="primary">
              {menuButton}
            </Button>
          </div>
          <div>
            <Button variant="contained" color="primary">
              {userButton}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {

})(Header);
