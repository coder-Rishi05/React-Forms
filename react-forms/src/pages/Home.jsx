import Nav from "../pages/Nav";
import Design from "./Design";



const Home = () => {
  return (
    <div data-theme="forest" className="w-full h-screen flex flex-wrap gap-10  bg-zinc-800 p-10 ">
      <Nav />
      <Design />
      
    </div>
  );
};

export default Home;
