import { makeStyles } from '@material-ui/core/styles';

const RowStyle = makeStyles((theme) => ({
    evenRow: {
        background: '#F5F5F5',
        border: 'none',
    },
    oddRow: {
        background: '#E9E9E9',
        border: 'none',
    },
    cell: {
        color: '#333333',
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
    green: {
        color: '#31BA1F',
        fontWeight: '500',
    },
    red: {
        color: '#C70039',
    },
    gray: {
        color: '#666666',
    },
    button: {
        alignSelf: 'Center',
    },
    menu: {
        display: 'flex',
        flexDirection: 'row'
    },
}));

export default RowStyle;