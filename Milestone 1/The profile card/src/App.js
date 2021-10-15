import Timing from './Component/Timing';
import Skills from './Component/Skills';
import Profile from './Component/Profile';
function App() {
  return (
    <div className="ux">
      <Profile/>
      <Skills/>
      <Timing className="name"/> 
    </div>
    
  );
}
export default App;
