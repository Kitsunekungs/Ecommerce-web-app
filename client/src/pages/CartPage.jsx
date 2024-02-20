import { useState } from "react";
import Navbar from "../components/Navbar.jsx";

function CartPage() {
  const [] = useState([]);
  return (
    <div>
      <div className="app-wrapper">
        <Navbar />
        <div class="bg-gray-900 py-16 h-screen">
          <div class="container mx-auto px-4">
            <h1 class="text-3xl font-bold text-white mb-8">Cart</h1>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="md:w-3/4">
                <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table class="w-full">
                    <head>
                      <tr>
                        <th class="text-left font-semibold">Product</th>
                        <th class="text-left font-semibold">Price</th>
                        <th class="text-left font-semibold">Quantity</th>
                        <th class="text-left font-semibold">Total</th>
                      </tr>
                    </head>
                    <tbody>
                      <tr>
                        <td class="py-4">
                          <div class="flex items-center">
                            <img
                              class="h-16 w-16 mr-4"
                              src="https://via.placeholder.com/150"
                              alt="Product image"
                            />
                            <span class="font-semibold">Product name</span>
                          </div>
                        </td>
                        <td class="py-4">฿0.00</td>
                        <td class="py-4">
                          <div class="flex items-center">
                            <button class="border rounded-md py-2 px-4 mr-2">
                              -
                            </button>
                            <span class="text-center w-8">1</span>
                            <button class="border rounded-md py-2 px-4 ml-2">
                              +
                            </button>
                          </div>
                        </td>
                        <td class="py-4">฿0.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="md:w-1/4">
                <div class="bg-white rounded-lg shadow-md p-6">
                  <h2 class="text-lg font-semibold mb-4">Summary</h2>
                  <div class="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>฿0.00</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>฿0.00</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>฿0.00</span>
                  </div>
                  <hr class="my-2" />
                  <div class="flex justify-between mb-2">
                    <span class="font-semibold">Total</span>
                    <span class="font-semibold">฿0.00</span>
                  </div>
                  <button
                    class="bg-violet-800 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    onClick={() => {}}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
