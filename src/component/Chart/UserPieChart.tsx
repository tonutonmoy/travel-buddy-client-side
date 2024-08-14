'use client';

import { useGetAllUsersQuery } from "@/Redux/api/UsersManage/usersManageApi";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";


const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042"
];

const UserPieChart = () => {
    const { data, refetch, isLoading, error }: any = useGetAllUsersQuery("");



    const adminCount = data?.data?.filter((a:any) => a?.role === 'Admin').length || 0;
    const userCount = data?.data?.filter((a:any) => a?.role === 'User').length || 0;

    const chartData = [
        { name: 'Admin', value: adminCount },
        { name: 'User', value: userCount }
    ];

    if (isLoading) {
        return <div className=" hidden"></div>}

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

export default UserPieChart;
