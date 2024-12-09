import Icons from "../components/icons";

export const expensesBreakdowns = [
    {
      id: 1,
      category: "Housing",
      amount: 250,
      percentage: 15,
      icon: <Icons.Housing />,
      arrow: <Icons.ArrowDown />,
    },
    {
      id: 2,
      category: "Food",
      amount: 350,
      percentage: 8,
      icon: <Icons.Food />,
      arrow: <Icons.ArrowUp />,
    },
    {
      id: 3,
      category: "Transportation",
      amount: 50,
      percentage: 12,
      icon: <Icons.Transportation />,
      arrow: <Icons.ArrowUp />,
    },
    {
      id: 4,
      category: "Entertainment",
      amount: 80,
      percentage: 15,
      icon: <Icons.Entertainment />,
      arrow: <Icons.ArrowUp />,
    },
    {
      id: 5,
      category: "Shopping",
      amount: 420,
      percentage: 25,
      icon: <Icons.Shopping />,
      arrow: <Icons.ArrowDown />,
    },
    {
      id: 6,
      category: "Others",
      amount: 650,
      percentage: 23,
      icon: <Icons.Others />,
      arrow: <Icons.ArrowDown />,
    },
  ];
  
  export const expensesStatistics = {
    dataKey: "date",
    series: [
      { dataKey: "amountThisWeek", label: "This Week", color: "#E8E8E8" },
      { dataKey: "amountLastWeek", label: "Last Week", color: "#299D91" },
    ],
    data :[
    {
      id: 1,
      date: "2023-05-17",
      day: "Sun",
      amountThisWeek: 250000,
      amountLastWeek: 50000,
    },
    {
      id: 2,
      date: "2023-05-18",
      day: "Mon",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 3,
      date: "2023-05-19",
      day: "Tue",
      amountThisWeek: 10000,
      amountLastWeek: 50000,
    },
    {
      id: 4,
      date: "2023-05-20",
      day: "Wed",
      amountThisWeek: 50000,
      amountLastWeek: 50000,
    },
    {
      id: 5,
      date: "2023-05-21",
      day: "Thu",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 6,
      date: "2023-05-22",
      day: "Fri",
      amountThisWeek: 250000,
      amountLastWeek: 10000,
    },
    {
      id: 7,
      date: "2023-05-23",
      day: "Sat",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
  ]};
  
  export default expensesBreakdowns;