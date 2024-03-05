import React, { useState } from "react";

// 방 정보 타입 정의
interface Room {
  id: number;
  name: string;
  description: string;
}

// 방 정보 데이터
const roomsData: { [key: number]: Room[] } = {
  2: [
    { id: 1, name: "Room 201", description: "This is Room 201 description" },
    { id: 2, name: "Room 202", description: "This is Room 202 description" },
    { id: 3, name: "Room 203", description: "This is Room 203 description" },
    { id: 4, name: "Room 204", description: "This is Room 204 description" },
    { id: 5, name: "Room 205", description: "This is Room 205 description" },
  ],
  3: [
    { id: 6, name: "Room 301", description: "This is Room 301 description" },
    { id: 7, name: "Room 302", description: "This is Room 302 description" },
    { id: 8, name: "Room 303", description: "This is Room 303 description" },
    { id: 9, name: "Room 304", description: "This is Room 304 description" },
    { id: 10, name: "Room 305", description: "This is Room 305 description" },
  ],
  // Add more floors if needed...
};

const RoomTemplate: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState<number>(2);

  // 층 선택 시 실행되는 함수
  const handleFloorSelect = (floor: number) => {
    setSelectedFloor(floor);
  };

  return (
    <div>
      {/* 방 사진 */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {/* 방 사진을 넣는 부분 */}
        <img src="" alt="Room" />
      </div>

      {/* 선택할 수 있는 층마다의 버튼 */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {[2, 3, 4].map((floor) => (
          <button key={floor} onClick={() => handleFloorSelect(floor)}>
            {`Floor ${floor}`}
          </button>
        ))}
      </div>

      {/* 선택된 층에 따른 방 목록 */}
      <div>
        {roomsData[selectedFloor] &&
          roomsData[selectedFloor].map((room) => (
            <div key={room.id} style={{ marginBottom: "10px" }}>
              <h3>{room.name}</h3>
              <p>{room.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RoomTemplate;
