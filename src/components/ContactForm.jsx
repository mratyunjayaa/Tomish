import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// Webhook endpoint configuration for easy backend migration
const SCRIPT_WEBHOOK_URL = import.meta.env.VITE_SCRIPT_WEBHOOK || "";

// Static Services List
const SERVICES_LIST = [
  "AI & Machine Learning",
  "Robotics & Automation",
  "IoT & Embedded Systems",
  "Cybersecurity Lab Tracks",
  "STEM Innovation Lab",
];

// Initial Form State Definition
const INITIAL_FORM_STATE = {
  fullName: "",
  email: "",
  phone: "",
  schoolName: "",
  city: "",
  schoolAddress: "",
  selectedService: "",
  message: "",
};

// Initial Status State Definition
const INITIAL_STATUS_STATE = {
  loading: false,
  success: false,
  error: "",
};

/**
 * Sanitizes input string to prevent CSV/Excel Injection and basic XSS attacks.
 */
const sanitizeInput = (input) => {
  if (typeof input !== "string") return "";

  let sanitized = input.trim();

  // Prevent Excel / CSV Formula Injection
  if (/^[=+\-@\t\r]/.test(sanitized)) {
    sanitized = `'${sanitized}`;
  }

  // Strip potential HTML script tags for basic XSS prevention
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  return sanitized;
};

/**
 * Validates form input fields including email format and Indian phone numbers.
 */
const validateForm = (data) => {
  const { fullName, email, phone, schoolName, city, schoolAddress, selectedService } = data;

  if (!fullName.trim()) return "Full Name is required.";
  
  // Email Validation Regular Expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim() || !emailRegex.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  // Indian Phone Number Validation
  const phoneClean = phone.replace(/[\s\-()]/g, "");
  const indianPhoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
  if (!phoneClean || !indianPhoneRegex.test(phoneClean)) {
    return "Please enter a valid 10-digit Indian phone number.";
  }

  if (!schoolName.trim()) return "School Name is required.";
  if (!city.trim()) return "City is required.";
  if (!schoolAddress.trim()) return "School Address is required.";
  if (!selectedService.trim()) return "Please select a service for the call.";

  return null;
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState(INITIAL_STATUS_STATE);

  /**
   * Reusable form reset function
   */
  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setStatus(INITIAL_STATUS_STATE);
  };

  /**
   * Optimized input change handler
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear existing error state on typing
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: "" }));
    }
  };

  /**
   * Form submission handler
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate Form Fields
    const validationError = validateForm(formData);
    if (validationError) {
      setStatus({ loading: false, success: false, error: validationError });
      return;
    }

    if (!SCRIPT_WEBHOOK_URL) {
      setStatus({
        loading: false,
        success: false,
        error: "Webhook endpoint not configured. Please set VITE_SCRIPT_WEBHOOK environment variable.",
      });
      return;
    }

    setStatus({ loading: true, success: false, error: "" });

    // 2. Sanitize Data Payload
    const sanitizedPayload = {
      fullName: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      schoolName: sanitizeInput(formData.schoolName),
      city: sanitizeInput(formData.city),
      schoolAddress: sanitizeInput(formData.schoolAddress),
      selectedService: sanitizeInput(formData.selectedService),
      message: sanitizeInput(formData.message),
      submittedAt: new Date().toISOString(),
    };

    // 3. Submit Data to Endpoint
    try {
      const response = await fetch(SCRIPT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(sanitizedPayload),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      // Show success state and reset input fields
      setStatus({ loading: false, success: true, error: "" });
      setFormData(INITIAL_FORM_STATE);

    } catch (err) {
      if (import.meta.env.DEV) {
        console.error("Submission Error:", err);
      }

      setStatus({
        loading: false,
        success: false,
        error: "Failed to submit demo request. Please try again later.",
      });
    }
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#071328] font-sans text-white overflow-hidden">
      
      {/* Background Animated Glow Blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--color-primary,#0a61af)]/20 blur-[130px] animate-pulse" />
      <div 
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--color-accent,#4381b0)]/20 blur-[130px] animate-bounce" 
        style={{ animationDuration: "10s" }}
      />

      {/* Grid Overlay Texture */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            Book Your Free Demo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-sans">
            Experience the future of education. Schedule a personalized demo tailored to your school's needs.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative rounded-3xl bg-slate-900/80 p-6 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-xl">
          
          {status.success ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">
                Demo Request Submitted!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you for reaching out. Our team at Tomish Solution will contact you shortly to confirm your scheduled slot.
              </p>
              <button
                onClick={resetForm}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[var(--color-primary,#0a61af)] hover:bg-[var(--color-accent,#4381b0)] text-white text-sm font-semibold transition-all"
              >
                Book Another Demo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {status.error && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    <span className="text-[var(--color-secondary,#b9d7ea)]">•</span> Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary,#0a61af)] focus:ring-1 focus:ring-[var(--color-primary,#0a61af)] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    <span className="text-[var(--color-secondary,#b9d7ea)]">•</span> Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@school.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary,#0a61af)] focus:ring-1 focus:ring-[var(--color-primary,#0a61af)] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  <span className="text-[var(--color-secondary,#b9d7ea)]">•</span> Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary,#0a61af)] focus:ring-1 focus:ring-[var(--color-primary,#0a61af)] transition-all text-sm"
                />
              </div>

              {/* Row 3: School Name & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    required
                    value={formData.schoolName}
                    onChange={handleChange}
                    placeholder="Springfield High School"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary,#0a61af)] focus:ring-1 focus:ring-[var(--color-primary,#0a61af)] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Nawanshahr"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary,#0a61af)] focus:ring-1 focus:ring-[var(--color-primary,#0a61af)] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Row 4: School Address & Schedule Call For Dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    School Address *
                  </label>
                  <input
                    type="text"
                    name="schoolAddress"
                    required
                    value={formData.schoolAddress}
                    onChange={handleChange}
                    placeholder="123 Education Street, Suite 100"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary,#0a61af)] focus:ring-1 focus:ring-[var(--color-primary,#0a61af)] transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                    Schedule Call For *
                  </label>
                  <select
                    name="selectedService"
                    required
                    value={formData.selectedService}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white focus:outline-none focus:border-[var(--color-primary,#0a61af)] focus:ring-1 focus:ring-[var(--color-primary,#0a61af)] transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Option</option>
                    {SERVICES_LIST.map((service, idx) => (
                      <option key={idx} value={service} className="bg-slate-900 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your specific requirements, preferred demo time, or any questions you have..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary,#0a61af)] focus:ring-1 focus:ring-[var(--color-primary,#0a61af)] transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[var(--color-primary,#0a61af)] hover:bg-[var(--color-accent,#4381b0)] text-white font-semibold shadow-lg shadow-[var(--color-primary,#0a61af)]/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
              >
                <span>{status.loading ? "Submitting..." : "Submit Demo Request"}</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}