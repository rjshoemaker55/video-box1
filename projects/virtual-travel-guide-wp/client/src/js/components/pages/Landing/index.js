import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

import Question from '../../Question';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 1,
      firstName: '',
      originCity: '',
      destCity: '',
      departDate: '',
      returnDate: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className='main-div'>
              <h1 className='main-heading'>welcome to my concierge.</h1>
              <h2 className='sec-heading'>what's your first name?</h2>
              <form onSubmit={e => this.onSubmit(e)}>
                <Question
                  name='questionOne'
                  onChange={e => this.handleChange(e)}
                />
                <p>{this.state.currentQuestion}</p>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
