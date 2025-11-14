import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ContactSection from "./components/ContactSection";
import Skill from "./components/Skill";
import ChannelSection from "./components/ChannelSection";

export default function App() {
  return (
    <>
      <Header />
      {/* 전체 내용 컨테이너 */}
      <main className="content-wrapper">
        <ProfileSection />
        <hr style={{ opacity: 0.3 }} />
        <div className="bottom-sections">

          <ContactSection />
          <ChannelSection />
        </div>
        <hr style={{ opacity: 0.3 }} />
        <Skill />
        
      </main>
    </>
  );
}
