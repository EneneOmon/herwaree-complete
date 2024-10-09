import React from "react";

interface DoctorCardProps {
  doctor: {
    name: string;
    specialty: string;
    description: string;
    location: string;
  };
  onBookSession: (name: string) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookSession }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold">{doctor.name}</h2>
      <p className="text-gray-700">{doctor.specialty}</p>
      <p className="text-gray-500">{doctor.location}</p>
      <p>{doctor.description}</p>
      <button
        onClick={() => onBookSession(doctor.name)}
        className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md"
      >
        Book a session
      </button>
    </div>
  );
};

export default DoctorCard;
