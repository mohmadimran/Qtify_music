import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import Style from './card.css';
export default function CardContainer({ title, description, image,follows }) {
  return (
    // <div className="card">
    //   <img src={image} alt={title} />
    //   <h2>{title}</h2>
    //   <p>{description}</p>
    //   {BasicChips("follows")}
    // </div>
    <Card sx={{ maxWidth:159,height: 232 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {BasicChips("follows")}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
      </CardContent>
      
    </Card>
  );
}



 function BasicChips(text) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={text} />
    </Stack>
  );
}
