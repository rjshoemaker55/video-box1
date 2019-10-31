import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [e.target.name]: e.target.value
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
                <input
                  id='name-input'
                  type='text'
                  name='firstName'
                  onChange={e => this.handleChange(e)}
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
