import FooterPage from "./_components/footer-page";
import HeaderComponent from "./_components/Header";
import Latest from "./_components/latest-project";
import LatestThinking from "./_components/latest-thinking";
import Principles from "./_components/Principles";
import Spectrum from "./_components/Spectrum";
import Working from "./_components/Working";

const HomePage = () => {
    return ( 
        <div className="w-full max-w-scre overflow-x-clip justify-center items-center  min-h-screen flex flex-col bg-green-950/80 z-10">
            
            {/* Header */}
            <HeaderComponent />

            <div className="w-full  flex-grow  pt-6 pb-6  bg-green-950/80 bg-gradient-to-l via-white/15 from-black/5 to-black-5">
                <h1 className=" font-bold px-4 text-2xl text-white">Latest Projects</h1>
                <Latest />
               
            </div>
            <div className=" border bg-green-50  rounded-tl-[9rem] rounded-br-[9rem] flex flex-grow w-full min-h-[33rem] lg:min-h-[22rem]">
                <Principles/> 
            </div>
            <div className="w-full  flex-grow  pt-6 pb-6   bg-green-50 min-h-screen lg:min-h-[30rem]">
                <Spectrum/>
            </div>
            <div className="w-full  flex-grow     bg-green-950/80 bg-gradient-to-l via-white/15 from-black/5 to-black-5 min-h-screen">
                <Working/>
            </div>
            <div className="w-full  bg-green-50  flex-grow    lg:min-h-[70vh] min-h-[190vh] ">

                <LatestThinking/>
            </div>
            <div className="w-full  flex-grow     bg-green-950/80 bg-gradient-to-l via-white/15 from-black/5 to-black-5 min-h-[40rem]">
                <FooterPage/>
            </div>
            
        </div>
    );
};

export default HomePage;
