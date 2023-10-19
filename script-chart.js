/*Biểu đồ doanh thu của tháng*/
const dataMonth = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
        {
            label: "Income every month of year (USD)",
            backgroundColor: ['yellow'],
            data: [5000, 15000, 75000, 5000, 6000, 5000, 15000, 75000, 5000, 6000, 5000, 15000],
        },
    ],
};

/*Tạo biểu đồ cột thể hiện thu nhập hàng tháng*/
const ctxLineBarMonth = document.getElementById("lineChart-income-month").getContext("2d");
const barLineChartMonth = new Chart(ctxLineBarMonth, {
    type: "line",
    data: dataMonth,
});

/*Biểu đồ doanh thu của năm*/
const dataYear = {
    labels: ["2021", "2022", "2023"],
    datasets: [
        {
            label: "Income every year (USD)",
            backgroundColor: ['green'],
            data: [50000, 60000, 100000],
        },
    ],
};

/*Tạo biểu đồ cột thể hiện thu nhập hàng năm*/
const ctxLineBarYear = document.getElementById("lineChart-income-year").getContext("2d");
const barLineChartYear = new Chart(ctxLineBarYear, {
    type: "line",
    data: dataYear,
});

/*Tạo biểu đồ cột thể hiện số lượng sách bán ra theo tháng*/
const dataBooksMonth = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
        {
            label: "Quantity sold every month of year (USD)",
            backgroundColor: ['blue'],
            data: [500, 1000, 750, 500, 650, 1000, 2000, 1500, 700, 2200, 1500, 1600],
        },
    ],
};

const ctxLineBarBooksMonth = document.getElementById("lineChart-bookSold-month").getContext("2d");
const barLineChartBooksMonth = new Chart(ctxLineBarBooksMonth, {
    type: "line",
    data: dataBooksMonth,
});

const ctxBarBooksMonth = document.getElementById("barChart-bookSold-month").getContext("2d");
const barChartBooksMonth = new Chart(ctxBarBooksMonth, {
    type: "bar",
    data: dataBooksMonth,
});

/*Tạo biểu đồ tròn thể hiện số lượng sách đã bán theo loại*/
const dataCategoryBooksMonth = {
    labels: ["Fantasy", "Science-Fiction", "Horror", "Biography", "Romance"],
    datasets: [
        {
            label: "Quantity category books sold every month of year (USD)",
            backgroundColor: ['violet', 'green', 'blue', 'yellow', 'purple'],
            data: [500, 1000, 750, 500, 650],
        },
    ],
};

const ctxPieCategoryBooksMonth = document.getElementById("pieChart-categoryBookSold-month").getContext("2d");
const pieChartCategoryBooksMonth = new Chart(ctxPieCategoryBooksMonth, {
    type: "pie",
    data: dataCategoryBooksMonth,
});

const ctxBarCategoryBooksMonth = document.getElementById("barChart-categoryBookSold-month").getContext("2d");
const barChartCategoryBooksMonth = new Chart(ctxBarCategoryBooksMonth, {
    type: "bar",
    data: dataCategoryBooksMonth,
});