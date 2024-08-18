'use client'
import React from 'react'
import shadows from '@material-ui/core/styles/shadows';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

const NewIconButton = styled(IconButton)(({theme}) => ({
    [`&.MuiIconButton-root`]: {
      border: `2px solid ${theme.palette.secondary.main}`,
      borderRadius: '.6rem',
    },
}));

const StyledIconButton = ({children, ...props}) => {
    const router = useRouter()
  return (
    <NewIconButton type='button' size='small' onClick={() => router.back()} shadows={shadows}  {...props} >
        {children}
    </NewIconButton>
  )
}

export default StyledIconButton