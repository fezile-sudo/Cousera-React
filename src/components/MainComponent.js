import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId });
  };

  render() {
    const HomePage = () => <Home />;

    return (
      <div>
        <Header />
        <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/menu" element={<Menu dishes={this.state.dishes} onClick={this.onDishSelect} />} />
              <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <DishDetail
          dish={this.state.dishes.find(
            (dish) => dish.id === this.state.selectedDish
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;