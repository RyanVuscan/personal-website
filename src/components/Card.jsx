// @ts-check
import { Box, Paper } from '@material-ui/core';
import React from 'react';

const Card = ({ imagePath, imageLeft, title, subtitle, text, paperStyle }) => {
  const mobile = window.innerWidth < 777;

  const Texts = () => (
    <div style={{ padding: '20px', direction: 'ltr' }}>
      <h1 style={{ margin: '10px 0' }}>{title}</h1>
      <h2 style={{ margin: '10px 0' }}>{subtitle}</h2>
      <p>{text}</p>
    </div>
  );

  return (
    <>
      <Paper elevation={12} style={{ borderRadius: '20px', ...paperStyle }}>
        {!mobile && (
          <Box display="grid" gridTemplateColumns="1fr 1fr" style={{ direction: imageLeft ? 'rtl' : 'ltr' }}>
            <Texts />
            <Box
              style={{
                height: '100%',
                width: '100%',
                backgroundImage: `url(${imagePath})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                borderTopRightRadius: '20px',
                borderBottomRightRadius: '20px',
              }}
            />
          </Box>
        )}
        {mobile && (
          <Box display="flex" flexDirection="column">
            <Texts />
            <img
              src={imagePath}
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt={`${title} logo`}
            />
          </Box>
        )}
      </Paper>
    </>
  );
};

export default Card;
