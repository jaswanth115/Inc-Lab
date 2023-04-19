import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutProp = {
    completedSkills : number,
    totalSkills : number
}

const DoughnutChart = ({ completedSkills , totalSkills }:DoughnutProp) => {
    // The data Which needs to be displayed in Doughnut Chart form
    const data:any = {
        datasets: [
            {
                data: [totalSkills - completedSkills, completedSkills],
                backgroundColor: (context:any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                        return null;
                    }
                    if (context.dataIndex === 1) {
                        return getGradient(chart);
                    } else {
                        return "rgba(235,237,245,255)";
                    }
                },
                borderWidth: 0,
            },
        ],
    };
    // This Object gives Doughnut chart responsiveness
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: "65%",
        legend: {
            display: false,
        },
        layout: {
            padding: 10,
        },
    };
    const centerTextContent = `${completedSkills}/${totalSkills}`;
    //This Object defines specifications of center text of the Doughnut Chart
    const textCenter = {
        id: "textCenter",
        beforeDatasetDraw(chart:any, args:any, plugnOptions:any) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = "bolder 120% sans-serif";
            ctx.fillStyle =
                "linear-gradient(15deg, #90F7EC 70%, #32CCBC 100%);";
            ctx.textAlign = "center";
            ctx.shadowBlur = 25;
            ctx.shadowColor = "rgba(235,237,245,255)";
            ctx.shadowOffsetX = 5;
            ctx.fillText(
                `${centerTextContent}`,
                chart.getDatasetMeta(0).data[0].x,
                chart.getDatasetMeta(0).data[0].y
            );
            ctx.fillStyle = "#6c6f80";
        },
    };
    // This function return the Gradient Color pattern
    function getGradient(chart:any) {
        const {
            ctx,
            chartArea: { top, bottom, left, right },
        } = chart;
        const gradientSegment = ctx.createLinearGradient(top, 5, bottom, 180);
        gradientSegment.addColorStop(0, "rgba(175,215,95,255)");
        gradientSegment.addColorStop(1, "rgba(47,181,221,255)");
        return gradientSegment;
    }
    return (
        <>
            <Doughnut data={data} options={options} plugins={[textCenter]} />
        </>
    );
};

export default DoughnutChart;