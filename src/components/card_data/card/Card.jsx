import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Style from "../card.module.css";
export default function CardContainer({ title, description, image, follows }) {
  return (
    <Stack>
      <Card className={Style.cardBox} sx={{ maxWidth: 159 }}>
        <CardMedia sx={{ height: 140 }} image={image} title={title} />
        <CardContent>
          <Typography
            className={Style.chipContainer}
            gutterBottom
            variant="h5"
            component="div"
          >
            <BasicChips follows={follows} />
          </Typography>
        </CardContent>
      </Card>
      <Typography className={Style.bottomText} variant="body2">
        {title}
      </Typography>
    </Stack>
  );
}

function BasicChips(props) {
  return (
      <Chip sx={{backgroundColor:"#121212",color:"#FFFFFF"}}  label={`${props.follows} follows`} />
  );
}
