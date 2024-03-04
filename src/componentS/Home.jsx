import React from "react";
import "../App.css";
import personImg from "../assets/personwithbag.png";
import Voucher from "../assets/voucher.png";
import bgimg from "../assets/Sativa1.png";
import recimg1 from "../assets/image14.png";
import recimg2 from "../assets/image15.png";
import a1 from "../assets/ua1.png";
import a2 from "../assets/ua2.png";
import a3 from "../assets/ua3.png";
import howitwork from "../assets/Frame3.png";
import perwithphone from "../assets/Frame4.png";

function Home() {
  return (
    <div>
      <div className="container flex justify-between items-center">
        <div className="mx-40">
        <div className="font-bold text-5xl">
          <h1>
            No <span class="text-orange-500">Middleman</span>,
          </h1>
          <h1>Just Maximum</h1>
          <h1>
            {" "}
            <span className="text-green-600">Freshness</span>
          </h1>
          <button className="bg-green-500 text-white px-5 py-4 rounded flex items-center space-x-2 hover:bg-orange-600 mr-12 mt-8">
            <img src={Voucher} alt="Button Icon" className="" />
            <span className="text-2xl">GET COUPONS</span>
          </button>
        </div>
        </div>
        <div class="personimg">
          <img src={personImg} alt="" />
        </div>
      </div>

      <div className="border-1 w-2/4 px-8 py-3 absolute left-1/4 shadow-2xl flex justify-center">
        <div className="flex items-center space-x-10">
          <h2 className="text-2xl font-bold">Launching Our Mobile App Soon</h2>
          <button className="bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-600 ">
            <span className="text-2xl">NOTIFY ME</span>
          </button>
        </div>
      </div>

      <div>
        <div className="relative">
          <img className="w-screen" src={bgimg} alt="" />
          <div className="absolute top-60 left-20 w-1/3 text-white space-y-4">
            <h2 className="text-5xl py-5 font-bold">WHO WE ARE</h2>
            <p>
              At Vegan Basket, where our passion for fresh, locally sourced
              vegan produce meets the convenience of urban living.
            </p>
            <p>
              Founded with a vision to connect city dwellers with the essence of
              the farm, we're on a mission to redefine the way you experience
              your daily nourishment.
            </p>
            <p>
              Our mission is simple yet impactful: connect you directly with
              farmers to bring you the finest, locally grown, and seasonal vegan
              products.{" "}
            </p>
            <p>
              Say goodbye to the middleman, and say hello to affordable,
              top-quality produce.
            </p>
            <div className="text-2xl font-bold pt-10">
              <h2>Recognized by</h2>
              <div className="flex space-x-5 py-4">
                <img src={recimg1} alt="" />
                <img src={recimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-center text-4xl font-semibold pb-5">
          OUR UNIQUE APPROACH
        </h1>
        <div className="flex flex-row space-x-5 py-4 justify-between p-40 pt-20 pb-20">
          <div className="size-60 space-y-5">
            <img src={a1} alt="" />
            <h1 className="font-semibold text-2xl">Farm-to-Table Goodness</h1>
            <p>
              We bridge the gap between rural farms and your urban home. By
              eliminating unnecessary intermediaries, we ensure that you receive
              the freshest products at prices that won't break the bank.
            </p>
          </div>
          <div className="size-60 space-y-5">
            <img src={a2} alt="" />
            <h1 className="font-semibold text-2xl">
              Supporting Local Agriculture
            </h1>
            <p>
              {" "}
              Your choice to shop with us directly contributes to the
              livelihoods of local farmers. With each purchase, you're
              empowering sustainable agriculture and helping communities thrive.
            </p>
          </div>
          <div className="size-60 space-y-5">
            <img src={a3} alt="" />
            <h1 className="font-semibold text-2xl">Quality and Freshness</h1>
            <p>
              Our vegan baskets are curated with care, containing only the
              highest quality fruits and vegetables. You can trust that every
              bite is bursting with flavor and nutrients.
            </p>
          </div>
        </div>
      </div>

      <img  className='mx-60 pt-20'src={howitwork} alt="" />

      <div className="px-40">
        <div className="flex justify-items-center p-5 ">
          <div className="w-1/2 space-y-5 p-10 ">
            <h1 className="text-4xl font-bold">
              ENGAGE AND <span className="text-green-500">SAVE</span>
            </h1>
            <h2 className="text-2xl font-semibold">
              Take Our Quick Survey for Exclusive Coupons
            </h2>
            <p>
              Your valuable insights help us continue to deliver the exceptional
              service you deserve.{" "}
            </p>
            <p>
              By participating in the survey, you're not only helping us, but
              you're also helping us{" "}
              <span className="font-bold">
                support local farmers and promote sustainable agriculture.
              </span>
            </p>
          </div>
          <div className="right-0 pt-10 space-y-4">
            <div className="shadow-2xl p-5 hover:shadow-green-500 space-y-5 w-3/3 rounded-lg">
              <h1 className="text-4xl font-bold">🌱 Shape Your Experience :</h1>
              <p>
                Your feedback helps us understand your needs and preferences,
                allowing us to curate vegan baskets that align with your tastes.
              </p>
            </div>
            <div className="shadow-2xl p-5 bg-green-400 hover:shadow-green-500 space-y-5 w-3/3 rounded-lg">
              <h1 className="text-4xl font-bold">🌻 Enjoy Exclusive Savings</h1>
              <p>
                Your feedback helps us understand your needs and preferences,
                allowing us to curate vegan baskets that align with your tastes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative left-1/3 p-5">
            <button className="bg-green-600 text-white px-5 py-3 rounded-lg space-x-2 hover:bg-orange-600 left-5">
              <span className="text-2xl font-semibold">TAKE SURVEY NOW</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="relative">
          <img className="w-screen" src={perwithphone} alt="" />
          <h1 className="absolute top-10 justify-center left-1/3 text-4xl text-white font-bold">WE LAUNCHING OUR APP SOON !</h1>
          <div className="absolute top-40 left-40">
            <div className="bg-white text-black p-4  w-4/12 space-y-4 rounded-lg shadow-2xl">
              <h1 className="text-2xl font-bold">Seamless Shopping</h1>
              <p>Explore our full range of vegtables and fruits and products effortlessly, and place your orders with a few taps.</p>
            </div>
            <div className="bg-green-400 text-white border-2 border-white p-4  -mt-4 w-4/12 space-y-4 rounded-lg shadow-2xl relative left-40">
              <h1 className="text-2xl font-bold">Personalized Recommendations</h1>
              <p>Receive tailored product suggestions based on your preferences and previous purchases.</p>
            </div>
            <div className="bg-white text-black p-4 -mt-2 w-4/12 space-y-4 rounded-lg shadow-2xl">
              <h1 className="text-2xl font-bold">Quick and Secure Checkout</h1>
              <p>Enjoy a smooth and secure checkout process for a hassle-free shopping experience.</p>
            </div>

            <div className="relative left-20 pt-20">
            <button className="bg-orange-600 text-white px-20 py-3 rounded-lg space-x-2">
              <span className="text-2xl font-semibold">NOTIFY ME</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
