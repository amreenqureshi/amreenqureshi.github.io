document.addEventListener("DOMContentLoaded", function() {
    const data = [
        {
            x: ["All", "Agency", "Social Media", "Self-Reported CSE", "No CSE Self-Report"],
            y: [26.9, 21.1, 32.9, 31.1, 22.7],
            name: "Poor Health",
            type: "bar",
            marker: { color: "#99ccee" }
        },
        {
            x: ["All", "Agency", "Social Media", "Self-Reported CSE", "No CSE Self-Report"],
            y: [73.1, 78.9, 67.1, 68.9, 77.3],
            name: "Good Health",
            type: "bar",
            marker: { color: "#6699cc" }
        }
    ];

    const layout = {
        title: "Survey Results: General Overall Health",
        barmode: "group",
        xaxis: { title: "Source" },
        yaxis: { title: "Percentage", range: [0, 100] }
    };

    Plotly.newPlot("chart", data, layout);
});
