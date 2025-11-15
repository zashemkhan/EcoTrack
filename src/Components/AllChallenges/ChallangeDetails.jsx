import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";
import SketletonDetail from "../Sketleton/SketletonDetail";
const ChallangeDetails = () => {
  const { user } = useContext(AuthContext);

  const { email } = user || {};
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const onDelete = location.state?.onDelete;

  const fetchchallengeDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://eco-track-teal.vercel.app/api/challenges/${id}`
      );
      const data = await res.json();
      console.log("challenge data", data);
      setDetails(data);
      localStorage.getItem(`challenge-${id}`, JSON.stringify(data));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (!id) return;
    const cachedDetails = localStorage.getItem(`challenge-${id}`);
    if (cachedDetails) setDetails(JSON.parse(cachedDetails));
    fetchchallengeDetails();
  }, []);

  const handleJoinChallenge = async () => {
    if (!user) {
      navigate("/login", { state: location.pathname });
      return toast.error("Please login to join challenge");
    }
    try {
      const joinData = { challengeId: details._id };

      const res = await fetch(
        "https://eco-track-teal.vercel.app/api/challenges/join",
        {
          method: "POST",
          headers: {
            authorization: user?.accessToken
              ? `Bearer ${user?.accessToken}`
              : "",
            "content-type": "application/json",
          },
          body: JSON.stringify(joinData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error("You already joined this challenge");
        return;
      }
      toast.success("You have joined the challenge");
      await fetchchallengeDetails();
    } catch (error) {
      console.log(error);
      toast.error("Failed to join challenge");
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `https://eco-track-teal.vercel.app/api/challenges/update/${id}`,
        {
          method: "PATCH",
          headers: {
            authorization: user?.accessToken
              ? `Bearer ${user?.accessToken}`
              : "",
            "content-type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );
      const data = await res.json();
      if (res.ok)
        toast.success(data.message || "Challenge updated successfully");
      else toast.error(data.message || "Update Failed");
    } catch (err) {
      console.log(err);
    }
  };

  // delete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://eco-track-teal.vercel.app/api/challenges/${id}`, {
          method: "DELETE",
          headers: {
            authorization: user?.accessToken
              ? `Bearer ${user.accessToken}`
              : "",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            if (onDelete) onDelete();
            navigate(-1);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  if (loading)
    return (
      <p className="text-center mt-10">
        <SketletonDetail></SketletonDetail>
      </p>
    );

  const {
    title,
    category,
    description,
    duration,
    participants,
    target,
    impactMetric,
    startDate,
    endDate,
    imageUrl,
  } = details;
  console.log(details);

  return (
    <div className=" min-h-screen flex justify-center items-center mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {title}
            </h1>

            <div className="badge badge-lg badge-outline text-gray-600 border-green-600 font-medium">
              {category}
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {description}
            </p>
            <div className="flex justify-between items-center border-b border-gray-300">
              <p className=" py-1 text-sm flex justify-between">
                Impact Metric :
              </p>
              <span className="text-sm">{impactMetric}</span>
            </div>

            <div className="border-b border-gray-300 py-1 flex justify-between items-center">
              <p className="  text-sm">Target :</p>
              <span className="text-sm">{target}</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300">
              <p className=" py-1 text-sm flex justify-between">Duration :</p>
              <span className="text-sm">{duration}</span>
            </div>

            <div className="border-b border-gray-300 py-1 flex justify-between items-center">
              <p className="  text-sm"> Participants :</p>
              <span className="text-sm">{participants}</span>
            </div>
            <div className="border-b border-gray-300 py-1 flex justify-between items-center">
              <p className="  text-sm"> Start Date : </p>
              <span className="text-sm">
                {new Date(startDate).toLocaleDateString()}
              </span>
            </div>
            <div className="border-b border-gray-300 py-1 flex justify-between items-center">
              <p className="  text-sm"> End Date : </p>
              <span className="text-sm">
                {" "}
                {new Date(endDate).toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={handleJoinChallenge}
                className="btn btn-primary border-none bg-linear-to-r from-green-600 to-green-700 text-white mt-3 hover:to-emerald-900"
              >
                Join Challenge
              </button>

              {user?.email === details?.createdBy && (
                <>
                  <Link to={`/UpdateChallenges/${details._id}`}>
                    <button
                      onClick={handleUpdate}
                      className="btn btn-primary border-none bg-linear-to-r from-green-600 to-green-700 text-white mt-3 hover:to-emerald-900"
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="btn btn-outline rounded-md  bg-linear-to-r from-green-600 to-green-700 text-white mt-3 hover:to-emerald-900"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallangeDetails;
