"use client";
import { useState } from "react";
import { SiteChrome } from "@/components/site-chrome";
import { useT } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteChrome>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("contact.title") || "Contact Us"}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("contact.subtitle") || "Have questions? We're here to help. Reach out and we'll get back to you within 24 hours."}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t("contact.email") || "Email"}</h3>
                <p className="text-sm text-muted-foreground">desk@aspidus.co</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t("contact.phone") || "Phone"}</h3>
                <p className="text-sm text-muted-foreground">+971 4 555 0100</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t("contact.office") || "Office"}</h3>
                <p className="text-sm text-muted-foreground">DMCC, JLT, Dubai, UAE</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-900 dark:bg-emerald-950/30">
              <div className="text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
                <h3 className="mt-4 text-lg font-semibold">{t("contact.success") || "Message sent!"}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t("contact.successDesc") || "We'll get back to you within 24 hours."}</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4 rounded-xl border p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>{t("contact.formName") || "Your name"}</Label>
                  <Input required placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <Label>{t("contact.formEmail") || "Email"}</Label>
                  <Input type="email" required placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>{t("contact.formSubject") || "Subject"}</Label>
                <Input required placeholder="How can we help?" />
              </div>
              <div className="space-y-1.5">
                <Label>{t("contact.formMessage") || "Message"}</Label>
                <Textarea required rows={4} placeholder="Tell us more..." />
              </div>
              <Button type="submit" className="w-full">
                {t("contact.formSubmit") || "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </SiteChrome>
  );
}
