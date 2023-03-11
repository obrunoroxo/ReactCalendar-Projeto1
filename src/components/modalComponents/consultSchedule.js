import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import dayjs from 'dayjs';

import { ModalContext } from "../context/ModalContext";
import { getAllAPIDatas } from "../reqsAPI/reqAllDatasApi";


export default function ConsultSchedule() {
  const { open1, setOpen1 } = React.useContext(ModalContext);
  const [clientcpf, setClientCPF] = React.useState("");
  const [openModalDatas, setOpenModalDatas] = React.useState(false);
  const [userData, setUserData] = React.useState({ data: "", idhora: "", tipoHora: "" });

  async function handleClick(cpf) {
    const response = await getAllAPIDatas();
    const schedule = response['schedule'];
    const datas = schedule.find(data => data['cpf'] === cpf);

    return (
      setUserData({
        ...userData,
        idhora: datas['idHora'],
        data: datas['data'],
        tipoHora: datas['tipoHora']
      })
    )
  }

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
              placeholder="Your personal CPF"
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
            <Button
              variant="contained"
              onClick={() => {
                handleClick(clientcpf);
                setOpenModalDatas(true);
                setOpen1(false);
              }}>
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
      <Modal
        keepMounted
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={openModalDatas}
      >
        <Box
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
          <Stack direction="rows" spacing={1}>
            <Chip
              // centralizar o elemento
              label={`${dayjs(userData.data).format('DD/MM/YYYY')} | ${userData.tipoHora} | ${userData.idhora}`}
              variant="outlined"
            />
          </Stack>
          <Button
            onClick={() => setOpenModalDatas(false)}
          > Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
}
