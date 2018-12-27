import React, { Component } from "react";
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

class Stuff extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={12}>
                <PageHeader>
                    Example page header <small>Subtext for header</small>
                </PageHeader>
                </Col>
            </Row>
        </Grid>
      
    );
  }
}
 
export default Stuff;