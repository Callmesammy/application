import HeaderComponent from "./_components/Header";
import Latest from "./_components/latest-project";

const HomePage = () => {
  
    return ( 
        <div className="w-full h-full flex flex-col bg-green-950/80 px-4 pt-3">
            <HeaderComponent/>
            <Latest/>
        </div>
     );
}
 
export default HomePage;