import React, { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample performance data for the chart
const sampleData = [
  { date: "12/01", avgScore: 72, participants: 10 },
  { date: "12/02", avgScore: 76, participants: 12 },
  { date: "12/03", avgScore: 80, participants: 14 },
  { date: "12/04", avgScore: 82, participants: 16 },
  { date: "12/05", avgScore: 78, participants: 15 },
  { date: "12/06", avgScore: 75, participants: 13 },
  { date: "12/07", avgScore: 81, participants: 18 },
  { date: "12/08", avgScore: 85, participants: 20 },
  { date: "12/09", avgScore: 75, participants: 12 },
  { date: "12/10", avgScore: 82, participants: 15 },
  { date: "12/11", avgScore: 78, participants: 18 },
  { date: "12/12", avgScore: 85, participants: 22 },
  { date: "11/01", avgScore: 70, participants: 8 },
  { date: "11/05", avgScore: 74, participants: 10 },
  { date: "11/09", avgScore: 75, participants: 12 },
  { date: "11/10", avgScore: 78, participants: 14 },
  { date: "11/13", avgScore: 80, participants: 20 },
  { date: "11/14", avgScore: 77, participants: 25 },
  { date: "11/15", avgScore: 83, participants: 28 },
  { date: "10/01", avgScore: 65, participants: 7 },
  { date: "10/03", avgScore: 68, participants: 9 },
  { date: "10/05", avgScore: 72, participants: 11 },
  { date: "10/09", avgScore: 75, participants: 12 },
  { date: "10/10", avgScore: 82, participants: 15 },
  { date: "10/11", avgScore: 78, participants: 18 },
  { date: "10/15", avgScore: 81, participants: 19 },
  { date: "10/20", avgScore: 79, participants: 16 },
  { date: "09/01", avgScore: 60, participants: 6 },
  { date: "09/05", avgScore: 64, participants: 7 },
  { date: "09/10", avgScore: 70, participants: 9 },
  { date: "09/15", avgScore: 72, participants: 11 },
  { date: "09/20", avgScore: 75, participants: 13 },
  { date: "09/25", avgScore: 77, participants: 15 },
  { date: "09/30", avgScore: 79, participants: 16 },
  { date: "08/01", avgScore: 55, participants: 4 },
  { date: "08/05", avgScore: 58, participants: 5 },
  { date: "08/10", avgScore: 62, participants: 6 },
  { date: "08/15", avgScore: 65, participants: 7 },
  { date: "08/20", avgScore: 68, participants: 8 },
  { date: "08/25", avgScore: 70, participants: 9 },
  { date: "08/30", avgScore: 72, participants: 10 },
];

const QuizPerformanceChart = ({ data = [] }) => {
  const [timeRange, setTimeRange] = useState("7days");
  const [chartType, setChartType] = useState("composed");

  // Filter data based on selected time range
  const filteredData = useMemo(() => {
    // If no data is provided, return an empty array
    const dataToFilter = data.length > 0 ? data : sampleData;

    if (!Array.isArray(dataToFilter) || dataToFilter.length === 0) {
      return [];
    }

    const currentDate = new Date();
    const filterDate = new Date();

    switch (timeRange) {
      case "30days":
        filterDate.setDate(currentDate.getDate() - 30);
        break;
      case "3months":
        filterDate.setMonth(currentDate.getMonth() - 3);
        break;
      default: // 7days
        filterDate.setDate(currentDate.getDate() - 7);
        break;
    }

    try {
      return dataToFilter.filter((item) => {
        if (!item || !item.date) return false;

        const [month, day] = item.date.split("/");
        if (!month || !day) return false;

        const itemDate = new Date(
          currentDate.getFullYear(),
          parseInt(month) - 1,
          parseInt(day)
        );

        // Adjust for items from the previous year (e.g., December dates when in January)
        if (itemDate > currentDate) {
          itemDate.setFullYear(currentDate.getFullYear() - 1);
        }

        return itemDate >= filterDate;
      });
    } catch (error) {
      console.error("Error filtering data:", error);
      return [];
    }
  }, [data, timeRange]);

  // Use filtered data if available, otherwise use sample data
  const displayData = filteredData.length > 0 ? filteredData : sampleData;
  console.log(displayData);

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={displayData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" orientation="left" stroke="#8b5cf6" />
            <YAxis yAxisId="right" orientation="right" stroke="#60a5fa" />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="avgScore"
              name="Average Score"
              fill="#8b5cf6"
            />
            <Bar
              yAxisId="right"
              dataKey="participants"
              name="Participants"
              fill="#60a5fa"
            />
          </BarChart>
        );

      case "area":
        return (
          <AreaChart data={displayData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="avgScore"
              name="Average Score"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="participants"
              name="Participants"
              stroke="#60a5fa"
              fill="#60a5fa"
              fillOpacity={0.3}
            />
          </AreaChart>
        );

      case "scatter":
        return (
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Scatter
              name="Average Score"
              data={displayData}
              dataKey="avgScore"
              fill="#8b5cf6"
            />
            <Scatter
              name="Participants"
              data={displayData}
              dataKey="participants"
              fill="#60a5fa"
            />
          </ScatterChart>
        );

      case "composed":
        return (
          <ComposedChart data={displayData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" orientation="left" stroke="#8b5cf6" />
            <YAxis yAxisId="right" orientation="right" stroke="#60a5fa" />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="avgScore"
              name="Average Score"
              fill="#8b5cf6"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="participants"
              name="Participants"
              stroke="#60a5fa"
            />
          </ComposedChart>
        );

      default: // line chart
        return (
          <LineChart data={displayData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="avgScore"
              name="Average Score"
              stroke="#8b5cf6"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="participants"
              name="Participants"
              stroke="#60a5fa"
              strokeWidth={2}
            />
          </LineChart>
        );
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Performance Trend</h2>
        <div className="flex space-x-4">
          <select
            className="border rounded-lg px-3 py-2"
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
          >
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="area">Area Chart</option>
            <option value="scatter">Scatter Plot</option>
            <option value="composed">Bar + Line Chart</option>
          </select>
          <select
            className="border rounded-lg px-3 py-2"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="3months">Last 3 months</option>
          </select>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
      <div className="text-sm text-gray-500 mt-4">
        {data && data.length > 0
          ? `Showing ${filteredData.length} data points for the selected time range`
          : "Showing sample data - connect your data source to see actual performance metrics"}
      </div>
    </div>
  );
};

export default QuizPerformanceChart;
