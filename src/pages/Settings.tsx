import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  CreditCard,
  Mail,
  Palette,
  Globe,
  Database,
  Key
} from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Navigation */}
          <div className="space-y-2">
            <Card className="bg-gradient-card shadow-soft border-border/50">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <a href="#profile" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
                    <User className="h-4 w-4" />
                    <span className="font-medium">Profile</span>
                  </a>
                  <a href="#notifications" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </a>
                  <a href="#security" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Security</span>
                  </a>
                  <a href="#billing" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground">
                    <CreditCard className="h-4 w-4" />
                    <span>Billing</span>
                  </a>
                  <a href="#appearance" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground">
                    <Palette className="h-4 w-4" />
                    <span>Appearance</span>
                  </a>
                  <a href="#integrations" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground">
                    <Globe className="h-4 w-4" />
                    <span>Integrations</span>
                  </a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <Card id="profile" className="bg-gradient-card shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Change Avatar</Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Admin" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="User" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="admin@frox.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
                <Button className="bg-gradient-primary hover:opacity-90 text-white">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card id="notifications" className="bg-gradient-card shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notification Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications in your browser</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Order Updates</Label>
                    <p className="text-sm text-muted-foreground">Get notified about order status changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive promotional and marketing emails</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card id="security" className="bg-gradient-card shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button variant="outline">
                  Update Password
                </Button>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Key className="h-4 w-4 mr-2" />
                    Enable 2FA
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Appearance Settings */}
            <Card id="appearance" className="bg-gradient-card shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Appearance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm">Light</Button>
                    <Button variant="outline" size="sm">Dark</Button>
                    <Button variant="outline" size="sm">System</Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Use compact spacing throughout the interface</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-foreground">Sidebar Collapsed</Label>
                    <p className="text-sm text-muted-foreground">Keep sidebar collapsed by default</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            {/* System Information */}
            <Card className="bg-gradient-card shadow-soft border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>System Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Version</p>
                    <p className="font-medium text-foreground">1.2.3</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Updated</p>
                    <p className="font-medium text-foreground">2024-01-15</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Database</p>
                    <p className="font-medium text-foreground">Connected</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Storage Used</p>
                    <p className="font-medium text-foreground">2.4 GB / 10 GB</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;