import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, CardText, CardTitle,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input
} from 'reactstrap';

/* ================= COMMENT FORM ================= */
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            author: '',
            comment: '',
            rating: 5
        };
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(
            this.props.dishId,
            this.state.rating,
            this.state.author,
            this.state.comment
        );
        this.toggleModal();
        this.setState({ author: '', comment: '', rating: 5 });
    };

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggleModal}>
                    Add Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Add Comment
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="rating">Rating</Label>
                                <Input
                                    type="select"
                                    id="rating"
                                    value={this.state.rating}
                                    onChange={(e) => this.setState({ rating: e.target.value })}
                                >
                                    {[1,2,3,4,5].map(r => <option key={r}>{r}</option>)}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="author">Your Name</Label>
                                <Input
                                    type="text"
                                    id="author"
                                    value={this.state.author}
                                    onChange={(e) => this.setState({ author: e.target.value })}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="comment">Comment</Label>
                                <Input
                                    type="textarea"
                                    id="comment"
                                    value={this.state.comment}
                                    onChange={(e) => this.setState({ comment: e.target.value })}
                                />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

/* ================= RENDER COMMENTS ================= */
class RenderComments extends Component {
    render() {
        const { comments, addComment, dishId } = this.props;

        if (!comments) return <div></div>;

        const cmnts = comments.map(c => (
            <li key={c.id}>
                <p>{c.comment}</p>
                <p>
                    -- {c.author},{" "}
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(c.date))}
                </p>
            </li>
        ));

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">{cmnts}</ul>
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );
    }
}

/* ================= RENDER DISH ================= */
class RenderDish extends Component {
    render() {
        const { dish } = this.props;
        if (!dish) return <div></div>;

        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle tag="h5">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

/* ================= DISH DETAIL PAGE ================= */
class DishDetail extends Component {
    render() {
        const { dish, comments, addComment } = this.props;
        if (!dish) {
            return <div className="container"><h4>Dish not found</h4></div>;
        }

        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={dish} />
                    <RenderComments comments={comments} addComment={addComment} dishId={dish.id} />
                </div>
            </div>
        );
    }
}

export default DishDetail;