import axios from "axios";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import { Box, CircularProgress } from "@mui/material";
import Card from "../card";

export default function AllsopAlbum() {
  const [loading, setLoading] = useState(true);
  const [isCardData, setCardData] = useState([]);

  // Fetch data from API
  async function getCardData() {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      const apiData = response.data;
      console.log("All card data: ", apiData);
      setCardData(apiData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <Box sx={{ width: "100%"}}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
            width: "100%",
          }}
        >
          <CircularProgress sx={{ color: "#34C94B" }} />
        </Box>
      ) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {isCardData.map((song) => (
            <Grid key={song.id} size={{ xs: 2, md:2}}>
              <Card cardData={song} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
