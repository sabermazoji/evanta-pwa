import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../elemenets/Header';
import Navbar from '../elemenets/Navbar';

const Layout = ({ children }) => {
    return (

        <>
            <CssBaseline />
            <Container maxWidth="xl" style={{ padding: 0 }}>
                <Header />
                {children}
                <Navbar />
            </Container>
        </>
    );
};
Layout.propTypes = {

    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
export default Layout;
