import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import dayjs from "dayjs";



const SendParcel = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [cost, setCost] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const type = watch("type");

  const calculateCost = (data) => {
    let base = data.type === "document" ? 50 : 80;
    let centerFactor =
      data.senderCenter === data.receiverCenter ? 1 : 1.5;
    let weightCost =
      data.type === "non-document" && data.weight
        ? parseFloat(data.weight) * 10
        : 0;
    return Math.ceil(base * centerFactor + weightCost);
  };

  const onSubmit = (data) => {
    const deliveryCost = calculateCost(data);
    setCost(deliveryCost);
    toast.success(`Estimated Delivery Cost: ৳${deliveryCost}`);
    setShowConfirm(true);
  };

  const handleConfirm = (data) => {
    const parcelData = {
      ...data,
      creation_date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    };
    console.log("Saving to DB:", parcelData);
    toast.success("Parcel saved successfully!");
    setShowConfirm(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-2">Send a Parcel</h2>
      <p className="text-gray-500 mb-6">
        Fill in the details below to schedule your parcel pickup and delivery.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Parcel Info */}
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Parcel Info</h3>

          <div className="form-control mb-4">
            <label className="label">Type</label>
            <select
              {...register("type", { required: true })}
              className="select select-bordered"
            >
              <option value="document">Document</option>
              <option value="non-document">Non-document</option>
            </select>
            {errors.type && <p className="text-red-500">Type is required</p>}
          </div>

          <div className="form-control mb-4">
            <label className="label">Title</label>
            <input
              {...register("title", { required: true })}
              className="input input-bordered"
              placeholder="Parcel title"
            />
            {errors.title && <p className="text-red-500">Title is required</p>}
          </div>

          {type === "non-document" && (
            <div className="form-control mb-4">
              <label className="label">Weight (kg)</label>
              <input
                {...register("weight")}
                type="number"
                step="0.1"
                className="input input-bordered"
                placeholder="Enter weight"
              />
            </div>
          )}
        </div>

        {/* Sender Info */}
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Sender Info</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                defaultValue="John Doe"
                {...register("senderName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Contact</label>
              <input
                {...register("senderContact", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Region</label>
              <input
                {...register("senderRegion", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Service Center</label>
              <input
                {...register("senderCenter", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div className="md:col-span-2">
              <label className="label">Address</label>
              <textarea
                {...register("senderAddress", { required: true })}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="label">Pickup Instruction</label>
              <textarea
                {...register("pickupInstruction", { required: true })}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Receiver Info */}
        <div className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Receiver Info</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                {...register("receiverName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Contact</label>
              <input
                {...register("receiverContact", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Region</label>
              <input
                {...register("receiverRegion", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Service Center</label>
              <input
                {...register("receiverCenter", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div className="md:col-span-2">
              <label className="label">Address</label>
              <textarea
                {...register("receiverAddress", { required: true })}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="label">Delivery Instruction</label>
              <textarea
                {...register("deliveryInstruction", { required: true })}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit & Calculate Cost
        </button>
      </form>

      {/* Confirm Button */}
      {showConfirm && (
        <div className="mt-6 p-4 border border-green-400 rounded-lg bg-green-50">
          <p className="text-lg font-semibold mb-2">
            Estimated Delivery Cost: ৳{cost}
          </p>
          <button
            onClick={handleSubmit(handleConfirm)}
            className="btn btn-success"
          >
            Confirm & Save
          </button>
        </div>
      )}
    </div>
  );
};

export default SendParcel;
