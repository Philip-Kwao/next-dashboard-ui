import Announcement from "../_components/Announcement"
import BigCalendar from "../_components/BigCalendar"
import EventCalendar from "../_components/EventCalendar"

const StudentPage = () => {
  return (
    <div className="flex">
      <div className="w-full lg:w-2/3 flex flex-col">
      <BigCalendar />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col">
      <EventCalendar />
      <Announcement />
      </div>
    </div>
  )
}

export default StudentPage