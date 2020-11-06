import { makeStyles } from '@material-ui/core/styles';

const FooterStyle = makeStyles((theme) => ({
  bar: {
    backgroundColor: '#333333',
    flexGrow: 1,
    position: 'static'
  },
  orange: {
    color: '#FF8700',
  },
  orangeText: {
    color: '#FF8700',
    fontFamily: 'Audiowide',
    fontWeight: '400',
    marginLeft: theme.spacing(1),
  },
  tv: {
    color: '#666666',
    marginLeft: theme.spacing(10),
  },
  tvText: {
    color: '#E9E9E9',
    fontWeight: '500',
    marginLeft: theme.spacing(1),
  },
  update: {
    color: '#666666',
    marginLeft: theme.spacing(5),
  },
  updateText: {
    color: '#E9E9E9',
    fontStyle: 'italic',
    flexGrow: 1,
    fontWeight: '400',
    marginLeft: theme.spacing(1),
  },
  date: {
    color: '#E9E9E9',
    fontStyle: 'italic',
    fontWeight: '300',
  },
  clock: {
    color: '#FF8700',
    fontFamily: 'Audiowide',
    fontWeight: '400',
    marginLeft: theme.spacing(3),
  },
}));

export default FooterStyle;