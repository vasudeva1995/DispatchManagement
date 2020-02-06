import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import simpleAction from './appAction';
import './App.scss';

class App extends React.PureComponent {
  componentDidMount() {
    const { firstAction } = this.props;
    const url = '/app/rest/v1/cloth';
    firstAction(url);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map((row) => (
          <div key={row.id} className="entry">
            <div>
              <span>id:</span>
              {row.id}
            </div>
            <div>
              <span>companyId:</span>
              {row.companyId}
            </div>
            <div>
              <span>sautNumber:</span>
              {' '}
              {row.sautNumber}
            </div>
            <div>
              <span>name:</span>
              {row.name}
            </div>
            <div>
              <span>type:</span>
              {row.type}
            </div>
            <div>
              <span>cost:</span>
              {row.cost}
            </div>
            <div>
              <span>unit</span>
              {row.unit}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.appReducer.result,
});

const mapDispatchToProps = {
  firstAction: simpleAction,
};

App.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      companyId: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      cost: PropTypes.number,
      unit: PropTypes.string,
    }),
  ),
  firstAction: PropTypes.func.isRequired,
};

App.defaultProps = {
  data: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
