import { useState, forwardRef } from 'react';
import { ReactComponent as Logo } from '../images/symbol.svg';
import { AppBar, ButtonGroup, Divider, Toolbar, Button, Box, InputBase } from '@material-ui/core';
import { Security as SecurityIcon, Person as PersonIcon, Search as SearchIcon, Tune as TuneIcon, Home as HomeIcon, Settings as SettingsIcon, PowerSettingsNew as PowerIcon } from '@material-ui/icons';
import HeaderStyle from './header.style';
import CustomDrawer from '../drawer/customDrawer';
import FilterDrawer from '../filter/filter';

function Header(props, ref) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [query, setQuery] = useState('');
  const styles = HeaderStyle();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <AppBar className={styles.bar} ref={ref}>
      <Toolbar>
        <Logo alt='brand' />
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <ButtonGroup className={styles.type}>
          <Button
            aria-label='type'
            className={index === 0 ? styles.gradientType : styles.whiteType}
            variant='contained'
            onClick={() => setIndex(0)}>
            <SecurityIcon className={index === 0 ? styles.white : styles.gray} />
          </Button>
          <Button
            aria-label='type'
            className={index === 1 ? styles.gradientType : styles.whiteType}
            variant='contained'
            onClick={() => setIndex(1)}>
            <PersonIcon className={index === 1 ? styles.white : styles.gray} />
          </Button>
        </ButtonGroup>
        <Box className={styles.search}>
          <InputBase
            placeholder="Pesquisar…"
            classes={{
              root: styles.lightGray,
              input: styles.lightGrayItalic,
            }}
            onChange={(event) => { setQuery(event.target.value) }}
            value={query}
            inputProps={{ 'aria-label': 'search' }}
          />
          <Button className={styles.searchIconBox} onClick={() => { props.getUsers(0, query) }}>
            <SearchIcon className={styles.gray} />
          </Button>
        </Box>
        <Divider className={styles.space} orientation="vertical" flexItem />
        <Box>
          <Button
            aria-label='filter'
            className={styles.whiteType}
            onClick={handleFilterOpen}>
            <TuneIcon className={styles.gray} />
          </Button>
          <Button
            aria-label='add'
            className={styles.add}
            onClick={handleDrawerOpen}>
            <PersonIcon className={styles.white} />
          INCLUIR USUÁRIO
        </Button>
        </Box>
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <ButtonGroup className={styles.changes}>
          <Button
            aria-label='home'
            variant='text'>
            <HomeIcon className={styles.gray} />
          </Button>
          <Button
            aria-label='settings'
            variant='text'>
            <SettingsIcon className={styles.gray} />
          </Button>
          <Button
            aria-label='power'
            variant='text'>
            <PowerIcon className={styles.gray} />
          </Button>
        </ButtonGroup>
        <CustomDrawer
          open={open}
          handleClose={handleDrawerClose}
          type={false}
          getUsersAfterUpdate={props.getUsersAfterUpdate}
          query={query} />
        <FilterDrawer
          open={openFilter}
          handleClose={handleFilterClose}/>
      </Toolbar>
    </AppBar>
  );
}

export default forwardRef(Header);