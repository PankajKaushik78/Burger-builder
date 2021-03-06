import classes from "./SideDrawer.module.css";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {

  let assignedClasses = [classes.SideDrawer, classes.Close];
  if(props.open){
    assignedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closeSideDrawer} />
      <div className={assignedClasses.join(' ')} >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <hr/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  ); 
};

export default sideDrawer;