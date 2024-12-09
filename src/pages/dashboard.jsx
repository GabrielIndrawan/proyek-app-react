
import Card from "../components/cards";
import MainLayout from "../layouts/Mainlayout";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expense";
import transactions from "../data/transactions";
import { useState } from "react";
import { BarChart } from "@mui/x-charts";
import CardBalance from "../fragments/cardBalance";
import CardGoal from "../fragments/cardGoal";

const DashboardPage = () => {
  const tabs = ["All", "Revenue", "Expense"]
  const [activeTab, setTab] = useState("All")
  const billCard = bills.map((bill) => (
      <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
        <div className="flex">
          <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span> 
          <span className="text-2xl font-bold">{bill.date}</span> 
          </div>
          <div>
            <img className="h-6" src={`/images/${bill.logo}`} /> 
            <span className="font-bold">{bill.name}</span>
            <br />
            <span className="text-xs">Last Charge - {bill.lastCharge}</span>
          </div>
        </div>
        <div className="flex place-content-center flex-col">
          <span className="p-2 border rounded-lg font-bold text-center">${bill.amount}</span>
        </div>
      </div>
  ))

  const transactionCard = (tab) => transactions.map((transaction) => {
    if(tab!="All"){
      if(transaction.type===tab){
        return (<div key={transaction.id} className="flex justify-between my-6">
          <div className="flex">
            <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
              {transaction.icon}
            </div>
            <div className="ms-4">
              <span className="text-xl font-bold">
                {transaction.transactionName}
              </span>
              <br />
              <span className="text-gray-02">{transaction.shopName}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-gray-02">
              ${transaction.amount}
            </span>
            <br />
            <span className="text-gray-02">{transaction.date}</span>
          </div>
        </div>)
      }
    }else{
      return (<div key={transaction.id} className="flex justify-between my-6">
        <div className="flex">
          <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
            {transaction.icon}
          </div>
          <div className="ms-4">
            <span className="text-xl font-bold">
              {transaction.transactionName}
            </span>
            <br />
            <span className="text-gray-02">{transaction.shopName}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-gray-02">
            ${transaction.amount}
          </span>
          <br />
          <span className="text-gray-02">{transaction.date}</span>
        </div>
      </div>)
    }
  })
  
  const expensesCard = expensesBreakdowns.map((expense) => (
      <div key={expense.id} className="flex pb-4 justify-between">
        <div className="flex">
          <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
            {expense.icon}
          </div>
          <div className="ms-4">
            <span className="text-gray-02">{expense.category}</span>
            <br />
            <span className="font-bold text-lg">${expense.amount}</span>
            <div className="flex">
              <span className="text-gray-02">
                {expense.percentage}%*
              </span>{" "}
              {expense.arrow}
            </div>
          </div>
        </div>
        <div className="flex place-content-center flex-col me-8">
        </div>
      </div>
  ))

  return (
    <MainLayout type="dashboard">
      <div className="mb-4 sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
            <CardBalance/>
          </div>
          <div className="mb-4 sm:w-1/3">
            <CardGoal/>
          </div>
          <div className="mb-4 sm:w-1/3">
            <Card title="Upcoming Bills">
              {billCard}
            </Card>
          </div>
        </div>
        {/* top content end*/}
        {/* bottom content start*/}
        <div className="sm:flex sm:gap-6">
          <div className="mb-4 sm:w-1/3">
              <Card title="Recent Transaction" variant="md:col-span-1 md:row-span-2">
                <div>
                  <div className="mb-4">
                    <div className="flex flex-row space-x-3">
                    {
                      tabs.map((tab)=>(
                        <button key={tab} value={tab} className={(activeTab===tab)?
                        "px-4 font-bold border-b-4 border-primary text-primary":
                        "px-4 font-bold text-gray-01"}
                        onClick={()=>{setTab(tab)}}
                        >
                          {tab}
                        </button>
                      ))
                    }
                    </div>
                  </div>
                  {transactionCard(activeTab)}
                </div>
              </Card>
          </div>
          <div className="sm:w-2/3">
            <div className="mb-4">
              <Card title="Statistics">
                <div className="font-bold text-xl">Weekly Comparison</div>
                <BarChart
                  xAxis={[{ scaleType: 'band', data: ['17 Sun', '18 Mon', '19 Tue','20 Wed','21 Thu','22 Fri','23 Sat'], categoryGapRatio:0.5,},]}
                  yAxis={[{ tickInterval: [0, 2000, 10000, 50000, 250000], max:250000, scaleType:"linear"}]}
                  series={[{ data: [50000, 15000, 50000, 50000, 30000, 6000, 25000], color:"lightgrey"}, { data: [200000, 30000, 8000, 55000, 50000, 200000, 50000], color:"#299D91"}]}
                  width={710}
                  height={300}
                  margin={{left: 60}}
                  borderRadius={6}
                />
              </Card>
            </div>
            <div className="mb-4">
              <Card title="Expenses Breakdown">
                <div className="grid grid-cols-3">
                  {expensesCard}
                </div>
              </Card>
            </div>
          </div>
        </div>
    </MainLayout>
  );
};

export default DashboardPage;
