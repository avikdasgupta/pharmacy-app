import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const themeStyles = theme => {

};

class GenericSearch extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Desc</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </Paper>
        );
    }
}

GenericSearch.PropTypes = {

};

export default withStyles(themeStyles)(GenericSearch);