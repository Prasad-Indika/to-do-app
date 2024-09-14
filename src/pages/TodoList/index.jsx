import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TodoHeader from '../../components/TodoHeader';
import CommonButton from '../../common/components/Button';
import { Box, Card } from '@mui/material';
import AddUpdateTodoModal from '../../components/AddUpdateTodoModal';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem';
import { deleteTodo, getTodoByUser } from '../../store/slice/todoSlice';

export default function TodoList() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isAddModalVisible,setIsAddModalVisible] = useState(false);
    const [isUpdateModalVisible,setIsUpdateModalVisible] = useState(false);
    const [selectedTodo,setSelectedTodo] = useState({});
    const todoData = useSelector((state)=>state.todoSlice.todoByUser)

    const handleDeleteTodo = (id)=>{
        dispatch(deleteTodo(id));
        dispatch(getTodoByUser())
    }

    const handleEditTodo = (todo)=>{
        setSelectedTodo(todo);
        setIsUpdateModalVisible(true);
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
                <Box sx={{display:'flex' ,justifyContent:'end',margin:'10px'}}>
                    <CommonButton
                        name={'New Todo'}
                        onClick={()=>{setIsAddModalVisible(true)}}
                    />
                </Box>
                <Box sx={{display:'flex', flexWrap:'wrap' ,justifyContent:'space-between',margin:'10px'}}>
                    {todoData?.map((todo)=>(
                        <TodoItem 
                            todo={todo} 
                            deleteTodo={()=>{handleDeleteTodo(todo.id)}}
                            editTodo={()=>{handleEditTodo(todo)}}
                        /> 
                    ))}
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
