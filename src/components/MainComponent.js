import React, { useState } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

const Main = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <div>
    <Header /> 
     
      <Menu dishes={dishes} onClick={onDishSelect} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />

    <Footer /> 
    </div>
  );
};

export default Main;