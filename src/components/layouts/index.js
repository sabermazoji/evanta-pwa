import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
    return (

        <>
            <CssBaseline />
            <Container maxWidth="xl" style={{ padding: 0 }}>
                {children}
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
