import React from "react";

const DATE_OPTION = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const TrendingList = ({ eventTitle, eventStart, eventEnd }) => {
  // console.log("Im in Trendinglist", typeof eventStart);
  let formattedStart = new Date(eventStart).toLocaleString(
    "en-GB",
    DATE_OPTION
  );
  let formattedEnd = new Date(eventEnd).toLocaleString("en-GB", DATE_OPTION);
  // console.log("Im in Trendinglist formattedStart", formattedStart);

  return (
    <div className="mt-4 flex items-center">
      <div>
        <ul className="list-disc ml-2">
          <li className="font-medium pr-2 text-xl ">{eventTitle}</li>
        </ul>

        <p className="text-[#2c3c54] text-small ml-2 font-bold">
          {formattedStart}
        </p>
        <p className="text-[#2c3c54] text-small ml-2 font-bold">
          {formattedEnd}
        </p>
      </div>
    </div>
  );
};

export default TrendingList;
