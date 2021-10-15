import React, { useState, useContext } from "react";
import { GifOutlined, Loyalty, Lock } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import Giphy from "./Giphy";
import { AuthContext } from "../context/State";

const ShareModal = ({ modals, closeModal }) => {
  const [gif, setGif] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const [post, setPost] = useState({
    text: "",
    gify: "",
  });

  // closing giphy component
  const closeGif = (close) => {
    setGif(close);
  };

  //setting up post text
  const handlePostText = (e) => {
    const { name, value } = e.target;

    setPost((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  // for setting gif in post
  const clickedGiphy = (giphy) => {
    setPost((pre) => ({
      ...pre,
      gify: giphy,
    }));
  };

  // for submitting the post
  const handleSubmit = (e) => {
    
    e.preventDefault();

    // dispatch to action
    dispatch({ type: "post", payload: post });
    // closing share modal
    closeModal(false);

    // reset post state content
    setPost({
      text: "",
      gify: "",
    });
  };

  return (
    <>
      {modals && (
        <div className="share-modal shadow p-2" id="myModal">
          <div className="share-modal-dialog" role="document">
            <div className="share-modal-content">
              <div className="share-modal-header d-flex align-items-center">
                <h4 className="share-modal-title mx-auto fw-bold">
                  Create Post
                </h4>
                <button
                  type="button"
                  aria-label="Close"
                  className="share-modal_close"
                  onClick={() => closeModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="share-modal-body ">
                <div className="body_top d-flex align-items-center mb-3">
                  <Avatar alt="profile" src="/images/profile.jpg" />
                  <input
                    placeholder="What's on your mind, Bushra?"
                    className="shareInput ms-2 px-3 py-2 flex-grow-1"
                    name="text"
                    value={post.text}
                    onChange={handlePostText}
                  />
                </div>
                <div className="body_bottom d-flex align-items-center justify-content-between">
                  <button
                    className="modal_icon_container d-flex align-items-center"
                    onClick={() => setGif(true)}
                  >
                    <GifOutlined className="text-secondary" />
                    <span className="ms-1">GIF</span>
                  </button>
                  <button className="modal_icon_container d-flex align-items-center">
                    <Loyalty className="text-secondary" />
                    <span className="ms-1">Tag Friends</span>
                  </button>
                </div>
              </div>

              <div className="share-modal-footer d-flex align-items-center justify-content-end my-2">
                <button
                  type="button"
                  className="btn btn-secondary d-flex align-items-center modal_buttons"
                >
                  <Lock />
                  <span>Only Me</span>
                </button>
                {post.text || post.gify ? (
                  <button
                    type="submit"
                    className="btn btn-primary modal_buttons"
                    onClick={handleSubmit}
                  >
                    Post
                  </button>
                ) : 
                (
                  <button type="text" className="btn btn-disable modal_buttons">
                    Post
                  </button>
                )
                }
              </div>
            </div>
          </div>
        </div>
      )}

      <Giphy gify={gif} closeGif={closeGif} clickedGiphy={clickedGiphy} />
    </>
  );
};

export default ShareModal;
