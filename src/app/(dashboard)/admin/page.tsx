import SexChart from "../_components/SexChart";
import UserCard from "../_components/UserCard";
import BarDaysChart from "../_components/BarDaysChart";
import FinanceChart from "../_components/FinanceChart";
import EventCalendar from "../_components/EventCalendar";
import Announcement from "../_components/Announcement";

const AdminPage = () => {
 
  return (
    <div className="flex items-start p-4 gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
      {/* Cards */}
        <div className="flex items-center justify-between w-full flex-col lg:flex-row gap-4  ">
          <UserCard count={5000} user="Students" />
          <UserCard count={4090} user="Teachers" />
          <UserCard count={6300} user="Parents" />
          <UserCard count={3290} user="Staffs" />
        </div>
        <div className="flex flex-col xl:flex-row items-start justify-between gap-4 w-full">
          <SexChart />
          <div className="w-full lg:w-2/3">
            <BarDaysChart />
          </div>
        </div>
        <FinanceChart />
      </div>
      {/* Right */}
      <div className="w-full hidden lg:block lg:w-1/3">
        <div className="flex flex-col w-full">
          <EventCalendar />
          <Announcement />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
