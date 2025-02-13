"use client";
// import { useCallback } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// const baseUrl = process.env.baseUrl;
// const useApi = () => {
//   console.log(baseUrl);
//   const router = useRouter();
//   /**
//    * Function to make an API request.
//    * @param {string} url - The API endpoint.
//    * @param {object} options - Axios request options (method, headers, data, etc.).
//    * @param {function} callBack
//    * @returns {Promise<{ data: any, error: any }>}
//    */
//   const fetchData = useCallback(async (url, options = {}, callBack) => {
//     let response = null;
//     let error = null;

//     try {
//       const res = await axios({
//         url: baseUrl + url,
//         ...options,
//         withCredentials: true,
//         headers: {
//           ...options?.headers,
//           credentials: "include",
//         },
//       });
//       response = res.data;
//       if (response?.message === "logouted") {
//         router.push("/login");
//       }
//       callBack(response, true);
//     } catch (err) {
//       callBack(err.response, false);
//       console.log(err, "check e");
//       if (err.response?.data.message === "unauthenticated") {
//         router.push("/login");
//       } else if (err.response?.data.message) {
//         // toast.error(err.response?.data.message);
//       }
//     }

//     return { response, error };
//   }, []);

//   return { fetchData };
// };

// export default useApi;"use client";
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
      console.log(options);
      try {
        const res = await fetch(baseUrl + url, options);

        const data = await res.json();
        response = data;

        if (data?.message === "logouted") {
          router.push("/login");
        }

        callBack(data, res.ok);

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
