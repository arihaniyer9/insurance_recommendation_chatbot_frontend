import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({ image, headline }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={headline} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headline}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
