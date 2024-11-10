import React from 'react';
import {
  Box,
  Typography,
  Fade,
  Slide
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

// Styled components
const ExtensionWrapper = styled(Box)({
  width: '240px',
  height: '400px',
  backgroundColor: '#f9fafb',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
});

const BackgroundImage = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `url('/placeholder.svg?height=400&width=240')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.1,
});

const ContentWrapper = styled(Box)({
  maxWidth: '200px',
  width: '100%',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
});

const AnimatedCheckIcon = styled(CheckIcon)({
  fontSize: '48px',
  color: '#7c17cf',
  '@keyframes bounceIn': {
    '0%': {
      transform: 'scale(0)',
      opacity: 0,
    },
    '50%': {
      transform: 'scale(1.2)',
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
  animation: 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
  animationDelay: '0.3s',
});

export default function ScanConfirmationPage() {
  return (
    <Fade in timeout={500}>
      <ExtensionWrapper>
        <BackgroundImage />
        <ContentWrapper>
          <Slide direction="down" in timeout={500}>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: 700,
                color: '#111827',
                letterSpacing: '-0.025em',
                textAlign: 'center',
                fontSize: '1.5rem',
              }}
            >
              Thanks for scanning
            </Typography>
          </Slide>

          <Slide direction="up" in timeout={500}>
            <Typography
              variant="body1"
              sx={{
                color: '#1f2937',
                textAlign: 'center',
                fontSize: '1rem',
                mt: 1,
              }}
            >
              Your results will be mailed to you soon
            </Typography>
          </Slide>

          <Box sx={{ mt: 2 }}>
            <AnimatedCheckIcon />
          </Box>
        </ContentWrapper>
      </ExtensionWrapper>
    </Fade>
  );
}