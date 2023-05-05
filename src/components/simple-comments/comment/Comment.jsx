import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { commentStyles } from "./comment.styles";

import useCommentsContext from "../hooks/use-comment-context";
import { useSelector } from "react-redux";

const Comment = ({ comment }) => {
  const user = useSelector((state) => {
    return state.userDataReducer[0].data.user;
  });
  console.log(user);
  const { classes } = commentStyles();
  const { deleteCommentById } = useCommentsContext();
  const handleDelete = () => {
    deleteCommentById(comment.id);
  };

  return (
    <Card className={classes.commentTopCardStyles}>
      <CardHeader
        avatar={<Avatar>{comment?.profilePicture}</Avatar>}
        action={
          <IconButton onClick={handleDelete}>
            <DeleteIcon className={classes.deleteIconStyles} />
          </IconButton>
        }
        title={`${
          comment?.user?.firstName ? comment?.user?.firstName : user.firstName
        } ${comment?.user?.lastName ? comment?.user?.lastName : user.lastName}`}
        subheader={comment?.createdAt}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment?.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;