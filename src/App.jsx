import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";

import Skill from "./components/Skill";

import MyInfo_Introduce from "./components/MyInfo_Introduce";
import BottomComponents from "./components/BottomComponents";
import ProjectInfo from "./components/ProjectInfo";
import Education from "./components/Education";
import School from "./components/School";
import License from "./components/License";
import Prize from "./components/Prize";
import MilitaryService from "./components/MilitaryService";

export default function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>


      <main style={{ display: "block" }}>
        <div className="content-wrapper" >

          {/* 프로필 영역 */}
          <div className="firstpage">
          <ProfileSection />
          <hr style={{ opacity: 0.3 }} />
          <div className="bottom-sections" >
            <School />
            <MilitaryService />
          </div>
          <hr style={{ opacity: 0.3 }} />
          <MyInfo_Introduce />
          </div>
          <div className="bodypage">
          <Education />
          <hr style={{ opacity: 0.3 }} />
          <License />
          <hr style={{ opacity: 0.3 }} />
          <Prize />
          <hr style={{ opacity: 0.3 }} />
          <Skill />
          <hr style={{ opacity: 0.3 }} />
          </div>
          <ProjectInfo className="bodypage" /> 
        </div>

      </main>
      <BottomComponents />
    </>
  );
}
