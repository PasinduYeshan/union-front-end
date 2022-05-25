import React, {useEffect, useState} from "react";
import { useDispatch, } from "react-redux";
import api from "../../../api";
import { toast } from "react-toastify";

const EventCard = React.lazy(() => import("./EventCard"));

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // Fetch events from the API
  useEffect(() => {
    async function fetchData() {
      const response = await api.event.get({});
      console.log(response);
      if (response.status === 200) {
        setEvents(response.data.events);
        setTotalCount(response.data.count);
      } else {
        toast.error(response.data.message ? response.data.message : "Something went wrong");
      }
    }

    fetchData().catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="bg-gray-100 ">
        {/* Remove py-8 */}
        <div className="mx-4 px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:justify-center justify-center gap-2">
            {events.map((item, index) => (
              <EventCard key={index} event={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsSection;