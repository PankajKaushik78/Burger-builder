import { Component } from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE = {
  salad: 5,
  bacon: 10,
  meat: 20,
  cheese: 15
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    price: 10,
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  updatePurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((currSum, el) => currSum+el ,0);
    
    this.setState({purchasable: sum>0});
  };

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const newIngredients = {
      ...this.state.ingredients
    };
    newIngredients[type] = newCount;
    const newPrice = this.state.price + INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: newIngredients,
      price: newPrice
    });
    this.updatePurchasable(newIngredients);
  };

  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] >= 1){
      const newCount = this.state.ingredients[type] - 1;
      const newIngredients = {
        ...this.state.ingredients
      };
      newIngredients[type] = newCount;
      const newPrice = this.state.price - INGREDIENTS_PRICE[type];
      this.setState({
        ingredients: newIngredients,
        price: newPrice
      });
      this.updatePurchasable(newIngredients);
    }
  };

  purchasingHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelledHandler = () => {
    this.setState({purchasing:false});
  };

  purchaseContinuedHandler = () => {
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: 'Pankaj',
        address: {
          street: 'Test street'
        },
        email: 'test@test.com'
      },
      deliveryOption: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(response => {
        console.log("Order successful!");
        this.setState({loading:false, purchasing: false});
      })
      .catch(error => {
        console.log("Order failed!");
        this.setState({loading:false, purchasing: false});
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let el in disabledInfo){
      disabledInfo[el] = disabledInfo[el] <= 0;
    }

    let orderSummary = (
      <OrderSummary 
        ingredients={this.state.ingredients}
        price={this.state.price}
        purchaseCancelled={this.purchaseCancelledHandler}
        purchaseContinued={this.purchaseContinuedHandler} />
    );
    
    if(this.state.loading){
      orderSummary = <Spinner />;
    }
    
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancelledHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.price}
          purchasable={this.state.purchasable}
          purchasingOrder={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
