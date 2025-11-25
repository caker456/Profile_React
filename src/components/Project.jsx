
import { pptimg,github } from "../assets/Image";

export default function Project(){
    const styles = {
    images1 : {
        width: "50px", 
        height: "50px", 
        objectFit: "cover" ,
        marginRight : 10
        
    }
}
    return(
        <div>
            <h2 className="metal-regular titlestyle">
                Project.
            </h2>
            <div className="project-row hcenter">
                <div className="project-name">(메인)문서 분류 프로젝트</div>
                <div className="project-name">팀 프로젝트</div>
                <div className="project-period">2025/09 ~ 2025/11</div>
                <div className="project-link">
                    <a href="https://github.com/caker456/Main_Project_Fianal"><img src = {github} style={styles.images1}></img></a>
                </div>
                <div className="project-link">
                    <a href="https://docs.google.com/presentation/d/19hyIFBnIvNcDEBMFL2y8fb3s4T2dy-pS/edit?rtpof=true"><img src = {pptimg} style={styles.images1}></img></a>
                </div>
                
            </div>
            <div className="project-row hcenter">
                <div className="project-name">(미니)PDF 요약 프로젝트</div>
                <div className="project-name">팀 프로젝트</div>
                <div className="project-period">2025/09 ~ 2025/10</div>
                <div className="project-link">
                    <a href="https://github.com/caker456/Main_Project"><img src = {github} style={styles.images1}></img></a>
                </div>
                <div className="project-link">
                    <a href="https://docs.google.com/presentation/d/1Pp-waiOAVpqmGjteBpNcubT-7zy45Ca3/edit?slide=id.p1#slide=id.p1"><img src = {pptimg} style={styles.images1}></img></a>
                </div>
                
            </div>
            <div className="project-row hcenter">
                <div className="project-name">(메인)쇼핑몰</div>
                <div className="project-name">팀 프로젝트</div>
                <div className="project-period">2022/07 ~ 2023/01</div>

                {/* 4번째 칸 */}
                <div className="project-link">
                    <a href="https://github.com/hun205da/shoppingmall">
                        <img src={github} style={styles.images1} />
                    </a>
                </div>

                {/* 5번째 칸 → 비어있는 칸 유지 */}
                <div className="project-link"></div>
            </div>

{/*
            <div className="project-row hcenter">
                <div className="project-name">게임 제작</div>
                <div className="project-name">팀 프로젝트</div>
                <div className="project-period">2021/03 ~ 2021/12</div>

                <div className="project-link">
                    <a href="https://github.com/caker456/monsterhunterDun">
                        <img src={github} style={styles.images1} />
                    </a>
                </div>

           
                <div className="project-link"></div>
            </div>

*/}

            
        </div>


    );
}