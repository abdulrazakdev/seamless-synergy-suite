import { useState } from "react";
import {
  Building2,
  Users,
  DollarSign,
  Package,
  Calendar,
  FileText,
  TrendingUp,
  Clock,
  Briefcase,
  CreditCard,
  UserCheck,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ERP = () => {
  const employees = [
    { id: 1, name: "John Smith", department: "Engineering", position: "Senior Developer", status: "Active", attendance: "98%" },
    { id: 2, name: "Sarah Johnson", department: "Marketing", position: "Marketing Manager", status: "Active", attendance: "95%" },
    { id: 3, name: "Mike Chen", department: "Finance", position: "Accountant", status: "On Leave", attendance: "92%" },
    { id: 4, name: "Emma Wilson", department: "HR", position: "HR Specialist", status: "Active", attendance: "97%" },
    { id: 5, name: "Alex Brown", department: "Sales", position: "Sales Executive", status: "Active", attendance: "94%" },
  ];

  const projects = [
    { name: "Website Redesign", progress: 75, budget: "€45,000", deadline: "Sep 15, 2025", status: "On Track" },
    { name: "Mobile App Development", progress: 40, budget: "€80,000", deadline: "Oct 30, 2025", status: "At Risk" },
    { name: "ERP Implementation", progress: 90, budget: "€120,000", deadline: "Aug 31, 2025", status: "On Track" },
    { name: "Marketing Campaign", progress: 60, budget: "€25,000", deadline: "Sep 5, 2025", status: "On Track" },
  ];

  const financialMetrics = [
    { label: "Total Revenue", value: "€482,592", change: "+15.3%", icon: TrendingUp },
    { label: "Operating Expenses", value: "€234,128", change: "+8.2%", icon: CreditCard },
    { label: "Net Profit", value: "€248,464", change: "+22.1%", icon: DollarSign },
    { label: "Cash Flow", value: "€125,320", change: "+18.7%", icon: Building2 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Enterprise Resource Planning</h1>
        <p className="text-muted-foreground">Manage HR, finance, projects, and business operations</p>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {financialMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <Badge variant={metric.change.startsWith("+") ? "default" : "destructive"} className="mt-1">
                {metric.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="hr" className="space-y-4">
        <TabsList>
          <TabsTrigger value="hr">Human Resources</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>

        <TabsContent value="hr" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Employee Directory</CardTitle>
                <CardDescription>Manage employee information and attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Attendance</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">{employee.name}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{employee.position}</TableCell>
                        <TableCell>{employee.attendance}</TableCell>
                        <TableCell>
                          <Badge variant={employee.status === "Active" ? "default" : "secondary"}>
                            {employee.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>HR Metrics</CardTitle>
                <CardDescription>Key human resource indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Total Employees</span>
                  </div>
                  <span className="font-bold">248</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-success" />
                    <span className="text-sm">Active Today</span>
                  </div>
                  <span className="font-bold">231</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-warning" />
                    <span className="text-sm">On Leave</span>
                  </div>
                  <span className="font-bold">17</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-info" />
                    <span className="text-sm">Avg. Attendance</span>
                  </div>
                  <span className="font-bold">95.2%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Payroll Overview</CardTitle>
              <CardDescription>Monthly payroll processing status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Processing Status</span>
                  <Badge>In Progress</Badge>
                </div>
                <Progress value={65} className="h-2" />
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">€324,580</p>
                    <p className="text-xs text-muted-foreground">Total Payroll</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">248</p>
                    <p className="text-xs text-muted-foreground">Employees</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Aug 31</p>
                    <p className="text-xs text-muted-foreground">Payment Date</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Dashboard</CardTitle>
              <CardDescription>Real-time financial metrics and reports</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Financial dashboard coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Track project progress and budgets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="space-y-2 p-4 rounded-lg bg-secondary">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{project.name}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-muted-foreground">Budget: {project.budget}</span>
                          <span className="text-sm text-muted-foreground">Deadline: {project.deadline}</span>
                        </div>
                      </div>
                      <Badge variant={project.status === "On Track" ? "default" : "destructive"}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Management</CardTitle>
              <CardDescription>Track products and supply chain</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Inventory management coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ERP;