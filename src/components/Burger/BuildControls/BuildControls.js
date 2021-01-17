import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => {
      return <BuildControl 
        key={ctrl.label} 
        label={ctrl.label} 
        add={() => props.addIngredient(ctrl.type)}
        remove={() => props.removeIngredient(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}
        />
    })}
  </div>
);

export default buildControls;
