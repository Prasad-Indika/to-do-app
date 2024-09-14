import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TodoHeader from '../../components/TodoHeader';
import CommonButton from '../../common/components/Button';
import { Box, Card } from '@mui/material';
import AddUpdateTodoModal from '../../components/AddUpdateTodoModal';
import { useSelector } from 'react-redux';

export default function TodoList() {

    const navigate = useNavigate()
    const [visible,setVisible] = useState(false);
    const todoData = useSelector((state)=>state.todoSlice.data)
   

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
                        onClick={()=>{setVisible(true)}}
                    />
                </Box>
                <Box sx={{display:'flex' ,justifyContent:'space-between',margin:'10px'}}>
                    
                </Box>
            </Card>
        </Box>
        { visible && 
            <AddUpdateTodoModal
                visible={visible}
                onClose={()=>{setVisible(false)}}
            />
        }
    </Box>
  )
}
