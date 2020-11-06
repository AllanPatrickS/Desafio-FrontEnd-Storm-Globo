import { makeStyles } from '@material-ui/core/styles';

const FilterStyle = makeStyles((theme) => ({
    body: {
        display: 'flex',
        flexDirection: 'column',
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
    grayText: {
        color: '#666666',
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontStyle: 'italic',
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    divider: {
        color: '#666666',
        height: 4,
        width: 24,
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),

    },
    accordion: {
        marginTop: theme.spacing(3),
        backgroundColor:'inherit',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        borderBottom: '5px #E9E9E9'
    },
    summary: {
        border: 'none'
    },
    heading: {
        color: '#D83367',
        fontFamily: 'Roboto',
        fontWeight: '500',
        marginLeft: theme.spacing(1),
    },
    button: {
        color: '#D83367',
        borderColor: '#D83367',
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
}));

export default FilterStyle;