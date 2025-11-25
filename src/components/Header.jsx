export default function Header() {

  return (
    <header

    >
      {/* 상단 배경 바 */}
      <div
        className="metal-regular"
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#7f7f7fff",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "40px",

        }}
      >
        KimGeunWoo Portfolio
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "-70px",
        }}
      >
      </div>
    </header>
  );
}