import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const UpdateChallenge = () => {
  const [update, setUpdate] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://eco-track-teal.vercel.app/api/challenges/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const target = form.target.value;
    const duration = form.duration.value;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;
    const participants = 0;

    const formData = {
      title,
      category,
      target,
      duration,
      startDate,
      endDate,
      description,
      imageUrl,
      participants,
    };

    fetch(
      `https://eco-track-teal.vercel.app/api/challenge/update/${update._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Updated");
        navigate(-1);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return (
    <div className="py-20">
      <div className="card border border-gray-200 bg-base-100 w-sm md:w-xl lg:w-4xl  mx-auto shadow-2xl rounded-2xl ">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">
            Update Challenge
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={update.title}
                required
                className="input w-full rounded-md focus:border-0 focus:outline-gray-200 mt-2"
                placeholder="Type Your challange name"
              />
            </div>
            <div>
              <label className="label font-medium">Category</label>
              <select
                name="category"
                required
                className="rounded-md  select w-full mt-2 focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Energy Efficiency">Energy Efficiency</option>
                <option value="Water Conservation">Water Conservation</option>
                <option value="Sustainable Transport">
                  Sustainable Transport
                </option>
                <option value="Green Living">Green Living</option>
                <option value="Environment">Environment</option>
                <option value="Community Action">Community Action</option>
                <option value="Mental Wellbeing">Mental Wellbeing</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="label font-medium">Target</label>
              <input
                type="text"
                name="target"
                defaultValue={update.target}
                required
                className="input w-full rounded-md focus:border-0 focus:outline-gray-200 mt-2"
                placeholder="Target"
              />
            </div>

            {/* Duration Field */}
            <div>
              <label className="label font-medium">Duration</label>
              <input
                type="number"
                name="duration"
                defaultValue={update.duration}
                required
                className="input w-full rounded-md focus:border-0 focus:outline-gray-200 mt-2"
                placeholder="Duration (days)"
              />
            </div>

            <div className="flex items-center gap-4">
              <div>
                <label className="label font-medium">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  defaultValue={update.startDate}
                  required
                  className="input w-full rounded-md focus:border-0 focus:outline-gray-200 mt-2"
                />
              </div>
              <div>
                <label className="label font-medium">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  defaultValue={update.endDate}
                  required
                  className="input w-full rounded-md focus:border-0 focus:outline-gray-200 mt-2"
                />
              </div>
            </div>
            <div>
              <label className="label font-medium">Impact Metric</label>
              <input
                required
                type="text"
                name="ImpactMetric"
                defaultValue={update.impactMetric}
                className="input w-full rounded-md focus:border-0 focus:outline-gray-200 mt-2"
                placeholder="Enter measurable outcome of he challlenge"
              />
            </div>

            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                defaultValue={update.description}
                rows="3"
                className="textarea w-full focus:border-0 focus:outline-gray-200 h-[100px] rounded-md mt-2"
                placeholder="Enter description"
              ></textarea>
            </div>

            <div>
              <label className="label font-medium">Photo URL</label>
              <input
                type="url"
                defaultValue={update.imageUrl}
                name="imageUrl"
                required
                className="input w-full rounded-md mt-2 focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <button
              disabled={loader}
              type="submit"
              className="btn w-full mt- rounded-md  bg-linear-to-r from-green-600 to-green-700 text-white hover:to-emerald-900"
            >
              {loader ? (
                <span className="loading loading-ring loading-md min-h-screen mx-auto flex justify-center"></span>
              ) : (
                "Update"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateChallenge;
