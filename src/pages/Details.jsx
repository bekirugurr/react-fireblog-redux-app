import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const Details = () => {


  const location = useLocation()
  const post_url = location.state.post_detail


  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontFamily: "Girassol", mb: "1.5rem", color: "#04617D", mt:"5rem" }}
      >
        ──── Details ────
      </Typography>
      <Card
        sx={{
          width: "75%",
          backgroundColor: "white",
          mx: "auto",
          mb: "2rem",
        }}
      >
        <CardMedia component="img" width="100%" image={img} alt={header} />
        <CardContent sx={{ backgroundColor: "#efeefe" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "Girassol", color: "#04617D", my: "1rem" }}
          >
            {header}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "gray", fontFamily: "Roboto" }}
          >
            {date}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "Arial",
              textAlign: "start",
              color: "black",
            }}
          >
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <AccountCircleIcon />
          <Typography
            variant="body1"
            sx={{ fontFamily: "Roboto", fontSize: "20px", px: "1rem" }}
          >
            {email}
          </Typography>
        </CardActions>
        <CardActions sx={{ px: "0" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography>56</Typography>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography>56</Typography>
        </CardActions>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
          mx: "auto",
          my: "1rem",
        }}
      >
        <Button sx={{ color: "black", bgcolor: "lightgray", width: "8rem", ":hover": {
            bgcolor: "#a7a7a7" 
          }}}>
          UPDATE
        </Button>
        <Button sx={{ color: "white", 
        bgcolor: "#ed365b", 
        width: "8rem", 
        ":hover": {
            bgcolor: "#C51162" 
          }}}>
          DELETE
        </Button>
      </Box>
    </>
  );
};

export default Details;
