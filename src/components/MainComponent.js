import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Routes, Route, Navigate } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId });
  };

  render() {
    const HomePage = () => <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
              />;

    return (
      <div>
        <Header />
        <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/menu" element={<Menu dishes={this.state.dishes} onClick={this.onDishSelect} />} />
              <Route path="/contactus" element={<Contact />} />
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