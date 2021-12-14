import logo from './logo.svg';
import './App.css';
import img1 from "./imageInSrc.jpg"
function App() {
  return (
    <div className="App">
      <div style= {{ border : "solid 1px black", maxWidth :"100vw"}} >

<h1 className="title red">Your name here</h1>

<br />

<img src={img1} alt=""/>

<br/>

<img src="/imageInPublic.jpg" alt="" />



<video width={320} height={240} controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
</div>
</div>
    
  );
  }

export default App;
