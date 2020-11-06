import { Drawer, Box, Typography, Button, Divider, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Tune as TuneIcon, Close as CloseIcon, ExpandMore as ExpandMoreIcon, DateRange as DateRangeIcon, HdrStrong as HdrStrongIcon } from '@material-ui/icons';
import React from 'react';
import FilterStyle from './filter.style';

function FilterDrawer(props) {
    const styles = FilterStyle();

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={props.handleClose}>
            <Box className={styles.body}>
                <Box className={styles.head}>
                    <Box className={styles.head}>
                        <TuneIcon className={styles.grayIcon} />
                        <Typography className={styles.darkGrayText}>
                            FILTROS
                        </Typography>
                    </Box>
                    <Button
                        className={styles.headButton}
                        variant='contained'
                        onClick={props.handleClose}>
                        <CloseIcon className={styles.grayButtonIcon} />
                    </Button>
                </Box>
                <Typography className={styles.grayText}>
                    Utilize os filtros abaixo para refinar os resultados da tabela, clique no botão APLICAR para salvar as alterações.
                </Typography>
                <Divider className={styles.divider} />
                <Accordion className={styles.accordion} elevation={0}>
                    <AccordionSummary
                        className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.grayIcon} />}
                        aria-controls="inclusion-dates"
                        id="inclusion-dates" >
                        <DateRangeIcon className={styles.grayIcon} />
                        <Typography className={styles.heading}>TODAS AS DATAS DE INCLUSÃO</Typography>
                    </AccordionSummary>
                    <AccordionDetails />
                </Accordion>
                <Accordion className={styles.accordion} elevation={0}>
                    <AccordionSummary
                        className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.grayIcon} />}
                        aria-controls="update-dates"
                        id="update-dates">
                        <DateRangeIcon className={styles.grayIcon} />
                        <Typography className={styles.heading}>TODAS AS DATAS DE ALTERAÇÃO</Typography>
                    </AccordionSummary>
                    <AccordionDetails />
                </Accordion>
                <Accordion className={styles.accordion} elevation={0}>
                    <AccordionSummary
                        className={styles.summary}
                        expandIcon={<ExpandMoreIcon className={styles.grayIcon} />}
                        aria-controls="active-inative"
                        id="active-inative">
                        <HdrStrongIcon className={styles.grayIcon} />
                        <Typography className={styles.heading}>ATIVOS E INATIVOS</Typography>
                    </AccordionSummary>
                    <AccordionDetails />
                </Accordion>
                <Button
                    className={styles.button}
                    variant='outlined'
                    onClick={props.handleClose}>
                    APLICAR
                </Button>
            </Box>
        </Drawer>
    );
}

export default FilterDrawer;