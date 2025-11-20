import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const GetStarted = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mldzraqp");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Request submitted!",
        description: "We'll review your project and get back to you within 24 hours.",
      });
      setSelectedService("");
      setSelectedBudget("");
    }
  }, [state.succeeded, toast]);

  const benefits = [
    "Free initial consultation",
    "Customized solution proposal",
    "Transparent pricing",
    "Dedicated project manager",
    "Agile development process",
    "Ongoing support and maintenance",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Let's Build Something <span className="text-primary">Amazing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Start your digital transformation journey with Suko Devs Crew. Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8">Project Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      required
                    />
                    <ValidationError 
                      prefix="First Name" 
                      field="firstName"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                    />
                    <ValidationError 
                      prefix="Last Name" 
                      field="lastName"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company"
                  />
                  <ValidationError 
                    prefix="Company" 
                    field="company"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <Select name="service" value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile Apps</SelectItem>
                      <SelectItem value="cloud">Cloud Solutions</SelectItem>
                      <SelectItem value="security">Cybersecurity</SelectItem>
                      <SelectItem value="api">API Development</SelectItem>
                      <SelectItem value="data">Data Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                  <ValidationError 
                    prefix="Service" 
                    field="service"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <Select name="budget" value={selectedBudget} onValueChange={setSelectedBudget}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k">$1,000 - $2,500</SelectItem>
                      <SelectItem value="25k">$2,500 - $5,000</SelectItem>
                      <SelectItem value="50k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="100k">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <ValidationError 
                    prefix="Budget" 
                    field="budget"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                    className="min-h-[150px]"
                  />
                  <ValidationError 
                    prefix="Project Details" 
                    field="projectDetails"
                    errors={state.errors}
                  />
                </div>

                <input type="hidden" name="service" value={selectedService} />
                <input type="hidden" name="budget" value={selectedBudget} />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={state.submitting}>
                  {state.submitting ? "Submitting..." : "Submit Project Request"}
                </Button>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
                <p className="text-muted-foreground mb-8">
                  When you partner with Suko Devs Crew, you're not just hiring a development team—you're gaining a strategic partner committed to your success.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 mt-8">
                <h3 className="text-xl font-bold mb-2">Fast Response Time</h3>
                <p className="text-muted-foreground">
                  We understand that time is valuable. Our team will review your submission and get back to you within 24 hours with next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;