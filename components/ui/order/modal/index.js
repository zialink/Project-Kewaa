import { Modal, Button } from "@components/ui/common";
import { useEffect, useState } from "react";


export default function OrderModal({ course, isOpen, setIsOpen }) {

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="mb-7 text-lg font-bold leading-6 text-gray-900"
                id="modal-title"
              >
                {property.title}
              </h3>

              <div className="relative mt-1 rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Amount(eth)</label>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="mb-1 block w-80 rounded-md border-gray-300 p-4 pl-7 shadow-md focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 sm:text-sm"
                />

                <p className="text-xs text-gray-700">
                  Price will be verified at the time of the order. If the price
                  will be lower, order can be declined (+- 2% slipage is
                  allowed)
                </p>
              </div>
              <div className="ml-1 flex-col w-fit p-1 rounded-lg mt-5  bg-indigo-700  text-xs text-gray-700 mb-5">
                <p className="text-xs text-white"> ROI/monthly</p>
                <p className="text-lg text-white text-center ">0%</p> 
              </div>
              <div className="relative mt-2 rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Email</label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-80 rounded-md border-gray-300 p-4 pl-7 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="x@y.com"
                />
                <p className="mt-1 text-xs text-gray-700">
                  It&apos;s important to fill a correct email, otherwise the
                  order cannot be verified. We are not storing your email
                  anywhere
                </p>
              </div>

              <div className="flex text-xs text-gray-700">
                <label className="mr-2 flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                </label>
                <span>
                  I accept Eincode &apos;terms of service&apos; and I agree that
                  my order can be rejected in the case data provided above are
                  not correct
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6">
          <div className="mr-4">
            <Button>Submit</Button>
          </div>
          <div>
            <Button onClick={closeModal} variant="red">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
