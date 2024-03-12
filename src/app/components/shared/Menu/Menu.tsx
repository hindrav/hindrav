import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "app/interfaces";
import "./Menu.scss";
import { setColorMode } from "app/redux/slices/setModeSlice";
import { switchColor } from "app/utils/constants";

const Menu = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.colorMode.mode);
  const changeColor = switchColor(mode);

  const handleMode = () => {
    dispatch(setColorMode(!mode));
  };

  return (
    <div className={` navbar-nav`}>
      <AppBar
        className={`navbar-nav`}
        position="static"
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {mode
          ? (
            <Button className={`${changeColor}`} onClick={handleMode}>
              <DarkMode />
            </Button>
          )
            :
           (<Button className={`${changeColor}`} onClick={handleMode}>
           <LightMode />
         </Button>)
        }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Menu };
