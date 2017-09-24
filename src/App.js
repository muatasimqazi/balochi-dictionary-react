import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {lightBlue900, indigo700, redA200} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import AppBarTop from './Components/AppBarTop';
import MaterialUIAutocomplete from './Components/MaterialUIAutocomplete';
import Welcome from './Components/Welcome';
import WordDay from './Components/WordDay';
import SearchBox from './Components/SearchBox'
import {Card, Row, Col } from 'react-materialize';

import Words from './Components/Words';
import Footer from './Components/Footer'
import './App.css';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  bottomMarg: {
    marginBottom: 20,
    marginTop: 20,

  }
};

const muiTheme = getMuiTheme({
  // appBar: {
  //     height: 106, // Instead of 64
  //   },

  palette: {
       primary1Color: "#003042",
       primary2Color: "#00709B",
       accent1Color: redA200,
       pickerHeaderColor: lightBlue900,
   },
});


class App extends Component {

  constructor(props, context) {

    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
   this.handleTouchTap = this.handleTouchTap.bind(this);


    this.state = {
      //words: []
      open: false,
    };
  }


// material ui
// injectTapEventPlugin();
  // life cycle method
  componentWillMount() {
    this.setState({words: [
      {
        title: 'ABC',
        category: 'Noun'
      },
      {
        title: 'CDF',
        category: 'Verb'
      },
      {
        title: 'EFG',
        category: 'pronoun'
      }

    ]});
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div>

        <AppBarTop />

        <Divider />

<div style={styles.bottomMarg}><SearchBox/></div>
                <Row>
                <Col l={3} m={4} s={12} className='grid-example offset-l1' style={{bottom: '450px', right: '24px'}}>  <div style={styles.bottomMarg}>< WordDay /></div></Col>
                    <Col l={7} m={8} s={12} className='grid-example'>  <Welcome /></Col>
                </Row>
                <Divider />
  <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
