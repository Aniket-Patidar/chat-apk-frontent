import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userReducer',
    initialState: {
        userInfo: {
            id: "",
            name: "",
            email: "",
            avatar: "",
            dec: ""
        },
        error: null,
        allChat: false,
        CurrentChatUser: undefined,
        chat: [],
        socket: undefined
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        getallChat: (state, action) => {
            state.allChat = action.payload;
        },
        setCurrentChatUser: (state, action) => {
            state.CurrentChatUser = action.payload;
        },
        setChat: (state, action) => {
            state.chat = action.payload;
        },
        setSocket: (state, action) => {
            state.socket = action.payload;
        },
        setNewChat: (state, action) => {
            state.chat.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUserInfo, setError, getallChat, setCurrentChatUser, setChat, setSocket,setNewChat } = userSlice.actions

export default userSlice.reducer