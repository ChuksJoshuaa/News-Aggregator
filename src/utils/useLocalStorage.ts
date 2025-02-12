import { PersonalizedInfoProps } from "@/interface";

export const savePersonalizedLocalStorage = (data: PersonalizedInfoProps) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("personalized", JSON.stringify({ data }));
  }
};

export const getPersonalizedLocalStorage = () => {
  let personalized = {
    data: [],
  };

  if (typeof window !== "undefined") {
    personalized = JSON.parse(localStorage.getItem("personalized") || "{}");
  }
  return personalized
};
