import { useState, useRef } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'analysis' | 'call';
}

export default function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const formUrl = type === 'analysis'
    ? 'https://readdy.ai/api/form/d6ukuqlt4s7j0tv5i5i0'
    : 'https://readdy.ai/api/form/d6ukuqlt4s7j0tv5i5ig';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = formRef.current;
    if (!form) return;
    const data = new URLSearchParams();
    const elements = form.elements as HTMLFormControlsCollection;
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (el.name && el.value) {
        data.append(el.name, el.value);
      }
    }
    try {
      await fetch(formUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-navy/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) { onClose(); setSubmitted(false); } }}
    >
      <div className="bg-cream rounded-2xl w-full max-w-lg shadow-xl animate-fade-in-up relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold-dark"></div>
        <div className="p-8">
          <button
            onClick={() => { onClose(); setSubmitted(false); }}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-charcoal hover:text-navy transition-colors cursor-pointer rounded-full hover:bg-navy/10"
          >
            <i className="ri-close-line text-xl"></i>
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gold/15 rounded-full mx-auto mb-4">
                <i className="ri-check-line text-3xl text-gold"></i>
              </div>
              <h3 className="font-display text-3xl text-navy mb-2">Thank You!</h3>
              <p className="text-charcoal text-sm leading-relaxed">
                We&apos;ll be in touch within 24 hours. <br />You can also reach us directly at{' '}
                <a href="tel:+14435885777" className="text-gold font-medium cursor-pointer">443-588-5777</a>.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-3xl text-navy mb-1">
                {type === 'analysis' ? 'Get a Free Property Analysis' : 'Schedule a Call'}
              </h3>
              <p className="text-charcoal-light text-sm mb-6">
                {type === 'analysis'
                  ? 'Tell us about your property and we\'ll show you exactly what you could earn and save.'
                  : 'Pick a time that works for you. We\'ll discuss your property goals and answer every question.'}
              </p>
              <form
                ref={formRef}
                data-readdy-form
                id={type === 'analysis' ? 'property-analysis-form' : 'schedule-call-form'}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wide">First Name *</label>
                    <input name="first_name" required type="text" placeholder="James"
                      className="w-full px-3 py-2.5 text-sm border border-gold/30 rounded-md bg-white focus:outline-none focus:border-gold text-navy" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wide">Last Name *</label>
                    <input name="last_name" required type="text" placeholder="Mitchell"
                      className="w-full px-3 py-2.5 text-sm border border-gold/30 rounded-md bg-white focus:outline-none focus:border-gold text-navy" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wide">Email *</label>
                  <input name="email" required type="email" placeholder="james@email.com"
                    className="w-full px-3 py-2.5 text-sm border border-gold/30 rounded-md bg-white focus:outline-none focus:border-gold text-navy" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wide">Phone</label>
                  <input name="phone" type="tel" placeholder="443-555-0100"
                    className="w-full px-3 py-2.5 text-sm border border-gold/30 rounded-md bg-white focus:outline-none focus:border-gold text-navy" />
                </div>
                {type === 'analysis' && (
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wide">Property Address</label>
                    <input name="property_address" type="text" placeholder="123 Main St, Glen Burnie, MD"
                      className="w-full px-3 py-2.5 text-sm border border-gold/30 rounded-md bg-white focus:outline-none focus:border-gold text-navy" />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1 uppercase tracking-wide">
                    {type === 'analysis' ? 'Tell us about your situation' : 'How can we help?'}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    maxLength={500}
                    placeholder={type === 'analysis'
                      ? 'PCS orders? TDY? First-time landlord? Let us know...'
                      : 'What questions do you have about your property?'}
                    className="w-full px-3 py-2.5 text-sm border border-gold/30 rounded-md bg-white focus:outline-none focus:border-gold text-navy resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-navy text-cream font-medium text-sm rounded-md hover:bg-navy-light transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {submitting ? 'Sending...' : type === 'analysis' ? 'Request Free Analysis' : 'Schedule My Call'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
