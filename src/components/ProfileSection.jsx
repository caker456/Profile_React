import Mypicture from "../assets/Image/Mypicture.png";
import { useState } from "react";
import { pptimg, github } from "../assets/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import PublicIcon from "@mui/icons-material/Public";
import ComputerIcon from "@mui/icons-material/Computer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ProfileSection() {


  const [profile, setprofile] = useState(false);

  const CardClickOpen=() => {
    setprofile(true);
  };
  const CardClickExit=() => {
    setprofile(false);
  };
  const NoneEvent = (e) => {
    e.stopPropagation();
  };


  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        paddingLeft: " 20px",
        textAlign: "left",
      }}
    >


      {profile === false ? (<>

        {/* 카드 전체 */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(6px)",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            padding: "40px",
            display: "flex",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
            minHeight: "200px",
          }}
          onClick={CardClickOpen}
        >

          {/* 프로필 이미지 */}
          <img
            src={Mypicture}
            alt="profile"
            style={{
              width: "170px",
              height: "200px",
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          />

          {/* 텍스트 정보 */}
          <div>
            <div style={{display : "flex"}}>
              <ComputerIcon style={{ margin : "20px 5px 0px 0px" }}/>
            <h1 style={{ marginLeft : "10px" ,fontSize: "40px", margin: "5px 0px", fontWeight: "600" }}>
              김근우
            </h1>
            </div>
            
            <div style={{display : "flex"}}>
                <PublicIcon style={{marginRight : "10px"}} /> 
                <p style={{ fontSize: "20px", margin: 0, color: "#444"  }}>
                 Web Developer
              </p>
            </div>

            

            <div
              style={{

                lineHeight: "1.8",
                fontSize: "16px",
                color: "#333",
                display : "block",
                paddingTop : "5px "
              }}
            >
              <div style={{display : "flex"}}>
                <LocationOnIcon style={{marginRight : "10px"}} /> 
                <p style={{ margin: 0 }}>
                 경기도 화성시 수노을 1로 148
              </p>
              </div>
              
              <div style={{display : "flex"}}>
                <CakeIcon style={{marginRight : "10px"}} />
                <p style={{ margin: 0 }}>
                 1998/04/17
              </p>
              </div>
              <div style={{display : "flex"}}>
                <PhoneIcon style={{marginRight : "10px"}} />
                <p style={{ margin: 0 }}>
                010-7538-7357
              </p>
              </div>
              <div style={{display : "flex"}}>
                <EmailIcon style={{marginRight : "10px"}}  />
                <p style={{ margin: 0 }}>
                caker456mail@gmail.com
              </p>
              </div>
      
            </div>
          </div>
          <ChevronRightIcon style={{marginLeft : "auto"}} /> 
        </div>
      </>) : (
        <>

          {/* 카드 전체 */}
          <div
            className="wcenter"
            style={{
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(6px)",
              borderRadius: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              padding: "40px",
              display: "flex",
              gap: "40px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            onClick={CardClickExit}
          >
            <p className="infotext wcenter metal-regular " style={{ fontSize: "50px" }} >Web Developer</p>
            <p style={{ margin: 0 }} onClick={NoneEvent}>
              <a href="https://github.com/caker456/Profile_React" target="_blank"> 
                <img src={github} style={{ height: "50px", width: "50px" }}></img>
              </a>
            </p>
            <p style={{ margin: 0 }} onClick={NoneEvent}>
              <a href="https://docs.google.com/presentation/d/1KuIbKbCCApxKobQgrDAxyne1sAuR5Zro_b5JgU4FgIk/edit?usp=sharing" target="_blank">
                <img src={pptimg} style={{ height: "50px", width: "50px" }}></img>
              </a>
            </p>
            
          </div>
            
        </>



      )}



      {/* 소개글 영역 */}
      <div
        style={{
          marginTop: "40px",
          fontSize: "15px",
          color: "#555",
          lineHeight: "1.8",
          padding: "0 10px",
        }}
      >
        <p>프론트엔드와 백엔드를 함께 이해하고 설계할 수 있는 신입 웹 개발자입니다.</p>
        <p>사용자 관점에서 편리한 웹 서비스를 만드는 데 관심이 많고, </p>
        <p>다양한 프로젝트를 수행하며 여러 개발 도구와 기술을 실무적으로 활용한 경험을 갖추고 있습니다.</p>
      </div>

    </section>
  );
}
