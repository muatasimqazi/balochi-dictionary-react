import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';


const style = {
  background: '#7cb342',
  color: 'white'
}
const WordDay = () => (


  <Card>

    <CardHeader
      title="Today's Word"
      actAsExpander={true}
      showExpandableButton={true}
      titleColor='white'
      style={style}

    />
    <Divider />
    <CardActions>
    <p>Click the arrow to view the definiton</p>

    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default WordDay;
