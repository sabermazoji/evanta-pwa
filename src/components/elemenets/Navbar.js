import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
 AppBar, Toolbar, Button, Fab,
} from '@material-ui/core';
import { GetAppRounded, Refresh } from '@material-ui/icons';

// eslint-disable-next-line arrow-body-style
const useStyles = makeStyles((theme) => ({
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    button: {
        margin: theme.spacing(1, 10, 1, 0),
        fontFamily: 'Vazir',
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(1, 5, 1, 0),
        },
    },
    buttonApp: {
        margin: theme.spacing(1, 0, 1, 10),
        fontFamily: 'Vazir',
        color: '#3f51b5',
        backgroundColor: '#ffffff',
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#c51162',
        },
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(1, 0, 1, 5),
        },
    },

}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <>

            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        درباره من
                    </Button>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                        <Refresh />
                    </Fab>
                    <div className={classes.grow} />

                    <Button startIcon={<GetAppRounded />} className={classes.buttonApp} variant="contained" color="default">
                        نصب اپلیکیشن
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Navbar;
