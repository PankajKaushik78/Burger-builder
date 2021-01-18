import Aux from "../../../hoc/Auxillary";

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
      <p>Proceed to checkout?</p>
    </Aux>
  );
};

export default orderSummary;