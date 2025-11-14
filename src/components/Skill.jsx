export default function ChannelSection() {
    const styles = {
    useprogramingimg : {
        width: "50px", 
        height: "50px", 
        objectFit: "cover" ,
        marginRight : 10
    }
    };
    const skillList = [
    {
        title: "프로그래밍언어",
        images: [
        "src/assets/Image/java.jpg",
        "src/assets/Image/js.png",
        "src/assets/Image/python.png",
        "src/assets/Image/csharp.png",
        ],
    },
    {
        title: "프레임워크",
        images: [
        "src/assets/Image/react.png",
        "src/assets/Image/spring.png",
        "src/assets/Image/vue.png",
        ],
    },
    {
        title: "라이브러리",
        images: [
        "src/assets/Image/axios.png",
        "src/assets/Image/recoil.png",
        "src/assets/Image/tanstack.png",
        ],
    },
    {
        title: "데이터베이스",
        images: [
        "src/assets/Image/postgre.png",
        "src/assets/Image/mongo.png",
        ],
    },
    {
        title: "개발엔진",
        images: [
        "src/assets/Image/unity.png",
        "src/assets/Image/unreal.png",
        ],
    },
    ];
  return (
    <div>
      <h2 style={{ fontSize: "32px", color: "#000000ff", marginBottom: "20px" }}>
        Skill
      </h2>
      <div  >
            <ul>
                {skillList.map((item, index) => (
                    <li key={index}>
                    <div style={{ display: "flex", alignItems: "center" }}>

                        {/* 제목 */}
                        <p style={{ marginRight: "20px", minWidth: "120px" }}>
                        {item.title}
                        </p>

                        {/* 세로선 */}
                        <div
                        style={{
                            width: "1.5px",
                            height: "40px",
                            backgroundColor: "#555555ff",
                            marginRight: "10px",
                        }}
                        />

                        {/* 이미지 묶음 */}
                        <div style={{ display: "flex", gap: "10px" }}>
                        {item.images.map((imgSrc, i) => (
                            <img key={i} src={imgSrc} style={styles.useprogramingimg} />
                        ))}
                        </div>
                    </div>
                    </li>
                ))}
            </ul>
              
               
      </div>

    </div>
  );
}
