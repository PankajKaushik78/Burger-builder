import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = props => (
  <div className={classes.Logo} >
    <img src={burgerLogo} alt="The Burger Builder" />
  </div>
);

export default logo;