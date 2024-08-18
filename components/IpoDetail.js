import { Box, Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Image from 'next/image';
import { ArrowBackIosNew } from '@mui/icons-material';
import CustomTimeline from './TimeLine/CustomTimeline';
import ReadMoreBlock from './ReadMoreBlock';
import StyledIconButton from './StyledIconButton';

const StyledBox = styled(Box)(({theme}) => {
  return ({
  "&.MuiBox-root": {
    [theme.breakpoints.up("md")]: {
      border: `2px solid ${theme.palette.secondary.main}`,
      padding: '1.5rem',
    },
    ".always": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    borderRadius: '1rem',
  },
})});

export default function IpoDetail({ ipo }) {

  return (
      <Container disableGutters>
        <Box component="section" sx={{ p: 2 }} className='flex justify-between md:my-8 sm:my-4 p-0'>
        <div className='grid grid-flow-col auto-cols-auto items-center'>
            <StyledIconButton className='hidden lg:block px-2' >
              <ArrowBackIosNew />
            </StyledIconButton>
            <Image className='round-image  mx-2' src={'https://avatar.iran.liara.run/public'} priority alt='brand-logo' width={50} height={50} />
            <div>
                <Typography variant="h4" fontWeight='bold' color="primary" className='text-3xl'>
                  {ipo.company}
                </Typography>
                <span className='text-sm text-textGray'>{ipo.companyFullName}</span>
            </div>
        </div>
        <div className='grid grid-flow-col auto-cols-auto items-center'>
          <Image className='mx-4 hidden lg:block' src={'/assets/download.png'} alt='download-button' width={45} height={45} />
          <Button variant='contained' color='primary' className="hidden lg:block">Apply now</Button>
        </div>
        </Box>

        <StyledBox component="section" sx={{ p: 2 }} className='flex flex-col mb-4'>
          <Typography variant="h6" fontWeight='bold' color="primary" className='mb-4'>
            IPO Details
          </Typography>
        <StyledBox component="section" sx={{ p: 2 }} className='flex flex-col always'>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Object.entries(ipo.details).map(([key, value]) => (
              <Grid item xs={2} sm={3} md={3} key={key}>
                <p className='text-sm text-textGray' color='secondary'>{key}</p>
                {key !== "Listing gains" ? 
                <Typography variant="p" fontWeight='bold' color="primary">
                  {value}
                </Typography> : 
                <Typography variant="p" fontWeight='bold' color="primary">
                  {value.split('(')[0]} (<Typography variant='span' color='text.orange'>{value.match(/\((.*?)\)/i)[1]}</Typography>)
                </Typography>
                }
              </Grid>
            ))}
          </Grid>
        </StyledBox>
        </StyledBox>

        <StyledBox component="section" sx={{ p: 2 }} className='flex flex-col mb-4'>
          <Typography variant="h6" fontWeight='bold' color="primary">
            IPO Timeline
          </Typography>
          <CustomTimeline timeline={ipo.timeline} />
        </StyledBox>

        <StyledBox component="section" sx={{ p: 2 }} className='flex flex-col mb-4'>
          <Typography variant="h6" fontWeight='bold' color="primary" className='mb-4'>
            About the company
          </Typography>
          <ReadMoreBlock text={`Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis
            galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore
            enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui
            delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non
            repellendus harum.
            Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis
            galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut inventore
            enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui
            delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non
            repellendus harum. Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio
            enim sit corporis galisum est quisquam magni ea sequi maxime. Aut incidunt adipisci in fuga necessitatibus
            aut inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam
            esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non
            doloribus omnis non repellendus harum.`} />
        </StyledBox>
      </Container>
  );
}