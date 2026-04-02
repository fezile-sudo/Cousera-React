import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders
});

const DishWithId = (props) => {
  const { dishId } = useParams();
  return (
    <DishDetail
      dish={props.dishes.find((dish) => dish.id === parseInt(dishId, 10))}
      comments={props.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
    />
  );
};

class Main extends Component {
  state = { selectedDish: null };

  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId });
  };

  render() {
    const HomePage = () => (
      <Home
        dish={this.props.dishes.find((dish) => dish.featured)}
        promotion={this.props.promotions.find((promo) => promo.featured)}
        leader={this.props.leaders.find((leader) => leader.featured)}
      />
    );

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={<Menu dishes={this.props.dishes} onClick={this.onDishSelect} />} />
          <Route path="/menu/:dishId" element={<DishWithId dishes={this.props.dishes} comments={this.props.comments} />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/aboutus" element={<About leaders={this.props.leaders} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <DishDetail dish={this.props.dishes.find((dish) => dish.id === this.state.selectedDish)} />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);