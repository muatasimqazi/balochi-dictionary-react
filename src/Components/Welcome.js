import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';


const style = {
  background: '#00709B'
}


const Welcome = () => (
  <Card>
    <CardHeader
      title="Welcome to Balochi Dictionary Project"
      titleColor='white'
        style={style}
    />

    <Divider />
    <CardText>

    <p>Balochi Dictionary is a not-for-profit, crowdsourced online dictionary that aims to collect Balochi vocabulary, their definitions, usage,
    English, Urdu, Farsi and Arabic equivalents in a single searchable database.</p>
    <p>This website is still in beta – a work in progress. Please do visit us regularly as we are constantly adding new entries. In the meantime, check us out on Facebook and Twitter.
</p>
    </CardText>
  </Card>
);

export default Welcome;
