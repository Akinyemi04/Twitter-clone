import {configureStore, createSlice} from '@reduxjs/toolkit'

const LoginSlice=createSlice({
    name:'Login',
    initialState:{
        display:'block',
        email:null,
        password:null,
        signupDisplay:'none',
        error: null,
        info:null
    },
    reducers:{
        fill(state,){
            return{
                ...state,
                display:'none'
            }
        },
        full(state){
            return{
                ...state,
                display:'block'
            }
        },
        auth(state,action){
            return{
                ...state,
                email:action.payload            
            }
        },
        pass(state,action){
            return{
                ...state,
                password:action.payload
            }
        },
        display(state){
            return{
                ...state,
                signupDisplay:'block'
            }
        },
        nodisplay(state){
            return{
                ...state,
                signupDisplay:'none'
            }
        },
        fixerror(state,action){
            return{
                ...state,
                error:action.payload
            }
        },
        Information(state,action){
            return{
                ...state,
                info:action.payload
            }
        }
    }

})
const FeedSlice = createSlice({
    name:'Feed',
    initialState:{
        data:[],
        message:null,
        homecolor: '#50b7f5',
        explore:'black'
    },
    reducers:{
        pop(state,action){
            return{
                ...state,
                data:action.payload
            }
        },
        tweet(state,action){
            return{
                ...state,
                message:action.payload
            }
        },
        empty(state){
            return{
                ...state,
                message:null
            }
        },
        homecoloring(state){
            return{
                ...state,
                homecolor:'#50b7f5',
                explore:'black'
            }
        },
        exploring(state){
            return{
                ...state,
                homecolor:'black',
                explore:'#50b7f5'
            }
        }
    }
})

export const login = LoginSlice.actions
export const feed = FeedSlice.actions
const store = configureStore({reducer:{
    Login:LoginSlice.reducer,
    Feed:FeedSlice.reducer,
}})
export default store