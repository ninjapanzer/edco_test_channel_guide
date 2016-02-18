import React from "react";
import jQuery from "jquery"
import { render } from "react-dom"
import { Router, Route, Link } from "react-router"

import NoMatch from "./components/noMatch.js"

import history from "./history.js"

const $channelList = jQuery('#channelList')[0];

export default {
  router: null,
  start: function(){
    this.router = render((
      <Router history={history}>
        <Route path="*" component={NoMatch}/>
      </Router>
    ), $channelList)
  }
}
