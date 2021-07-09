import React from "react";
import logo1 from "../LandingComponents/img/Logo1.png";
import logo2 from "../LandingComponents/img/Logo2.jpg";
import logo3 from "../LandingComponents/img/Logo3.png";
import logo4 from "../LandingComponents/img/Logo4.png";
import logo5 from "../LandingComponents/img/Logo5.jpg";
import logo6 from "../LandingComponents/img/Logo6.png";
import Marquee from "react-fast-marquee";

function Content() {
  return (
    // <div className="mt-12 md:mt-16 md:pt-4 flex flex-col items-center h-full bg-gray-100 ">
    //   <h1 className="w-full mt-6 text-3xl md:text-5xl font-bold leading-tight text-center text-gray-800">
    //     About Us
    //   </h1>

    //   <div
    //     className="shadow-xl my-6 md:my-8 mx-3 lg:mx-auto w-full md:w-4/5 lg:w-3/5 text-md md:text-xl
    //           text-gray-700 text-center md:text-left rounded-md px-8 py-6 border-2"
    //     style={{ lineHeight: "1.8em" }}
    //   >
    //     <p className="p-2">
    //       TopGun.VC builds entrepreneur’s faith in their vision and nurtures
    //       them with direction for the long war ahead.
    //     </p>
    //     <p className="p-2">
    //       We believe companies are an outcome of the vision, character and
    //       determination of their founders. We believe billion-dollar companies
    //       can be built in any market, in any geography over the next decade. So,
    //       it’s the entrepreneur who wants to make it that matters. And we love
    //       to work with the most brutal grinders out there, and there are few
    //       joys other than vicariously winning against odds.
    //     </p>
    //     <p className="p-2">
    //       We are founders ourselves and work part-time to help as many
    //       entrepreneurs as possible on their mission forward. We love equity and
    //       make sure we are participating for the long game ahead. If you would
    //       like to work with us, let us know.
    //     </p>
    //     <div className="mt-10 outline p-2">
    //       Thanks
    //       <p className="font-bold underline">Dharamveer &amp; Parth</p>
    //     </div>
    //   </div>
    // </div>

    <div className="pt-0 bg-white  overflow-hidden">
      <div className=" container   flex flex-wrap flex-col md:flex-row  bg-white p-6 ">
        <div className=" flex flex-col w-full md:w-1/2 items-start text-center md:text-left ">
          <h1 className="w-full px-12 mt-6 md:mt-32 my-2 text-4xl font-medium text-left text-blue-1000">
            Join Our Team
          </h1>
          <div className="border-b-4 mx-12 rounded-xl border-gray-700 w-12"></div>

          <div className=" px-12  md:text-l " style={{ lineHeight: "1.8em" }}>
            <p className="py-2 text-left">
              TopGun.VC builds entrepreneur’s faith in their vision and nurtures
              them with direction for the long war ahead.
            </p>
            <p className="py-2 text-left">
              We believe companies are an outcome of the vision, character and
              determination of their founders. We believe billion-dollar
              companies can be built in any market, in any geography over the
              next decade. So, it’s the entrepreneur who wants to make it that
              matters. And we love to work with the most brutal grinders out
              there, and there are few joys other than vicariously winning
              against odds.
            </p>
            <p className="py-2 text-left">
              We are founders ourselves and work part-time to help as many
              entrepreneurs as possible on their mission forward. We love equity
              and make sure we are participating for the long game ahead. If you
              would like to work with us, let us know.
            </p>
            <div className="mt-4 text-left outline py-2">
              Thanks
              <p className="font-bold underline text-left">Dharamveer &amp; Parth</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-6 text-center">
          <div className=" mt-10 md:mt-20 ">
            <section className="bg-white  py-4 h-full ">
              <div className="container  flex flex-wrap pt-4 pb-12 mr-6">
                <h1 className=" m-auto text-center my-0 text-4xl font-medium text-gray-900 border-b-4 border-gray-600 rounded-sm w-auto inline-block">
                  Our Partners
                </h1>

                <Marquee
                  gradient={false}
                  className=" hidden "
                  direction="right"
                  speed="30"
                  gradientWidth="0"
                >
                  <div className="w-full   md:w-1/3 p-0 flex flex-col flex-grow flex-shrink">
                    <div
                      className="
                  flex-1
                  bg-white
                  overflow-hidden
                  mb-16
                "
                    >
                      <div className="mt-16">
                        <a href="https://www.hiration.com/job-search/free-resume-builder/?gclid=Cj0KCQjw8IaGBhCHARIsAGIRRYrUxG0mw9_fhr73O1o0m-AZZWw3P9KDtjBLxB7B8cXIJjPL2M9Tx2kaAuo6EALw_wcB">
                          <img
                            className=" h-16 w-72 md:w-44 md:h-10 m-auto align-baseline"
                            src={logo1}
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="w-full  md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div
                      className="
                  flex-1
                  bg-white
                  mb-16
                  overflow-hidden
                "
                    >
                      <div className="md:mt-16">
                        <a href="https://marwaricatalysts.com/">
                          <img
                            className=" w-44 h-12 m-auto align-baseline"
                            src={logo2}
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="w-full   md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div
                      className="
                  flex-1
                  bg-white
                  mb-16
                  overflow-hidden
                "
                    >
                      <div className="md:mt-16">
                        <a href="https://razorpay.com/?utm_adgroup=brandsearch_core&utm_gclid=Cj0KCQjw8IaGBhCHARIsAGIRRYrtt56ipBzsWEYmePHHooMEOGodS81P-WRpdsezhoUU5HJfCseKjP8aAlM0EALw_wcB&utm_source=google&utm_medium=cpc&utm_campaign=brandsearch&utm_term=razorpay&hsa_src=g&hsa_ad=430853793014&hsa_kw=razorpay&hsa_mt=e&hsa_acc=9786800965&hsa_net=adwords&hsa_ver=3&hsa_grp=27293859910&hsa_tgt=aud-368450393986:kwd-337200051286&hsa_cam=400139470&gclid=Cj0KCQjw8IaGBhCHARIsAGIRRYrtt56ipBzsWEYmePHHooMEOGodS81P-WRpdsezhoUU5HJfCseKjP8aAlM0EALw_wcB">
                          <img
                            className="w-72 h-20 md:w-48 md:h-12 m-auto align-baseline "
                            src={logo3}
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Marquee>

                <Marquee
                  gradient={false}
                  direction="right"
                  speed="30"
                  gradientWidth="0"
                >
                  <div className="w-full   md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div
                      className="
                  flex-1
                  bg-white
                  mb-10 md:mb-8
                  overflow-hidden
                "
                    >
                      <div className="mt-4">
                        <a href="https://www.ggtv.co/">
                          <img
                            className="w-84 h-48 md:w-44  md:h-28 m-auto align-baseline"
                            src={logo4}
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="w-full   md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div
                      className="
                  flex-1
                  bg-white
                  mb-10 md:mb-8
                  overflow-hidden
                "
                    >
                      <div className=" ">
                        <a href="https://www.zostel.com/">
                          <img
                            className=" w-40 h-40 m-auto align-baseline "
                            src={logo6}
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="w-full   md:w-1/3 p-2 flex flex-col flex-grow flex-shrink">
                    <div
                      className="
                  flex-1
                  bg-white
                  mb-10 md:mb-8
                  overflow-hidden
                "
                    >
                      <div className=" ">
                        <a href="https://startupgyaan.com/">
                          <img
                            className=" w-28 h-28 m-auto align-baseline "
                            src={logo5}
                            alt="img"
                          />
                          <p className="text-center font-normal text-3xl">
                            StartupGyaan
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </Marquee>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
