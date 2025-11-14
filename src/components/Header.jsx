export default function Header() {
  
  return (
    <header style={{ width: "100%", position: "relative" }}>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Metal&display=swap');
      </style>
      {/* 상단 배경 바 */}
      <div
        className="metal-regular"
        style={{
          width: "100vw",
          height: "100px",
          backgroundColor: "#7f7f7fff",
          position: "relative",
          left: "50%",
          marginLeft: "-50vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "40px",
        }}
      >
      Developer Resume
      </div>

      {/* 프로필 이미지 중앙 */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "-70px",
        }}
      >
        {/* 이미지 넣는 위치 */}
      </div>
    </header>
  );
}