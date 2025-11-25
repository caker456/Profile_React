import { pptimg, github } from "../assets/Image";
export default function BottomComponents() {
  
  return (
    <footer style={{paddingTop : "30px"}}  className = "bottom-fixed">
      {/* 상단 배경 바 */}
      <div
        className="metal-regular"
        style={{
          width: "100%",               
          height: "100px",
          backgroundColor: "#7f7f7fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "40px",
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
        }}
      >
      Web Developer

      <div style={{ 
        display : "flex",
        justifyContent : "center",
        marginLeft : "25px", 
        }}>
          <a href="https://github.com/caker456/Profile_React" target="_blank"> 
        <img style={{ width: "50px", height: "50px", display: "block" }}  src= {github}  />
        </a>
        <a  href="https://docs.google.com/presentation/d/1KuIbKbCCApxKobQgrDAxyne1sAuR5Zro_b5JgU4FgIk/edit?usp=sharing" target="_blank">
          <img style={{ width: "50px", height: "50px", display: "block",marginLeft : "25px" }}  src= {pptimg}  />
        </a>
      </div>

        
      
      </div>

        
 </footer>
  );
}