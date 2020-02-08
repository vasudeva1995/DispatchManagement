import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './SettingCard.scss';


const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 240,
  },
});

const SettingCard = ({ item, isCardAction, isTypography }) => {
  const classes = useStyles();
  return (
    <div className="setting-card-wrapper">
      <Card className={classes.root}>
        <Link to={item.route}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.cardImage}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              {isTypography && (
              <Typography variant="body2" color="textSecondary" component="p">
                Here you can manage your all cloths, you can add, delete, see all cloths
              </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Link>
        {isCardAction
        && (
        <CardActions>
          <Button size="small" color="primary">
          Share
          </Button>
          <Button size="small" color="primary">
          Learn More
          </Button>
        </CardActions>
        )}
      </Card>
    </div>
  );
};


SettingCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    rout: PropTypes.string,
    cardImage: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  isCardAction: PropTypes.bool,
  isTypography: PropTypes.bool,
};

SettingCard.defaultProps = {
  isCardAction: false,
  isTypography: false,
};

export default SettingCard;
