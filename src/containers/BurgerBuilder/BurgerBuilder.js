import { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
    price: 10
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
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let el in disabledInfo){
      disabledInfo[el] = disabledInfo[el] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
