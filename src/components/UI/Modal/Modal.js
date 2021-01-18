import classes from "./Modal.module.css";
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxillary';

const modal = props => (
  <Aux>
    <Backdrop 
      show={props.show}
      clicked={props.modalClose} />
    <div 
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'transformY(-100vh)',
        display: props.show ? 'block' : 'none'
      }}>
      {props.children}
    </div>
  </Aux>
);

export default modal;