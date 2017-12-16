import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const themeStyles = theme => {

};

class AboutUs extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
      return(
          <div>
              <Typography>{"This is About Us Page"}</Typography>
          </div>

      );
    };
}

AboutUs.PropTypes = {

};

export default withStyles(themeStyles, { withTheme: true })(AboutUs);