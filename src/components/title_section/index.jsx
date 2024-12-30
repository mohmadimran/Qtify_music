import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./section.module.css";

export default function Section(props) {
  return (
    <Box sx={{ width: "98%",marginTop: "30px" }}>
      <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between",alignItems: "center" }}>
        <Typography className={style.leftText} variant="button" gutterBottom sx={{ display: "block"}}>
        {props.leftTitle}

        </Typography>
        <Typography className={style.rightText} variant="button" gutterBottom sx={{ display: "block" }}>
        {props.rightTitle}
        </Typography>
      </Stack>
    </Box>
  );
}
