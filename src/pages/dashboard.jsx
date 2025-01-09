
import Card from "../components/cards";
import MainLayout from "../layouts/Mainlayout";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expense";
import transactions from "../data/transactions";
import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts";
import CardBalance from "../fragments/cardBalance";
import CardGoal from "../fragments/cardGoal";
import CardStatistic from "../fragments/cardStatistic";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { NotifContext } from "../context/notifContext";

const DashboardPage = () => {
  const tabs = ["All", "Revenue", "Expense"]
  const [activeTab, setTab] = useState("All")
  const {setMsg} = useContext(NotifContext)
  const [loadingBill, setLoadingBill] = useState(true)
  const [billData, setBillData] = useState([])
  const refreshToken = localStorage.getItem("refreshToken");

  const getBills = async () => {
    try {
      const response = await axios.get("https://jwt-auth-eight-neon.vercel.app/bills", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      setLoadingBill(false)
      setBillData(response.data.data)
    } catch (error) {
      console.log(error)
    }

  };

  useEffect(()=>{
    getBills()
  },[])

  const billCard = billData.map((bill) => (
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
              {(loadingBill)? <div className="justify-self-center">
                <CircularProgress/>
              </div>:billCard}
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
              <CardStatistic/>
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
