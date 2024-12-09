import { Card } from "../components/cards";

const CardBalance = () => {
    const balanceCard = accounts.map((account) => (<div key={account.id}>{account.bankName}</div>));

    return (
        <Card title="Total Balance">
            {balanceCard}
        </Card>
    )
}

export default CardBalance