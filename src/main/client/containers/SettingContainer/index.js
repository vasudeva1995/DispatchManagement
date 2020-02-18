import React from 'react';

import SettingCard from '../../components/SettingCard';
import clothImg from '../../assets/clothImg.jpg';
import retailerImg from '../../assets/retailerImg.jpg';
import defaultImg from '../../assets/default.png';

import './Setting.scss';


class Setting extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      settingItems: [
        {
          name: 'Cloth',
          route: '/cloth-setting',
          cardImage: clothImg,
          title: 'settings for Cloths',
        },
        {
          name: 'Retailer',
          route: '/retailer-setting',
          cardImage: retailerImg,
          title: 'settings for Retailers',
        },
        {
          name: 'Challan',
          route: '/setting/challan',
          cardImage: defaultImg,
          title: 'settings for Challans',
        },
        {
          name: 'Latt',
          route: '/setting/latt',
          cardImage: defaultImg,
          title: 'settings for Latts',
        },
      ],
    };
  }

  render() {
    const { settingItems } = this.state;
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
