import { expensesStatistics } from "../data/expense";
import Card from "../../Elements/Card";

const CardStatistic = () => {
    const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => (<div key={expensesStatistic.id}>{expensesStatistic.date}</div>));

    return (
        <Card variant="md:col-span-2 min-h-max" title="Statistics">
            {expensesStatisticCard}
        </Card>
    )
}

export default CardStatistic