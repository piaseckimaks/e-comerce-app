import {makeStyles} from '@material-ui/core';

const signUpStyles = makeStyles((theme) => ({
    paper: {
      width: '40vh',
      margin: '0 auto',
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    input: {
      margin: '0.5vh 0'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link: {
        cursor: 'pointer'
    }
  }));

  export default signUpStyles;