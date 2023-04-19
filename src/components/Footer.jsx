import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-[#f1f1f1] rounded-lg mt-8 shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Holidays API
          </span>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}
          <a href="https://kushtrimhyseni.com" class="hover:underline">
            frosty™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
