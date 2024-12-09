import { expensesStatistics } from "../data/expense";
import Card from "../components/cards";
import BarsDataset from "../components/barChart";

const CardStatistic = () => {

    return (
        <Card variant="md:col-span-2 min-h-max" title="Statistics">
            <div className="h-72">
                <select className="font-bold text-lg ring-0 focus: outline-none bg-transparent">
                    <option>Weekly Comparison</option>
                </select>
                <BarsDataset desc={expensesStatistics}/>
            </div>
        </Card>
    )
}

export default CardStatistic