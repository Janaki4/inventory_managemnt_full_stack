import React from 'react'
import PopularProductscard from './PopularProductscard'
import PurchaseHistoryCard from './PurchaseHistoryCard'
import SalesSummaryCard from './SalesSummaryCard'
import CardExpenseSummary from './ExpenseSummaryCard'
import StatCard from './StatCard'
import { CheckCircle, Package, Table, TrendingDown, TrendingUp } from 'lucide-react'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 custom-grid-rows xl:overflow-auto pb-4 gap-10'>
            <PopularProductscard />
            <SalesSummaryCard />
            <PurchaseHistoryCard />
            <CardExpenseSummary />
            <StatCard
                title="Customer & Expenses"
                primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
                dateRange="22 - 29 October 2023"
                details={[
                    {
                        title: "Customer Growth",
                        amount: "175.00",
                        changePercentage: 131,
                        IconComponent: TrendingUp,
                    },
                    {
                        title: "Expenses",
                        amount: "10.00",
                        changePercentage: -56,
                        IconComponent: TrendingDown,
                    },
                ]}
            />
            <StatCard
                title="Dues & Pending Orders"
                primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
                dateRange="22 - 29 October 2023"
                details={[
                    {
                        title: "Dues",
                        amount: "250.00",
                        changePercentage: 131,
                        IconComponent: TrendingUp,
                    },
                    {
                        title: "Pending Orders",
                        amount: "147",
                        changePercentage: -56,
                        IconComponent: TrendingDown,
                    },
                ]}
            />
            <StatCard
                title="Sales & Discount"
                primaryIcon={<Table className="text-blue-600 w-6 h-6" />}
                dateRange="22 - 29 October 2023"
                details={[
                    {
                        title: "Sales",
                        amount: "1000.00",
                        changePercentage: 20,
                        IconComponent: TrendingUp,
                    },
                    {
                        title: "Discount",
                        amount: "200.00",
                        changePercentage: -10,
                        IconComponent: TrendingDown,
                    },
                ]}
            />

        </div>
    )
}

export default Dashboard