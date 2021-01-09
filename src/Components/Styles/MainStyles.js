import {makeStyles} from '@material-ui/core';

const mainStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5vh 0',
        padding: '2vh 10vh'
    },
    root: {
        maxWidth: 345,
      },
    img: {
        width: '100%',
        height: '100%',
        margin: '0 auto'
    },
    mainPic: {
        height: '90vh',
        margin: '0 0 10vh 0',
        overflow: 'hidden'
    },
    title: {
        fontSize: '7.5vh',
        textAlign: 'center',
        margin: '3vh 0',
        fontVariant: 'small-caps',
        textTransform: 'uppercase',
    },
    price: {
        fontSize: '3vh',
        textAlign: 'center',
        margin: '0 auto',
        height: 35
    },
    header: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    description: {
        minHeight: 40,
        maxHeight: 40,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
});

export default mainStyles;