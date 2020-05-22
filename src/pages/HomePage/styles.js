import { makeStyles } from '@material-ui/core/styles';

const centeredStyleObj = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    flexDirection: 'column',
    ...centeredStyleObj
  },
  cardContainer: {
    width: 400,
    height: 200,
    padding: '2rem',
    flexDirection: 'column',
    ...centeredStyleObj
  },
  titleGridContainer: { ...centeredStyleObj },
  title: { fontSize: '4rem' },
  movieIcon: { fontSize: '4rem' },
  textField: { width: '90%' },
  buttonsGridContainer: { marginTop: '.5rem' },
  searchButton: { marginLeft: '.5rem' }
}));

export default useStyles;
