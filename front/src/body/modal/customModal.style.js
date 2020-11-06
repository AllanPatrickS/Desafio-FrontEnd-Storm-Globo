import { makeStyles } from '@material-ui/core/styles';

const ModalStyle = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2, 4, 3),
      },
      icon: {
        color: '#D83367',
        fontSize:'100px',
        marginBottom: theme.spacing(3),
      },
      text: {
        color: '#666666',
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginLeft: theme.spacing(1),
      },
      group: {
        marginTop: theme.spacing(3),
      },
      firstButton: {
        backgroundColor: '#999999',
        color: '#FFFFFF',
        marginRight: theme.spacing(3),
      },
      lastButton: {
        backgroundColor: '#D83367',
        color: '#FFFFFF',
      },
}));

export default ModalStyle;