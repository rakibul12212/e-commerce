import { data } from "@/data/districtData";
import React, { useState } from "react";

const Dropdown = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedUnion, setSelectedUnion] = useState("");
  const [location, setLocation] = useState({
    division: "",
    district: "",
    upazila: "",
    union: "",
  });
  console.log(location);
  const handleDivisionChange = (e) => {
    const newDivision = e.target.value;
    setSelectedDivision(newDivision);
    setSelectedDistrict("");
    setSelectedUpazila("");
    setSelectedUnion("");
    setLocation({
      division: newDivision,
      district: "",
      upazila: "",
      union: "",
    });
  };

  const handleDistrictChange = (e) => {
    const newDistrict = e.target.value;
    setSelectedDistrict(newDistrict);
    setSelectedUpazila("");
    setSelectedUnion("");
    setLocation({
      ...location,
      district: newDistrict,
      upazila: "",
      union: "",
    });
  };

  const handleUpazilaChange = (e) => {
    const newUpazila = e.target.value;
    setSelectedUpazila(newUpazila);
    setSelectedUnion("");
    setLocation({
      ...location,
      upazila: newUpazila,
      union: "",
    });
  };

  const handleUnionChange = (e) => {
    const newUnion = e.target.value;
    setSelectedUnion(newUnion);
    setLocation({
      ...location,
      union: newUnion,
    });
  };

  const divisions = data.divisions;
  const districts = selectedDivision
    ? divisions.find((d) => d.name === selectedDivision)?.districts || []
    : [];
  const upazilas = selectedDistrict
    ? districts.find((d) => d.name === selectedDistrict)?.upazilas || []
    : [];
  const unions = selectedUpazila
    ? upazilas.find((u) =>
        typeof u === "string"
          ? u === selectedUpazila
          : u.name === selectedUpazila,
      )?.unions || []
    : [];

  return (
    <div className="space-x-4">
      <select
        value={selectedDivision}
        onChange={handleDivisionChange}
        className="px-2 py-1 border rounded"
      >
        <option value="">Select Division</option>
        {divisions.map((division, index) => (
          <option key={index} value={division.name}>
            {division.name}
          </option>
        ))}
      </select>

      <select
        value={selectedDistrict}
        onChange={handleDistrictChange}
        disabled={!selectedDivision}
        className="px-2 py-1 border rounded"
      >
        <option value="">Select District</option>
        {districts.map((district, index) => (
          <option key={index} value={district.name}>
            {district.name}
          </option>
        ))}
      </select>

      <select
        value={selectedUpazila}
        onChange={handleUpazilaChange}
        disabled={!selectedDistrict}
        className="px-2 py-1 border rounded"
      >
        <option value="">Select Upazila</option>
        {upazilas.map((upazila, index) => (
          <option
            key={index}
            value={typeof upazila === "string" ? upazila : upazila.name}
          >
            {typeof upazila === "string" ? upazila : upazila.name}
          </option>
        ))}
      </select>

      <select
        value={selectedUnion}
        onChange={handleUnionChange}
        disabled={!selectedUpazila || unions.length === 0}
        className="px-2 py-1 border rounded"
      >
        <option value="">Select Union</option>
        {unions.map((union, index) => (
          <option key={index} value={union}>
            {union}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
