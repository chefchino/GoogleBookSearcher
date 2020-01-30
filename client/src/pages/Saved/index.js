import React, { Component } from "react";
import JumboTron from "../../components/Jumbotron";
import { Row, Container } from "../../components/Grid";
import {List, ListItem} from "../../components/Result";

class Saved extends Component {
   
    
    render() {
        return (
            <Container fluid>
            <Row>
                <JumboTron>
                    <h1>(React) Google Books Search</h1>
                    <h3>Search for Save Books of Interest</h3>
                </JumboTron>
            </Row>
            <Row>
            <Container fluid>
<h9>Saved Books</h9>
        <List>
            <ListItem>
                </ListItem>
        </List>
            </Container>
            </Row>
        </Container>
        )
    }
}

export default Saved;