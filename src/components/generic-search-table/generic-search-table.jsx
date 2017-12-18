import React from "react";
import PropTypes from "prop-types";

import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Checkbox from "material-ui/Checkbox";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const themeStyles = theme =>({

});

const Labels = {
    "name" : "Name",
    "desc" : "Description"
};

class GenericSearchTable extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                &nbsp;
                            </TableCell>
                            <TableCell padding="dense">
                                <Typography align="left" type="body2">{Labels.name}</Typography>
                            </TableCell>
                            <TableCell padding="dense">
                                <Typography align="left" type="body2">{Labels.desc}</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </Paper>
        );
    }

};

export default withStyles(themeStyles)(GenericSearchTable);