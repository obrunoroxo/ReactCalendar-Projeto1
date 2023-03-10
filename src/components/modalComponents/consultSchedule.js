import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { ModalContext } from "../context/ModalContext";

export default function ConsultSchedule() {
  const { open1, setOpen1 } = useContext(ModalContext);
  const { clientcpf, setClientCPF } = React.useState("");
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <>
      <Modal
        keepMounted
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open1}
      >
        <Box
          component="form"
          sx={{
            m: 1,
            p: 4,
            top: "50%",
            width: 400,
            left: "50%",
            boxShadow: 24,
            position: "absolute",
            bgcolor: "background.paper",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            textAlign="center"
            id="modal-modal-title"
          >
            Por favor, informe seu CPF:
          </Typography>

          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              fullWidth
              required
              value={clientcpf}
              label="Required"
              variant="filled"
              id="filled-required"
              placeholder="Username"
              onChange={(event) => {
                setClientCPF(event.target.value);
              }}
            />
          </Box>
          <Stack
            sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "center",
            }}
            spacing={2}
            direction="row"
          >
            <Button variant="contained" onClick={() => {}}>
              OK
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setOpen1(false);
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
