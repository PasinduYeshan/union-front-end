import React from "react";

const EventCard = React.lazy(() => import("./EventCard"));

const EventsSection = () => {
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

const events = [
  {
    title: "Event Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed rutrum tellus. Nunc tortor nisl, placerat id ligula auctor, malesuada rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    eventDate: "2020-01-01",
    images: [
      "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
        "https://picsum.photos/200",
        "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
    ],
  },
//   {
//     title: "Event Title",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed rutrum tellus. Nunc tortor nisl, placerat id ligula auctor, malesuada rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
//     eventDate: "2020-01-01",
//     images: [
//       "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
//       "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
//     ],
//   },
  {
    title: "Event Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed rutrum tellus. Nunc tortor nisl, placerat id ligula auctor, malesuada rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    eventDate: "2020-01-01",
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/200",
    ],
  },
  {
    title: "Event Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed rutrum tellus. Nunc tortor nisl, placerat id ligula auctor, malesuada rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    eventDate: "2020-01-01",
    images: [
      "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
    ],
  },
  {
    title: "Event Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed rutrum tellus. Nunc tortor nisl, placerat id ligula auctor, malesuada rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    eventDate: "2020-01-01",
    images: [
      "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
    ],
  },
  {
    title: "Event Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed rutrum tellus. Nunc tortor nisl, placerat id ligula auctor, malesuada rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    eventDate: "2020-01-01",
    images: [
      "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
    ],
  },
];
