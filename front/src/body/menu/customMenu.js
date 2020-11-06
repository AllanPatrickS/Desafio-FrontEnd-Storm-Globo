import { Button, Box, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { MoreHoriz as MoreIcon, Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';
import MenuStyle from './customMenu.style';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import CustomModal from '../modal/customModal';
import CustomDrawer from '../../drawer/customDrawer';

function CustomMenu(props) {
    const styles = MenuStyle();
    const [mod, setMod] = useState(false);
    const [draw, setDraw] = useState(false);

    function handleOpenMod() {
        setMod(true);
    };

    function handleCloseMod() {
        setMod(false);
    };

    const handleDrawerOpen = () => {
        setDraw(true);
    };

    const handleDrawerClose = () => {
        setDraw(false);
    };

    return (
        <PopupState variant="popover" popupId="menu">
            {(popupState) => (
                <Box>
                    <Button
                        aria-label='more'
                        {...bindTrigger(popupState)}>
                        <MoreIcon className={styles.gray} />
                    </Button>
                    <Menu
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                        className={styles.menu}
                        {...bindMenu(popupState)}>
                        <MenuItem className={styles.menuItem} onClick={handleOpenMod}>
                            <DeleteIcon className={styles.gray} />
                        </MenuItem>
                        <MenuItem className={styles.menuItem} onClick={handleDrawerOpen}>
                            <EditIcon className={styles.gray} />
                        </MenuItem>
                        <CustomModal
                            open={mod}
                            handleClose={handleCloseMod}
                            ids={props.row._id}
                            getUsersAfterUpdate={props.getUsersAfterUpdate}
                            query={props.query} />
                        <CustomDrawer
                            open={draw}
                            handleClose={handleDrawerClose}
                            row={props.row} 
                            type={true}
                            getUsersAfterUpdate={props.getUsersAfterUpdate}
                            query={props.query} />
                    </Menu>
                </Box>
            )
            }
        </PopupState >
    );
}

export default CustomMenu;