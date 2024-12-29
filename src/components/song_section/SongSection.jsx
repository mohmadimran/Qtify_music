import { useState, useEffect } from "react";
import { Tabs, Tab, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleSection from "../titleSection/TitleSection";

import Card from "../card/Card";

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

const SongComponent = () => {
  const [value, setValue] = useState(0);
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [loading, setLoading] = useState(true);
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  async function getSongData() {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      const apiData = response.data;
      console.log("All song data: ", apiData);
      setSongs(apiData);
      setFilteredSongs(response.data); // Default to all songs
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }

  // for Genres
  async function getGenres() {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      const genreData = response.data.data;
      console.log("All song data: ", genreData);
      setGenres([{ key: "all", label: "All" }, ...genreData]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSongData();
  }, []);
  useEffect(() => {
    getGenres();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (genres[newValue].key === "all") {
      setFilteredSongs(songs);
    } else {
      const genreKey = genres[newValue].key;
      const filtered = songs.filter((song) => song.genre.key === genreKey);
      setFilteredSongs(filtered);
    }
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#121212" }}>
      <TitleSection leftTitle="Songs" rightTitle="" />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress sx={{ color: "#34C94B" }} />
        </Box>
      ) : (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#34C94B", // Custom indicator color
              },
              "& .MuiTab-root": {
                color: "#FFFFFF", // Custom text color for unselected tabs
              },
              "& .Mui-selected": {
                color: "#34C94B", // Custom text color for selected tab
              },
            }}
          >
            {genres.map((genre) => (
              <Tab key={genre.key} label={genre.label} />
            ))}
          </Tabs>
          {genres.map((genre, index) => (
            <TabPanel value={value} index={index} key={genre.key}>
              <Slider {...settings}>
                {filteredSongs.map((song) => (
                  <Card key={song.id} cardData={song} />
                ))}
              </Slider>
            </TabPanel>
          ))}
        </>
      )}
    </Box>
  );
};

export default SongComponent;
