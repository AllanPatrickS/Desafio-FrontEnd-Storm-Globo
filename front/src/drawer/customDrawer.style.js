import { makeStyles } from '@material-ui/core/styles';

const DrawerStyle = makeStyles((theme) => ({
    body: {
        backgroundColor: '#F5F5F5',
        height: 'inherit',
        width: 500
    },
    head: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between'
    },
    grayIcon: {
        color: '#666666',
        marginLeft: theme.spacing(3)
    },
    darkGrayText: {
        color: '#333333',
        fontFamily: 'Audiowide',
        fontWeight: '400',
        marginLeft: theme.spacing(2)
    },
    headButton: {
        backgroundColor: '#FFFFFF',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    grayButtonIcon: {
        color: '#666666',
    },
    form: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(3),
        width: 300
    },
    formText: {
        fontFamily: 'Roboto',
        fontWeight: '500',
        width: 300
    },
    formButton: {
        alignSelf: 'flex-end',
        color: '#D83367',
        borderColor: '#D83367',
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginTop: theme.spacing(3),
    },
}));

export default DrawerStyle;