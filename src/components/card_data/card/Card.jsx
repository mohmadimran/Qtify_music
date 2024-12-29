import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Style from "../card.module.css";

export default function CardContainer({ key,cardData }) {
  return (
    <>
        <Card className={Style.cardBox} sx={{ maxWidth: 159 }} key={key}>
          <CardMedia
            sx={{ height: 140 }}
            image={cardData.image}
            title={cardData.title}
          />
          <CardContent>
            <Stack direction="row" spacing={1} className={Style.chipContainer}>
              {cardData.follows ? (
                <BasicChips label="Follows" value={cardData.follows} />
              ) : cardData.likes ? (
                <BasicChips label="Likes" value={cardData.likes} />
              ) : null}
            </Stack>
          </CardContent>
          <Typography className={Style.bottomText} variant="body2">
            {cardData.title}
          </Typography>
        </Card>
    </>
  );
}

function BasicChips({ label, value }) {
  return (
    <Chip
      sx={{ backgroundColor: "#121212", color: "#FFFFFF" }}
      label={`${value || 0}${label}`} // Default to 0 if value is missing
    />
  );
}

