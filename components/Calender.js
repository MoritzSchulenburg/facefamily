import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Image from "next/image";
import Logo from "../public/ff.png";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");

  const handleDateSelect = (selectInfo) => {
    const { start, end } = selectInfo;

    const newEvent = {
      title: eventTitle,
      start: eventStart,
      end: eventEnd,
    };

    setEvents([...events, newEvent]);
  };

  const handleEventClick = (clickInfo) => {
    const newText = prompt("Enter text:", clickInfo.event.title);
    if (newText !== null) {
      clickInfo.event.setProp("title", newText);
    }
  };

  const handleTitleChange = (event) => {
    setEventTitle(event.target.value);
  };

  const handleStartChange = (event) => {
    setEventStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEventEnd(event.target.value);
  };

  return (
    <section className="sm:ml-[81px] xl:ml-[340px] w-full min-h-screen border-r border-gray-400 text-white py-2">
      <div className="sticky top-0 bg-[#43726D] flex justify-between font-medium text-[30px] px-4 py-2">
        Calender
        {/* <HiOutlineSparkles /> */}
        {/* <h1>ff</h1> */}
        <Image src={Logo} width={25} alt="Logo" />
      </div>

      <div className="flex justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="calendar-form">
          <div className="form-group">
            <label htmlFor="eventTitle">Name of the Event</label>
            <input
              type="text"
              id="eventTitle"
              value={eventTitle}
              onChange={handleTitleChange}
              placeholder="Event"
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventStart">Start of the Event</label>
            <input
              type="datetime-local"
              id="eventStart"
              value={eventStart}
              onChange={handleStartChange}
              placeholder="Start"
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventEnd">End of the Event</label>
            <input
              type="datetime-local"
              id="eventEnd"
              value={eventEnd}
              onChange={handleEndChange}
              placeholder="End"
            />
          </div>
          <div className="flex items-end mt-4">
            <button
              onClick={handleDateSelect}
              className="bg-[#C4C595] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#6e767d] disabled:hover:bg-black disabled:opacity-50 disabled:cursor-default"
            >
              Add to Calendar
            </button>
          </div>
        </form>
      </div>
      <div className="mx-2 mt-8">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={events}
          eventClick={handleEventClick}
          contentHeight="auto"
        />
      </div>
    </section>
  );
};

export default Calendar;
