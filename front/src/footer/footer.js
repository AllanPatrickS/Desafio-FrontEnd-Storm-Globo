import { AppBar, Typography, Toolbar } from '@material-ui/core';
import FooterStyle from './footer.style';
import { RadioButtonChecked as RadioIcon, Update as UpdateIcon, Tv as TvIcon } from '@material-ui/icons';
import React, { useState, useEffect, useLayoutEffect, forwardRef } from 'react';

function Footer(_, ref) {
  const styles = FooterStyle();
  const [time, setTime] = useState(new Date());
  const [lastUpdate, setLastUpdate] = useState('');
  const [encounter, setEncounter] = useState('');
  const month = ["Janeiro", "Fevereiro", "Maro", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  async function getMeeting() {
    try {
      let response = await fetch(
        'http://localhost:8080/meeting'
      );
      let json = await response.json();
      if (json.result != null) setEncounter(json.result);
      else setEncounter('Sem encontros marcados');

    } catch (error) {
      console.error(error);
    }
  };

  async function getLastUpdate() {
    try {
      let response = await fetch(
        'http://localhost:8080/user/lastupdate'
      );
      let json = await response.json();
      if (json.result != null) setLastUpdate(json.result);
      else setLastUpdate('Sem Atualizações');

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    function tick() {
      setTime(new Date())
    }
    let intervalDate = setInterval(
      () => {
        tick();
      },
      1000
    );
    let intervalMeet = setInterval(
      () => {
        getMeeting();
        getLastUpdate();
      },
      60000
    );
    return function cleanup() {
      clearInterval(intervalDate);
      clearInterval(intervalMeet);
    };
  });
  
  useLayoutEffect(() => {
    getMeeting();
    getLastUpdate();
  }, [])

  return (
    <AppBar className={styles.bar} ref={ref}>
      <Toolbar>
        <RadioIcon className={styles.orange} />
        <Typography className={styles.orangeText}>NO AR</Typography >
        <TvIcon className={styles.tv} />
        <Typography className={styles.tvText}>ENCONTRO - {encounter}</Typography >
        <UpdateIcon className={styles.update} />
        <Typography className={styles.updateText}>Última atualização em <strong>{lastUpdate}</strong></Typography >
        <Typography className={styles.date}><strong>{time.getDate()}</strong> de <strong>{month[time.getMonth()]}</strong> de <strong>{time.getFullYear()}</strong></Typography >
        <Typography className={styles.clock} variant='h4'><strong>&#8260;&#8260; {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</strong></Typography >
      </Toolbar>
    </AppBar>
  );
}

export default forwardRef(Footer);