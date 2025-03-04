"use client";
import { createContext, useContext, useEffect, useState } from "react";
import useApi from "../../util/useApi";
import { useRouter } from "next/navigation";
import { verify } from "crypto";
const MainContext = createContext();
export const AppProvider = ({ children }) => {
  const { fetchData } = useApi();
  const router = useRouter();
  const [testingdetails, setTestingdetails] = useState();
  const [userDetail, setUserDetail] = useState();
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  function CreateUser() {
    let payload = {
      firstName: userDetail?.firstName || "",
      lastName: userDetail?.lastName || "",
      dob: userDetail?.dob || "",
      contact: userDetail?.mobileNumber || "",
      email: userDetail?.email || "",
      password: userDetail?.password || "",
      referralCode: userDetail?.Referral_Code || "",
      address: userDetail?.address || "",
      city: userDetail?.city || "",
      country: userDetail?.country || "",
      zip_code: userDetail?.zip_postal_code || "",
      terms_and_conditions: userDetail?.terms_and_condition || false,
      privacy_policy: userDetail?.privacy_policy || false,
      refund_policy: userDetail?.refund_policy || false,
      isVerified: false,
      id_or_password: "678402a42c1f62c6d732942b",
      address_conformation: "678402a42c1f62c6d732942b",
      pin_code: "" || "",
      id_verification_url: "",
    };
    fetchData(
      "users/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      (res, status) => {
        if (status) {
          router.push("/user/verification");
          startCountdown();
        } else {
          startCountdown();
          router.push("/user/otp");
        }
      }
    );
  }
  const startCountdown = () => {
    let countdown = 10 * 60;
    const interval = setInterval(() => {
      countdown -= 1;
      setTimeLeft(countdown);

      if (countdown <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  };
  useEffect(() => {
    return () => clearInterval();
  }, []);
  function Verifyotp(otpcode) {
    let payload = {
      email: userDetail?.email || "",
      otp: otpcode || "",
    };
    fetchData(
      "users/verify-otp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      (res, status) => {
        if (status) {
          router.push("/user/verification");
          startCountdown();
        } else {
          startCountdown();
          router.push("/user/otp");
        }
      }
    );
  }
  return (
    <MainContext.Provider
      value={{
        testingdetails,
        setTestingdetails,
        timeLeft,
        userDetail,
        Verifyotp,
        setUserDetail,
        CreateUser,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useMainContext = () => useContext(MainContext);
