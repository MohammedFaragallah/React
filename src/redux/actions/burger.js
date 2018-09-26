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

const setIngredients = ingredients => {
  return {
    type: SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get('https://followreact.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
