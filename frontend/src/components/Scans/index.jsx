import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  Fade,
  Slide
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Extension popup wrapper with 20% reduced width
const ExtensionWrapper = styled(Box)({
  width: '240px', // Reduced from 300px
  height: '400px',
  backgroundColor: '#f9fafb',
  padding: '14px', // Slightly reduced padding
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px', // Added more rounded corners
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px', // Slightly reduced gap
  flex: 1,
});

const CustomButton = styled(Button)(({ active }) => ({
  backgroundColor: active ? '#7c17cf' : '#fff',
  color: active ? '#fff' : '#374151',
  padding: '8px 4px',
  fontSize: '0.813rem', // Slightly smaller font
  minWidth: 0,
  flex: 1,
  borderRadius: '12px !important', // More rounded corners
  '&:hover': {
    backgroundColor: active ? '#6a14b2' : '#f3f4f6',
  },
  transition: 'all 300ms',
  // Remove button group border radius override
  '&.MuiButton-root': {
    border: 'none',
    marginLeft: '0 !important',
    marginRight: '0 !important',
  }
}));

const ScanButton = styled(Button)({
  backgroundColor: '#7c17cf',
  color: '#fff',
  width: '100%',
  marginTop: '14px',
  transition: 'all 300ms',
  borderRadius: '12px', // More rounded corners
  fontSize: '0.875rem',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: '#6a14b2',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  '&:active': {
    transform: 'translateY(2px)',
  },
});

export default function Scans() {
  const [activeButton, setActiveButton] = useState('sypder');
  const scanTypes = ['Sypder', 'Active', 'Passive'];

  return (
    <Fade in timeout={500}>
      <ExtensionWrapper>
        <ContentWrapper>
          <Slide direction="down" in timeout={500}>
            <Box textAlign="center" mb={0.5}>
              <Typography
                variant="h6" // Reduced from h5
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: '#111827',
                  letterSpacing: '-0.025em',
                  fontSize: '1.125rem', // Custom size for better fit
                }}
              >
                Choose Scans
              </Typography>
            </Box>
          </Slide>

          <Slide direction="up" in timeout={500}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              flex: 1,
              '& .MuiButtonGroup-root': {
                boxShadow: 'none'
              }
            }}>
              <Box 
                sx={{ 
                  display: 'flex',
                  gap: '8px',
                  width: '100%'
                }}
              >
                {scanTypes.map((type) => (
                  <CustomButton
                    key={type.toLowerCase()}
                    onClick={() => setActiveButton(type.toLowerCase())}
                    active={activeButton === type.toLowerCase()}
                    aria-pressed={activeButton === type.toLowerCase()}
                    fullWidth
                  >
                    {type}
                  </CustomButton>
                ))}
              </Box>

              <ScanButton 
                variant="contained"
                disableElevation
              >
                Scan Now
              </ScanButton>
            </Box>
          </Slide>
        </ContentWrapper>
      </ExtensionWrapper>
    </Fade>
  );
}