import { Box, Dialog, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import TextInput from '../../common/components/TextInput'
import CommonButton from '../../common/components/Button'
import { useDispatch } from 'react-redux'
import { addTodo, getTodoByUser, updateTodo } from '../../store/slice/todoSlice'

export default function AddUpdateTodoModal({onClose,visible,isUpdate=false,todo}) {

    const dispatch = useDispatch();
    const [title,setTitle] = useState(isUpdate ? todo.title : '');
    const [description,setDescription] = useState(isUpdate ? todo.description : '');

    const isValidFields = title && description;

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
        dispatch(getTodoByUser());
        onClose();
    }

    const handleUpdateTodo = ()=>{
        const updatedTodo = {
            id:todo.id,
            title:title,
            description:description
        }
        dispatch(updateTodo(updatedTodo));
        dispatch(getTodoByUser());
        onClose();
    }
  return (
    <Dialog onClose={onClose} open={visible} maxWidth={"lg"} sx={{margin:"10px"}}>
        <Box sx={{margin:'10px'}}>
            <DialogTitle>{isUpdate? "Update Todo" : "New Todo"}</DialogTitle>
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
                    name={isUpdate ? "Update" : "Save"}
                    fullWidth
                    onClick={isUpdate ? handleUpdateTodo : handleSaveTodo}
                    disabled={!isValidFields}
                />
            </Box>
         </Box>

    </Dialog>
  )
}
