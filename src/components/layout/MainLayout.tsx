import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Building2, 
  FileText, 
  Users, 
  Settings, 
  LogOut,
  ChevronDown,
  Bell,
  Search,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentLang, setCurrentLang] = useState("EN");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard", badge: null },
    { icon: BookOpen, label: "LMS", path: "/lms", badge: "3 New" },
    { icon: Building2, label: "ERP", path: "/erp", badge: null },
    { icon: FileText, label: "CMS", path: "/cms", badge: null },
    { icon: Users, label: "Users", path: "/users", badge: "12" },
    { icon: Settings, label: "Settings", path: "/settings", badge: null },
  ];

  const languages = ["EN", "ID", "DE"];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IBS</span>
              </div>
              <h1 className="text-xl font-semibold hidden md:block">Integrated Business Suite</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 w-64"
                />
              </div>
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  {currentLang}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={cn(currentLang === lang && "bg-secondary")}
                  >
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:block">Admin User</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="text-destructive"
                  onClick={() => navigate("/")}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 bottom-0 z-40 bg-sidebar text-sidebar-foreground transition-all duration-300 border-r border-sidebar-border",
        sidebarOpen ? "w-64" : "w-0 overflow-hidden"
      )}>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200",
                isActive(item.path)
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-glow"
                  : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <Badge 
                  variant={isActive(item.path) ? "secondary" : "default"}
                  className="ml-auto"
                >
                  {item.badge}
                </Badge>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "min-h-screen pt-16 transition-all duration-300",
        sidebarOpen ? "ml-64" : "ml-0"
      )}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;