import { Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure system preferences and integrations</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
          <CardDescription>Manage application configuration</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <div className="text-center">
            <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Settings panel coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;