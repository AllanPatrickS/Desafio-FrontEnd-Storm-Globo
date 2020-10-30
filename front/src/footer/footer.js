import { AppBar, Typography, Toolbar } from '@material-ui/core';
import FooterStyle from './footer.style';
import { RadioButtonChecked as RadioIcon, Update as UpdateIcon, Tv as TvIcon } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';

function Footer() {
  const styles = FooterStyle();
  const [time, setTime] = useState(new Date());
  const [encounter, setEncounter] = useState('');
  const month = ["Janeiro", "Fevereiro", "Maro", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  useEffect(() => {
    async function getMeeting() {
      try {
        let response = await fetch(
          'http://localhost:8080/meeting'
        );
        let json = await response.json();
        if (json.item != null) setEncounter(json.item.date);
        else setEncounter('Sem encontros marcados');

      } catch (error) {
        console.error(error);
      }
    };
    function tick() {
      setTime(new Date())
    }
    let interval = setInterval(
      () => {
        tick();
        getMeeting();
      },
      1000
    );
    return function cleanup() {
      clearInterval(interval);
    };
  });

  return (
    <AppBar className={styles.bar}>
      <Toolbar>
        <RadioIcon className={styles.orange} />
        <Typography className={styles.orangeText}>NO AR</Typography >
        <TvIcon className={styles.tv} />
        <Typography className={styles.tvText}>ENCONTRO - {encounter}</Typography >
        <UpdateIcon className={styles.update} />
        <Typography className={styles.updateText}>Última atualização em <strong>10:28</strong></Typography >
        <Typography className={styles.date}><strong>{time.getDate()}</strong> de <strong>{month[time.getMonth()]}</strong> de <strong>{time.getFullYear()}</strong></Typography >
        <Typography className={styles.clock} variant='h4'><strong>&#8260;&#8260; {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</strong></Typography >
      </Toolbar>
    </AppBar>
  );
}

export default Footer;