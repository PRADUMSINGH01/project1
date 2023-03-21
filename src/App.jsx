import "./App.css";
import img from "./asset/Group.svg";
import icon1 from "./asset/1.svg";
import icon2 from "./asset/2.svg";
import icon3 from "./asset/3.svg";
import Price from "./asset/Price";
import Data from "./Data";
import Tests from "./Tests";
import Footer from "./Footer";
function App() {
  return (
    <>
      <div className=" w-[22rem] h-[40rem] lg:h-[30rem] md:w-full md:justify-around lg:w-full lg:justify-around  bg-gradient-to-r from-violet-500 to-fuchsia-500   ">
        {/* navbar start */}

        <div className=" flex justify-between items-center h-[6rem] ml-5 ">
          <div className="w-24 ">
            <img src={img}></img>
          </div>

          <div className="hidden  lg:w-[20rem] lg:flex justify-between font-custom text-white md:font-[17.px] capitalize">
            <a href="/">courses</a>
            <a href="">pricing</a>
            <a href="">About us</a>
            <a href="">contact us</a>
          </div>

          <div className="flex justify-between w-[7rem] lg:w-[13rem] items-center mr-10 cursor-pointer ">
            <div className="flex text-white font-custom">
              <span>
                <img src={icon1} alt="" />
              </span>
              <span className="hidden md:flex lg:flex">Cart</span>
            </div>

            <div className="flex text-white font-custom cursor-pointer">
              <span>
                <img src={icon2} alt="" />
              </span>
              <span className="hidden md:flex lg:flex">Account</span>
            </div>

            {/* <div className=" md:hidden lg:hidden flex text-white font-custom">
              <span>
                <img src={icon2} alt="" />
              </span>
              <span className="hidden md:flex lg:flex">Account</span>
            </div> */}



          </div>
        </div>

        {/*  nav bar end*/}

        {/* homepage start */}

        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-around flex-wrap ">

          <div className="w-full md:w-1/4 ">
            <img src={icon3} alt="" srcset="" />
         </div>

          {/* part first start */}
          <div className="font-custom w-full text-white text-3xl md:w-1/2 mb-44 lg:text-5xl  flex flex-col justify-around lg:mt-20">
            <h1 >
              Upgrade<span className = " text-white md:text-9xl">"Your"</span>Skills for
              better future...
            </h1>
            <p className="text-sm font-thin overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit
              interdum mi felis laoreet sagittis.{" "}
            </p>
            <div className="flex justify-around mt-5">
              <div className="text-sm rounded-md shadow-2xl p-1 bg-rose-400 lg:p-3 hover:border  hover:ease-out hover:delay-50 ">
                <button>Check Courses</button>
              </div>
              <div className="text-sm border p-1 shadow-2xl border-b-gray-100 rounded-lg lg:p-3 text-center hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          {/* part  first end */}

          {/* 

second part start
*/}

          {/* second part end */}

          {/* homepage end */}
        </div>
      </div>

      <div className="w-full h-[50rem]  ">


        <div className="">
          <Price/>
        </div>

        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-b-lg ">

          <Data/>
        </div>

<div className="">
  <Tests/>
</div>




<div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg  mb-44">


  <Footer/>
</div>













      </div>
    </>
  );
}

export default App;
