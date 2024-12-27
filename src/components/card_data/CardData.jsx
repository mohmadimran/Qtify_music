import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardContainer from "../card/Card";
import Section from "../section/Section";
import style from "../card/Card.module.css";

export default function CardData() {
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

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
      <Section />

      {loading ? (
        <h1>Loading..........</h1>
      ) : (
        <Grid container spacing={0.5}>
          {cardData.map((card) => (
            <Grid item xs={4} md={2} key={card.id}>
              <CardContainer
                title={card.title}
                description={card.description}
                image={card.image}
                follows={card.follows}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
}
