import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {getProductThunk,setValueProduct} from './products.slice'

export const userSlice = createSlice({
    name: 'user',
    initialState: '',
    reducers: {
        setValue:(state,action) =>{
            return action.payload
        }
        // setValue:(state,action) =>action.payload
    }
})

export const { setValue } = userSlice.actions;

export default userSlice.reducer;

export const getUserThunk = (data) => (dispatch) =>{
    const URL ="http://localhost:3001/users/auth"
    return axios.post(URL,data)
    .then(res =>{
        console.log(res.data)
        const data =res.data
        sessionStorage.setItem('usuario', JSON.stringify(data.user));
        const address=data.user.adress
        const email=data.user.email
        const id=data.user.id
        const image=data.user.image
        const name=data.user.name
        const points=data.user.points
        const role=data.user.role
        if(data.orderSales!==0){
            let orderSales=data.user.orderSales.ammount
            let cant=data.user.orderSales.items_q
            dispatch(setValueProduct({cant}))
            dispatch(setValue({id,name,email,points,role,address,orderSales,cant,image}))
        }else{
            dispatch(setValueProduct({cant:0}))
            dispatch(setValue({id,name,email,points,role,address,orderSales:0,cant:0,image}))
        }
    
    })
    .catch( e=> console.log(e))
}

