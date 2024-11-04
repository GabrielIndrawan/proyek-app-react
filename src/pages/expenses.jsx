import Card from "../components/cards";
import MainLayout from "../layouts/Mainlayout";

const ExpensesPage = () => {
    return(
        <MainLayout>
            <div className="flex flex-row mb-5">
                <div className="text-xl text-gray-500">Expenses Comparison</div>
            </div>
            <div className="w-full mb-5 ">
                <Card untitled height="[210px]">
                </Card>
            </div>
            <div className="flex flex-row mb-3">
                <div className="text-xl text-gray-500">Expenses Breakdown</div>
            </div>
            <div className="grid grid-cols-3 space-x-4">
                <div className="flex flex-col space-y-5">
                    <div className="w-auto ">
                        <Card untitled height="[160px]">
                            Lorem Ipsum Lorem Ipsum
                        </Card>
                    </div>
                    <div className="w-auto ">
                        <Card untitled height="[160px]">
                        </Card>
                    </div>
                </div>
                <div className="flex flex-col space-y-5">
                    <div className="w-auto ">
                        <Card untitled height="[160px]">
                        </Card>
                    </div>
                    <div className="w-auto ">
                        <Card untitled height="[160px]">
                        </Card>
                    </div>
                </div>
                <div className="flex flex-col space-y-5">
                    <div className="w-auto ">
                        <Card untitled height="[160px]">
                        </Card>
                    </div>
                    <div className="w-auto ">
                        <Card untitled height="[160px]">
                        </Card>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ExpensesPage;