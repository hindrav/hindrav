import React, { ReactNode } from 'react';
import { Box, Button } from '@mui/material';
import "./SimpleAppBar.scss";

type ButtonInfo = {
  icon: ReactNode;
  onClick: () => void;
};

type Props = {
  buttons: ButtonInfo[];
};

const SimpleAppBar = (props: Props) => {
  const { buttons } = props;

  return (
    <Box className="appbar">
      {buttons.map((button, index) => (
        <Box className="appbar-item" key={index}>
          <Button onClick={button.onClick}>
            {button.icon}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export { SimpleAppBar };
