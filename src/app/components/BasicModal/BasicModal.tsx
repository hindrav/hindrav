import * as React from "react";
import { Button } from "@mui/material";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Link } from "@mui/icons-material";
import { BasicModalProps } from "app/interfaces";

const BasicModal: React.FC<BasicModalProps> = ({ open, onClose, title, text, urlOne, urlTwo }) => {
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={onClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            <p style={{ fontSize: "1.3rem", fontWeight: "800", textTransform: "uppercase"  }}>{title}</p>
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <p style={{ fontSize: "1.7rem"}}>{text}</p>
            <Button variant="contained" style={{ margin: "1rem", width: "25rem" }}><a href={urlOne} style={{ color: "white", fontSize: "1.3rem", textDecoration: "none" }}>See Newspaper Note</a></Button>
            <Button variant="contained" style={{ margin: "1rem", width: "25rem" }}><a href={urlTwo} style={{ color: "white", fontSize: "1.3rem", textDecoration: "none" }}>See Television Note</a></Button>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export { BasicModal };
