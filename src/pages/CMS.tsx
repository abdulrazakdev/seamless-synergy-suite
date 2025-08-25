import { useState } from "react";
import {
  FileText,
  Image,
  Video,
  Folder,
  Plus,
  Search,
  Filter,
  Upload,
  Edit,
  Trash2,
  Eye,
  Download,
  Copy,
  Settings,
  Globe,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CMS = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const contentItems = [
    { id: 1, title: "Company Overview", type: "Page", status: "Published", author: "Admin", modified: "2 hours ago", views: 1234 },
    { id: 2, title: "Q3 Financial Report", type: "Document", status: "Draft", author: "Finance Team", modified: "1 day ago", views: 0 },
    { id: 3, title: "Product Launch Video", type: "Video", status: "Published", author: "Marketing", modified: "3 days ago", views: 5678 },
    { id: 4, title: "Employee Handbook", type: "Document", status: "Published", author: "HR", modified: "1 week ago", views: 892 },
    { id: 5, title: "Blog: Industry Insights", type: "Article", status: "Review", author: "Content Team", modified: "4 hours ago", views: 0 },
  ];

  const mediaLibrary = [
    { name: "hero-banner.jpg", type: "Image", size: "2.4 MB", uploaded: "Aug 12, 2025" },
    { name: "product-demo.mp4", type: "Video", size: "45.8 MB", uploaded: "Aug 10, 2025" },
    { name: "company-logo.svg", type: "Image", size: "24 KB", uploaded: "Aug 8, 2025" },
    { name: "presentation.pdf", type: "Document", size: "5.6 MB", uploaded: "Aug 5, 2025" },
  ];

  const contentStats = [
    { label: "Total Pages", value: "142", icon: FileText, color: "text-primary" },
    { label: "Media Files", value: "1,847", icon: Image, color: "text-cms" },
    { label: "Published", value: "89", icon: Globe, color: "text-success" },
    { label: "Drafts", value: "23", icon: Edit, color: "text-warning" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "default";
      case "Draft": return "secondary";
      case "Review": return "outline";
      default: return "secondary";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Page": return FileText;
      case "Document": return FileText;
      case "Video": return Video;
      case "Article": return FileText;
      case "Image": return Image;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management System</h1>
          <p className="text-muted-foreground">Create, manage, and publish content across your platform</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {contentStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="content" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="media">Media Library</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search content..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full sm:w-64"
            />
          </div>
        </div>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Content</CardTitle>
              <CardDescription>Manage your published and draft content</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contentItems.map((item) => {
                    const Icon = getTypeIcon(item.type);
                    return (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-muted-foreground" />
                            {item.title}
                          </div>
                        </TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell className="text-muted-foreground">{item.modified}</TableCell>
                        <TableCell>{item.views > 0 ? item.views.toLocaleString() : "-"}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Media Library</CardTitle>
              <CardDescription>Manage images, videos, and documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {mediaLibrary.map((file, index) => {
                  const Icon = getTypeIcon(file.type);
                  return (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="aspect-video bg-secondary flex items-center justify-center">
                        <Icon className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <CardContent className="p-4">
                        <p className="font-medium text-sm truncate">{file.name}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">{file.size}</span>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Download className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Page Builder</CardTitle>
              <CardDescription>Create and edit website pages</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Page builder interface coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>CMS Settings</CardTitle>
              <CardDescription>Configure content management preferences</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Settings panel coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CMS;