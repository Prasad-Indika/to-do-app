import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TodoHeader from '../../components/TodoHeader';
import CommonButton from '../../common/components/Button';
import { Box, Card } from '@mui/material';
import AddUpdateTodoModal from '../../components/AddUpdateTodoModal';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import { deleteTodo, getTodoByUser, updateStatus } from '../../store/slice/todoSlice';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TodoList() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isAddModalVisible,setIsAddModalVisible] = useState(false);
    const [isUpdateModalVisible,setIsUpdateModalVisible] = useState(false);
    const [selectedTodo,setSelectedTodo] = useState({});
    const todoCompletedData = useSelector((state)=>state.todoSlice.todoCompleted)
    const todoNotCompletedData = useSelector((state)=>state.todoSlice.todoNotCompleted)

    const [status, setStatus] = useState('0');

    const handleChange = (event) => {
      setStatus(event.target.value);
    };

    const handleDeleteTodo = (id)=>{
        dispatch(deleteTodo(id));
        dispatch(getTodoByUser())
    }

    const handleEditTodo = (todo)=>{
        setSelectedTodo(todo);
        setIsUpdateModalVisible(true);
    }

    const updateCompleteStatus = (id)=>{
        dispatch(updateStatus(id))
        dispatch(getTodoByUser())
    }

    useEffect(()=>{
        dispatch(getTodoByUser());
    },[])
   
  return (
    <Box sx={{display:'flex',flexDirection:'column',height:'100vh'}}>
        <Box>
            <TodoHeader/>
        </Box>
        <Box sx={{flexGrow:1}}>
            <Card sx={{margin:'5px',height:'100%'}}>
                <Box sx={{display:'flex' ,justifyContent:'space-between',margin:'10px'}}>

                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Status"
                                onChange={handleChange}
                            >
                                <MenuItem value={"0"}>Not Completed</MenuItem>
                                <MenuItem value={"1"}>Completed</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <CommonButton
                        name={'New Todo'}
                        onClick={()=>{setIsAddModalVisible(true)}}
                    />
                </Box>
                <Box sx={{display:'flex', flexWrap:'wrap' ,justifyContent:'space-between',margin:'10px'}}>

                    {status === '0' ? 
                        todoNotCompletedData?.map((todo)=>(
                            <TodoItem 
                                todo={todo} 
                                deleteTodo={()=>{handleDeleteTodo(todo.id)}}
                                editTodo={()=>{handleEditTodo(todo)}}
                                todoComplete={()=>{updateCompleteStatus(todo.id)}}
                            /> 
                        )) 
                        
                        :

                        todoCompletedData?.map((todo)=>(
                            <TodoItem 
                                todo={todo} 
                                deleteTodo={()=>{handleDeleteTodo(todo.id)}}
                                editTodo={()=>{handleEditTodo(todo)}}
                            /> 
                        )) 
                    }   
                   
                </Box>
            </Card>
        </Box>
        { isAddModalVisible && 
            <AddUpdateTodoModal
                visible={isAddModalVisible}
                onClose={()=>{setIsAddModalVisible(false)}}
            />
        }
        { isUpdateModalVisible && 
            <AddUpdateTodoModal
                visible={isUpdateModalVisible}
                onClose={()=>{setIsUpdateModalVisible(false)}}
                isUpdate={true}
                todo={selectedTodo}
            />
        }
    </Box>
  )
}
