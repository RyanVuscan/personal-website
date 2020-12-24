import React from 'react';
import Card from '../../Card';
import text from './About.text';

const About = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '20px 4rem' }}>
      {Object.keys(text).map((key) => (
        <Card
          key={key}
          imageLeft={parseInt(key) % 2 === 0 ? true : false}
          imagePath={text[key].imagePath}
          text={text[key].text}
          title={text[key].title}
          subtitle={text[key].subtitle}
          paperStyle={{ margin: '30px 0' }}
        />
      ))}
    </div>
  );
};

export default About;
