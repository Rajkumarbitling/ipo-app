import React from 'react'
import Typography from '@mui/material/Typography';
import { Check } from '@material-ui/icons';
import "./CustomTimeline.css"
import { Close } from '@material-ui/icons';


const CustomTimeline = ({timeline}) => {
  return (
    <div id="timeline-wrap" className='max-sm:mt-6'>
    <div id="timeline"></div>
    {
        timeline.map(([key, value, status], i) => {
            return (
            <div key={key} className={`marker timeline-icon ${status}`} style={{left:`${100/6*(i+1)}%`}}>
                {status ? <Check /> : <Close />}
                <div className="timeline-panel">
                    <Typography className='font-bold' color='primary'>{key}</Typography>
                    <Typography variant='span' className='text-xs text-textGray'>{value}</Typography>
                </div>
            </div>
            )
        })
    }
    </div>
  )
}

export default CustomTimeline