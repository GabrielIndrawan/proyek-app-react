/* eslint-disable react/jsx-key */
import Card from "../components/cards";
import MainLayout from "../layouts/Mainlayout";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expense";
import transactions from "../data/transactions";

const DashboardPage = () => {
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
  const transactionCard = transactions.map((transaction) => <div key={transaction.id}>{transaction.transactionName}</div>)
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
  ));

  return (
    <MainLayout type="dashboard">
      <div className="mb-4 sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
            <Card title="total Balance"/>
          </div>
          <div className="mb-4 sm:w-1/3">
            <Card title="Goal"/>
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
                {transactionCard}
              </Card>
          </div>
          <div className="sm:w-2/3">
            <div className="mb-4">
              <Card title="Statistics"/>
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
