import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {Link} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    footer: {
        flex: 0,
        textAlign: "center",
        padding: theme.spacing(2),
    },
    link: {
        padding: theme.spacing(0, 0.5),
    },
    temp: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.footer} component="footer">
                <Box>

                </Box>
                <Box mt={2} className={classes.temp}>

                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Footer;
