import React, { Component } from "react";
import JumboTron from "../../components/Jumbotron";
import { Row, Container } from "../../components/Grid";
import {Input, FormBtn} from "../../components/Searchbox";
import {List, ListItem} from "../../components/Result";

class Search extends Component {
   
    
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
                    <Container>
                        <h7>Book Search</h7>
                        <h9>Book</h9>
                        <Input/>
                        <FormBtn/>
                    </Container>
                </Row>
                <Row>
                <Container fluid>
                    <h9>Results</h9>
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

export default Search;