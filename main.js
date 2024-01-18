// Chart Options
const options = {
    // Container: HTML Element to hold the chart
    container: document.getElementById('myChart'),
    // Data: Data to be displayed in the chart
    data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Feb', avgTemp: 3.1, iceCreamSales: 234000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'Apr', avgTemp: 6.3, iceCreamSales: 502000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        { month: 'Jun', avgTemp: 20.3, iceCreamSales: 1000000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Aug', avgTemp: 23.2, iceCreamSales: 1284000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 850000 },
        { month: 'Oct', avgTemp: 14.5, iceCreamSales: 350000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        { month: 'Dec', avgTemp: 5.9, iceCreamSales: 50000 }
    ],
    // Series: Defines which chart type and data to use
    series: [
        { type: 'bar', xKey: 'month', yKey: 'iceCreamSales', yName: 'Ice Cream Sales' },
        { type: 'line', xKey: 'month', yKey: 'avgTemp', yName: 'Average  temperature' },
    ],
    // Axes: Configure the axes for the chart
    axes: [
        // Display category (xKey) as the bottom axis
        {
            type: 'category',
            position: 'bottom',
        },
        // Use left axis for 'iceCreamSales' series
        {
            type: 'number',
            position: 'left',
            keys: ['iceCreamSales'],
        },
        // Use right axis for 'avgTemp' series
        {
            type: 'number',
            position: 'right',
            keys: ['avgTemp'],
        },
    ],
    // Legend: Matches visual elements to their corresponding series or data categories.
    legend: {
        position: 'right',
    },
};

// Create Chart
const chart = agCharts.AgCharts.create(options);