
import { useRef, useEffect, useState } from 'react';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
import ScreenSize from './utils/screen/screen';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const size = ScreenSize();
  let theme = createMuiTheme();
  const [emptySpace, setEmptySpace] = useState(0);
  const [getUsersAfterUpdate, setGetUsersAfterUpdate] = useState(null);
  const [getUsers, setGetUsers] = useState(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    function setSpace() {
      if (headerRef.current && footerRef.current)
        setEmptySpace(size[1] - headerRef.current.clientHeight - footerRef.current.clientHeight);
      else
        setEmptySpace(size[1]);
    }
    setSpace();
  });

  function setFunc(update, get) {
    setGetUsersAfterUpdate(() => update);
    setGetUsers(() => get);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header key='header' ref={headerRef} getUsersAfterUpdate={getUsersAfterUpdate} getUsers={getUsers} />
      <Body key='body' emptySpace={emptySpace} func={setFunc} />
      <Footer key='footer' ref={footerRef} />
    </ThemeProvider>
  );
}

export default App;
