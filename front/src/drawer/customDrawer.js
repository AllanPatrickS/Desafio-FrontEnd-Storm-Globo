import { Drawer, Box, TextField, Typography, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { Edit as EditIcon, Close as CloseIcon } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import DrawerStyle from './customDrawer.style';

function CustomDrawer(props) {
    const styles = DrawerStyle();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [rules, setRules] = useState(0);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (props.row != null) {
            setUsername(props.row.username);
            setEmail(props.row.email);
            setRules(props.row.rules);
            setStatus(props.row.status);
        }
    }, [props]);

    async function entry(event) {
        event.preventDefault();
        try {
            let url = `http://localhost:8080/user`;
            let method = 'POST';
            if(props.type) {
                url = `${url}/${props.row._id}`;
                method = 'PATCH';
            }
            let response = await fetch(
                url, {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    rules,
                    status
                })
            });
            let json = await response.json();
            if (json.message === 'Usuario atualizado com sucesso' || json.message === 'Usuario criado com sucesso') {
                props.handleClose();
                props.getUsersAfterUpdate(0, props.query);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={props.handleClose}>
            <Box className={styles.body}>
                <Box className={styles.head}>
                    <Box className={styles.head}>
                        <EditIcon className={styles.grayIcon} />
                        <Typography className={styles.darkGrayText}>
                            {props.type ? 'Editar' : 'Criar'}
                        </Typography>
                    </Box>
                    <Button
                        className={styles.headButton}
                        variant='contained'
                        onClick={props.handleClose}>
                        <CloseIcon className={styles.grayButtonIcon} />
                    </Button>
                </Box>
                <form className={styles.form} onSubmit={entry} action=''>
                    <TextField
                        className={styles.formText}
                        id="userName"
                        label="Usuário"
                        type="text"
                        onChange={(event) => { setUsername(event.target.value) }}
                        value={username} />
                    <TextField
                        className={styles.formText}
                        id="email"
                        label="Email"
                        type="email"
                        onChange={(event) => { setEmail(event.target.value) }}
                        value={email} />
                    <TextField
                        className={styles.formText}
                        id="rules"
                        label="Regras"
                        onChange={(event) => { setRules(event.target.value) }}
                        value={rules} />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={status}
                                onChange={(event) => { setStatus(event.target.checked) }}
                                name="status"
                            />
                        }
                        label="Status" />
                    <Button
                        className={styles.formButton}
                        variant='outlined'
                        type="submit">
                        Confirmar
                    </Button>
                </form>
            </Box>
        </Drawer>
    );
}

export default CustomDrawer;