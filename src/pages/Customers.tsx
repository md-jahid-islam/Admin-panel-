import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Plus,
  Search,
  Filter,
  Users,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Edit,
  Trash2
 } from "lucide-react";

 const Customers = () => {
  const customers = [
    {
      id: "CUST-001",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      joinDate: "2023-08-15",
      totalOrders: 12,
      totalSpent: "$1,450.00",
      status: "Active",
      rating: 4.8
    },
    {
      id: "CUST-002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 234-5678",
      location: "Los Angeles, CA",
      joinDate: "2023-09-22",
      totalOrders: 8,
      totalSpent: "$890.50",
      status: "Active",
      rating: 4.9
    },
    {
      id: "CUST-003",
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+8801540587085",
      location: "Dhaka, Uttara",
      joinDate: "2023-07-10",
      totalOrders: 15,
      totalSpent: "$46.75",
      status: "VIP",
      rating: 5.0
    },
    {
      id: "CUST-004",
      name: "Sarah Wilson",
      email: "jahidulislamweb2003@gmail.com",
      phone: "+1 (555) 456-7890",
      location: "Houston, TX",
      joinDate: "2023-10-05",
      totalOrders: 4,
      totalSpent: "$320.25",
      status: "Active",
      rating: 4.5
    },
    {
      id: "CUST-005",
      name: "Alex Brown",
      email: "alex@example.com",
      phone: "+1 (555) 567-8901",
      location: "Phoenix, AZ",
      joinDate: "2023-06-18",
      totalOrders: 0,
      totalSpent: "$0.00",
      status: "Inactive",
      rating: 0
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "VIP": return "default";
      case "Active": return "secondary";
      case "Inactive": return "outline";
      default: return "outline";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Customers</h1>
            <p className="text-muted-foreground">Manage customer accounts and information.</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-medium">
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>

        {/* Add Customer Form */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Add New Customer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter customer name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter location" />
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-gradient-primary hover:opacity-90 text-white">
                Add Customer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search customers by name, email, or phone..." className="pl-10 bg-background/50 border-border/50 focus:border-primary"/>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Customers List */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Customer Database</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <p className="font-medium text-foreground">{customer.name}</p>
                        <Badge variant={getStatusVariant(customer.status)}>
                          {customer.status}
                        </Badge>
                        {customer.rating > 0 && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-muted-foreground">{customer.rating}</span>
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3" />
                          <span>{customer.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{customer.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{customer.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>Joined {customer.joinDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="font-medium text-foreground">{customer.totalSpent}</p>
                      <p className="text-sm text-muted-foreground">{customer.totalOrders} orders</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">2,847</h3>
              <p className="text-muted-foreground">Total Customers</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">2,340</h3>
              <p className="text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">127</h3>
              <p className="text-muted-foreground">VIP Members</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">89</h3>
              <p className="text-muted-foreground">This Month</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
 };

 export default Customers;