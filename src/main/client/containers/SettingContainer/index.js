import React from 'react';

import SettingCard from '../../components/SettingCard';
import './Setting.scss';

class Setting extends React.PureComponent {
  componentDidMount() {
    console.log('run');
  }

  render() {
    const settingItems = [{ name: 'Cloth' }, { name: 'Retailere' }, { name: 'Challan' }, { name: 'Latt' }];
    return (
      <div className="setting-container">
        {settingItems.map((item) => (
          <SettingCard item={item} />
        ))}
      </div>
    );
  }
}

export default Setting;
