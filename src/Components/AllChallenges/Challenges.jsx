import React, { useEffect, useState } from "react";
import ChallengesCard from "./ChallengesCard";
import Skeleton from "../Sketleton/Skeleton";

const categoriesList = [
  "Waste Reduction",
  "Energy Saving",
  "Water Conservation",
  "Sustainable Transport",
  "Green Living",
];
const Challenges = () => {
  const [challengesData, setChallengesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    categories: [],
    start: "",
    end: "",
    minParticipants: "",
    maxParticipants: "",
  });
  const [filteredChallenges, setFilteredChallenges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/challenges")
      .then((res) => res.json())
      .then((data) => {
        setChallengesData(data);
        setFilteredChallenges(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let filtered = [...challengesData];

    // Category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter((c) =>
        filters.categories.includes(c.category)
      );
    }

    // Date filter
    if (filters.start) {
      filtered = filtered.filter(
        (c) => new Date(c.startDate) >= new Date(filters.start)
      );
    }
    if (filters.end) {
      filtered = filtered.filter(
        (c) => new Date(c.endDate) <= new Date(filters.end)
      );
    }

    // Participants filter
    if (filters.minParticipants) {
      filtered = filtered.filter(
        (c) => c.participants >= parseInt(filters.minParticipants)
      );
    }
    if (filters.maxParticipants) {
      filtered = filtered.filter(
        (c) => c.participants <= parseInt(filters.maxParticipants)
      );
    }

    setFilteredChallenges(filtered);
  }, [filters, challengesData]);

  const toggleCategory = (category) => {
    setFilters((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
  };
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="bg-green-50 rounded-2xl shadow-lg p-6 mb-10 flex flex-col md:flex-row gap-6 items-center justify-between transition-all">
        <div className="flex flex-wrap gap-2">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium border-2 transition-all duration-300 ${
                filters.categories.includes(cat)
                  ? "bg-green-600 text-white border-green-600 shadow-lg transform scale-105"
                  : "bg-white text-green-700 border-green-400 hover:bg-green-100 hover:text-green-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex items-center gap-1">
            <label className="font-medium text-gray-700">Start:</label>
            <input
              type="date"
              value={filters.start}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, start: e.target.value }))
              }
              className="border rounded-lg px-2 py-1 focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex items-center gap-1">
            <label className="font-medium text-gray-700">End:</label>
            <input
              type="date"
              value={filters.end}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, end: e.target.value }))
              }
              className="border rounded-lg px-2 py-1 focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Participants Range */}
        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex items-center gap-1">
            <label className="font-medium text-gray-700">Min:</label>
            <input
              type="number"
              placeholder="participants"
              value={filters.minParticipants}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  minParticipants: e.target.value,
                }))
              }
              className="border rounded-lg px-2 py-1 w-30 focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex items-center gap-1">
            <label className="font-medium text-gray-700">Max:</label>
            <input
              type="number"
              value={filters.maxParticipants}
              placeholder="participants"
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  maxParticipants: e.target.value,
                }))
              }
              className="border rounded-lg px-2 py-1 w-30 focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>
      </div>
      <div className="py-1">
        <h2 className="text-center mb-10 text-3xl text-emerald-800 font-bold">
          All Challenges
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {loading ? (
            Array(8)
              .fill(0)
              .map((_, i) => <Skeleton key={i}></Skeleton>)
          ) : filteredChallenges.length === 0 ? (
            <p className="text-center col-span-full text-gray-500 text-lg">
              No challenges found. Try changing filters.
            </p>
          ) : (
            filteredChallenges.map((challenge) => (
              <ChallengesCard key={challenge._id} challenges={challenge} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
