import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DollarSign, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  ArrowUpIcon,
  ArrowDownIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$54,239",
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+8.2%",
      trend: "up" as const,
      icon: Users
    },
    {
      title: "Orders",
      value: "1,423",
      change: "-2.4%",
      trend: "down" as const,
      icon: ShoppingCart
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8%",
      trend: "up" as const,
      icon: TrendingUp
    }
  ];

  const recentOrders = [
    { id: "#3210", customer: "John Doe", status: "Completed", amount: "$120.00" },
    { id: "#3209", customer: "Jane Smith", status: "Processing", amount: "$85.50" },
    { id: "#3208", customer: "Mike Johnson", status: "Pending", amount: "$200.00" },
    { id: "#3207", customer: "Sarah Wilson", status: "Completed", amount: "$95.75" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Admin</h1>
            <p className="text-muted-foreground">Here's what's happening with your business today.</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-medium">
            View Reports
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts and Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Placeholder */}
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Chart component would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-foreground">Recent Orders</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-medium text-foreground">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant={
                          order.status === "Completed" ? "default" : 
                          order.status === "Processing" ? "secondary" : 
                          "outline"
                        }
                        className={
                          order.status === "Completed" ? "bg-success text-success-foreground" :
                          order.status === "Processing" ? "bg-warning text-warning-foreground" :
                          ""
                        }
                      >
                        {order.status}
                      </Badge>
                      <p className="font-medium text-foreground">{order.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <Users className="h-5 w-5" />
                <span>Add User</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <ShoppingCart className="h-5 w-5" />
                <span>New Order</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <DollarSign className="h-5 w-5" />
                <span>Process Payment</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col space-y-2">
                <TrendingUp className="h-5 w-5" />
                <span>View Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
