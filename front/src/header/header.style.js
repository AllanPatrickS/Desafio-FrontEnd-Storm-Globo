import { makeStyles } from '@material-ui/core/styles';

const HeaderStyle = makeStyles((theme) => ({
    bar: {
        backgroundColor: '#F5F5F5',
        flexGrow: 1,
        position: 'static',
        boxShadow: '0px 0px 16px 0px rgba(0,0,0,0.08)'
    },
    divider: {
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(2),
    },
    type: {
        marginLeft: theme.spacing(3),
    },
    gradientType: {
        background: 'linear-gradient(225deg, #FF8700, #D83367)',
        borderRadius: 5
    },
    whiteType: {
        background: '#FFFFFF',
        borderRadius: 5
    },
    white: {
        color: '#FFFFFF'
    },
    search: {
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        borderBottom: '3px solid #E9E9E9',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: theme.spacing(5),
        position: 'relative',
        width: 'auto',
    },
    searchIconBox: {
        height: '100%',
        position: 'end',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightGray: {
        color: '#333333',
    },
    lightGrayItalic: {
        color: '#333333',
        fontStyle: 'italic',
        fontWeight: '300',
    },
    gray: {
        color: '#666666',
    },
    space: {
        flexGrow: 1,
        backgroundColor: 'transparent'
    },
    add: {
        background: '#D83367',
        borderRadius: 5,
        color: '#FFFFFF',
        fontWeight: '500',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
    },
    changes: {
        marginLeft: theme.spacing(2),
    },
}));

export default HeaderStyle;