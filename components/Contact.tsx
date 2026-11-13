"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { submitEnquiry } from "@/lib/api";

const field = "h-12 w-full border border-white/40 bg-transparent px-4 text-base text-warm placeholder:text-warm/40 focus:border-gold";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "demo" | "sent" | "error">("idle");
  const { email, phone, address } = siteConfig.contact;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      phone: String(f.get("phone") ?? ""),
      message: String(f.get("message") ?? ""),
    };
    const result = await submitEnquiry(data); // Flask API when NEXT_PUBLIC_API_URL is set
    if (result === "sent") return setStatus("sent");
    if (result === "error") return setStatus("error");
    if (email) {
      // No backend yet: open the visitor's email app with the message prefilled.
      const body = `${data.message}\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("DreamNest enquiry")}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("demo");
  }

  return (
    <section id="contact" className="bg-navy px-5 py-24 text-warm md:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">Contact</p>
          <h2 className="font-serif text-4xl font-medium leading-tight md:text-6xl">Let&rsquo;s Find Your Dream Space.</h2>
          <p className="mt-6 text-lg text-warm/90">Tell us a little about what you are looking for, and we will be in touch.</p>
          <ul className="mt-8 space-y-1 text-warm/85">
            {email && <li><a className="hover:text-gold" href={`mailto:${email}`}>{email}</a></li>}
            {phone && <li><a className="hover:text-gold" href={`tel:${phone}`}>{phone}</a></li>}
            {address && <li>{address}</li>}
            {siteConfig.social.map((s) => (
              <li key={s.href}><a className="hover:text-gold" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
            ))}
          </ul>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div><label htmlFor="name" className="mb-1.5 block text-sm">Name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
          <div><label htmlFor="email" className="mb-1.5 block text-sm">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
          <div><label htmlFor="phone" className="mb-1.5 block text-sm">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={field} /></div>
          <div><label htmlFor="message" className="mb-1.5 block text-sm">Message</label><textarea id="message" name="message" required rows={4} className={`${field} h-auto py-3`} /></div>
          <button type="submit" className="h-[52px] bg-leaf text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#1c6e2b]">Send Message</button>
          <p role="status" className="text-sm text-warm/80">
            {status === "demo" && "Prototype only: this form is not connected yet, so nothing was sent or saved."}
            {status === "sent" && "Thank you. Your message has been sent."}
            {status === "error" && "Sorry, something went wrong. Please try again later."}
          </p>
        </form>
      </div>
    </section>
  );
}
