import { Box } from "@mui/system";
import HeroSection from "./hero_section";
import TitleSection from "./title_section";
import TopAlbum from "./top_album";
import NewAlbum from "./new_album";
import SongSection from "./song_section";

export default function HomeContent() {
  return (
    <Box sx={{ width: "100%",padding: "20px" }}>
      <HeroSection />
      <TitleSection leftTitle="Top Albums" rightTitle="Show all" />
      <TopAlbum />
      <TitleSection leftTitle="New Albums" rightTitle="Show all" />
      <NewAlbum />
      <TitleSection leftTitle="Songs" rightTitle="" />
      <SongSection />
    </Box>
  );
}
