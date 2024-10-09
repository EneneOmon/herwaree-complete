import { useState } from "react";
import img2 from "../assets/flower2.png";
import { FaChevronLeft, FaPhoneAlt, FaSearch } from "react-icons/fa"; // Removed FaChevronRight
import { useNavigate } from "react-router-dom";

interface Hospital {
  id: number;
  name: string;
  addresses: string[];
  state: string;
}

const hospitals: Hospital[] = [
  {
    id: 1,
    name: "Lakeshore Cancer Center",
    addresses: [
      "14, Amodu Tijani Close, Victoria Island, Lagos",
      "5A, Oladokunwa Crescent, Ikeja GRA, Lagos",
    ],
    state: "Lagos",
  },
  {
    id: 2,
    name: "Marcelle Ruth Cancer Center and Specialist Hospital",
    addresses: ["1192D, Olubosi Close, Victoria Island, Lagos"],
    state: "Lagos",
  },
  {
    id: 3,
    name: "Lily's Women’s Breast Care Center",
    addresses: [
      "17, Kafi Street, Omotsola Mall, Alausa, Ikeja, Lagos",
      "23A Adebisi Oguniyi Crescent, Lekki Phase 1, Lagos",
    ],
    state: "Lagos",
  },
  {
    id: 4,
    name: "MeCure Cancer Care Center",
    addresses: ["Nitel Road, Mushin Lagos 102215, Lagos"],
    state: "Lagos",
  },
  {
    id: 5,
    name: "Eko Hospital",
    addresses: [
      "31, Mobolaji Bank Anthony Way, Opebi, Lagos",
      "2, Lalupon Close, Ikoyi, Lagos 106104, Lagos",
      "Akerele Street, Surulere, Lagos 101241, Lagos",
    ],
    state: "Lagos",
  },
  {
    id: 6,
    name: "St. Nicholas Hospital",
    addresses: [
      "57, Campbell St, Lagos Island, Lagos 101001, Lagos State",
      "2, Farmhold Street, Anthony Village, Lagos 106102, Lagos State",
      "7b, Etim Inyang, off Muri Okunola Street, Victoria Island, Lagos State ",
    ],
    state: "Lagos",
  },

  {
    id: 7,
    name: "Iwosan Lagoon Hospital",
    addresses: [
      "17b, Bourdillon Road, Ikoyi, Lagos 106104, Lagos State",
      "91, Obafemi Awolowo Way, Ikeja, Lagos 101233, Lagos State",
    ],
    state: "Lagos",
  },

  {
    id: 8,
    name: "First Consultant Medical Center",
    addresses: ["16-24, St Gregory College Road, Lagos Island, Lagos State"],
    state: "Lagos",
  },
  {
    id: 9,
    name: "Evercare Hospital",
    addresses: [
      "1, Admiralty Way, Bisola Durosinmi Etti, Lekki Phase 1, Lagos 106104, Lagos State",
    ],
    state: "Lagos",
  },
  {
    id: 10,
    name: "Reddington Hospital",
    addresses: [
      "12, Idowu Martins Street, Victoria Island, Lagos State",
      "39, Isaac John Street, Ikeja GRA, Lagos State",
      "6, Oladipo Bateye Road, Ikeja GRA, Lagos State",
      "6, Maitama  Sule Street, Ikoyi, Lagos State",
      "15C, Admiralty Way, Lekki Phase 1, Lekki 106104, Lagos State",
    ],
    state: "Lagos",
  },

  {
    id: 11,
    name: "Lagos State University Teaching Hospital (LASUTH)",
    addresses: ["1-5 Oba Akinjobi Way,Ikeja 101233, Lagos State"],
    state: "Lagos",
  },

  {
    id: 12,
    name: "Lagos  University Teaching Hospital (LUTH)",
    addresses: ["Ishanga Road, Idi-Araba, Lagos 102215, Lagos State"],
    state: "Lagos",
  },

  {
    id: 13,
    name: "Leah Medical Center",
    addresses: [
      "Abdulkareem Adisa Street, GRA, Ilorin 240222, Ilorin, Kwara State",
    ],
    state: "Kwara",
  },
  {
    id: 14,
    name: "Pentacare Hospital",
    addresses: [
      "Moronranti Tolani Street, Fate Tanke Road, Off Umaru Audi Road, Ilorin, Kwara State.",
    ],
    state: "Kwara",
  },
  {
    id: 15,
    name: "KWASUTH",
    addresses: ["General Taiwo, Ilorin, Kwara State"],
    state: "Kwara",
  },

  {
    id: 16,
    name: "UITH",
    addresses: ["Along Oke-Ose, PMB 1459,Ilorin, Kwara State"],
    state: "Kwara",
  },
];

