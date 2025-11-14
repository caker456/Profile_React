// src/App.jsx
import React from 'react';
import Resume from './components/Resume';

const resumeData = {
  name: "홍길동",
  email: "hong@example.com",
  phone: "010-1234-5678",
  website: "www.example.com",
  profile: "프론트엔드 개발자, React 경험 3년",
  education: [
    { school: "서울대학교", degree: "컴퓨터공학 학사", year: "2015-2019" }
  ],
  experience: [
    { position: "프론트엔드 개발자", company: "ABC Corp", year: "2019-2022", description: "React로 웹앱 개발" }
  ],
  skills: ["React", "JavaScript", "HTML/CSS"]
};

function App() {
  return <Resume data={resumeData} />;
}

export default App;
