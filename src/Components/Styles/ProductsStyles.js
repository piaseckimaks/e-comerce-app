import {makeStyles} from '@material-ui/core';

const productsStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '5vh 0',
        padding: '2vh 10vh'
    },
    root: {
        maxWidth: 345,
        margin: '2vh 2vw'
      },
    img: {
        width: '100%',
        height: '100%'
    },
    mainPic: {
        height: '75vh',
        margin: '6vh 0'
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

export default productsStyles;