import React, { useEffect, useState } from "react";
import health from "../../assets/health.png";
import fbIcon from "../../assets/facebook.svg";
import linkeldn from "../../assets/linkeldn.svg";
import twitter from "../../assets/twitter.svg";
import star from "../../assets/star.svg";

const Ourdoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://heilerr.ums.ng/v0.1/api/general/doctors.select.random",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer BJH34BJH34J342NBNB4`, // Replace this temporarily
            },
          }
        );

        console.log("Response Status:", response.status);

        // Read response body only once
        const result = await response.json();

        console.log("Response Body:", result);

        if (response.ok && result.success) {
          setDoctors(result.data);
        } else {
          setError(result.message || "Failed to fetch doctors");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-[#fff] py-10 px-4 lg:px-10 shadow-lg w-full text-center">
      <h1 className="text-[30px] font-[500] text-[#00a651]">
        Meet Our Professional Doctors
      </h1>
      <p className="mb-8 text-[22px] text-[#000]">
        Here are some of our professionals to cater to your health needs
      </p>
      <div className="grid gap-4 place-items-center w-full sm:grid-cols-2 lgpro:grid-cols-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white p-5 rounded-xl border-[2px] border-[#e8f7ef] text-[#00a651] flex flex-col items-center mx-auto justify-center w-[262px] h-[350px] four:max-w-[400px]"
          >
            <img
              src={doctor.photo || health} // Use `doctor.photo` or fallback to default
              alt={`${doctor.firstName} ${doctor.lastName}`}
              className=" w-[400px] h-auto"
            />
            <h1 className="text-[24px] font-[700]">
              Dr {doctor.firstName} {doctor.lastName}
            </h1>
            <h1 className="text-[20px] text-[#003B1D] font-semibold">
              {doctor.specialty_name}
            </h1>
            <p className="text-[15px] flex gap-2 items-center justify-center">
              <div className="h-[20px] w-[20px] bg-contain bg-no-repeat bg-center">
                <img src={star} alt="" />
              </div>
              5.0 (300+ reviews){" "}
              {/* Update this to match API response if available */}
            </p>
            <div className="flex justify-center gap-2">
              <div
                className="h-[50px] w-[50px] bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${fbIcon})`,
                }}
              ></div>
              <div
                className="h-[50px] w-[50px] bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${twitter})`,
                }}
              ></div>
              <div
                className="h-[50px] w-[50px] bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${linkeldn})`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourdoctor;
