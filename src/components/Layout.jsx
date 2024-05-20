import React from 'react';

const Layout = (props) => {
    const layout = {
        width: '980px',
    };

    return <div style={layout}>{props.children}</div>;
};

export default Layout;
