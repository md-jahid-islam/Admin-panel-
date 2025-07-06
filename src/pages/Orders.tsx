import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus,
  Search,
  Filter,
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

const Orders = () => {
  const orders = [
    { 
      id: "#ORD-3210", 
      customer: "John Doe", 
      email: "john@example.com",
      status: "Completed", 
      amount: "$120.00",
      items: 3,
      date: "2024-01-15",
      shipping: "Express"
    },
    { 
      id: "#ORD-3209", 
      customer: "Jane Smith", 
      email: "jane@example.com",
      status: "Processing", 
      amount: "$85.50",
      items: 2,
      date: "2024-01-14",
      shipping: "Standard"
    },
    { 
      id: "#ORD-3208", 
      customer: "Mike Johnson", 
      email: "mike@example.com",
      status: "Pending", 
      amount: "$200.00",
      items: 5,
      date: "2024-01-14",
      shipping: "Express"
    },
    { 
      id: "#ORD-3207", 
      customer: "Sarah Wilson", 
      email: "sarah@example.com",
      status: "Shipped", 
      amount: "$95.75",
      items: 2,
      date: "2024-01-13",
      shipping: "Standard"
    },
    { 
      id: "#ORD-3206", 
      customer: "Alex Brown", 
      email: "alex@example.com",
      status: "Cancelled", 
      amount: "$67.30",
      items: 1,
      date: "2024-01-13",
      shipping: "Standard"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle className="h-4 w-4" />;
      case "Processing": return <Clock className="h-4 w-4" />;
      case "Shipped": return <Truck className="h-4 w-4" />;
      case "Pending": return <Package className="h-4 w-4" />;
      case "Cancelled": return <AlertCircle className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "Processing": return "secondary";
      case "Shipped": return "outline";
      case "Pending": return "outline";
      case "Cancelled": return "destructive";
      default: return "outline";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Orders</h1>
            <p className="text-muted-foreground">Manage and track customer orders.</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-medium">
            <Plus className="h-4 w-4 mr-2" />
            New Order
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search orders by ID, customer, or email..."
                  className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Recent Orders</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-medium text-foreground">{order.id}</p>
                        <Badge variant={getStatusVariant(order.status)} className="flex items-center space-x-1">
                          {getStatusIcon(order.status)}
                          <span>{order.status}</span>
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{order.customer}</span>
                        <span>{order.email}</span>
                        <span>{order.items} items</span>
                        <span>{order.shipping} shipping</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium text-foreground">{order.amount}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1,423</h3>
              <p className="text-muted-foreground">Total Orders</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">89</h3>
              <p className="text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">234</h3>
              <p className="text-muted-foreground">Shipped</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1,100</h3>
              <p className="text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Orders;