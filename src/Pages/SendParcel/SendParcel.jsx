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
    let centerFactor = data.senderCenter === data.receiverCenter ? 1 : 1.5;
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

          {/* Document or non-Document section */}
          <div className=" lg:flex gap-5">
            <div className="form-control mb-4">
              <label className="label font-medium">Type</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="document"
                    {...register("type", { required: true })}
                    defaultChecked
                    className="radio radio-sm"
                  />
                  Document
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="non-document"
                    {...register("type", { required: true })}
                    className="radio radio-sm"
                  />
                  Non-document
                </label>
              </div>
              {errors.type && (
                <p className="text-red-500 mt-1 text-sm">Type is required</p>
              )}
            </div>
            {/* Title */}
            <div className="flex gap-5">
              <div className="form-control mb-4">
                <label className="label">Title</label>
                <input
                  {...register("title", { required: true })}
                  className="input input-bordered"
                  placeholder="Parcel title"
                />
                {errors.title && (
                  <p className="text-red-500 mt-1 text-sm">Title is required</p>
                )}
              </div>

              {/* type Weight */}

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
          </div>
        </div>

        {/* Sender and Receiver Info Side-by-Side on md+, stacked on mobile */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Sender Info */}
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Sender Info</h3>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="label">Name</label>
                <input
                  defaultValue="John Doe"
                  {...register("senderName", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.senderName && (
                  <p className="text-red-500 mt-1 text-sm">
                    Sender name is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Contact</label>
                <input
                  {...register("senderContact", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.senderContact && (
                  <p className="text-red-500 mt-1 text-sm">
                    Sender contact is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Region</label>
                <input
                  {...register("senderRegion", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.senderRegion && (
                  <p className="text-red-500 mt-1 text-sm">
                    Sender region is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Service Center</label>
                <input
                  {...register("senderCenter", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.senderCenter && (
                  <p className="text-red-500 mt-1 text-sm">
                    Sender service center is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Address</label>
                <textarea
                  {...register("senderAddress", { required: true })}
                  className="textarea textarea-bordered w-full"
                ></textarea>
                {errors.senderAddress && (
                  <p className="text-red-500 mt-1 text-sm">
                    Sender address is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Pickup Instruction</label>
                <textarea
                  {...register("pickupInstruction", { required: true })}
                  className="textarea textarea-bordered w-full"
                ></textarea>
                {errors.pickupInstruction && (
                  <p className="text-red-500 mt-1 text-sm">
                    Pickup instruction is required
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Receiver Info */}
          <div className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Receiver Info</h3>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="label">Name</label>
                <input
                  {...register("receiverName", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.receiverName && (
                  <p className="text-red-500 mt-1 text-sm">
                    Receiver name is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Contact</label>
                <input
                  {...register("receiverContact", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.receiverContact && (
                  <p className="text-red-500 mt-1 text-sm">
                    Receiver contact is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Region</label>
                <input
                  {...register("receiverRegion", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.receiverRegion && (
                  <p className="text-red-500 mt-1 text-sm">
                    Receiver region is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Service Center</label>
                <input
                  {...register("receiverCenter", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.receiverCenter && (
                  <p className="text-red-500 mt-1 text-sm">
                    Receiver service center is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Address</label>
                <textarea
                  {...register("receiverAddress", { required: true })}
                  className="textarea textarea-bordered w-full"
                ></textarea>
                {errors.receiverAddress && (
                  <p className="text-red-500 mt-1 text-sm">
                    Receiver address is required
                  </p>
                )}
              </div>

              <div>
                <label className="label">Delivery Instruction</label>
                <textarea
                  {...register("deliveryInstruction", { required: true })}
                  className="textarea textarea-bordered w-full"
                ></textarea>
                {errors.deliveryInstruction && (
                  <p className="text-red-500 mt-1 text-sm">
                    Delivery instruction is required
                  </p>
                )}
              </div>
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
