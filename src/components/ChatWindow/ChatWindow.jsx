import React from "react";
import { IconButton, Avatar, Paper, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { ChatStyles } from "./chatWindow.styles";
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { useSelector } from "react-redux";

const ChatWindow = ({ selectedChat, displayChat, setDisplayChat, recUser }) => {
  const { classes } = ChatStyles();

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userId = userDetails.data.user.id;

  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    const today = new Date();
    setDisplayChat([
      ...displayChat,
      {
        senderId: userId,
        receiverId: recUser.id,
        body: currentMessage,
        createdAt:
          today.getFullYear() +
          ":" +
          (today.getMonth() + 1) +
          ":" +
          today.getDate() +
          ":" +
          today.getHours() +
          ":" +
          today.getMinutes(),
      },
    ]);

    socket.emit("message", {
      senderId: userId,
      receiverId: recUser.id,
      body: currentMessage,
    });
    setCurrentMessage([]);
  };
  socket.on("receive", (chat) => {
    if (recUser.id === chat.senderId) {
      setDisplayChat([...displayChat, chat]);
    } else {
      console.log(chat);
    }
  });
  return (
    <Box className="containers">

      {
        selectedChat ?(
          <Paper
        elevation={3}
        className={ classes.ChatWindow }
      >
        <Box className={classes.chatHeader}>
          <Box className={classes.userName}>
            <Avatar
              className={classes.avatar}
              alt=""
              src={recUser.profilePicture}
            ></Avatar>
            <Typography sx={{ fontWeight: "medium" }} variant="h5">
              {recUser.firstName + " " + recUser.lastName}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.chatBody}>
          <Box className={classes.messageContainer}>
            {displayChat.map((msg) => {
              return (
                <Box
                  className={
                    userId === msg.senderId
                      ? classes.messageSender
                      : classes.messageReceiver
                  }
                  key={msg.id}
                >
                  <Box
                    className={
                      userId === msg.senderId
                        ? classes.messageContent
                        : classes.messageContent1
                    }
                  >
                    <Typography className={classes.msg}>{msg.body}</Typography>

                    <Typography className={classes.time}>
                      {msg.createdAt.split(":")[3] +
                        ":" +
                        msg.createdAt.split(":")[4]}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <div className={classes.chatFooter}>
          <input
            className={classes.input}
            type="text"
            placeholder="Enter The Message"
            value={currentMessage}
            onChange={(e) => {
              setCurrentMessage(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMessage();
            }}
          />

          <IconButton className={classes.send} onClick={sendMessage}>
            <SendIcon color="#fff"></SendIcon>
          </IconButton>
        </div>
      </Paper>
        ):( <Box className={classes.picture}>
          
          <img src="https://chatkr.com/static/img/homepage_2.png" alt="" className={classes.pic} />
        </Box>)
      }     
    </Box>
  );
};

export default ChatWindow;