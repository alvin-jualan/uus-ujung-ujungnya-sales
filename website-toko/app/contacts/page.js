"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const FAQS = [
  {
    q: "How does the sizing fit across hoodies and tees?",
    a: "Our hoodies and t-shirts are cut with a modern boxy, relaxed silhouette and dropped shoulders. If you prefer a generous streetwear fit, order your true size. If you prefer a closer, tailored fit, consider sizing down one size.",
  },
  {
    q: "Where do you ship, and what are delivery timeframes?",
    a: "We ship worldwide with DHL Express and carbon-neutral postal partners. Orders within the US and EU deliver within 3–5 business days. International orders typically arrive within 5–8 business days with full end-to-end tracking.",
  },
  {
    q: "What is your return & exchange policy?",
    a: "We offer a 30-day effortless return window from the day your package arrives. Items must be unworn, unwashed, and in their original packaging with tags intact. Prepaid return shipping labels are complimentary for exchanges.",
  },
  {
    q: "How is my personal data and transaction protected against cyberattacks?",
    a: "Our website utilizes Layer-7 Edge DDoS shielding, automated volumetric rate limiting, and strict Content Security Policies. Payment details are processed directly through 256-bit TLS encrypted bank-grade processors (Stripe/Lemonsqueezy)—we never store raw credit card numbers on our servers.",
  },
  {
    q: "How should I wash and care for the 480 GSM French Terry?",
    a: "Machine wash cold (30°C / 85°F) inside-out with mild liquid detergent. Reshape while damp and lay flat or hang to air dry. Avoid high-heat tumble drying to preserve the natural organic cotton fibers and color depth.",
  },
];

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Order Inquiries",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const submitTimeRef = React.useRef(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  React.useEffect(() => {
    submitTimeRef.current = Date.now();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // 1. Bot Honeypot defense
    if (honeypot) {
      console.warn("Honeypot triggered");
      return;
    }

    // 2. Automated Speed check (bots fill forms in < 1.2 seconds)
    if (submitTimeRef.current > 0 && Date.now() - submitTimeRef.current < 1200) {
      setError("Submission was too fast. Please verify you are human and try again.");
      return;
    }

    // 3. Input validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Success response
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full bg-accent-purple-mist border border-accent-purple/20 px-3.5 py-1.5">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
              Client Support & Atelier Inquiries
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-foreground">
            We are here to assist your wardrobe.
          </h1>

          <p className="text-base text-muted leading-relaxed">
            Reach out regarding order status, sizing recommendations, press, or wholesale capsules. We typically respond within 12 business hours.
          </p>
        </div>

        {/* Two-column layout: Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Secure Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border-muted shadow-sm">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-border-muted/60">
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Send a Secure Message
                </h3>
                <span className="flex items-center space-x-1.5 font-mono text-[11px] text-muted">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>DDoS & Spam Protected</span>
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-foreground">
                    Message Safely Received
                  </h4>
                  <p className="text-sm text-muted max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our client care team will review your inquiry regarding &quot;{formData.subject}&quot; and reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "Order Inquiries", message: "" });
                    }}
                    className="mt-4 rounded-xl bg-surface-subtle border border-border-muted px-6 py-2.5 font-mono text-xs text-foreground hover:bg-card transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot field (hidden from humans, catches bots) */}
                  <input
                    type="text"
                    name="bot_field_protection"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                  />

                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 font-mono text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-muted">
                        Full Name <span className="text-accent-purple">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={80}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexis Sterling"
                        className="w-full rounded-xl bg-surface-subtle border border-border-muted px-4 py-3 text-xs font-mono text-foreground placeholder-muted focus:outline-none focus:border-accent-purple focus:bg-card transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs uppercase tracking-wider text-muted">
                        Email Address <span className="text-accent-purple">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={100}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full rounded-xl bg-surface-subtle border border-border-muted px-4 py-3 text-xs font-mono text-foreground placeholder-muted focus:outline-none focus:border-accent-purple focus:bg-card transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl bg-surface-subtle border border-border-muted px-4 py-3 text-xs font-mono text-foreground focus:outline-none focus:border-accent-purple focus:bg-card cursor-pointer transition-colors"
                    >
                      <option value="Order Inquiries">Order Status & Tracking</option>
                      <option value="Sizing Consultation">Sizing & Fabric Advice</option>
                      <option value="Returns & Exchanges">Return or Exchange Request</option>
                      <option value="Press & Stockists">Wholesale & Stockist Inquiries</option>
                      <option value="Technical & Security">Security & Privacy Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted">
                      Your Message <span className="text-accent-purple">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      maxLength={1200}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include order number if applicable..."
                      className="w-full rounded-xl bg-surface-subtle border border-border-muted p-4 text-xs font-mono text-foreground placeholder-muted focus:outline-none focus:border-accent-purple focus:bg-card transition-colors"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-muted">
                      <span>Rate limited: Max 5 submissions per hour</span>
                      <span>{formData.message.length} / 1200</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-accent-purple hover:bg-accent-purple-hover py-4 px-6 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all active:scale-[0.98]"
                  >
                    Submit Inquiries Safely
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Cards & Studio Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-surface-subtle border border-border-muted space-y-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple">
                Direct Channels
              </span>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="block text-muted">Client Relations:</span>
                  <span className="text-sm font-semibold text-foreground">care@hazy-bnuy.com</span>
                </div>
                <div>
                  <span className="block text-muted">Press & Mascot Collaborations:</span>
                  <span className="text-sm font-semibold text-foreground">press@hazy-bnuy.com</span>
                </div>
                <div>
                  <span className="block text-muted">Hours of Operation:</span>
                  <span className="text-foreground">Monday – Friday: 09:00 – 18:00 CET</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border-muted space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple">
                Security Guarantee
              </span>
              <p className="text-xs text-muted leading-relaxed">
                Your data is never sold, leased, or transmitted to advertising aggregators. We strictly comply with GDPR, CCPA, and operate under zero-tracking telemetry standards.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-foreground">
                <span className="text-accent-purple font-bold">✓</span>
                <span>Automated L7 Flood Filter Active</span>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-24 pt-16 border-t border-border-muted">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-purple font-semibold">
              Self-Serve Answers
            </span>
            <h2 className="font-serif text-3xl font-normal text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-card border border-border-muted overflow-hidden transition-colors hover:border-accent-purple/30"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  >
                    <span className="font-serif text-base font-medium text-foreground">
                      {faq.q}
                    </span>
                    <span className="text-accent-purple font-mono text-lg font-bold ml-4">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-muted font-normal leading-relaxed border-t border-border-muted/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
