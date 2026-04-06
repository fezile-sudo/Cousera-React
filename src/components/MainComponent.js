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
import { addComment } from '../redux/ActionCreators';

/* ================= MAP STATE & DISPATCH ================= */
const mapStateToProps = state => ({
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
});

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

/* ================= DISH WITH ID ================= */
const DishWithId = (props) => {
    const { dishId } = useParams();
    const id = parseInt(dishId, 10);
    const dish = props.dishes.find(d => d.id === id);
    const comments = props.comments.filter(c => c.dishId === id);

    return <DishDetail dish={dish} comments={comments} addComment={props.addComment} />;
};

/* ================= MAIN COMPONENT ================= */
class Main extends Component {
    render() {
        const HomePage = () => (
            <Home
                dish={this.props.dishes.find(d => d.featured)}
                promotion={this.props.promotions.find(p => p.featured)}
                leader={this.props.leaders.find(l => l.featured)}
            />
        );

        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" element={
                        <DishWithId
                            dishes={this.props.dishes}
                            comments={this.props.comments}
                            addComment={this.props.addComment}
                        />
                    } />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/aboutus" element={<About leaders={this.props.leaders} />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
