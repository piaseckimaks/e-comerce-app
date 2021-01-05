import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import filterStyles from "../Styles/FilterStyles";

export default function NestedList() {
    const classes = filterStyles();
    const [brand, setBrand] = React.useState(false);
    const [model, setModel] = React.useState(false);
    const [size, setSize] = React.useState(false);
    

    const handleClickBrand = (e) => {
        setBrand(!brand);
    };

    const handleClickModel = (e) => {
        setModel(!model);
    };

    const handleClickSize = (e) => {
        setSize(!size);
    };


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" className={classes.title} id="nested-list-subheader">
          Filters
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClickBrand}>
        <ListItemText primary="Brand" />
        {brand ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={brand} timeout="auto" unmountOnExit>
        <FormGroup>
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Nike" />
        </FormGroup>
      </Collapse>

      <ListItem button onClick={handleClickModel}>
        <ListItemText primary="Model" />
        {model ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={model} timeout="auto" unmountOnExit>
        <FormGroup>
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Phantom GT" />
        </FormGroup>
      </Collapse>

      <ListItem button onClick={handleClickSize}>
        <ListItemText primary="Size" />
        {size ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={size} timeout="auto" unmountOnExit>
        <FormGroup>
            <FormControlLabel control={<Checkbox name="checkedA" />} label="41" />
            <FormControlLabel control={<Checkbox name="checkedB" />} label="41.5" />
            <FormControlLabel control={<Checkbox name="checkedC" />} label="42" />
            <FormControlLabel control={<Checkbox name="checkedD" />} label="42.5" />
            <FormControlLabel control={<Checkbox name="checkedE" />} label="43" />
        </FormGroup>
      </Collapse>
      
    </List>

    
  );
}
