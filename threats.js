var xValues = ["2019", "2020", "2021", "2022", "2023"];
var yValues = [1.16, 2.95, 5.99, 8.44, 11.50, 0];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Estimated cost of ccybercrime worldwide (in trillion U.S. dollars)"
    }
  }
});

var xValues = ["Healthcare", "Education", "Technology", "Public", "Retail and Liesure", "Professional Services", "Financial Services", "Manufacturing", "Other"];
var yValues = [27, 18, 11, 11, 9, 6, 5, 4, 9];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145",
  "#33F3FF",
  "#E9FF33",
  "#B3856A",
  "#F15BE5"
];

new Chart("Chart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Data breach and cyber attack by sector (Q1 2023)"
    }
  }
});