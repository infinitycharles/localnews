import React, { Component } from "react";
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

class Forum extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={12}>
                <PageHeader>
                    Forum Content
                </PageHeader>
                </Col>
            </Row>
        </Grid>
      
    );
  }
}
 
export default Forum;