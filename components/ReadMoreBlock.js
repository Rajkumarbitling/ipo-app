import { Box, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'

const ReadMoreBlock = ({text}) => {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
  return (
    <>
    <Typography 
            variant='p' 
            className='text-textGray text-justify overflow-hidden relative'
            sx={{
              maxHeight: isMobile && !expanded ? '100px' : 'none',
            }}
          >
            {text}
            {isMobile && !expanded && (
              <Box 
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50px',
                  background: 'linear-gradient(transparent, white)',
                }}
              />
            )}
          </Typography>
          {isMobile && (
            <Button 
              onClick={() => setExpanded(!expanded)} 
              sx={{ alignSelf: 'flex-start', mt: 1, width: '100%' }}
              className='text-textOrange'
            >
              {expanded ? 'Read less' : 'Read more'}
            </Button>
          )}
    </>
  )
}

export default ReadMoreBlock