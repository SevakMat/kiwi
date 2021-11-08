import BassketAttachment from "./BassketAttachment";
import BassketPlatform from "./BassketPlatform";

function App() {
  return (
    <div style={{display:"flex",justifyContent: "space-around"}} >
      <BassketPlatform/>
      <BassketAttachment/>
    </div>
  );
}

export default App;
