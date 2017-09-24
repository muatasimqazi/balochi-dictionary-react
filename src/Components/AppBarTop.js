import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Button, Card, Row, Col } from 'react-materialize';
import Icon from 'react-materialize';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarTop = () => (

  <AppBar
    title="Balochi Dictionary"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default AppBarTop;
