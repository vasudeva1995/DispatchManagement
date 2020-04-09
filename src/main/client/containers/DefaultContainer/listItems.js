import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import LotIcon from '@material-ui/icons/PostAdd';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link';

export const mainListItems = (
  <div>
    <Link to="/Lots">
      <ListItem button>
        <ListItemIcon>
          <LotIcon />
        </ListItemIcon>
        <ListItemText primary="Lots" />
      </ListItem>
    </Link>
    <Link to="/RetailerBills">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="RetailerBills" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div className="app-setting">
    <Link to="/setting">
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItem>
    </Link>
  </div>
);
