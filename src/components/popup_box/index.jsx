import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FeedbackDialog = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Store the data in local storage
    localStorage.setItem("feedback", JSON.stringify(formData));
    console.log("Feedback submitted:", formData);
    handleClose(); // Close the dialog
    // Optionally clear the form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      description: "",
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          padding: "20px",
          height: "auto",
          position: "relative", 
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.8)", 
        },
      }}
    >
      {/* Cross Button */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "black",
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        Feedback
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Full name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          InputProps={{
            sx: { height: "40px" }, // Adjust height here
          }}
        />
        <TextField
          fullWidth
          label="Email ID"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          InputProps={{
            sx: { height: "40px" }, // Adjust height here
          }}
        />
        <TextField
          fullWidth
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          margin="normal"
          InputProps={{
            sx: { height: "40px" }, // Adjust height here
          }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
          margin="normal"
          InputProps={{
            sx: { height: "100px" }, // Adjust height here
          }}
        />
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#34C94B",
            color: "white",
            width: "164px",
            height: "37px",
            textTransform: "none",
            fontSize: "18px",
            "&:hover": { backgroundColor: "#28A745" },
          }}
        >
          Submit Feedback
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FeedbackDialog;
