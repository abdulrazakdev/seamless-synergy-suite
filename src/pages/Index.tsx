import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  BookOpen, 
  Building2, 
  FileText, 
  Users, 
  Shield, 
  Zap,
  Globe,
  BarChart3,
  CheckCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t.modules.lms.title,
      description: t.modules.lms.description,
      color: "bg-gradient-lms"
    },
    {
      icon: Building2,
      title: t.modules.erp.title,
      description: t.modules.erp.description,
      color: "bg-gradient-erp"
    },
    {
      icon: FileText,
      title: t.modules.cms.title,
      description: t.modules.cms.description,
      color: "bg-gradient-cms"
    }
  ];

  const benefits = [
    { icon: Shield, text: t.features.security },
    { icon: Zap, text: t.features.performance },
    { icon: Globe, text: t.features.multiLanguage },
    { icon: Users, text: t.features.unlimitedUsers },
    { icon: BarChart3, text: t.features.analytics },
    { icon: CheckCircle, text: t.features.support }
  ];

  const testimonials = [
    {
      quote: "This integrated suite has transformed how we manage our business operations.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5
    },
    {
      quote: "The LMS module alone has saved us thousands in training costs.",
      author: "Michael Chen",
      role: "HR Director, GlobalTech",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Language Selector - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector variant="outline" className="bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-dark px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-7xl text-center">
          <Badge className="mb-4" variant="secondary">
            {t.landing.version}
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {t.landing.heroTitle}
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              {t.landing.heroSubtitle}
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 md:text-xl">
            {t.landing.heroDescription}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => navigate("/login")}
            >
              {t.common.getStarted}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-700 bg-white/10 text-white hover:bg-white/20"
              onClick={() => navigate("/login")}
            >
              {t.common.viewDemo}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t.landing.integratedModules}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.landing.modulesDescription}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`h-2 ${feature.color}`} />
                <CardHeader>
                  <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl mb-12">
            {t.landing.whyChoose}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <benefit.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl mb-12">
            {t.landing.trustedBy}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
            {t.landing.readyToTransform}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {t.landing.joinThousands}
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate("/login")}
            className="gap-2"
          >
            {t.landing.startFreeTrial}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IBS</span>
              </div>
              <span className="font-semibold">Integrated Business Suite</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Enterprise Solutions. {t.landing.allRightsReserved}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
