import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xanvwarb");

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }
  }, [state.succeeded, toast]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                    className="w-full"
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    className="w-full min-h-[150px]"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to answer your questions and discuss your next project. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@mawrldtech.com</p>
                    <p className="text-muted-foreground">support@mawrldtech.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">123 Tech Street</p>
                    <p className="text-muted-foreground">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
