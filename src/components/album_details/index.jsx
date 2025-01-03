import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableData from "./TableData";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const DetailPage = () => {
  const { slug } = useParams();
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to fetch data from multiple endpoints
  const fetchDetails = async () => {
    const apiEndpoints = [
      "https://qtify-backend-labs.crio.do/albums/top",
      "https://qtify-backend-labs.crio.do/albums/new",
    ];

    for (const endpoint of apiEndpoints) {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const matchedCard = data.find((card) => card.slug === slug);
        if (matchedCard) {
          return matchedCard;
        }
      } catch (err) {
        console.error(`Error fetching from ${endpoint}:`, err);
      }
    }
    throw new Error("Card not found in both APIs");
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchDetails()
      .then((data) => setCardDetails(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", mt: 5, width: "100%" }}
      >
        <CircularProgress sx={{ color: "#34C94B" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography sx={{ textAlign: "center", mt: 5 }}>
        Error: {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, margin: "auto", padding: "20px" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          backgroundColor: "#121212",
        }}
      >
        <CardMedia
          sx={{ height:329, width: "30%", objectFit: "cover",borderRadius:"10px" }}
          image={cardDetails.image}
          title={cardDetails.title}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ color: "#ffffff" }}
          >
            {cardDetails.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1.5, color: "#ffffff" }}>
            {cardDetails.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "#ffffff", mb: 1 }}>
            Released: 2022
          </Typography>
          <Typography variant="body2" sx={{ color: "#ffffff", mb: 1 }}>
            {cardDetails.songs.length} songs. Total follows:{" "}
            {cardDetails.follows}
          </Typography>
          <CardActions>
            <Button
              sx={{
                backgroundColor: "#34C94B",
                color: "white",
                textTransform: "none",
                "&:hover": { backgroundColor: "#28A745" },
              }}
            >
              Shuffle
            </Button>

            <Button
              sx={{
                backgroundColor: "transparent",
                color: "#34C94B",
                textTransform: "none",

                border: "2px solid #34C94B", 
                "&:hover": {
                  color: "#ffffff)"
                },
              }}
            >
              Add to library
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <TableData apiData={cardDetails} />
    </Box>
  );
};

export default DetailPage;
