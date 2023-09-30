import React from "react";
import "./form.css";
const Form = () => {
  return (
    <div id="contact" className="form  pb-20 pt-10 lg:px-72 sm:px-40">
      <h2>Biz bilan bog'laning</h2>
      <form>
        <div class="mb-6">
          <label
            htmlFor="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white px-3"
          >
            Ismingizni kiriting
          </label>
          <input
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Sohibjon"
          />
        </div>
        <div class="mb-6">
          <label
            htmlFor="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white px-3"
          >
            Telefon raqamingizni kiriting
          </label>
          <input
            type="number"
            min={0}
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+998976367975"
          />
        </div>
        <div class="mb-6">
          <label
            htmlFor="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white px-3"
          >
            Xonadonlar haqida fikringiz?
          </label>
          <textarea
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Jo'natish
        </button>
      </form>
    </div>
  );
};

export default Form;
