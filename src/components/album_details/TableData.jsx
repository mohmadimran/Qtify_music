import { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  CardMedia,
  TableHead,
  TableRow,
  Typography,
  Pagination,
  Paper,
} from "@mui/material";

const PaginatedTable = ({ apiData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); 
  const [data, setData] = useState([]);

  useEffect(() => {
    // Extracting songs from the provided API data
    if (apiData && apiData.songs) {
      setData(apiData.songs);
    }
  }, [apiData]);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate data for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Box sx={{ width: "100%", margin: "auto", mt: 5 }}>
      {/* Pagination on top-right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
        }}
      >
        <Pagination
          count={Math.ceil(data.length / rowsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          siblingCount={1}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#ffffff",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#34c94b", 
            },
            "& .Mui-selected": {
              backgroundColor: "#34c94b", 
              color: "#ffffff",
            },
            "& .MuiPaginationItem-previousNext": {
              color: "#ffffff",
            },
          }}
        />
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          margin: "auto",
          mt: 5,
          backgroundColor: "#121212",
        }}
      >
        <Table>
          <TableHead sx={{ width: "100%", margin: "auto", color: "#ffffff" }}>
            <TableRow>
              <TableCell>
                <Typography variant="h6" sx={{ color: "#ffffff" }}>
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ color: "#ffffff" }}>
                  Artist
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ color: "#ffffff" }}>
                  Duration
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((song, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "#ffffff" }}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: "50px",
                        height: "64px", 
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                      image={song.image}
                      title={song.title}
                    />
                    <Typography variant="body1" sx={{ color: "#ffffff" }}>
                      {song.title}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ color: "#ffffff" }}>
                  {song.artists.join(", ")}
                </TableCell>
                <TableCell sx={{ color: "#ffffff" }}>
                  {formatDuration(song.durationInMs)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// Format duration from milliseconds to "mm:ss"
const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default PaginatedTable;
