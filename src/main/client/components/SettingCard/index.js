import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from '../Button';
import './SettingCard.scss';

const SettingCard = ({ item }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="setting-card-wrapper">
      <div className="item-imgage">
        {isOpen ? 'open' : 'close'}
      </div>
      <PrimaryButton name={item.name} handleClick={() => setOpen(!isOpen)} colot="primary" />
    </div>
  );
};

SettingCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default SettingCard;
