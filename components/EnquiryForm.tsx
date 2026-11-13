
"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",  
    phone: "",
    email: "",
    requirement: "",
    propertyType: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement 
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit enquiry");
      }

      setSuccess("Thank you! Your enquiry has been submitted successfully.");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        requirement: "",
        propertyType: "",
        location: "",
        budget: "",
        message: "",
      });

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="enquiry-section" id="enquiry">
      <div className="enquiry-container">

        <div className="enquiry-info">
          <span className="enquiry-label">LET'S CONNECT</span>

          <h2>
            Find Your
            <br />
            Perfect Property
          </h2>

          <p>
            Tell us what you're looking for. Our property experts
            will get in touch with you to help find the right property.
          </p>

          <div className="enquiry-contact">
            <div>
              <span>Personalized Assistance</span>
              <strong>We understand your requirements.</strong>
            </div>

            <div>
              <span>Dedicated Support</span>
              <strong>Our team will contact you.</strong>
            </div>
          </div>
        </div>

        <div className="enquiry-form-card">
          <h3>Submit Your Requirement</h3>

          <p className="form-subtitle">
            Share your property preferences with us.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  title="Enter a valid 10-digit mobile number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>What are you looking for? *</label>
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select requirement</option>
                  <option value="Buy Property">Buy Property</option>
                  <option value="Sell Property">Sell Property</option>
                  <option value="Rent Property">Rent Property</option>
                  <option value="Lease Property">Lease Property</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Property Type *</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select property type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Farmhouse">Farmhouse</option>
                  <option value="Plot / Land">Plot / Land</option>
                  <option value="Luxury Property">Luxury Property</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preferred Location *</label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Gurgaon, Delhi, Noida"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select your budget</option>
                  <option value="Below ₹25 Lakh">Below ₹25 Lakh</option>
                  <option value="₹25–50 Lakh">₹25–50 Lakh</option>
                  <option value="₹50 Lakh–1 Crore">₹50 Lakh–1 Crore</option>
                  <option value="₹1–2 Crore">₹1–2 Crore</option>
                  <option value="₹2–5 Crore">₹2–5 Crore</option>
                  <option value="Above ₹5 Crore">Above ₹5 Crore</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Additional Requirements</label>
              <textarea
                name="message"
                placeholder="Tell us more about your property requirements..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={2000}
              />
            </div>

            <button
              type="submit"
              className="enquiry-submit-btn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>

            {success && (
              <p className="form-success" role="status">
                {success}
              </p>
            )}

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
