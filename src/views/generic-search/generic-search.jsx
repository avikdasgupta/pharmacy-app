import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Grid from "material-ui/Grid";

import GenericSearchTable from "../../components/generic-search-table/generic-search-table";
const themeStyles = theme => {

};

class GenericSearch extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Grid container>
                <Grid item xs={1} sm={1} md={2} lg={2} />
                <Grid item xs={11} sm={11} md={8} lg={8}>
                    <GenericSearchTable />
                </Grid>
                <Grid item xs={1} sm={1} md={2} lg={2} />
            </Grid>
        );
    }
}

GenericSearch.PropTypes = {

};

export default withStyles(themeStyles)(GenericSearch);