import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, CircularProgress } from "@mui/material";
import Card from "../card";
import style from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TopAlbum() {
  const [loading, setLoading] = useState(true);
  const [isCardData, setCardData] = useState([]);

//  carousal settings and button
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#34C94B",
        color: "#FFFFFF",
        right: "-10px",
        zIndex: 2,
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#34C94B",
        color: "#FFFFFF",
        left: "-10px",
        zIndex: 2,
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 7,
  swipeToSlide: true,
  speed: 1000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};


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
    <Box className={style.cardSection}>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5,width:"100%" }}>
          <CircularProgress sx={{color:"#34C94B"}}/>
        </Box>
      ) : (
        <Box>
           <Slider {...settings}>
                {isCardData.map((song) => (
                  <Card key={song.id} cardData={song} />
                ))}
              </Slider>
        </Box>
      )}
    </Box>
  );
}
