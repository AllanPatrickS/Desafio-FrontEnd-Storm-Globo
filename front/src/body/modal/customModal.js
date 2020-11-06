import { Modal, Box, Typography, ButtonGroup, Button } from '@material-ui/core';
import { HighlightOff as HighlightOffIcon } from '@material-ui/icons';
import React from 'react';
import ModalStyle from './customModal.style';

function CustomModal(props) {
    const styles = ModalStyle();

    async function deleteEntrys() {
      try {
        let url = `http://localhost:8080/user/${props.ids}`;
        let response = await fetch(
          url, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        });
        let json = await response.json();
        if(json.message === 'Usuario removido com sucesso') {
          props.handleClose();
          props.getUsersAfterUpdate(json.result.deletedCount, props.query);
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <Modal
            className={styles.modal}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="delete-modal"
            aria-describedby="delete-user-modal">
            <Box component='div' className={styles.paper}>
                <HighlightOffIcon className={styles.icon} />
                <Typography variant="h5" className={styles.text}>Você está prestes a apagar um ou múltiplos usuários</Typography >
                <Typography  className={styles.text}>Você realmente deseja deletar estas entradas? Este processo não pode ser desfeito.</Typography >
                <ButtonGroup className={styles.group}>
                    <Button
                        aria-label='home'
                        className={styles.firstButton}
                        style={{ borderRadius: 4 }}
                        variant='contained'
                        onClick={props.handleClose}>
                        Cancelar
                    </Button>
                    <Button
                        aria-label='settings'
                        className={styles.lastButton}
                        style={{ borderRadius: 4 }}
                        variant='contained'
                        onClick={deleteEntrys}>
                        Deletar
                    </Button>
                </ButtonGroup>
            </Box>
        </Modal>
    );
}

export default CustomModal;