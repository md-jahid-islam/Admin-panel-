import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  CreditCard,
  Search,
  Filter,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  X,
  Plus,
  TrendingUp
} from "lucide-react";

const Payments = () => {
  const payments = [
    {
      id: "PAY-3210",
      orderId: "ORD-3210",
      customer: "John Doe",
      amount: "$120.00",
      method: "Credit Card",
      cardLast4: "4242",
      status: "Completed",
      date: "2024-01-15",
      time: "14:30"
    },
    {
      id: "PAY-3209",
      orderId: "ORD-3209",
      customer: "Jane Smith",
      amount: "$85.50",
      method: "PayPal",
      cardLast4: "",
      status: "Processing",
      date: "2024-01-14",
      time: "16:45"
    },
    {
      id: "PAY-3208",
      orderId: "ORD-3208",
      customer: "Mike Johnson",
      amount: "$200.00",
      method: "Credit Card",
      cardLast4: "1234",
      status: "Pending",
      date: "2024-01-14",
      time: "12:15"
    },
    {
      id: "PAY-3207",
      orderId: "ORD-3207",
      customer: "Sarah Wilson",
      amount: "$95.75",
      method: "Debit Card",
      cardLast4: "5678",
      status: "Completed",
      date: "2024-01-13",
      time: "09:20"
    },
    {
      id: "PAY-3206",
      orderId: "ORD-3206",
      customer: "Alex Brown",
      amount: "$67.30",
      method: "Credit Card",
      cardLast4: "9876",
      status: "Failed",
      date: "2024-01-13",
      time: "18:00"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle className="h-4 w-4" />;
      case "Processing": return <Clock className="h-4 w-4" />;
      case "Pending": return <Clock className="h-4 w-4" />;
      case "Failed": return <X className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "Processing": return "secondary";
      case "Pending": return "outline";
      case "Failed": return "destructive";
      default: return "outline";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Payments</h1>
            <p className="text-muted-foreground">Process and manage customer payments.</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-medium">
            <Plus className="h-4 w-4 mr-2" />
            Process Payment
          </Button>
        </div>

        {/* Process Payment Form */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Process New Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="orderId">Order ID</Label>
                <Input id="orderId" placeholder="Enter order ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" placeholder="$0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input id="expiryDate" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customerName">Customer Name</Label>
                <Input id="customerName" placeholder="Enter customer name" />
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-gradient-primary hover:opacity-90 text-white">
                <CreditCard className="h-4 w-4 mr-2" />
                Process Payment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today's Revenue</p>
                  <p className="text-2xl font-bold text-foreground">$2,847</p>
                  <p className="text-xs text-success">+12.5% from yesterday</p>
                </div>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Successful Payments</p>
                  <p className="text-2xl font-bold text-foreground">89</p>
                  <p className="text-xs text-success">98.9% success rate</p>
                </div>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Processing</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
                </div>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Failed Payments</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-xs text-destructive">Require attention</p>
                </div>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search payments by ID, customer, or amount..."
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

        {/* Payments List */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Payment History</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-medium text-foreground">{payment.id}</p>
                        <Badge variant={getStatusVariant(payment.status)} className="flex items-center space-x-1">
                          {getStatusIcon(payment.status)}
                          <span>{payment.status}</span>
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{payment.customer}</span>
                        <span>Order: {payment.orderId}</span>
                        <span>{payment.method}{payment.cardLast4 && ` ending in ${payment.cardLast4}`}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium text-foreground">{payment.amount}</p>
                      <p className="text-sm text-muted-foreground">{payment.date} at {payment.time}</p>
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
      </div>
    </DashboardLayout>
  );
};

export default Payments;