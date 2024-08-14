'use client';

import { useGetTripForAdminQuery } from "@/Redux/api/Trip/tripApi";
import React, { useMemo, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import advancedFormat from "dayjs/plugin/advancedFormat";


dayjs.extend(weekOfYear);
dayjs.extend(advancedFormat);

const TripsBarChart = () => {
    const { data, isLoading } = useGetTripForAdminQuery("", {
        pollingInterval: 0,
        refetchOnMountOrArgChange: true,
    });

    const [timeFrame, setTimeFrame] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');

    const processedData = useMemo(() => {
        if (!data || !data.data) return [];

        const tripsByPeriod: { [key: string]: number } = {};

        data.data.forEach((trip: any) => {
            const date = dayjs(trip.createdAt);
            let periodKey;

            switch (timeFrame) {
                case 'daily':
                    periodKey = date.format("YYYY-MM-DD");
                    break;
                case 'weekly':
                    periodKey = `${date.year()}-W${date.week()}`;
                    break;
                case 'monthly':
                    periodKey = date.format("YYYY-MM");
                    break;
                case 'yearly':
                    periodKey = date.format("YYYY");
                    break;
                default:
                    periodKey = date.format("YYYY-MM");
                    break;
            }

            if (!tripsByPeriod[periodKey]) {
                tripsByPeriod[periodKey] = 0;
            }
            tripsByPeriod[periodKey] += 1;
        });

        return Object.keys(tripsByPeriod).map((period) => ({
            period,
            trips: tripsByPeriod[period],
        }));
    }, [data, timeFrame]);
    if (isLoading) {
        return <div className=" hidden"></div>}
   
    return (
        <div className="w-full p-6">
            <div className="mb-4 flex items-center">
                
                <select
                    id="timeFrame"
                    value={timeFrame}
                    onChange={(e) => setTimeFrame(e.target.value as 'daily' | 'weekly' | 'monthly' | 'yearly')}
                   
                      className="w-[150px] rounded-full text-center text-lg cursor-pointer  bg-gradient-to-r from-blue-500 to-blue-400  hover:shadow-lg font-semibold text-white px-6 py-2 space-y-10"
                >
                    <option className="text-gray-500 text-start" value="daily">Daily</option>
                    <option className="text-gray-500 text-start" value="weekly">Weekly</option>
                    <option className="text-gray-500 text-start" value="monthly">Monthly</option>
                    <option className="text-gray-500 text-start" value="yearly">Yearly</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={processedData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="trips" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TripsBarChart;
