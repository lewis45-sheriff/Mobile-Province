
import React, { useState, useContext } from 'react';

import { CartContext } from '../contexts/CartContext';
import { CheckoutContext } from '../contexts/CheckoutContex';

const CheckoutForm = () => {
  const [shippingMethod, setShippingMethod] = useState('standard');
  const { total } = useContext(CartContext);
  const shippingFee = shippingMethod === 'standard' ? 325 : 0;
  const grandTotal = total + shippingFee;
  const { submitOrder } = useContext(CheckoutContext);
  const handleCheckout = () => {
    const orderData = {
      total: grandTotal,
      shippingMethod,
    };
    console.log('Order submitted:', orderData);
    submitOrder(orderData);
    // Here you would send orderData to the backend
  };



  return (
    <div className="max-w-7xl mx-auto p-6 mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column - Billing & Shipping */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">BILLING & SHIPPING</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">
              First name <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block mb-1">
              Last name <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-full border rounded-md p-2" />
          </div>
        </div>

        <div>
          <label className="block mb-1">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <input type="text" value="Kenya" disabled className="w-full border rounded-md p-2 bg-gray-50" />
        </div>

        <div>
          <label className="block mb-1">
            Street address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="House number and street name"
            className="w-full border rounded-md p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit, etc. (optional)"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1">
            Location / Area <span className="text-red-500">*</span>
          </label>
          <select className="w-full border rounded-md p-2">
            <option>Westlands</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input type="tel" className="w-full border rounded-md p-2" />
        </div>

        <div>
          <label className="block mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input type="email" className="w-full border rounded-md p-2" />
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Create an account?</span>
          </label>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">YOUR ORDER</h2>

        <div className="border rounded-md p-4 space-y-4">
          <div className="flex justify-between font-semibold">
            <span>PRODUCT</span>
            <span>SUBTOTAL</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Bateleur Bila shaka Capitan Craft Lager 500ml × 2</span>
            <span>KShs 500</span>
          </div>

          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span className="text-orange-500">{total.toFixed(2)}</span>
          </div>

          <div className="space-y-2">
            <div className="font-semibold">Shipping</div>
            <div className="space-y-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  value="standard"
                  checked={shippingMethod === 'standard'}
                  onChange={(e) => setShippingMethod(e.target.value)}
                  className="mr-2"
                />
                Standard: KShs 325
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  value="collect"
                  checked={shippingMethod === 'collect'}
                  onChange={(e) => setShippingMethod(e.target.value)}
                  className="mr-2"
                />
                Free Click & Collect
              </label>
            </div>
          </div>

          <div className="text-gray-600 text-sm">
            PLEASE NOTE: All deliveries are done from the Westgate branch.
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-orange-500">KShs {grandTotal.toFixed(2)}</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="radio" name="payment" checked className="mr-2" />
              <span>Lipa na Mpesa</span>
              <div className="border border-green-500 text-green-500 text-sm px-2 py-1 rounded">
                LIPA NA M-PESA
              </div>
            </div>

            <div className="text-sm space-y-2">
              <p>Pay with 'Mpesa' using below Paybill and Account No. and provide phone number and Mpesa transaction code received from Safaricom.</p>
              <p>PAYBILL: 4068465 (White Anchor Investments Ltd)</p>
              <p>ACCOUNT NO: L5LW</p>
            </div>

            <div>
              <label className="block mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="07XX......"
                className="w-full border rounded-md p-2"
              />
              <button
                onClick={handleCheckout}
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;