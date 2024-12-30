import { Box } from "@mui/system";
import HeroSection from "./hero_section";
import TitleSection from "./title_section";
import TopAlbum from "./top_album";
import NewAlbum from "./new_album";
import SongSection from "./song_section";
import AllTopAlbum from "./section/AllTopAlbum";
import AllNewAlbum from "./section/AllNewAlbum";
import { useState } from "react";

export default function HomeContent() {
  const [albumShowState, setAlbumShowState] = useState({
    topAlbum: true,
    newAlbum: true,
  });

  const toggleAlbumShow = (key) => {
    setAlbumShowState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      <HeroSection />

      {/* Top Albums Section */}
      <TitleSection
        leftTitle="Top Albums"
        rightTitle={albumShowState.topAlbum ? "Show All" : "Collapse"}
        onClick={() => toggleAlbumShow("topAlbum")}
      />
      {albumShowState.topAlbum ? <TopAlbum /> : <AllTopAlbum />}

      {/* New Albums Section */}
      <TitleSection
        leftTitle="New Albums"
        rightTitle={albumShowState.newAlbum ? "Show All" : "Collapse"}
        onClick={() => toggleAlbumShow("newAlbum")}
      />
      {albumShowState.newAlbum ? <NewAlbum /> : <AllNewAlbum />}

      {/* Songs Section */}
      <TitleSection leftTitle="Songs" rightTitle="" />
      <SongSection />
    </Box>
  );
}
