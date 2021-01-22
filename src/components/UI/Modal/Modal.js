import React, {Component} from 'react';
import classes from "./Modal.module.css";
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxillary/Auxillary';

class Modal extends Component{

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.show !== this.props.show;
  };

  render(){
    return(
      <Aux>
      <Backdrop 
        show={this.props.show}
        clicked={this.props.modalClose} />
      <div 
        className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' : 'transformY(-100vh)',
          display: this.props.show ? 'block' : 'none'
        }}>
        {this.props.children}
      </div>
    </Aux>
    );
  }
}

export default Modal;