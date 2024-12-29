import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, CircularProgress } from "@mui/material";
import Card from "./card/Card";
import Section from "../titleSection/TitleSection";
import SongSection from "../song_section/SongSection";
import style from "./card.module.css";

export default function CardData() {
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
    <Grid container className={style.cardSection} sx={{ padding: "20px" }}>
      <Section leftTitle="Top Albums" rightTitle="Collapse" />

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5,width:"100%" }}>
          <CircularProgress sx={{color:"#34C94B"}}/>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {isCardData.map((item) => (
            <Grid item key={item.id}>
              <Card cardData={item} />
            </Grid>
          ))}
        </Grid>
      )}
      <SongSection />
    </Grid>
  );
}
