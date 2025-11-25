import { github } from "../assets/Image";




export default function ProjectInfo() {
    


     const styles = {
          images1: {
               width: "50px",
               height: "50px",
               objectFit: "cover",
               marginRight: 10

          }
     }
     return (
          <div>
              
               <div className="cardpage">
                     <h2 className="metal-regular titlestyle">
                         Project.
                    </h2>
                    {/*프로젝트 1*/}
                    <div className="project-info-card">
                         <div className="value" style={{ display: "flex" }}>
                              <h1>(메인)생성형 AI를 활용한 PDF 분류 프로젝트</h1>
                              <a style={{ padding: "15px" }} href="https://github.com/caker456/Main_Project_Fianal" target="_blank">
                                   <img src={github} style={styles.images1}>
                                   </img>
                              </a>
                         </div>

                         <div className="project-info-row">
                              <span className="label">작업 기간</span>
                              <span className="value">2025.10.13 ~ 2025.11.13</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">구현 유형</span>
                              <span className="value">팀(협동) 구현</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">팀 규모</span>
                              <span className="value">3명</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">운영 전략</span>
                              <span className="value">AI기술을 활용하여 문서 카테고리 분류</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">역할</span>
                              <span className="value">FastAPI를 사용하여 DB의 데이터들의 Backend작업을 진행했습니다.</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">Language</span>
                              <span className="value">Pyton, HTML, CSS, JavaScript</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">OS</span>
                              <span className="value">Windows</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">Tools</span>
                              <span className="value">Gemma3, BERT, PaddleOCR-VL, React-VITE, Visual Studio Code, FastAPI</span>
                         </div>



                    </div>
                    {/*프로젝트 2*/}

                    <div className="project-info-card">



                         <div className="value" style={{ display: "flex" }}>
                              <h1>(미니)PDF문서 요약 웹 페이지 제작</h1>

                              <a style={{ padding: "15px" }} href="https://github.com/caker456/Main_Project" target="_blank">
                                   <img src={github} style={styles.images1}>
                                   </img>
                              </a>
                         </div>


                         <div className="project-info-row">
                              <span className="label">작업 기간</span>
                              <span className="value">2025.09.24 ~ 2025.10.13</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">구현 유형</span>
                              <span className="value">팀(협동) 구현</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">팀 규모</span>
                              <span className="value">4명</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">운영 전략</span>
                              <span className="value">AI기술을 활용한 pdf문서 요약</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">역할</span>
                              <span className="value">Git을 통해 협업으로 React의 Frontend작업을 진행했습니다.</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">Language</span>
                              <span className="value">Python, HTML, CSS, JavaScript</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">OS</span>
                              <span className="value">Windows</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">Tools</span>
                              <span className="value">PostgreDB, Paddle-ocr, React, Visual Studio Code, FastAPI</span>
                         </div>



                    </div>
               </div>
               <div className="cardpage">
                    {/*프로젝트 3*/}
                     <h2 className="metal-regular titlestyle">
                         Project.
                    </h2>
                    <div className="project-info-card">
                         <div className="value" style={{ display: "flex" }}>
                              <h1>(메인)SpringBoot를 사용한 쇼핑몰</h1>

                              <a style={{ padding: "15px" }} href="https://github.com/hun205da/shoppingmall" target="_blank">
                                   <img src={github} style={styles.images1}>
                                   </img>
                              </a>
                         </div>

                         <div className="project-info-row">
                              <span className="label">작업 기간</span>
                              <span className="value">2022/11 ~ 2023/01</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">구현 유형</span>
                              <span className="value">팀(협동) 구현</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">팀 규모</span>
                              <span className="value">3명</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">운영 전략</span>
                              <span className="value">자바 스프링부트를 활용하여 쇼핑몰 제작</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">역할</span>
                              <span className="value">Controller및 DTO를 통해 백엔드 작업 및 Html프론트 작업을 진행했습니다.</span>
                         </div>
                         <div className="project-info-row">
                              <span className="label">Language</span>
                              <span className="value">HTML, CSS, JavaScript</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">OS</span>
                              <span className="value">Windows</span>
                         </div>

                         <div className="project-info-row">
                              <span className="label">Tools</span>
                              <span className="value">JPA, JavaSpringBoot, MariaDB, Heidisql, Visual Studio Code</span>
                         </div>


                    </div>
               </div>
          </div>
     );

}