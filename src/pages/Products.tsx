import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus,
  Search,
  Filter,
  Package,
  Edit,
  Trash2,
  Star,
  Eye,
  ShoppingCart
 } from "lucide-react";

 const Products = () => {
  const products = [
    {
      id: "PROD-001",
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$199.99",
      stock: 45,
      sold: 128,
      rating: 4.8,
      status: "Active",
      image: "/placeholder.svg"
    },
    {
      id: "PROD-002", 
      name: "Smart Watch",
      category: "Electronics",
      price: "$299.99",
      stock: 23,
      sold: 89,
      rating: 4.6,
      status: "Active",
      image: "/placeholder.svg"
    },
    {
      id: "PROD-003",
      name: "Laptop Stand",
      category: "Accessories",
      price: "$79.99",
      stock: 67,
      sold: 156,
      rating: 4.9,
      status: "Active", 
      image: "/placeholder.svg"
    },
    {
      id: "PROD-004",
      name: "Wireless Mouse",
      category: "Electronics",
      price: "$49.99",
      stock: 0,
      sold: 234,
      rating: 4.5,
      status: "Out of Stock",
      image: "/placeholder.svg"
    },
    {
      id: "PROD-005",
      name: "Phone Case",
      category: "Accessories",
      price: "$24.99",
      stock: 89,
      sold: 67,
      rating: 4.2,
      status: "Active",
      image: "/placeholder.svg"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Active": return "default";
      case "Out of Stock": return "destructive";
      case "Discontinued": return "secondary";
      default: return "outline";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground">Manage your product inventory and catalog.</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-medium">
          <Plus className="h-4 w-4 mr-2" />Add Product
          </Button>
        </div>

        {/* Product Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                  <p className="text-xs text-success">+5.2% this month</p>
                </div>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Stock</p>
                  <p className="text-2xl font-bold text-foreground">1,089</p>
                  <p className="text-xs text-muted-foreground">87.3% of products</p>
                </div>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
                  <p className="text-2xl font-bold text-foreground">34</p>
                  <p className="text-xs text-warning">Requires attention</p>
                </div>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
                  <p className="text-2xl font-bold text-foreground">124</p>
                  <p className="text-xs text-destructive">Need restocking</p>
                </div>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
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
                <Input placeholder="Search products by name, ID, or category..." className="pl-10 bg-background/50 border-border/50 focus:border-primary"/>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-gradient-card shadow-soft border-border/50 hover:shadow-medium transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <Package className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Badge variant={getStatusVariant(product.status)}>
                    {product.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <p className="text-lg font-bold text-foreground">{product.price}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Package className="h-4 w-4" />
                      <span>{product.stock} in stock</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ShoppingCart className="h-4 w-4" />
                      <span>{product.sold} sold</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-muted-foreground">{product.id}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Categories */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Popular Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium text-foreground">Electronics</h4>
                <p className="text-sm text-muted-foreground">847 products</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium text-foreground">Accessories</h4>
                <p className="text-sm text-muted-foreground">234 products</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium text-foreground">Clothing</h4>
                <p className="text-sm text-muted-foreground">123 products</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                <Package className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium text-foreground">Home & Garden</h4>
                <p className="text-sm text-muted-foreground">43 products</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
 };

 export default Products;