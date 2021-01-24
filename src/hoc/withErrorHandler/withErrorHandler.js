import { Component } from "react";
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxillary/Auxillary';

const withErrorHandler = (WrappedComponent, axios) => { //here withErrorHandler is just a function and not a react component
  return class extends Component{

    state = {
      error: null
    }

    componentDidMount () {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req
      })
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    };

    errorConfirmHandler = () => {
      this.setState({error: null});
    };

    render(){
      return (
        <Aux>
          <Modal 
            show={this.state.error}
            modalClose={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  };
};

export default withErrorHandler;