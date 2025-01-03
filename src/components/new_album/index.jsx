import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Card from "../card";
import style from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewAlbum() {
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
          right: "-1px",
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
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      const apiData = response.data;
      console.log("new album data: ", apiData);
      setCardData(apiData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <Box className={style.cardSection}>
      <Box>
        <Slider {...settings}>
          {isCardData.map((song) => (
            <Card key={song.id} cardData={song} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
