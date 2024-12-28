import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./section.module.css";

export default function Section() {
  return (
    <Box sx={{ width: "98%" }}>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between",alignItems: "center" }}>
        <Typography className={style.leftText} variant="button" gutterBottom sx={{ display: "block"}}>
        Top Albums
        </Typography>
        <Typography className={style.rightText} variant="button" gutterBottom sx={{ display: "block" }}>
        Collapse
        </Typography>
      </Stack>
    </Box>
  );
}
