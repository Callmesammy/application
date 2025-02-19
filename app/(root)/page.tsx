import HeaderComponent from "./_components/Header";
import Latest from "./_components/latest-project";
import Principles from "./_components/Principles";

const HomePage = () => {
    return ( 
        <div className="w-full min-h-screen flex flex-col bg-green-950/80">
            
            {/* Header */}
            <HeaderComponent />

            <div className="w-full  flex-grow  pt-6 pb-6  bg-green-950/80 bg-gradient-to-l via-white/15 from-black/5 to-black-5">
                <h1 className=" font-bold px-4 text-2xl text-white">Latest Projects</h1>
                <Latest />
               
            </div>
            <div className=" bg-green-50  rounded-tl-[9rem] rounded-br-[9rem] flex flex-grow w-full min-h-[33rem]">
                <Principles/> 
            </div>
        </div>
    );
};

export default HomePage;
