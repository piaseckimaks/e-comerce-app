import {makeStyles} from '@material-ui/core';

const filterStyles = makeStyles((theme) => ({
    root: {
      width: '25vh',
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    title: {
        textAlign: 'center'
    },
    brands: {
        fontSize: '2px'
    }
  }));

export default filterStyles; 