import React from 'react';
import { Tooltip, Popover, List, Button } from 'antd';
import isEqual from 'lodash/isEqual';
import MdNavigateBefore from '@material-ui/icons/NavigateBefore';
import MdNavigateNext from '@material-ui/icons/NavigateNext';
import 'antd/es/tooltip/style/css';
import 'antd/es/popover/style/css';
import 'antd/es/list/style/css';
import 'antd/es/button/style/css';

class Pager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      pageSize: this.props.pageSize,
      pageNumber: this.props.pageNumber,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props, nextProps)) {
      this.setState({ pageSize: nextProps.pageSize, pageNumber: nextProps.pageNumber });
    }
  }

  handlePageSizeChange(pageSize) {
    this.setState({ visible: false });
    this.props.onPagerInteraction(1, pageSize);
  }

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  changePage(moveForward) {
    if (moveForward) {
        this.props.onPagerInteraction(this.props.pageNumber + 1, this.props.pageSize);
    } else if (this.props.pageNumber > 1) {
      this.props.onPagerInteraction(this.props.pageNumber - 1, this.props.pageSize);
    }
  }

  getPageChangeButtonTooltip = title => {
    if (title === 'Next') {
      return title;
    } else if (title === 'Previous') {
      return title;
    }
    return '';
  };

  render() {
    const range = this.props.range ? this.props.range : [0, 0];
    const total = this.props.total ? this.props.total : 0;
    const previousTooltip = this.getPageChangeButtonTooltip('Previous');
    const nextTooltip = this.getPageChangeButtonTooltip('Next');
    return (
      <div  style={{marginLeft:'calc(100% - 100px)', cursor: 'pointer',display:'flex', fontSize: '12px' }} id="page-size-dropdown-container">
        <Popover
          getPopupContainer={() => document.getElementById('page-size-dropdown-container')}
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          placement="bottom"
          style={{ padding: 0 }}
          content={
            <div>
              <List
                size="small"
                dataSource={[10,20,50]}
                renderItem={item => (
                  <List.Item
                    onClick={e => {
                      this.handlePageSizeChange(Number(item.split(' ')[0]));
                    }}
                  >
                    <Button>{item}</Button>
                  </List.Item>
                )}
              />
            </div>
          }
          trigger="click"
        >
          <Tooltip placement="top" title={'Change Page'}>
            <div id="pager-size-changer" style={{marginTop:'5px'}}>
              <span>
                {`${range[0]}-${range[1]}`}
                </span>
            </div>
          </Tooltip>
        </Popover>
        <div style={{display:'flex', justifyContent:'space-between'}}>
               <Tooltip placement="top" title={previousTooltip}>
                <div
                  onClick={() => {
                    this.changePage(false);
                  }}
                  id="left-target"
                >
                  <MdNavigateBefore />
                </div>
              </Tooltip>
              <Tooltip placement="top" title={nextTooltip}>
                <div
                  onClick={() => {
                    this.changePage(true);
                  }}
                  id="right-target"
                >
                  <MdNavigateNext />
                </div>
              </Tooltip>
            </div>
      </div>
    );
  }
}

export default Pager;
