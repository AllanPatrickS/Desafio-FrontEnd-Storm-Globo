import { makeStyles } from '@material-ui/core/styles';

const BodyStyle = makeStyles((theme) => ({
    body: {
        backgroundColor: '#F5F5F5',
        flexGrow: 1,
        marginTop: theme.spacing(3)
    },
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    tableContainer: {
        boxShadow: '0px 2px 16px 0px rgba(0,0,0,0.08)'
    },
    header: {
        backgroundColor: '#FFFFFF',
    },
    headCell: {
        color: '#333333',
        fontFamily: 'Roboto',
        fontWeight: '500',
    },
    pagination: {
        marginTop: theme.spacing(2),
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
    },
    deleteButton: {
        backgroundColor:'#D83367',
        color: '#FFFFFF',
    },
    hiddenButton: {
        display: 'none'
    },
    paginationButton: {
        backgroundColor:'#FFFFFF',
        marginRight: theme.spacing(2),
        boxShadow: 'none'
    },
    page: {
        backgroundColor:'#D83367',
        color: '#FFFFFF',
        marginRight: theme.spacing(2),
        boxShadow: 'none'
    },
    lastButton: {
        backgroundColor:'#FFFFFF',
        boxShadow: 'none'
    },
}));

export default BodyStyle;