import { useState, useRef } from 'react';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (charCount > 500) return;
    setSubmitState('submitting');
    const form = formRef.current;
    if (!form) return;
    const data = new URLSearchParams();
    const elements = form.elements as HTMLFormControlsCollection;
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (el.name && el.value) data.append(el.name, el.value);
    }
    try {
      await fetch('https://readdy.ai/api/form/d6umlve7ipaugi04lbjg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setSubmitState('success');
      form.reset();
      setCharCount(0);
    } catch {
      setSubmitState('error');
    }
  };

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 bg-white border border-gold/20 rounded-2xl px-8">
        <div className="w-16 h-16 flex items-center justify-center bg-gold/15 rounded-full mb-5">
          <i className="ri-check-double-line text-3xl text-gold"></i>
        </div>
        <h3 className="font-display text-3xl text-navy mb-2">We&apos;ve Got It!</h3>
        <p className="text-charcoal text-sm max-w-sm leading-relaxed mb-6">
          Your message is on its way. We respond within <strong className="text-navy">one business day</strong> — usually the same day. Reach us directly anytime:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="tel:+14435885777"
            className="flex items-center gap-2 px-5 py-2.5 bg-navy text-cream text-sm font-semibold rounded-lg hover:bg-navy/90 transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-phone-line text-xs"></i>
            443-588-5777
          </a>
          <button
            onClick={() => setSubmitState('idle')}
            className="flex items-center gap-2 px-5 py-2.5 bg-cream border border-gold/30 text-navy text-sm font-medium rounded-lg hover:border-gold transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-arrow-left-line text-xs"></i>
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      data-readdy-form
      id="owner-contact-property-form"
      onSubmit={handleSubmit}
      className="bg-white border border-gold/15 rounded-2xl p-8 space-y-5"
    >
      <div>
        <h3 className="font-display text-2xl text-navy mb-1">Send Us a Message</h3>
        <p className="text-charcoal text-sm">We respond within <span className="text-navy font-semibold">1 business day</span> — usually same day.</p>
      </div>

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
            First Name <span className="text-gold">*</span>
          </label>
          <input name="first_name" required type="text" placeholder="James"
            className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy placeholder-charcoal/40" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
            Last Name <span className="text-gold">*</span>
          </label>
          <input name="last_name" required type="text" placeholder="Mitchell"
            className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy placeholder-charcoal/40" />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
            Email Address <span className="text-gold">*</span>
          </label>
          <input name="email" required type="email" placeholder="james@email.com"
            className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy placeholder-charcoal/40" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Phone Number</label>
          <input name="phone" type="tel" placeholder="443-555-0100"
            className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy placeholder-charcoal/40" />
        </div>
      </div>

      {/* Property Address - full width, prominent */}
      <div>
        <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
          <span className="flex items-center gap-1.5">
            <i className="ri-map-pin-line text-gold text-xs"></i>
            Property Address
          </span>
        </label>
        <input name="property_address" type="text"
          placeholder="123 Ridgeway Dr, Glen Burnie, MD 21061"
          className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy placeholder-charcoal/40" />
        <p className="text-charcoal/50 text-xs mt-1">Include city and zip if known. If you have multiple properties, list the first one.</p>
      </div>

      {/* Units + Situation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Number of Units</label>
          <select name="num_units"
            className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy cursor-pointer">
            <option value="">Select...</option>
            <option value="1">1 Unit</option>
            <option value="2">2 Units</option>
            <option value="3-5">3–5 Units</option>
            <option value="6+">6+ Units</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
            Owner Situation <span className="text-gold">*</span>
          </label>
          <select name="owner_status" required
            className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy cursor-pointer">
            <option value="">Select your situation</option>
            <option value="Local Owner - Self-Managing Now">Local Owner — Self-Managing Now</option>
            <option value="Local Owner - With Another PM">Local Owner — With Another PM</option>
            <option value="Military - Fort Meade Area">Military — Fort Meade Area</option>
            <option value="Military - PCS Orders Received">Military — PCS Orders Received</option>
            <option value="Out of State Owner">Out of State Owner</option>
            <option value="Deployed or Overseas">Deployed or Overseas</option>
            <option value="Government Employee">Government Employee</option>
            <option value="First-Time Landlord">First-Time Landlord</option>
          </select>
        </div>
      </div>

      {/* Best time + Source */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">Best Time to Reach You</label>
          <select name="best_time"
            className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy cursor-pointer">
            <option value="">No preference</option>
            <option value="Morning (8am–12pm)">Morning (8am–12pm)</option>
            <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
            <option value="Evening (5pm–8pm)">Evening (5pm–8pm)</option>
            <option value="Email is fine">Email is fine</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">How Did You Hear About Us?</label>
          <select name="referral_source"
            className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy cursor-pointer">
            <option value="">Select...</option>
            <option value="Google Search">Google Search</option>
            <option value="Referral from a Friend">Referral from a Friend</option>
            <option value="Military Community / Facebook Group">Military Community / Facebook Group</option>
            <option value="Nextdoor or Community Board">Nextdoor or Community Board</option>
            <option value="Zillow or Rental Site">Zillow or Rental Site</option>
            <option value="Drove Past Sign">Drove Past Sign / Yard Sign</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-xs font-semibold text-navy uppercase tracking-wide">
            Message or Questions
          </label>
          <span className={`text-xs font-medium transition-colors ${charCount > 450 ? 'text-red-400' : 'text-charcoal/40'}`}>
            {charCount}/500
          </span>
        </div>
        <textarea
          name="message"
          rows={4}
          maxLength={500}
          onChange={(e) => setCharCount(e.target.value.length)}
          placeholder="Tell us about your property and situation. PCS orders coming up? Currently self-managing? Want to switch from another PM company? Any questions at all — no question is too small."
          className="w-full px-4 py-3 text-sm border border-gold/25 rounded-lg bg-cream/40 focus:outline-none focus:border-gold focus:bg-white transition-colors text-navy placeholder-charcoal/40 resize-none"
        />
      </div>

      {submitState === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <i className="ri-error-warning-line text-red-400 text-sm"></i>
          <p className="text-red-600 text-sm">Something went wrong. Please try again or call us at <a href="tel:+14435885777" className="font-semibold">443-588-5777</a>.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === 'submitting' || charCount > 500}
        className="w-full py-4 bg-navy text-cream font-semibold text-sm rounded-xl hover:bg-navy/90 active:scale-[0.99] transition-all cursor-pointer whitespace-nowrap disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {submitState === 'submitting' ? (
          <><i className="ri-loader-4-line animate-spin text-base"></i> Sending...</>
        ) : (
          <><i className="ri-send-plane-line text-base"></i> Send Message &amp; Get Free Analysis</>
        )}
      </button>
      <p className="text-charcoal/45 text-xs text-center">No obligation. No pressure. Response within 1 business day.</p>
    </form>
  );
}
