"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
const baseUrl = process.env.baseUrl;
const useApi = () => {
  const router = useRouter();

  /**
   * Function to make an API request using fetch.
   * @param {string} url - The API endpoint.
   * @param {object} options - Fetch request options (method, headers, body, etc.).
   * @param {function} callBack
   * @returns {Promise<{ data: any, error: any }>}
   */
  const fetchData = useCallback(
    async (url, options = {}, callBack) => {
      let response = null;
      let error = null;
      try {
        const res = await fetch(baseUrl + url, options);

        const data = await res.json();
        response = data;

        // if (data?.message === "logouted") {
        //   router.push("/login");
        // }

        callBack(data, true);

        if (!res.ok) {
          throw new Error(data.message || "Something went wrong");
        }
      } catch (err) {
        error = err;
        callBack(err, false);
        console.log(err, "check e");

        if (err?.message === "unauthenticated") {
          router.push("/login");
        }
      }

      return { response, error };
    },
    [router]
  );

  return { fetchData };
};

export default useApi;
