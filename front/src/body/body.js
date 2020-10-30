import { Box, Typography, Divider } from '@material-ui/core';
import BodyStyle from './body.style';

function Body() {
  const styles = BodyStyle();

  return (
    <Box className={styles.body}>
      <Divider className={styles.bodyBelowAppBar}></Divider>
      <Typography>NO AR</Typography >
    </Box>
  );
}

export default Body;