const Hospitals = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(
    null
  );

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleHospitalClick = (hospital: Hospital) => {
    setSelectedHospital(hospital);
  };

  //   const handleBack = () => {
  //     setSelectedHospital(null);
  //   };

  return (
    <div className="min-h-screen bg-white p-4 relative overflow-x-hidden">
      {/* Flower Image */}
      <div className="absolute -top-8 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      {/* Conditionally Render Based on Hospital Selection */}
      {selectedHospital ? (
        <div className="pt-12">
          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <div
              className="p-2 rounded-full"
              style={{
                background: "linear-gradient(to right, #b976c5, #b390c9)",
              }}
              onClick={() => navigate(-1)}
            >
              <FaChevronLeft className="text-2xl text-white cursor-pointer" />
            </div>
          </div>

          {/* Hospital Title */}
          <h1 className="text-xl font-bold text-pink-500 mb-6 text-center">
            {selectedHospital.name}
          </h1>

          {/* Hospital Addresses */}
          <div className="space-y-4">
            {selectedHospital.addresses.map(
              (address: string, index: number) => (
                <div key={index} className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">{address}</p>
                  <button
                    className="flex items-center justify-center w-8 h-8 rounded-full mt-2"
                    style={{
                      background: "linear-gradient(to right, #b976c5, #b390c9)",
                    }}
                  >
                    <FaPhoneAlt className="text-white w-4 h-4" />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        // Hospital List View
        <div>
          {/* Chevron at the Top for Header */}
          <div className="flex justify-between items-center mb-6">
            <div
              className="p-2 rounded-full"
              style={{
                background: "linear-gradient(to right, #b976c5, #b390c9)",
              }}
              onClick={() => console.log("Back")} // You can add functionality if needed
            >
              <FaChevronLeft className="text-2xl text-white cursor-pointer" />
            </div>

            <h1
              className="text-lg font-bold "
              style={{
                color: "linear-gradient(to right, #b976c5, #b390c9)",
              }}
            >
              List of Hospitals
            </h1>
            {/* Empty div for layout spacing, no button here */}
            <div></div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search a hospital"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <FaSearch className="w-5 h-5 text-gray-400 absolute top-2 right-3" />
          </div>

          {/* Hospital List */}
          <div>
            {/* Lagos Header */}
            <p className="text-gray-800 text-xs mb-2">Lagos</p>
            <ul className="mb-6">
              {filteredHospitals
                .filter((hospital) => hospital.state === "Lagos")
                .map((hospital) => (
                  <li
                    key={hospital.id}
                    className="py-3 px-3 mb-2 rounded-lg bg-pink-50 cursor-pointer"
                    onClick={() => handleHospitalClick(hospital)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="font-semibold text-sm text-gray-800">
                          {hospital.id}. {hospital.name}
                        </h2>
                        {hospital.addresses.map((address, index) => (
                          <p key={index} className="text-xs text-gray-600 mb-2">
                            {address}
                          </p>
                        ))}
                      </div>
                      <button
                        className="flex items-center justify-center w-8 h-8 rounded-full"
                        style={{
                          background:
                            "linear-gradient(to right, #b976c5, #b390c9)",
                        }}
                      >
                        <FaPhoneAlt className="text-white w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>

            {/* Kwara Header */}
            <p className="text-gray-800 text-xs mb-2">Kwara</p>
            <ul>
              {filteredHospitals
                .filter((hospital) => hospital.state === "Kwara")
                .map((hospital) => (
                  <li
                    key={hospital.id}
                    className="py-3 px-3 mb-2 rounded-lg bg-pink-50 cursor-pointer"
                    onClick={() => handleHospitalClick(hospital)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="font-semibold text-sm text-gray-800">
                          {hospital.id}. {hospital.name}
                        </h2>
                        {hospital.addresses.map((address, index) => (
                          <p key={index} className="text-xs text-gray-600 mb-2">
                            {address}
                          </p>
                        ))}
                      </div>
                      <button
                        className="flex items-center justify-center w-8 h-8 rounded-full"
                        style={{
                          background:
                            "linear-gradient(to right, #b976c5, #b390c9)",
                        }}
                      >
                        <FaPhoneAlt className="text-white w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hospitals;
