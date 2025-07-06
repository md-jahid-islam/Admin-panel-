import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText,
  Download,
  Calendar,
  TrendingUp,
  DollarSign,
  Users,
  ShoppingCart,
  BarChart3,
  PieChart,
  Filter
} from "lucide-react";

const Reports = () => {
  const reports = [
    {
      name: "Sales Report",
      description: "Monthly sales performance and trends",
      type: "Sales",
      lastGenerated: "2024-01-15",
      status: "Ready",
      icon: DollarSign
    },
    {
      name: "Customer Analytics",
      description: "Customer behavior and engagement metrics",
      type: "Analytics",
      lastGenerated: "2024-01-14",
      status: "Ready",
      icon: Users
    },
    {
      name: "Product Performance",
      description: "Top performing products and inventory analysis",
      type: "Inventory",
      lastGenerated: "2024-01-14",
      status: "Ready",
      icon: ShoppingCart
    },
    {
      name: "Financial Summary",
      description: "Revenue, expenses, and profit analysis",
      type: "Financial",
      lastGenerated: "2024-01-13",
      status: "Generating",
      icon: BarChart3
    },
    {
      name: "Marketing Campaign",
      description: "Campaign performance and ROI metrics",
      type: "Marketing",
      lastGenerated: "2024-01-12",
      status: "Ready",
      icon: TrendingUp
    }
  ];

  const quickStats = [
    { label: "Total Revenue", value: "$124,590", change: "+12.5%", trend: "up" },
    { label: "Orders", value: "1,423", change: "-2.4%", trend: "down" },
    { label: "Customers", value: "2,847", change: "+8.2%", trend: "up" },
    { label: "Avg Order Value", value: "$87.50", change: "+5.8%", trend: "up" }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ready": return "default";
      case "Generating": return "secondary";
      case "Error": return "destructive";
      default: return "outline";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground">Generate and view business reports and analytics.</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-medium">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-xs ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                      {stat.change} vs last month
                    </p>
                  </div>
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sales Reports</h3>
              <p className="text-muted-foreground text-sm mb-4">Track revenue, sales trends, and performance metrics</p>
              <Button variant="outline" className="w-full">
                Generate Sales Report
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Customer Reports</h3>
              <p className="text-muted-foreground text-sm mb-4">Analyze customer behavior and demographics</p>
              <Button variant="outline" className="w-full">
                Generate Customer Report
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <PieChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Reports</h3>
              <p className="text-muted-foreground text-sm mb-4">Deep dive into website and app analytics</p>
              <Button variant="outline" className="w-full">
                Generate Analytics Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Recent Reports</span>
            </CardTitle>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <report.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{report.name}</h4>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {report.type}
                        </Badge>
                        <Badge variant={getStatusVariant(report.status)} className="text-xs">
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Last generated</p>
                      <p className="text-sm font-medium text-foreground flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{report.lastGenerated}</span>
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" disabled={report.status !== "Ready"}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chart Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Revenue chart would display here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Sales by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Category breakdown chart would display here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;