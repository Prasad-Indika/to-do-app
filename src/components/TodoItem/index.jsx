import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../../common/components/Button'

export default function TodoItem({todo,deleteTodo,editTodo}) {
  return (
    <Card sx={{margin:'5px'}}>
        <CardContent>
            <Typography variant="h4" style={{ color:'#167bf0' }}>
                {todo.title}
            </Typography>
            <Typography variant='body2'>
                {todo.description}
            </Typography>
        </CardContent>
        <CardActions>
            <CommonButton
                circular={true}
                variant={'outline'}
                name={"Edit"}
                onClick={editTodo}
            />
            <CommonButton
                circular={true}
                variant={'outline'}
                name={"Delete"}
                onClick={deleteTodo}
            />
        </CardActions>

    </Card>
  )
}
