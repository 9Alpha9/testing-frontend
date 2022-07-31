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
        <div className="pl-28 p-7 flex flex-col main-wrapper xl:pl-32">
         <div className="nav-top nav-breadcrumb rounded-md ">
          <ol className=" flex justify-between">
            <li><a href=" # " className="text-gray-400 hover:text-gray-600">Perusahaan</a></li>
            <li><a href=" # " className="text-gray-700">Mitramas Infosys Global</a></li>
          </ol>
          </div>
         {/* Container Page */}
        <div className="grid grid-cols-1 gap-6 mt-10 xl:grid-cols-2 md:grid-cols-2">
          {/* Mitramas Info */}
          <div className="bg-white shadow-xl card rounded-md">
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
          <div className="flex flex-col">
            <div className="bg-slate-500">...............</div>
           <div className="grid grid-cols-2">
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
