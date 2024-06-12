import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    state: "",
    country: "",
    zipCode: "",
    shippingSameAsBilling: false,
    saveInfo: false,

    paymentMethod: "card",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvvCode: "",
    nameOnCard: "",
    rememberCard: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-4 w-full ">
        <div className="md:grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <form onSubmit={handleSubmit} className="">
              <div className="bg-[#fafafa]  border px-4 py-6  rounded-lg">
                <h2 className="text-xl font-bold mb-4">Billing Address</h2>

                <div className="flex justify-between gap-5">
                  <div className="mb-4 w-full">
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      placeholder="Enter your first Name"
                      required
                    />
                  </div>

                  <div className="mb-4 w-full">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      placeholder="Enter your last Name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Address Line 1</label>
                  <input
                    type="text"
                    name="address1"
                    value={form.address1}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Address"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">
                    Address Line 2 (Optional)
                  </label>
                  <input
                    type="text"
                    name="address2"
                    value={form.address2}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Address"
                  />
                </div>
                {/*  */}
                <div className="flex justify-between gap-5">
                  <div className="mb-4 w-full">
                    <label className="block text-gray-700">State</label>
                    <select
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="" disabled>
                        Select State
                      </option>
                      {/* Add state options here */}
                    </select>
                  </div>

                  <div className="mb-4 w-full">
                    <label className="block text-gray-700">Country</label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="" disabled>
                        Select country
                      </option>
                      {/* Add country options here */}
                    </select>
                  </div>

                  <div className="mb-4 w-full">
                    <label className="block text-gray-700">
                      Zip/Postal Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={form.zipCode}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      placeholder="Zip/Postal Code"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="shippingSameAsBilling"
                    checked={form.shippingSameAsBilling}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <label className="ml-2 text-gray-700">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={form.saveInfo}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <label className="ml-2 text-gray-700">
                    Save this information for next time
                  </label>
                </div>
              </div>

              <div className="bg-[#fafafa]  border px-4 py-6 mt-10 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={form.paymentMethod === "card"}
                      onChange={handleChange}
                      className="form-radio text-red-500"
                    />
                    <span className="ml-2">Credit or Debit card</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={form.paymentMethod === "paypal"}
                      onChange={handleChange}
                      className="form-radio text-red-500"
                    />
                    <span className="ml-2">PayPal</span>
                  </label>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                  />
                </div>

                <div className="mb-4 flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-gray-700">Month</label>
                    <select
                      name="expiryMonth"
                      value={form.expiryMonth}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="" disabled>
                        Month
                      </option>
                      {/* Add month options here */}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700">Year</label>
                    <select
                      name="expiryYear"
                      value={form.expiryYear}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="" disabled>
                        Year
                      </option>
                      {/* Add year options here */}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700">CVV Code</label>
                    <input
                      type="text"
                      name="cvvCode"
                      value={form.cvvCode}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      placeholder="XXXX"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Name on Card</label>
                  <input
                    type="text"
                    name="nameOnCard"
                    value={form.nameOnCard}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="rememberCard"
                    checked={form.rememberCard}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <label className="ml-2 text-gray-700">
                    Remember this card
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white p-2 rounded-md"
                >
                  Make a Payment
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-4 bg-red-300"></div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
