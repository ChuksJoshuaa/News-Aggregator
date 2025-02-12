import { PersonalizedInfoProps } from "@/interface";
import { useEffect, useState } from "react";

const PersonalizedContent = () => {
  const [personalizedData, setPersonalizedData] =
    useState<PersonalizedInfoProps>({} as PersonalizedInfoProps);

  useEffect(() => {
    const interval = setInterval(() => {
      const storedData = localStorage.getItem("personalized");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setPersonalizedData(parsedData.data as PersonalizedInfoProps); 
        } catch (_) {
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4 flex flex-col gap-3">
      <h3 className="text-gray-900 text-lg font-semibold leading-relaxed">
        Top Personalized Feeds
      </h3>
      <div className="flex justify-start items-center gap-4">
        {Object.keys(personalizedData).length > 0 ? (
          [
            { label: "Article", value: personalizedData?.keyword },
            { label: "Date", value: personalizedData?.date },
            { label: "Category", value: personalizedData?.category },
            { label: "Source", value: personalizedData?.source },
            { label: "Author", value: personalizedData?.author },
          ].map(
            ({ label, value }) =>
              value && (
                <p
                  key={label}
                  className="text-gray-700 text-sm font-normal mb-1"
                >
                  * {label}: {value}
                </p>
              )
          )
        ) : (
          <p  className="text-gray-700 text-sm font-normal mb-1">
            No personalized feed is available
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonalizedContent;
