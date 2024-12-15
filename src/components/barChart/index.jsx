/* eslint-disable react/prop-types */
import { BarChart } from '@mui/x-charts/BarChart';
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";

const chartSetting = {
    yAxis: [
        {
            disableTicks: true,
            disableLine: true,
            tickFontSize:10,
        },
    ],
    grid: {
        horizontal:true
    },
    width: 760,
    height: 300,
    sx: {
        ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
            fill: "#9F9F9F",
        },
        ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
            fill: "#9F9F9F",
        },
    },
};

export default function BarsDataset(props) {
    const {desc} = props

    const {theme} = useContext(themeContext)

    desc.series[1].color = theme.color

    return (
        <BarChart
            dataset={desc.data}
            xAxis={[{ scaleType: 'band', dataKey: desc.dataKey, categoryGapRatio: 0.5 }]}
            series={desc.series}
            slotProps={{
                legend: {
                    direction: "row",
                    position: { vertical: "top", horizontal: "right" }
                }
            }}
            {...chartSetting}
        />
    );
}