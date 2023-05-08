import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  Slider,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";

import Bird from "../../assets/bird.jpg";
import CommonButton from "../Button/CommonButton";
import { background } from "@chakra-ui/react";
import { AccountCircle, AccountCircleOutlined } from "@mui/icons-material";

import { commentStyles } from "./comment/comment.styles";

import { useDispatch } from "react-redux";
import { setUserComments } from "../../store/slices/CommentSlice";
import useCommentsContext from "./hooks/use-comment-context";

const CommentField = ({ handleSubmit, post }) => {
  const { classes } = commentStyles();
  const [input, setInput] = useState();
  const {createComment} = useCommentsContext()
  const currentUserId = useSelector((state) => {
    return state.userDataReducer[0].data.user.id;
  });

  const userToken = localStorage.getItem("token");
  const dispatch = useDispatch();

 

  let data = JSON.stringify({
    body: input,
    userId: currentUserId,
    postId: post.id,
  });
 

  const handleAddComment = async(e) => {
    e.preventDefault();
    await createComment(data)
    setInput("");
  };

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userProfilePicture = userDetails.data.user.profilePicture;

  return (
    <Box className={classes.commentBoxStyles}>
      <form onSubmit={handleAddComment}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              className={classes.commentInput}
              label="Add comment"
              variant="outlined"
              multiline
              maxRows={5}
              value={input}
              fullWidth
              onChange={(e) => {
                setInput(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar src={userProfilePicture}></Avatar>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <CommonButton
              variant="contained"
              type="submit"
              buttonStyles={{
                width: "100%",
                margin: "0.5rem 0rem 1.5rem 0rem",
              }}
              
            >
              Comment
            </CommonButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CommentField;
