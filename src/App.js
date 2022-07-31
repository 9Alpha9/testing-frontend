import React from "react";
import { FaAtlassian, FaHome, FaTicketAlt, FaClipboardCheck, FaStore, FaRegBuilding, FaUserFriends, FaBuffer, FaBoxOpen, FaCompressArrowsAlt, FaSearchDollar, FaIdBadge, FaPencilAlt} from "react-icons/fa";
import './style/dashbord.css';
import logo from './brand/logo-brand.jpeg';
import background from './brand/background.jpeg';

console.log(logo);

function App() {
  return (
    <div className="flex bg-green-50 wrapper">
      <div className="w-20 h-screen bg-white  pt-5 sidebar drop-shadow-2xl fixed">
        <div className="logo-brand ">
          <FaAtlassian  className="content-center text-center text-2xl text-green-800 m-auto justify-center"/>
        </div>
        <div className="sidebar-menu content-center text-center m-auto justify-center pt-12">
          <ul className="sidenar-link">
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaHome className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer"/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaTicketAlt className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer"/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaClipboardCheck className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer "/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaStore className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer"/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaRegBuilding className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer"/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaUserFriends className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer"/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaBuffer className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer"/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaBoxOpen className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer"/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaCompressArrowsAlt className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer "/></a>
              </li>
            <li className="hover:bg-green-100 p-6 cursor-pointer hover:pr-5 ease-out duration-300">
              <a href=" # "><FaSearchDollar className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer "/></a>
              </li>
            <li className="hover:bg-green-100 mt-16 p-6 hover:pr-5 ease-out duration-300">
              <a href=" # "><FaIdBadge className="content-center text-center m-auto justify-center text-xl text-gray-400 cursor-pointer "/></a>
              </li>
          </ul>
        </div>
      </div>
      {/* Main Wrapper  */}
        <div className="pl-28 p-7 flex flex-col main-wrapper xl:pl-32 w-full">
         <div className="nav-top nav-breadcrumb rounded-md ">
          <ol className=" flex justify-between">
            <li><a href=" # " className="text-gray-400 hover:text-gray-600">Perusahaan</a></li>
            <li><a href=" # " className="text-gray-700">Mitramas Infosys Global</a></li>
          </ol>
          </div>
         {/* Container Page */}
        <div className="flex flex-col gap-6 mt-10 xl:flex-row">
          {/* Mitramas Info */}
          <div className="bg-white shadow-xl card rounded-md xl:w-6/12">
            <div className="mitramas-bg bg-container">
              <img className="background-mitramas rounded-tl-md rounded-tr-md" src={background} alt="Background" />
              <img className="logo-mitramas shadow-lg border-gray-500" src={logo} alt="Mitramas Logo" />
            </div>
            <h1 className="text-center mitramas-heading font-semibold">Mitramas Infosys Global</h1>
           <h3 className="sub-mitramas text-center mb-8 text-gray-400 mt-4">Layanan IT</h3>
           <div className="setting-profile text-green-600 flex align-middle justify-center mb-4">
            <a href=" #" className="flex flex-row gap-2 " ><FaPencilAlt /> Sunting profil</a>
           </div>
           <div className="mb-20 status p-10 flex flex-col">
            <span className="text-gray-400">Status Perusahaan</span>
            {/* Web Status */}
            <div className="grid grid-cols-2 mt-2 gap-40">
              <span className="status mt-2"> Aktif</span>
              <span className="status mt-2"> Aktif</span>
              </div>
           {/* Web Content Info */}
           <div className="sub-status flex mt-5 flex-col">
            <ul>
              <li className="text-gray-400 mt-2">
                <span>Singkatan</span>
                </li>
              <li className="mt-2">
                <span>MIG</span>
                </li>
              <li className="text-gray-400 mt-2">
                <span>Alamat Perusahaan</span>
                </li>
              <li className="mt-2">
                <span>Jl. Tebet Raya No.42, Jakarta Selatan</span>
                </li>
              <li className="text-gray-400 mt-2">
                <span>Penanggung Jawab (PIC)</span>
                </li>
              <li className="mt-2">
                <span>John Doe</span>
                </li>
              <li className="text-gray-400 mt-2">
                <span>Tanggal PKP</span>
                </li>
              <li className="mt-2">
                <span>03 Maret 2021</span>
                </li>
            </ul>
           </div>
           {/* End Web Content Info */}
           </div>
           {/* End Web Status */}
            </div>
          {/* End Mitramas Info*/}
          <div className="flex flex-col w-full">
            <div className="bg-white shadow-lg rounded-md">
              {/* Location Side */}
              <span className="justify-between location-side flex p-5">
                <h1>Lokasi</h1>
                <span>Lihat semua</span>
              </span>
              <div className="grid grid-cols-1 gap-3 p-3 mb-4 xl:grid-cols-3">
                {/* Building Side */}
              <div className="bg-green-600 justify-between text-white card rounded-md">
               <div className="flex wrap p-4">
                <FaRegBuilding className="xl:text-5xl text-5xl"/>
                <div className="flex flex-col ">
                <span className="lo-text text-3xl text-end">20</span>
                <span className="building-text">Induk</span>
                </div>
               </div>
              </div>
                {/* End Building Side */}
                {/* Building Side */}
              <div className="bg-green-600 justify-between text-white card rounded-md">
               <div className="flex wrap p-4 ">
                <FaRegBuilding className="xl:text-5xl text-5xl"/>
                <div className="flex flex-col jusify-items-end">
                <span className="lo-text text-3xl text-end">3</span>
                <span className="building-text">Sub Lokasi Level 1</span>
                </div>
               </div>
              </div>
                {/* End Building Side */}
                {/* Building Side */}
              <div className="bg-green-600 justify-between text-white card rounded-md">
               <div className="flex wrap p-4">
                <FaRegBuilding className="xl:text-5xl text-5xl"/>
                <div className="flex flex-col ">
                <span className="lo-text text-3xl text-end">1</span>
                <span className="building-text">Sub Lokasi Level 2</span>
                </div>
               </div>
              </div>
                {/* End Building Side */}
                
              </div>
              {/* End Location Side */}
            </div>
           <div className="grid grid-cols-2">
            {/* Bank Akun */}
            {/* End Bank Akun */}
            <div>...............</div>
            <div>...............</div>
            </div>
            </div>
        </div>
         {/* End  Container Page */}
         </div>
        </div>
    );
}

export default App;
