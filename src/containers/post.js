import React, { Component } from "react";
import PostContent from "../components/post-content";
import { connect } from "react-redux";
import { readPost } from "../actions/index";

class Post extends Component {
  componentDidMount() {
    this.props.readPost(this.props.params.id);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        Post numéro: {this.props.params.id}
        <PostContent post={post} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.activePost,
  };
}

const mapDispatchToProps = {
  readPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
