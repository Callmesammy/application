import { LayoutGridDemo } from "./LayoutGridDemo";

const Working = () => {
    return ( 
        <div className="flex flex-col text-white w-full h-full  md:px-3">
            <div className="flex  h-full lg:pl-[8rem] px-10 pt-4 flex-col w-full lg:w-[40rem] space-y-4 ">
                <h1 className="text-xl  lg:text-3xl md:text-2xl"> Why Partner with Us</h1>

                <p className="text-pretty text-md px-2 ">Choosing to work with us means collaborating with a dedicated team committed to excellence, innovation, and results. We prioritize understanding your unique needs, offering tailored solutions that drive growth and success. With our expertise, reliability, and client-focused approach, we turn your goals into achievements.

Let me know if you would like any tweaks or a different tone!</p>
          
          
            </div> 
            <div className="flex  h-full">
            <LayoutGridDemo/>
</div>
        </div>
     );
}
 
export default Working;