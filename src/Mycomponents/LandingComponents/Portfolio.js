import React from "react";
import './Portfolio.css'
import logo1 from './Logo1.png'
import logo2 from './Logo2.jpg'
import logo3 from './Logo3.png'
import logo4 from './Logo4.png'
import logo5 from './Logo5.jpg'
import logo6 from './Logo6.png'

const Portfolio = () => {

  return (
    <>
      <div className="  overflow-hidden">
        <div className="  w-full   flex flex-wrap flex-col md:flex-row items-center bg-gray-50 p-6 " >


          <div className=" flex flex-col w-full md:w-1/2  items-start ">

            <div className=" text-3xl text-center">
              HEADING
            </div>
            <p className=" text-xl text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis eos nisi consequuntur? Harum, dolor a modi distinctio iusto ipsam dolorem? Voluptatum commodi provident obcaecati.</p>
            
          </div>

          <div className="w-full md:w-1/2 py-6 text-center">
            <div className='mt-10 md:mt-20 '>
             <section className="bg-white py-3  md:py-6 h-full  shadow-lg rounded-lg" >
                <div className="container  mx-auto flex flex-wrap pt-4 pb-12">
                  <h1 className="
                w-full
                my-2
                text-3xl
                font-medium
                leading-tight
                text-center text-gray-800
              ">
                    Our Partners
                  </h1>
                  <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-40 md:w-64 opacity-25 my-0 py-0 rounded-t"></div>
                  </div>
                  <div className="w-full   md:w-1/3 p-0 flex flex-col flex-grow flex-shrink">
                    <div className="
                  flex-1
                  bg-white
                  overflow-hidden
                  mb-12
                ">
                      <div className="mt-16">
                        <a href="https://www.hiration.com/job-search/free-resume-builder/?gclid=Cj0KCQjw8IaGBhCHARIsAGIRRYrUxG0mw9_fhr73O1o0m-AZZWw3P9KDtjBLxB7B8cXIJjPL2M9Tx2kaAuo6EALw_wcB">
                          <img className=" h-8 w-36 md:w-36 md:h-8 m-auto align-baseline" src={logo1} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full  md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div className="
                  flex-1
                  bg-white
                  mb-12
                  overflow-hidden
                ">
                      <div className="md:mt-14">
                        <a href="https://marwaricatalysts.com/">
                          <img className=" w-44 h-12 m-auto align-baseline" src={logo2} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full   md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div className="
                  flex-1
                  bg-white
                  mb-12
                  overflow-hidden
                ">
                      <div className="md:mt-16">
                        <a href="https://razorpay.com/?utm_adgroup=brandsearch_core&utm_gclid=Cj0KCQjw8IaGBhCHARIsAGIRRYrtt56ipBzsWEYmePHHooMEOGodS81P-WRpdsezhoUU5HJfCseKjP8aAlM0EALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=brandsearch&utm_term=razorpay&hsa_src=g&hsa_ad=430853793014&hsa_kw=razorpay&hsa_mt=e&hsa_acc=9786800965&hsa_net=adwords&hsa_ver=3&hsa_grp=27293859910&hsa_tgt=aud-368450393986:kwd-337200051286&hsa_cam=400139470&gclid=Cj0KCQjw8IaGBhCHARIsAGIRRYrtt56ipBzsWEYmePHHooMEOGodS81P-WRpdsezhoUU5HJfCseKjP8aAlM0EALw_wcB">
                          <img className="w-40 h-12 md:w-40 md:h-10 m-auto align-baseline " src={logo3} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full   md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div className="
                  flex-1
                  bg-white
                  mb-12 md:mb-8
                  overflow-hidden
                ">
                      <div className="mt-4">
                        <a href="https://www.ggtv.co/">
                          <img className="w-40 h-24 md:w-36  md:h-24 m-auto align-baseline" src={logo4} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full   md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div className="
                  flex-1
                  bg-white
                  mb-4 md:mb-8
                  overflow-hidden
                ">
                      <div className=" ">
                        <a href="https://www.zostel.com/">
                          <img className="w-36 h-36 md:w-32 md:h-32 m-auto align-baseline " src={logo6} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full   md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div className="
                  flex-1
                  bg-white
                  
                  overflow-hidden
                ">
                      <div className=" ">
                        <a href="https://startupgyaan.com/">
                          <img className=" w-24 h-24 md:w-24 md:h-24 m-auto align-baseline " src={logo5} alt="img" />
                          <p className="text-center font-normal text-xl md:text-2xl">StartupGyaan</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
             

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
