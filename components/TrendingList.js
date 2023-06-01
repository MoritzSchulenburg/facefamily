import React from "react";

const DATE_OPTION = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const TrendingList = ({ eventTitle, eventStart }) => {
  // console.log("Im in Trendinglist", typeof eventStart);
  let formattedStart = new Date(eventStart).toLocaleString(
    "en-GB",
    DATE_OPTION
  );
  // console.log("Im in Trendinglist formattedStart", formattedStart);

  return (
    <div className="mt-4 flex items-center">
      <div>
        <h1 className="font-medium pr-2">{eventTitle}</h1>
        <p className="text-gray-500">{formattedStart}</p>
      </div>
    </div>
  );
};

export default TrendingList;
