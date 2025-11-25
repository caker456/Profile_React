import {uvicorn,gemma3,cshop,spring,react, pypdf2,javaImg, jsImg, pythonImg,pptimg ,github,fastapi,postgre,unity} from "../assets/Image";

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
        images: [javaImg, jsImg, pythonImg,cshop],
    },
    {
        title: "프레임워크",
        images: [
        fastapi,
        react,
        spring,
        ],
    },
    {
        title: "라이브러리",
        images: [
        pypdf2,

        uvicorn
        ],
    },
    {
        title: "데이터베이스",
        images: [
        postgre
        ],
    },
    {
        title: "기타",
        images: [
        unity,
        gemma3,
        
        ],
    },
    ];
  return (
    
    <div>
        
      <h2 className="metal-regular titlestyle" >
        Skill.
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
