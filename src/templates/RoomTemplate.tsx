import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CommonAppBar from "../commons/CommonAppBar";

// 방 정보 타입 정의
interface Room {
  id: number;
  name: string;
  description: string;
}

// 방 정보 데이터
const roomsData: { [key: string]: Room[] } = {
  B2: [{ id: 1, name: "본당", description: "지하 2층에 위치한 본당입니다." }],
  B1: [
    { id: 1, name: "Room 201", description: "This is Room 201 description" },
    { id: 2, name: "Room 202", description: "This is Room 202 description" },
    { id: 3, name: "Room 203", description: "This is Room 203 description" },
    { id: 4, name: "Room 204", description: "This is Room 204 description" },
    { id: 5, name: "Room 205", description: "This is Room 205 description" },
  ],
  "1": [
    { id: 1, name: "Room 201", description: "This is Room 201 description" },
    { id: 2, name: "Room 202", description: "This is Room 202 description" },
    { id: 3, name: "Room 203", description: "This is Room 203 description" },
    { id: 4, name: "Room 204", description: "This is Room 204 description" },
    { id: 5, name: "Room 205", description: "This is Room 205 description" },
  ],
  "2": [
    { id: 1, name: "Room 201", description: "This is Room 201 description" },
    { id: 2, name: "Room 202", description: "This is Room 202 description" },
    { id: 3, name: "Room 203", description: "This is Room 203 description" },
    { id: 4, name: "Room 204", description: "This is Room 204 description" },
    { id: 5, name: "Room 205", description: "This is Room 205 description" },
  ],
  "3": [
    { id: 1, name: "Room 201", description: "This is Room 201 description" },
    { id: 2, name: "Room 202", description: "This is Room 202 description" },
    { id: 3, name: "Room 203", description: "This is Room 203 description" },
    { id: 4, name: "Room 204", description: "This is Room 204 description" },
    { id: 5, name: "Room 205", description: "This is Room 205 description" },
  ],
  "4": [
    { id: 6, name: "Room 301", description: "This is Room 301 description" },
    { id: 7, name: "Room 302", description: "This is Room 302 description" },
    { id: 8, name: "Room 303", description: "This is Room 303 description" },
    { id: 9, name: "Room 304", description: "This is Room 304 description" },
    { id: 10, name: "Room 305", description: "This is Room 305 description" },
  ],
};

const RoomTemplate: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState<String>("1");

  // 층 선택 시 실행되는 함수
  const handleFloorSelect = (floor: string) => {
    setSelectedFloor(floor);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "100px" }}>
      <CommonAppBar />
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ marginBottom: "20px" }}
      >
        {["B2", "B1", "1", "2", "3", "4"].map((floor) => (
          <Grid item key={floor}>
            <Button
              variant={selectedFloor === floor ? "contained" : "outlined"}
              onClick={() => handleFloorSelect(floor)}
            >
              {`${floor}층`}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* 선택된 층에 따른 방 목록 */}
      <Grid container spacing={2}>
        {roomsData[selectedFloor.toString()] &&
          roomsData[selectedFloor.toString()].map((room) => (
            <Grid item xs={12} key={room.id}>
              <Box
                sx={{
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                  {room.name}
                </Typography>
                <Typography>{room.description}</Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default RoomTemplate;
