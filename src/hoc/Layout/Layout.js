import Aux from '../Auxillary/Auxillary';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { Component } from 'react';

class Layout extends Component{

  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true});
  };

  render(){
    return (
      <Aux>
        <SideDrawer open={this.state.showSideDrawer} closeSideDrawer={this.sideDrawerClosedHandler} />
        <Toolbar showSideDrawer={this.sideDrawerOpenHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default Layout;