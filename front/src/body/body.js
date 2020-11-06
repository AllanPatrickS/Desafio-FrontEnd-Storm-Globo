import { Box, ButtonGroup, Container, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Row from './row/row';
import BodyStyle from './body.style';
import CustomModal from './modal/customModal';

function Body(props) {
  const styles = BodyStyle();
  const [rows, setRows] = useState([]);
  const [checked, setChecked] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const types = [
    <Button
      className={checked.length === 0 ? styles.hiddenButton : styles.deleteButton}
      style={{ borderRadius: 4 }}
      onClick={() => setOpen(true)}
      variant='contained'>Deletar</Button>,
    'USUÁRIO', 'EMAIL', 'DATA DE INCLUSÃO', 'DATA DE ALTERAÇÃO', 'REGRAS', 'STATUS', 'AÇÕES']

  async function getUsers(urlPage, query) {
    try {
      let url = `http://localhost:8080/user/${urlPage}`;
      if (query.length > 0) url = `${url}/${query}`;
      let response = await fetch(
        url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      setPage(parseInt(json.result.page));
      setTotal(parseInt(json.result.total));
      setLimit(parseInt(json.result.limit));
      setQuery(query);
      if (json.result.users != null) setRows(Array.from(json.result.users));
      else setRows([]);
    } catch (error) {
      console.error(error);
    }
  };

  function handleClose() {
    setOpen(false);
  };

  function getUsersAfterUpdate(deletedCount, query) {
    const newTotal = total - deletedCount;
    if (newTotal > 0 && page * limit >= newTotal) {
      let last = parseInt(total / limit);
      if (last * limit === total)
        last--;
      getUsers(last, query);
    } else {
      getUsers(page, query);
    }
  };

  function pushCheck(type, id) {
    if (type) {
      setChecked(checked.concat([id]));
    } else {
      setChecked(checked.filter((check, _) => check !== id));
    }
  };
  useEffect(() => {
    props.func(getUsersAfterUpdate, getUsers);
    getUsers(0, query);
    // eslint-disable-next-line
  }, []);

  return (
    <Box className={styles.body} minHeight={props.emptySpace}>
      <Container maxWidth={false} className={styles.container}>
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table className={styles.table} aria-label="user table">
            <TableHead className={styles.head}>
              <TableRow>
                {types.map((type) => (<TableCell key={type} className={styles.headCell}>{type}</TableCell>))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row
                  key={row._id}
                  row={row}
                  index={rows.indexOf(row)}
                  pushCheck={pushCheck}
                  getUsersAfterUpdate={getUsersAfterUpdate}
                  check={checked.indexOf(row._id)}
                  query={query} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonGroup className={styles.pagination} aria-label="pagination" >
          <Button
            className={styles.paginationButton}
            style={{ borderRadius: 4 }}
            onClick={() => getUsers(0, query)}
            disabled={page === 0 ? true : false}
            variant='contained'>Primeiro</Button>
          <Button
            className={styles.paginationButton}
            style={{ borderRadius: 4 }}
            onClick={() => getUsers(page - 1, query)}
            disabled={page === 0 ? true : false}
            variant='contained'>Anterior</Button>
          <Button
            className={styles.page}
            style={{ borderRadius: 4 }}
            variant='contained'>{page}</Button>
          <Button
            className={styles.paginationButton}
            style={{ borderRadius: 4 }}
            onClick={() => getUsers(page + 1, query)}
            disabled={total - (page * limit + limit) <= 0 ? true : false}
            variant='contained'>Próximo</Button>
          <Button
            className={styles.lastButton}
            style={{ borderRadius: 4 }}
            onClick={() => {
              let last = parseInt(total / limit);
              if (last * limit === total)
                last--;
              getUsers(last, query);
            }}
            disabled={total - (page * limit + limit) <= 0 ? true : false}
            variant='contained'>último</Button>
        </ButtonGroup >
      </Container>
      <CustomModal
        open={open}
        handleClose={handleClose}
        ids={checked}
        getUsersAfterUpdate={getUsersAfterUpdate}
        query={query} />
    </Box>
  );
}

export default Body;