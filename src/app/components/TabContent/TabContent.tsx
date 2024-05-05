import React from 'react';
import { Box } from '@mui/material';
import "./TabContent.scss";

type Props = {
    children: React.ReactNode;
}

const TabContent = (props: Props) => {
    const { children } = props;

    if (!children) {
        return null;
    }
    return (
        <>
        {/* <Box className="cc" dangerouslySetInnerHTML={{ __html: children.toString() }} /> */}
        <Box className="cc">
            {children}
        </Box>
        </>
    );
}

export { TabContent };
