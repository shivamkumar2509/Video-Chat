import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import AuthContext from "../contexts/AuthContext";

const HomeComponent = () => {
  const navigate = useNavigate();
  const { addToUserHistory } = useContext(AuthContext);
  const [meetingCode, setMeetingCode] = useState("");

  const handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="homeWrapper">
      {/* Navbar */}
      <div className="navBar">
        <Typography variant="h6" className="logo">
          Video Call
        </Typography>

        <div className="navActions">
          <IconButton onClick={() => navigate("/history")}>
            <RestoreIcon />
          </IconButton>
          <Typography>History</Typography>

          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="meetContainer">
        <div className="leftPanel">
          <Typography variant="h4" className="heading">
            Providing Quality Video Calls <br /> Like Quality Education
          </Typography>

          <div className="joinBox">
            <TextField
              label="Meeting Code"
              variant="outlined"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
            />
            <Button
              variant="contained"
              size="large"
              onClick={handleJoinVideoCall}
            >
              Join
            </Button>
          </div>
        </div>

        <div className="rightPanel">
          <img src="/logo3.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default withAuth(HomeComponent);
