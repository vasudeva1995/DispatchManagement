import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Typography } from '@material-ui/core';
import CrossIcon from '@material-ui/icons/Close';
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';

const drawerWidth = 550;
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));


function CustomDrawer({
  isDrawerOpen, toggleDrawer, jsxToRender, title,
}) {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        variant="temporary"
        anchor="right"
        className={classes.drawerHeading}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={isDrawerOpen}
      >
        <div style={{
          width: '100%', height: '50px', background: '#f2eded', padding: '10px',
        }}
        >
          <div style={{ justifyContent: 'space-between', display: 'flex' }}>
            <Typography variant="h6">
              {title}
            </Typography>
            <CrossIcon style={{ marginTop: '4px' }} onClick={toggleDrawer} />
          </div>
        </div>
        {jsxToRender}
      </Drawer>
    </div>

  );
}

export default CustomDrawer;
