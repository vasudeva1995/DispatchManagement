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
          route: '/setting/cloth',
          cardImage: clothImg,
        },
        {
          name: 'Retailer',
          route: '/setting/retailer',
          cardImage: retailerImg,
        },
        {
          name: 'Challan',
          route: '/setting/challan',
          cardImage: defaultImg,
        },
        {
          name: 'Latt',
          route: '/setting/latt',
          cardImage: defaultImg,
        },
      ],
    };
  }

  componentDidMount() {
    console.log('run');
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
