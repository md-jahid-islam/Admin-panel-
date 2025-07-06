import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart,
  Eye,
  MousePointer,
  Smartphone,
  Monitor
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Analytics = () => {
  const performanceMetrics = [
    {
      title: "Page Views",
      value: "124,573",
      change: "+15.3%",
      trend: "up" as const,
      icon: Eye
    },
    {
      title: "Unique Visitors",
      value: "8,429",
      change: "+12.1%",
      trend: "up" as const,
      icon: Users
    },
    {
      title: "Bounce Rate",
      value: "34.2%",
      change: "-5.4%",
      trend: "up" as const,
      icon: MousePointer
    },
    {
      title: "Revenue per Visitor",
      value: "$24.50",
      change: "+8.7%",
      trend: "up" as const,
      icon: DollarSign
    }
  ];

  const topPages = [
    { page: "/dashboard", views: "45,231", percentage: "36.3%" },
    { page: "/products", views: "28,412", percentage: "22.8%" },
    { page: "/orders", views: "19,845", percentage: "15.9%" },
    { page: "/customers", views: "15,632", percentage: "12.5%" },
    { page: "/analytics", views: "8,453", percentage: "6.8%" }
  ];

  const trafficSources = [
    { source: "Direct", visits: "48,231", percentage: "38.7%" },
    { source: "Google Search", visits: "35,412", percentage: "28.4%" },
    { source: "Social Media", visits: "22,845", percentage: "18.3%" },
    { source: "Email", visits: "12,632", percentage: "10.1%" },
    { source: "Referrals", visits: "5,453", percentage: "4.4%" }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Track your website performance and user behavior.</p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts and Data Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{page.page}</p>
                        <p className="text-sm text-muted-foreground">{page.views} views</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{page.percentage}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{source.source}</p>
                      <p className="text-sm text-muted-foreground">{source.visits} visits</p>
                    </div>
                    <Badge variant="outline">{source.percentage}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Device Analytics */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Device Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background/50 rounded-lg">
                <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">62.4%</h3>
                <p className="text-muted-foreground">Desktop</p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-lg">
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">31.8%</h3>
                <p className="text-muted-foreground">Mobile</p>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-lg">
                <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">5.8%</h3>
                <p className="text-muted-foreground">Tablet</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;