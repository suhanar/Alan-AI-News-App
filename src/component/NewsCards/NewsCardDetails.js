import React from 'react';
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@mui/material';
import useStyles from './styles';


function NewsCardDetails({article : {description,publishedAt,source,title,url,urlToImage},i}) {
  const classes = useStyles();
  return (

    <Card className='card-action-area'>
      <CardActionArea >
        <CardMedia className={classes.imgdiv}  image={urlToImage}/>
        <div className={classes.div1}>
           <Typography  variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
           <Typography  variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <div className='div-typo'>
        <Typography className='title' gutterBottom variant="h6"  >{title}</Typography>
        </div>
        
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='card-actions'>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant="h5" color="textSecondary">{i+1}</Typography>
      </CardActions>
    </Card>
    




  )
}

export default NewsCardDetails