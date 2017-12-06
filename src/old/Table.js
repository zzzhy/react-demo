import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

var Alert = require('react-bootstrap').Alert;

const getData = async() => {
  const resData = (await axios.get('https://www.easy-mock.com/mock/5a2425eb82614c0dc1bf1cab/example/getData#!method=get')).data;
  return resData;
}

class DymTable extends Component {
    constructor() {
      super();
      this.state = {'result': []};
    }

    render() {
      getData().then((res) => this.setState({'result':res}));
      return (<Table responsive striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Table h1</th>
          <th>Table h2</th>
          <th>Table h3</th>
        </tr>
      </thead>
      <tbody>
        {this.state.result.map((d) => 
          <tr>
            <td>0</td>
            <td>{d['h1']}</td>
            <td>{d['h2']}</td>
            <td>{d['h3']}</td>
          </tr>
      )}
      </tbody>
    </Table>);
  }
}

export default DymTable;
