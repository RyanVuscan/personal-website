// @ts-check
import { Box, Paper } from '@material-ui/core';
import React from 'react';

const Card = ({ imagePath, imageLeft, title, subtitle, text, paperStyle }) => {
  return (
    <>
      <Paper elevation={12} style={{ borderRadius: '20px', ...paperStyle }}>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          height="100%"
          width="100%"
          style={{ direction: imageLeft ? 'rtl' : 'ltr' }}
        >
          <div style={{ padding: '20px' }}>
            <h1 style={{ margin: '10px 0' }}>{title}</h1>
            <h2 style={{ margin: '10px 0' }}>{subtitle}</h2>
            <p>{text}</p>
          </div>
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
      </Paper>
    </>
  );
};

export default Card;
