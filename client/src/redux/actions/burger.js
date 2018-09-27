// import axios from '../../Components/BurgerBuilder/axios-orders';
import axios from 'axios';
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
} from './actionTypes';

export const addIngredient = name => ({
  type: ADD_INGREDIENT,
  ingredientName: name,
});

export const removeIngredient = name => ({
  type: REMOVE_INGREDIENT,
  ingredientName: name,
});

const setIngredients = ingredients => ({
  type: SET_INGREDIENTS,
  ingredients,
});

const fetchIngredientsFailed = () => ({
  type: FETCH_INGREDIENTS_FAILED,
});

export const initIngredients = () => dispatch => {
  axios
    .get('https://followreact.firebaseio.com/ingredients.json')
    .then(response => {
      dispatch(setIngredients(response.data));
    })
    .catch(err => {
      dispatch(fetchIngredientsFailed(err));
    });
};
