/* eslint-disable */
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

const Footer = () => (
  <footer className="page-footer teal z-depth-0">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">About Balochi Dictionary</h5>
          <p className="grey-text text-lighten-4">
            Balochi Dictionary is a not-for-profit, crowdsourced online dictionary that aims to collect Balochi vocabulary, their definitions, usage, English, Urdu, Farsi and Arabic equivalents in a single searchable database.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Support Us</h5>
        </div>
      </div>
    </div>
    <div className="footer-copyright light-green darken-1">
      <div className="container">
      © 2015 Balochi Dictionary
        <span className="right footer-social-icon">
            <a data-position="top" data-delay="50" data-tooltip="Like us on Facebook" className="white-text text-lighten-1 tooltipped" href=""><i className="fa fa-facebook"></i></a>
            <a data-position="top" data-delay="50" data-tooltip="Follow us on Twitter" className="white-text text-lighten-1 tooltipped" href=""><i className="fa fa-twitter"></i></a>
            <a data-position="top" data-delay="50" data-tooltip="Follow us on Google Plus" className="white-text text-lighten-1 tooltipped" href=""><i className="fa fa-google-plus"></i></a>
        </span>
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>



          <div className="rows">
          <div className="col l4 s2 m2 right">

          <div className="">



              <div className="black-text">

              </div>

          </div>
        </div>
      </div>
    </div>


  </footer>
);

export default Footer;
