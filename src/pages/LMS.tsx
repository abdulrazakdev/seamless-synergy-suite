import { useState } from "react";
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock,
  Play,
  FileText,
  Download,
  Filter,
  Plus,
  Search,
  Star,
  TrendingUp,
  Video
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LMS = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Dr. Sarah Johnson",
      students: 234,
      duration: "8 weeks",
      progress: 65,
      rating: 4.8,
      image: "bg-gradient-lms",
      status: "In Progress",
      modules: 12,
      completedModules: 8
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Prof. Michael Chen",
      students: 456,
      duration: "10 weeks",
      progress: 30,
      rating: 4.9,
      image: "bg-gradient-primary",
      status: "In Progress",
      modules: 15,
      completedModules: 5
    },
    {
      id: 3,
      title: "Business Analytics Fundamentals",
      instructor: "Emma Wilson",
      students: 189,
      duration: "6 weeks",
      progress: 100,
      rating: 4.7,
      image: "bg-gradient-cms",
      status: "Completed",
      modules: 8,
      completedModules: 8
    },
    {
      id: 4,
      title: "Cloud Architecture Essentials",
      instructor: "Alex Brown",
      students: 312,
      duration: "12 weeks",
      progress: 0,
      rating: 0,
      image: "bg-gradient-erp",
      status: "Not Started",
      modules: 20,
      completedModules: 0
    }
  ];

  const recentAssessments = [
    { name: "React Hooks Quiz", course: "Advanced React", score: "92%", date: "2 days ago" },
    { name: "Python Basics Test", course: "Python for Data Science", score: "88%", date: "1 week ago" },
    { name: "Analytics Project", course: "Business Analytics", score: "95%", date: "2 weeks ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learning Management System</h1>
          <p className="text-muted-foreground">Manage courses, track progress, and deliver exceptional learning experiences</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Course
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">+3 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">+156 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Certifications</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Issued this year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Avg. Completion</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-muted-foreground">+5.2% improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="courses" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="courses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-2 ${course.image}`} />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.instructor}</CardDescription>
                    </div>
                    <Badge variant={course.status === "Completed" ? "default" : course.status === "In Progress" ? "secondary" : "outline"}>
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{course.duration}</span>
                      </div>
                      {course.rating > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          <span>{course.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{course.completedModules}/{course.modules} modules</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-1" />
                      Continue
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assessments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Assessments</CardTitle>
              <CardDescription>Track student performance and quiz results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAssessments.map((assessment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-background">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{assessment.name}</p>
                        <p className="text-sm text-muted-foreground">{assessment.course}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{assessment.score}</p>
                      <p className="text-xs text-muted-foreground">{assessment.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Management</CardTitle>
              <CardDescription>View and manage enrolled students</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Student management interface coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Analytics</CardTitle>
              <CardDescription>Comprehensive reports and insights</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Analytics dashboard coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LMS;