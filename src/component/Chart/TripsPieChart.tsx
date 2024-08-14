'use client';

import { useGetTripForAdminQuery } from "@/Redux/api/Trip/tripApi";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042"
];

const TripsPieChart = () => {
    const { data, isLoading, refetch }: any = useGetTripForAdminQuery("", {
        pollingInterval: 0,
        refetchOnMountOrArgChange: true,
    });
    if (isLoading) {
        return <div className=" hidden"></div>}
  


    const business = data?.data?.filter((a:any) => a?.travelType === 'Business').length || 0;
    const adventure = data?.data?.filter((a:any) => a?.travelType === 'Adventure').length || 0;
    const leisure = data?.data?.filter((a:any) => a?.travelType === 'Leisure').length || 0;

    const chartData = [
        { name: 'Business', value: business },
        { name: 'Adventure', value: adventure },
        { name: 'Leisure', value: leisure }
    ];

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TripsPieChart;
