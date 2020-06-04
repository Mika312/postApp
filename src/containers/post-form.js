import React, { Component } from "react";
import { Link } from "react-router";
import { reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { connect } from "react-redux";
import { history } from "react-router";
const formConfig = {
  form: "createPostForm",
  fields: ["title", "content", "author"],
  validate: validateForm,
};

function validateForm(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Veuillez remplir le titre";
  }
  if (!values.content) {
    errors.content = "Veuillez remplir la description";
  }
  if (!values.author) {
    errors.author = "Veuillez remplir l'auteur";
  }
  return errors;
}

class PostForm extends Component {
  render() {
    const {
      fields: { title, content, author },
      handleSubmit,
      errors,
      invalid,
      history,
    } = this.props;
    console.log("this.props", this.props);
    const createPost = (post) => {
      this.props.createPost(post);
      history.push("/");
    };

    return (
      <div>
        <h1>Nouveau Post</h1>
        <form onSubmit={handleSubmit(createPost)}>
          <div
            className={`form-group ${
              title.touched && errors.title ? "has-danger" : ""
            }`}
          >
            <label>Titre</label>
            <input className="form-control" type="text" {...title} />
            <div>{title.touched && errors.title}</div>
          </div>
          <div
            className={`form-group ${
              content.touched && errors.content ? "has-danger" : ""
            }`}
          >
            <label>Description</label>
            <input className="form-control" type="textarea" {...content} />
            <div>{content.touched && errors.content}</div>
          </div>
          <div
            className={`form-group ${
              author.touched && errors.author ? "has-danger" : ""
            }`}
          >
            <label>Auteur</label>
            <input className="form-control" type="text" {...author} />
            <div>{author.touched && errors.author}</div>
          </div>
          <Link to={"/"} className="button-space">
            <button className="btn btn-danger">Retour</button>
          </Link>
          <button type="submit" className="btn btn-primary" disabled={invalid}>
            Créer
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(
  null,
  mapDispatchToProps
)(reduxForm(formConfig)(PostForm));
