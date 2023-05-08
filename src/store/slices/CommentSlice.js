import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice(
    {
        name:'userComments',
        initialState:[],
        reducers:{
            setUserComments(state, action){
                state.push(action.payload);
            },
            resetInitialState(state){
                return state = [];
            },
            increasePostComments(state, action){
                state.map((post)=>{
                    if(post.postId == action.payload.postId){
                        post.currentCommentsCount = post.currentCommentsCount + 1;
                    }
                });
            },
            decreasePostComments(state, action){
                state.map((post)=>{
                    if(post.postId == action.payload.postId){
                        post.currentCommentsCount = post.currentCommentsCount - 1;
                    }
                });
            },
        }
    }
);

export const { setUserComments, resetInitialState, increasePostComments, decreasePostComments } =  commentSlice.actions;
export default commentSlice;