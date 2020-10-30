import { useState } from 'react';
import { ReactComponent as Logo } from '../images/symbol.svg';
import { AppBar, ButtonGroup, Divider, Toolbar, Button, Box, InputBase } from '@material-ui/core';
import { Security as SecurityIcon, Person as PersonIcon, Search as SearchIcon, Tune as TuneIcon, Home as HomeIcon, Settings as SettingsIcon, PowerSettingsNew as PowerIcon } from '@material-ui/icons';
import HeaderStyle from './header.style';

function Header() {
  const [index, setIndex] = useState(0);
  const styles = HeaderStyle();

  return (
    <AppBar className={styles.bar}>
      <Toolbar>
        <Logo alt='brand' />
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <ButtonGroup className={styles.type}>
          <Button
            aria-label='type'
            className={index === 0 ? styles.gradientType : styles.whiteType}
            onClick={() => setIndex(0)}>
            <SecurityIcon className={index === 0 ? styles.white : styles.gray} />
          </Button>
          <Button
            aria-label='type'
            className={index === 1 ? styles.gradientType : styles.whiteType}
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
            inputProps={{ 'aria-label': 'search' }}
          />
          <Box className={styles.searchIconBox}>
            <SearchIcon className={styles.gray} />
          </Box>
        </Box>
        <Divider className={styles.space} orientation="vertical" flexItem />
        <Box>
          <Button
            aria-label='filter'
            className={styles.whiteType}>
            <TuneIcon className={styles.gray} />
          </Button>
          <Button
            aria-label='add'
            className={styles.add}>
            <PersonIcon className={styles.white} />
          INCLUIR USUÁRIO
        </Button>
        </Box>
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <ButtonGroup className={styles.changes}>
          <Button
            aria-label='home'
            className={styles.firstBorderlessIcons}
            variant='text'>
            <HomeIcon className={styles.gray} />
          </Button>
          <Button
            aria-label='settings'
            className={styles.borderlessIcons}
            variant='text'>
            <SettingsIcon className={styles.gray} />
          </Button>
          <Button
            aria-label='power'
            className={styles.borderlessIcons}
            variant='text'>
            <PowerIcon className={styles.gray} />
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default Header;