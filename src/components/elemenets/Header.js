import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line arrow-body-style
const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Vazir',
    },
    paper: {
        paddingBottom: 20,
        paddingTop: 20,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Paper square className={classes.paper}>
                <Typography className={classes.text} variant="h1" gutterBottom>
                    دریافت رویداد روزانه
                </Typography>
            </Paper>
        </>
    );
};
export default Header;
