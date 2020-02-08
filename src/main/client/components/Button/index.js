import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const PrimaryButton = ({
  color, isDesabled, handleClick, name,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={handleClick} color={color} variant="contained" disabled={isDesabled}>{`Add ${name}`}</Button>
    </div>
  );
};

PrimaryButton.propTypes = {
  color: PropTypes.string.isRequired,
  isDesabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

PrimaryButton.defaultProps = {
  isDesabled: false,
};

export default PrimaryButton;
