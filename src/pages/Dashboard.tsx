import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  Calendar,
  FileText,
  Award,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Target
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "bg-gradient-lms",
      trend: "up"
    },
    {
      title: "Active Courses",
      value: "48",
      change: "+8.3%",
      icon: BookOpen,
      color: "bg-gradient-primary",
      trend: "up"
    },
    {
      title: "Revenue",
      value: "€48,592",
      change: "+23.1%",
      icon: DollarSign,
      color: "bg-gradient-erp",
      trend: "up"
    },
    {
      title: "Completion Rate",
      value: "87.3%",
      change: "-2.4%",
      icon: Target,
      color: "bg-gradient-cms",
      trend: "down"
    }
  ];

  const recentActivities = [
    { user: "John Smith", action: "Completed", item: "Advanced React Course", time: "2 hours ago", status: "success" },
    { user: "Sarah Johnson", action: "Enrolled in", item: "Python Basics", time: "3 hours ago", status: "info" },
    { user: "Mike Chen", action: "Submitted", item: "Project Proposal", time: "5 hours ago", status: "warning" },
    { user: "Emma Wilson", action: "Updated", item: "HR Policy Document", time: "1 day ago", status: "default" },
    { user: "Alex Brown", action: "Published", item: "Q4 Financial Report", time: "2 days ago", status: "success" },
  ];

  const upcomingEvents = [
    { title: "Team Meeting", date: "Today, 3:00 PM", type: "meeting" },
    { title: "Course Deadline", date: "Tomorrow, 11:59 PM", type: "deadline" },
    { title: "Payroll Processing", date: "Aug 31, 2025", type: "finance" },
    { title: "New Course Launch", date: "Sep 5, 2025", type: "launch" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your business suite.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center pt-1">
                <Badge variant={stat.trend === "up" ? "default" : "destructive"} className="text-xs">
                  {stat.change}
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Recent Activities */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest actions across all modules</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivities.map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{activity.user}</TableCell>
                    <TableCell>
                      <Badge variant={activity.status as any}>{activity.action}</Badge>
                    </TableCell>
                    <TableCell>{activity.item}</TableCell>
                    <TableCell className="text-muted-foreground">{activity.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Right Side Cards */}
        <div className="lg:col-span-3 space-y-6">
          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Module Usage</CardTitle>
              <CardDescription>System utilization by module</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-lms" />
                    <span className="text-sm font-medium">LMS</span>
                  </div>
                  <span className="text-sm text-muted-foreground">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-erp" />
                    <span className="text-sm font-medium">ERP</span>
                  </div>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-cms" />
                    <span className="text-sm font-medium">CMS</span>
                  </div>
                  <span className="text-sm text-muted-foreground">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Don't miss these important dates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-background">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button className="justify-start" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Create Course
            </Button>
            <Button className="justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Add User
            </Button>
            <Button className="justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              New Document
            </Button>
            <Button className="justify-start" variant="outline">
              <Activity className="mr-2 h-4 w-4" />
              View Reports
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;