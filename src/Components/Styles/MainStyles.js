import {makeStyles} from '@material-ui/core';

const mainStyles = makeStyles({
    container: {
    },
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
        height: '92vh',
        margin: '0 0 5vh 0',
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
        fontSize: '2.5vh',
        textAlign: 'center',
        margin: '0 auto',
        height: 35,
        color: 'whitesmoke',
        backgroundColor: '#3F51B5',
        fontWeight: 300
    },
    header: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: 300
    },
    description: {
        minHeight: 40,
        maxHeight: 40,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: 'whitesmoke',
        fontWeight: 300
    },
    productTitle: {
        color: 'whitesmoke',
        fontSize: '4vh',
        backgroundColor: '#3F51B5',
        fontWeight: 300,
        padding: '0 0.25vw'
    },
    cardContent: {
        backgroundColor: '#3F51B5',
        color: 'whitesmoke',
        opacity: '0.9'
    }
});

export default mainStyles;