import { eventsData } from '@/lib/data'
import React from 'react'

const Announcement = () => {
    const events = [
        {
          id: 1,
          event: "event 1",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores, quidem autem obcaecati dolor, temporibus impedit vel minus, sed maiores repellat tempora. Iste accusamus maiores suscipit. Itaque sunt nihil sint?",
          time: "4:00 - 17:00",
        },
        {
          id: 2,
          event: "event 2",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores, quidem autem obcaecati dolor, temporibus impedit vel minus, sed maiores repellat tempora. Iste accusamus maiores suscipit. Itaque sunt nihil sint?",
          time: "4:00 - 17:00",
        },
        {
          id: 3,
          event: "event 3",
          detail:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores, quidem autem obcaecati dolor, temporibus impedit vel minus, sed maiores repellat tempora. Iste accusamus maiores suscipit. Itaque sunt nihil sint?",
          time: "4:00 - 17:00",
        },
      ];
  return (
    <>
    <div className="mt-6">
            <h3 className="font-bold">Events</h3>
            {events.map((event) => (
              <div
                key={event.id}
                className={
                  "h-32 w-full bg-white flex flex-col items-center gap-2 rounded-xl odd:border-t-blue-300 even:border-t-yellow-200 border-t-4 my-4"
                }
              >
                <div className="flex items-center justify-between px-4 w-full mt-2">
                  <span className="font-bold text-lg">{event.event}</span>
                  <span className="text-gray-200">{event.time}</span>
                </div>
                <p className="line-clamp-2 px-4 text-gray-400 text-sm">
                  {event.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white flex flex-col w-full p-4">
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="font-bold">Announcement</h3>
              <span className="font-semibold text-gray-400 text-sm">
                View All
              </span>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-500 w-full p-4 bg-opacity-10 rounded-lg space-y-2">
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-bold">Title One</h3>
                  <span className="font-semibold text-gray-400 text-sm">
                    2024-09-27
                  </span>
                </div>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  possimus dolore assumenda laborum cumque dicta aliquid officia
                  iste dolorem
                </p>
              </div>
              <div className="bg-green-500 w-full p-4 bg-opacity-10 rounded-lg space-y-2">
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-bold">Title Two</h3>
                  <span className="font-semibold text-gray-400 text-sm">
                    2024-09-27
                  </span>
                </div>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  possimus dolore assumenda laborum cumque dicta aliquid officia
                  iste dolorem
                </p>
              </div>
              <div className="bg-orange-500 w-full p-4 bg-opacity-10 rounded-lg space-y-2">
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-bold">Title Three</h3>
                  <span className="font-semibold text-gray-400 text-sm">
                    2024-09-27
                  </span>
                </div>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                  possimus dolore assumenda laborum cumque dicta aliquid officia
                  iste dolorem
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Announcement