import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; //reduxForm similar to connect from redux
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta } = field;
        return (
        <div className={`form-group ${meta.touched && meta.error ? 'has-danger':''}`}>
            <label>{field.label}</label>
            <input className="form-control" type="text" { ...field.input } />
            <div className="text-help">
                { meta.touched ? meta.error: '' }
            </div>
        </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/'); // this because index.js pass this component to Route
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="contents" label="Post Content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Please enter a title!";
    }

    if(!values.categories) {
        errors.categories = "Please enter a categories";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'  // name of the form, have to be unique
                          // if other js files have same name forms, will be combined together
})(
    connect(null, { createPost })(PostsNew)
);
