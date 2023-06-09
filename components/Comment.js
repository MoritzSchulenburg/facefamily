import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsBarChart, BsTrash, BsChatDots } from "react-icons/bs";
import Moment from "react-moment";

function Comment({ comment }) {
  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <img
        src={comment?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span
                className="ml-1.5 text-sm sm:text-[15px]"
                style={{ color: "#C4C595" }}
              >
                @{comment?.tag}{" "}
              </span>
            </div>{" "}
            ·{" "}
            <span
              className="hover:underline text-sm sm:text-[15px]"
              style={{ color: "#C4C595" }}
            >
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="text-[#d9d9d9] mt-0.5 max-w-lg text-[15px] sm:text-base">
              {comment?.comment}
            </p>
          </div>

          {/* <div className="flex items-center space-x-1 group"> */}
          {/* <div className="icon group-hover:bg-pink-600/10">
              <AiOutlineHeart className="h-5 group-hover:text-pink-600 text-white" />
            </div> */}
          {/* <span className="group-hover:text-pink-600 text-sm"></span> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Comment;
