import BassketAttachment from "./attschment/BassketAttachment";
import BassketPlatform from "./platform/BassketPlatform";

function App() {
  return (
    <div style={{display:"flex",justifyContent: "space-around"}} >
      <BassketPlatform/>

      <div style={{width:"600px" , display:"flex", justifyContent:"center"}}>
      <BassketAttachment/>
      </div>
    </div>
  );
}

export default App;
