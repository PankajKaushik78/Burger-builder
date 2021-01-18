import Aux from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {

  const orderList = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}} >{igKey}: </span> {props.ingredients[igKey]}
        </li>
      );
    });

  return (
    <Aux>
      <h3>Your order:</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>
        {orderList}
      </ul>
      <p><strong>Total Price: &#8377; {props.price.toFixed(2)}</strong></p>
      <p>Proceed to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled} >Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued} >Continue</Button>
    </Aux>
  );
};

export default orderSummary;