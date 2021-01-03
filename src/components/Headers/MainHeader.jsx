import { AppBar, Box, Button, Grid, makeStyles, Slide, Toolbar, Typography, Zoom } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '80vh',
    flexWrap: 'nowrap',
  },
  mainImage: {
    borderRadius: '50%',
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    alignSelf: 'center',
  },
  menuButton: {
    margin: '1vw',
    fontSize: '2vw',
    padding: '0.5vw',
  },
  toolbar: {
    position: 'relative',
    height: '95vh',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));

const MainHeader = () => {
  const history = useHistory();
  const classes = useStyles();
  const [slideInHeader, setSlideInHeader] = useState(false);
  const [slideInSubheader, setSlideInSubheader] = useState(false);
  const [slideInText, setSlideInText] = useState(false);

  const onResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`);
  };

  const onProjectsClick = () => {
    window.open(`${process.env.PUBLIC_URL}https://github.com/RyanVuscan/`);
  };

  const navigate = (destination) => {
    history.push(destination);
  };

  const mobile = window.innerWidth < 777;

  useEffect(() => {
    timer(1500, 500)
      .pipe(take(4))
      .subscribe((res) => {
        if (res === 0) {
          setSlideInHeader(true);
        } else if (res === 2) {
          setSlideInSubheader(true);
        } else if (res === 3) {
          setSlideInText(true);
        }
      });
  }, []);

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Button
          className={classes.menuButton}
          onClick={() => {
            navigate('/about');
          }}
        >
          About
        </Button>
        <Button className={classes.menuButton} onClick={onProjectsClick}>
          Projects
        </Button>
        <Button
          className={classes.menuButton}
          onClick={() => {
            navigate('/contact');
          }}
        >
          Contact
        </Button>
        <Button className={classes.menuButton} onClick={onResumeClick}>
          Resume
        </Button>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.root}
          style={{
            padding: mobile ? '0.25rem' : '4rem',
          }}
        >
          <Box
            display="grid"
            gridTemplateRows={mobile ? '1fr 1fr' : ''}
            gridTemplateColumns={mobile ? '' : '1fr 1fr'}
            height="100%"
            width="100%"
            gridGap={!mobile && 'min(5%, 3vh)'}
          >
            <Zoom timeout={1000} in={true}>
              <Box
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundImage: 'url(header-photo.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                }}
              />
            </Zoom>
            <Box display="flex" flexDirection="column" padding="1rem" justifyContent="center">
              <Slide in={slideInHeader} direction={mobile ? 'up' : 'left'} timeout={500}>
                <Typography
                  variant="h1"
                  align={mobile ? 'center' : 'left'}
                  style={{ fontWeight: 800, fontSize: mobile ? null : '4rem' }}
                >
                  Ryan Vuscan
                </Typography>
              </Slide>
              <Slide in={slideInSubheader} direction={mobile ? 'up' : 'left'} timeout={300}>
                <Typography variant="h2" align={mobile ? 'center' : 'left'}>
                  {`I'm a full-time student learning to code! Based in Toronto, Canada.`}
                </Typography>
              </Slide>
              <Slide in={slideInText} direction={mobile ? 'up' : 'left'} timeout={300}>
                <Typography variant="h4" align={mobile ? 'center' : 'left'}>
                  {`Thanks for visiting my website. Be sure to explore and see what I'm a part of.`}
                </Typography>
              </Slide>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item style={{ padding: '1rem' }}>
            <Typography variant="h1" style={{ textAlign: 'center' }}>
              Ryan Vuscan
            </Typography>
          </Grid> */}
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
