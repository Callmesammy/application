import HeaderComponent from "./_components/Header";
import Latest from "./_components/latest-project";

const HomePage = () => {
    return ( 
        <div className="w-full min-h-screen flex flex-col bg-green-950/80">
            
            {/* Header */}
            <HeaderComponent />

            <div className="w-full min-h-screen flex-grow bg-gray-100 pt-6 pb-6  bg-green-950/80">
                <h1 className=" font-bold px-4 text-2xl text-white">Latest Projects</h1>
                <Latest />
            </div>
        </div>
    );
};

export default HomePage;
