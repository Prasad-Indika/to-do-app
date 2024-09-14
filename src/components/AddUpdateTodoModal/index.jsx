import { Box, Dialog, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import TextInput from '../../common/components/TextInput'
import CommonButton from '../../common/components/Button'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/slice/todoSlice'

export default function AddUpdateTodoModal({onClose,visible}) {

    const dispatch = useDispatch();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleSaveTodo = ()=>{
        const id = Math.floor(Math.random()*900) + 100
        const user = localStorage.getItem('user');
        const newTodo = {
            id:id,
            user:user,
            title:title,
            description:description,
            status:'NotComplete'
        } 
        dispatch(addTodo(newTodo));
        onClose();
    }
  return (
    <Dialog onClose={onClose} open={visible} maxWidth={"lg"} sx={{margin:"10px"}}>
        <Box sx={{margin:'10px'}}>
            <DialogTitle>New Todo</DialogTitle>
            <Box sx={{margin:'10px'}}>
                <TextInput
                    placeholder={"Title"}
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
            </Box>
            <Box sx={{margin:'10px'}}>
                <TextInput
                    placeholder={"Description"}
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
            </Box>
            <Box sx={{margin:'10px'}}>
                <CommonButton
                    name={"Save"}
                    fullWidth
                    onClick={()=>{handleSaveTodo()}}
                />
            </Box>


         </Box>

    </Dialog>
  )
}
