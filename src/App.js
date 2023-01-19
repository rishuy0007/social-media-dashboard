import Header from "./components/Header";
import  Followers  from "./components/Followers";
import Overview  from "./components/Overview";

function App() {
  return (
    <>
    
    <section className="p-8  dark:bg-slate-900 h-full lg:h-screen">
    <div className="bg-slate-100 dark:bg-slate-800 h-52 w-full top-0 left-0 absolute rounded-b-3xl  " style={{zIndex:-1,}}>
</div>
      <Header/>
      <Followers/>
      <Overview/>
    </section>
      



    <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Rishabh Yadav</a>.
  </div>
    </>
  );
}

export default App ;
