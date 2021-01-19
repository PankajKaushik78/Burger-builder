import Aux from '../../hoc/Auxillary';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { Component } from 'react';

class Layout extends Component{

  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  render(){
    return (
      <Aux>
        <SideDrawer open={this.state.showSideDrawer} closeSideDrawer={this.sideDrawerClosedHandler} />
        <Toolbar />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default Layout;