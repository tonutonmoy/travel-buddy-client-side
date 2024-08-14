import TripsLineChart from "@/component/Chart/TripsLineChart";
import TripsPieChart from "@/component/Chart/TripsPieChart";
import UserPieChart from "@/component/Chart/UserPieChart";

const Chart = () => {
  return (
    <div>
         <div className=" xl:flex mb-20">
         <UserPieChart />
         <TripsPieChart />
         </div>
          <TripsLineChart />
    </div>
  );
};

export default Chart;