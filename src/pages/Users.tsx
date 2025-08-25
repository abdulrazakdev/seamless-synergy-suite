import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">Manage system users and permissions</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>View and manage user accounts</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <div className="text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">User management interface coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersPage;