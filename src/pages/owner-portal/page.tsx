import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const tabs = [
  { id: 'overview', label: 'Dashboard', icon: 'ri-layout-grid-line' },
  { id: 'financials', label: 'Financials', icon: 'ri-line-chart-line' },
  { id: 'maintenance', label: 'Maintenance', icon: 'ri-tools-line' },
  { id: 'documents', label: 'Documents', icon: 'ri-file-list-3-line' },
  { id: 'messages', label: 'Messages', icon: 'ri-chat-3-line' },
];

const featureCards = [
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Real-Time Rent Tracking',
    desc: 'See the exact moment rent is collected, posted, and disbursed to your account — no more wondering if the check came in.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: 'ri-bar-chart-2-line',
    title: 'Owner Financial Statements',
    desc: 'Month-end and year-end statements auto-generated in Buildium. Download PDF reports for taxes, lenders, or your own records anytime.',
    color: 'text-gold',
    bg: 'bg-gold/10',
  },
  {
    icon: 'ri-tools-line',
    title: 'Maintenance Request Updates',
    desc: 'Every work order is logged — with photos, vendor notes, and completion status. You see what was done and what it cost.',
    color: 'text-navy',
    bg: 'bg-navy/10',
  },
  {
    icon: 'ri-file-list-3-line',
    title: 'Lease & Document Vault',
    desc: 'Current lease, renewal history, inspection reports, and invoices — all organized and searchable in one secure location.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Mobile-Friendly Portal',
    desc: 'Full access on any device. Check your property from your phone anywhere in the world — built for PCS and TDY owners.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: 'ri-lock-password-line',
    title: 'Bank-Level Security',
    desc: 'Buildium uses 256-bit SSL encryption and secure login. Your financial data and tenant information stay completely private.',
    color: 'text-slate-600',
    bg: 'bg-slate-100',
  },
];

const testimonials = [
  {
    quote: 'I manage my rental from Japan. The Buildium portal lets me see rent collected, approve repair costs, and message my PM — all before morning coffee.',
    name: 'CW3 Davison',
    role: 'Army, stationed USAG Camp Zama',
    stars: 5,
  },
  {
    quote: 'Tax season used to be a nightmare. Now I log in, download the year-end statement, hand it to my accountant, and I\'m done in five minutes.',
    name: 'Sarah K.',
    role: 'Owner — 2 units, Prince George\'s County',
    stars: 5,
  },
  {
    quote: 'Seeing the actual photos of the maintenance work completed — that transparency is what sold me on Three Pillars.',
    name: 'Marcus T.',
    role: 'Remote investor, Montgomery County',
    stars: 5,
  },
];

function OverviewMockup() {
  return (
    <div className="bg-[#f7f8fa] rounded-xl p-5 min-h-80">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-navy font-semibold text-sm">Good morning, James</p>
          <p className="text-charcoal-light text-xs">March 2026 — All properties current</p>
        </div>
        <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
          Rent Collected
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { label: 'Gross Rent', val: '$2,000', icon: 'ri-home-4-line', color: 'text-navy' },
          { label: 'Mgmt Fee', val: '$160', icon: 'ri-price-tag-3-line', color: 'text-gold' },
          { label: 'Net to Owner', val: '$1,840', icon: 'ri-bank-line', color: 'text-green-600' },
          { label: 'YTD Income', val: '$5,520', icon: 'ri-bar-chart-grouped-line', color: 'text-amber-600' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-lg p-3 text-center border border-gray-100">
            <i className={`${s.icon} ${s.color} text-base`}></i>
            <p className={`font-bold text-base ${s.color} mt-1`}>{s.val}</p>
            <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg border border-gray-100 overflow-hidden mb-3">
        <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
          <p className="text-navy text-xs font-semibold">Recent Activity</p>
          <p className="text-gold text-xs font-medium cursor-pointer">View All</p>
        </div>
        {[
          { icon: 'ri-checkbox-circle-fill', color: 'text-green-500', text: 'March rent collected — 3412 Maple Ave', time: '2h ago' },
          { icon: 'ri-tools-line', color: 'text-amber-500', text: 'HVAC filter replaced — work order #2847 closed', time: 'Mar 17' },
          { icon: 'ri-file-text-line', color: 'text-navy', text: 'Lease renewal sent to tenant — expires Jun 30', time: 'Mar 14' },
          { icon: 'ri-bank-line', color: 'text-green-500', text: 'Owner disbursement sent — $1,840.00', time: 'Mar 5' },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-50 last:border-0">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              <i className={`${row.icon} ${row.color} text-sm`}></i>
            </div>
            <p className="text-navy text-xs flex-1">{row.text}</p>
            <p className="text-gray-400 text-xs whitespace-nowrap">{row.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinancialsMockup() {
  return (
    <div className="bg-[#f7f8fa] rounded-xl p-5 min-h-80">
      <div className="flex items-center justify-between mb-4">
        <p className="text-navy font-semibold text-sm">Financial Statements</p>
        <div className="flex gap-2">
          <button className="text-xs border border-gold text-gold px-2.5 py-1 rounded-full font-medium whitespace-nowrap cursor-pointer">Download PDF</button>
          <select className="text-xs border border-gray-200 text-charcoal px-2 py-1 rounded-md bg-white cursor-pointer">
            <option>March 2026</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: 'Total Income', val: '$2,000.00', change: '+0%', positive: true },
          { label: 'Total Expenses', val: '$160.00', change: 'Mgmt only', positive: true },
          { label: 'Net Owner Proceeds', val: '$1,840.00', change: '92% retained', positive: true },
          { label: 'YTD Net', val: '$5,520.00', change: '3 months', positive: true },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-lg p-3 border border-gray-100">
            <p className="text-gray-400 text-xs mb-1">{s.label}</p>
            <p className="text-navy font-bold text-base">{s.val}</p>
            <p className={`text-xs mt-0.5 ${s.positive ? 'text-green-600' : 'text-red-500'}`}>{s.change}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
        <div className="px-4 py-2.5 border-b border-gray-100">
          <p className="text-navy text-xs font-semibold">Income &amp; Expense Ledger</p>
        </div>
        {[
          { date: '03/01', desc: 'Rent Payment — March', type: 'Income', amount: '+$2,000.00', color: 'text-green-600' },
          { date: '03/05', desc: 'Management Fee', type: 'Expense', amount: '-$160.00', color: 'text-red-500' },
          { date: '03/05', desc: 'Owner Disbursement', type: 'Disbursement', amount: '-$1,840.00', color: 'text-navy' },
          { date: '03/17', desc: 'Maintenance — HVAC Filter', type: 'Expense', amount: '-$0.00', color: 'text-gray-400' },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2 border-b border-gray-50 last:border-0">
            <p className="text-gray-400 text-xs w-12">{row.date}</p>
            <p className="text-navy text-xs flex-1">{row.desc}</p>
            <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{row.type}</span>
            <p className={`text-xs font-semibold w-20 text-right ${row.color}`}>{row.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaintenanceMockup() {
  return (
    <div className="bg-[#f7f8fa] rounded-xl p-5 min-h-80">
      <div className="flex items-center justify-between mb-4">
        <p className="text-navy font-semibold text-sm">Maintenance &amp; Work Orders</p>
        <div className="flex gap-2">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">2 Completed</span>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">1 In Progress</span>
        </div>
      </div>
      {[
        {
          id: '#2847',
          title: 'HVAC Filter Replacement',
          vendor: 'Comfort Air HVAC',
          date: 'Mar 17, 2026',
          status: 'Completed',
          statusColor: 'bg-green-100 text-green-700',
          cost: '$0 (routine)',
          note: 'Seasonal filter swap — included in service plan. Photo logged.',
        },
        {
          id: '#2831',
          title: 'Kitchen Faucet Leak Repair',
          vendor: 'Quick Fix Plumbing',
          date: 'Mar 8, 2026',
          status: 'Completed',
          statusColor: 'bg-green-100 text-green-700',
          cost: '$145.00',
          note: 'Cartridge replaced. Owner approved via portal. Invoice attached.',
        },
        {
          id: '#2860',
          title: 'Gutter Cleaning — Spring',
          vendor: 'ProClean Exteriors',
          date: 'Est. Mar 25, 2026',
          status: 'Scheduled',
          statusColor: 'bg-amber-100 text-amber-700',
          cost: 'Est. $180',
          note: 'Annual spring cleaning. Approval requested.',
        },
      ].map((w) => (
        <div key={w.id} className="bg-white rounded-lg border border-gray-100 p-4 mb-3 last:mb-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-navy text-sm font-semibold">{w.title}</p>
                <span className="text-gray-400 text-xs">{w.id}</span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">{w.vendor} · {w.date}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${w.statusColor}`}>{w.status}</span>
          </div>
          <p className="text-charcoal text-xs leading-relaxed mb-2">{w.note}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-navy">Cost: {w.cost}</span>
            {w.status === 'Scheduled' && (
              <div className="flex gap-2">
                <button className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-md font-medium cursor-pointer whitespace-nowrap">Approve</button>
                <button className="text-xs bg-gray-50 text-gray-500 border border-gray-200 px-3 py-1 rounded-md font-medium cursor-pointer whitespace-nowrap">Decline</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function DocumentsMockup() {
  return (
    <div className="bg-[#f7f8fa] rounded-xl p-5 min-h-80">
      <div className="flex items-center justify-between mb-4">
        <p className="text-navy font-semibold text-sm">Document Vault</p>
        <span className="text-xs text-gold font-medium cursor-pointer">All Documents</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { icon: 'ri-file-text-line', label: 'Active Leases', count: '1 document', color: 'text-navy', bg: 'bg-navy/5' },
          { icon: 'ri-file-chart-line', label: 'Financial Reports', count: '14 documents', color: 'text-green-600', bg: 'bg-green-50' },
          { icon: 'ri-camera-line', label: 'Inspection Photos', count: '48 photos', color: 'text-amber-600', bg: 'bg-amber-50' },
          { icon: 'ri-file-paper-2-line', label: 'Invoices & Receipts', count: '7 documents', color: 'text-gold', bg: 'bg-gold/10' },
        ].map((cat) => (
          <div key={cat.label} className={`${cat.bg} rounded-lg p-3 flex items-center gap-3 cursor-pointer border border-white`}>
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg flex-shrink-0">
              <i className={`${cat.icon} ${cat.color} text-base`}></i>
            </div>
            <div>
              <p className="text-navy text-xs font-semibold">{cat.label}</p>
              <p className="text-gray-400 text-xs">{cat.count}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
        <div className="px-4 py-2.5 border-b border-gray-100">
          <p className="text-navy text-xs font-semibold">Recent Documents</p>
        </div>
        {[
          { icon: 'ri-file-text-line', color: 'text-navy', name: 'Lease Agreement — 3412 Maple Ave.pdf', date: 'Feb 1, 2026', size: '284 KB' },
          { icon: 'ri-file-chart-line', color: 'text-green-600', name: 'Owner Statement — February 2026.pdf', date: 'Mar 5, 2026', size: '118 KB' },
          { icon: 'ri-image-line', color: 'text-amber-600', name: 'Move-In Inspection Report — Photos.zip', date: 'Feb 1, 2026', size: '12.4 MB' },
          { icon: 'ri-file-paper-2-line', color: 'text-gold', name: 'Invoice — Kitchen Faucet Repair.pdf', date: 'Mar 8, 2026', size: '56 KB' },
        ].map((doc, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-50 last:border-0 hover:bg-gray-50 cursor-pointer">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              <i className={`${doc.icon} ${doc.color} text-sm`}></i>
            </div>
            <p className="text-navy text-xs flex-1 truncate">{doc.name}</p>
            <p className="text-gray-400 text-xs whitespace-nowrap">{doc.date}</p>
            <p className="text-gray-300 text-xs whitespace-nowrap hidden sm:block">{doc.size}</p>
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-download-2-line text-gold text-sm"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessagesMockup() {
  return (
    <div className="bg-[#f7f8fa] rounded-xl p-5 min-h-80">
      <div className="flex items-center justify-between mb-4">
        <p className="text-navy font-semibold text-sm">Owner Messages</p>
        <span className="text-xs bg-gold text-navy px-2 py-0.5 rounded-full font-bold">1 Unread</span>
      </div>
      <div className="space-y-3">
        {[
          {
            from: 'Three Pillars PM',
            avatar: '3P',
            avatarBg: 'bg-navy',
            avatarText: 'text-cream',
            subject: 'Spring Maintenance Schedule — Your Action Needed',
            preview: 'Hi James, we\'ve scheduled the gutter cleaning for Mar 25. Please review and approve the $180 estimate in your maintenance tab.',
            time: 'Today 9:14 AM',
            unread: true,
          },
          {
            from: 'Three Pillars PM',
            avatar: '3P',
            avatarBg: 'bg-navy',
            avatarText: 'text-cream',
            subject: 'February Statement Ready for Download',
            preview: 'Your February owner statement is now available. Net proceeds of $1,840 were disbursed on March 5.',
            time: 'Mar 5',
            unread: false,
          },
          {
            from: 'Three Pillars PM',
            avatar: '3P',
            avatarBg: 'bg-navy',
            avatarText: 'text-cream',
            subject: 'Lease Renewal Update — Tenant Signed',
            preview: 'Great news — your tenant has signed the renewal through June 30, 2027. No rent increase was requested.',
            time: 'Mar 14',
            unread: false,
          },
        ].map((msg, i) => (
          <div key={i} className={`bg-white rounded-lg border p-4 cursor-pointer ${msg.unread ? 'border-gold/40 ring-1 ring-gold/20' : 'border-gray-100'}`}>
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 text-xs font-bold ${msg.avatarBg} ${msg.avatarText}`}>
                {msg.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className={`text-xs font-semibold ${msg.unread ? 'text-navy' : 'text-charcoal'}`}>{msg.from}</p>
                  <p className="text-gray-400 text-xs whitespace-nowrap ml-2">{msg.time}</p>
                </div>
                <p className={`text-xs mb-1 ${msg.unread ? 'text-navy font-semibold' : 'text-charcoal'}`}>{msg.subject}</p>
                <p className="text-gray-400 text-xs leading-relaxed truncate">{msg.preview}</p>
              </div>
              {msg.unread && <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0 mt-1.5"></span>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Send a message to your property manager..."
          className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2.5 bg-white outline-none focus:border-gold text-navy placeholder-gray-300"
        />
        <button className="px-4 py-2.5 bg-navy text-cream text-xs font-medium rounded-lg whitespace-nowrap cursor-pointer hover:bg-navy-light transition-colors">Send</button>
      </div>
    </div>
  );
}

const mockupMap: Record<string, JSX.Element> = {
  overview: <OverviewMockup />,
  financials: <FinancialsMockup />,
  maintenance: <MaintenanceMockup />,
  documents: <DocumentsMockup />,
  messages: <MessagesMockup />,
};

const validTabs = ['overview', 'financials', 'maintenance', 'documents', 'messages'];

function AnimatedCount({ end, prefix = '', suffix = '' }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function OwnerPortalPage() {
  const [searchParams] = useSearchParams();
  const rawTab = searchParams.get('tab') ?? 'overview';
  const initialTab = validTabs.includes(rawTab) ? rawTab : 'overview';
  const [activeTab, setActiveTab] = useState(initialTab);

  // Scroll to the portal preview when arriving via deep-link
  const previewRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (searchParams.get('tab') && previewRef.current) {
      setTimeout(() => {
        previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [searchParams]);

  return (
    <>
      <Navbar />

      {/* SEO */}
      <title>Owner Portal | Buildium Property Dashboard | Three Pillars Property Management</title>
      <meta name="description" content="See exactly what you get as a Three Pillars owner — a full Buildium-powered portal with real-time rent tracking, financial statements, maintenance updates, and secure messaging. 24/7 transparency for Maryland property owners." />
      <meta name="keywords" content="Buildium owner portal, property management dashboard Maryland, owner financial statements" />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=modern%20clean%20property%20management%20software%20dashboard%20interface%20on%20laptop%20screen%20dark%20background%20minimal%20professional%20real%20estate%20technology%20deep%20navy%20environment%20high%20contrast%20bokeh&width=1400&height=700&seq=opp01&orientation=landscape)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/80"></div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold/15 rounded-full border border-gold/30 mb-6">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-building-line text-gold text-xs"></i>
              </div>
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">Powered by Buildium</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-cream leading-tight mb-5">
              Your Owner Portal —<br />
              <span className="text-gold italic">Total Transparency.</span>
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We use <strong className="text-cream font-semibold">Buildium</strong>, one of the most trusted property management platforms in the industry. From the moment you sign with us, you get a private dashboard showing everything happening with your property — 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://threepillars.managebuilding.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="px-6 py-3 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-shield-keyhole-line"></i>
                Access Your Portal
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent text-cream text-sm font-medium rounded-md border border-cream/30 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Started Today →
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-cream-dark border-b border-gold/15">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { end: 24, suffix: '/7', label: 'Portal Access', icon: 'ri-wifi-line' },
              { end: 100, suffix: '%', label: 'Online Statements', icon: 'ri-file-chart-line' },
              { end: 48, suffix: 'hr', label: 'Avg. Maintenance Update', icon: 'ri-time-line' },
              { end: 256, suffix: '-bit', label: 'SSL Encryption', icon: 'ri-lock-2-line' },
            ].map((s) => (
              <div key={s.label}>
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <i className={`${s.icon} text-gold text-xl`}></i>
                </div>
                <p className="font-display text-3xl font-bold text-navy">
                  <AnimatedCount end={s.end} suffix={s.suffix} />
                </p>
                <p className="text-charcoal-light text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Portal Preview */}
        <section ref={previewRef} className="py-24 bg-cream scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold/10 rounded-full border border-gold/25 mb-5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-eye-line text-gold text-xs"></i>
                </div>
                <span className="text-gold text-xs font-semibold tracking-wide uppercase">Live Preview</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-4">
                See Inside the Dashboard
              </h2>
              <p className="text-charcoal text-base max-w-2xl mx-auto leading-relaxed">
                Click through each section below — this is exactly what you'll see as an owner on our Buildium platform.
              </p>
            </div>

            {/* Tab quick-jump pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-navy text-cream border-navy'
                      : 'bg-cream text-charcoal border-gold/20 hover:border-gold/50 hover:text-navy'
                  }`}
                >
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className={`${tab.icon} text-xs`}></i>
                  </div>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Browser Mockup */}
            <div className="bg-navy rounded-2xl p-2 md:p-4 max-w-4xl mx-auto">
              {/* Browser chrome */}
              <div className="bg-[#1a2540] rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <span className="w-3 h-3 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0"></span>
                  <div className="flex-1 ml-3 bg-navy rounded px-3 py-1.5 flex items-center gap-2">
                    <div className="w-3 h-3 flex items-center justify-center">
                      <i className="ri-lock-fill text-green-400 text-xs"></i>
                    </div>
                    <span className="text-cream/40 text-xs truncate">threepillars.managebuilding.com</span>
                  </div>
                  <div className="w-4 h-4 flex items-center justify-center ml-2">
                    <i className="ri-refresh-line text-cream/30 text-xs"></i>
                  </div>
                </div>
                {/* App layout */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-48 flex-shrink-0 bg-[#0f1a30] p-4 hidden md:block">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-7 h-7 bg-gold rounded-md flex items-center justify-center flex-shrink-0">
                        <i className="ri-building-2-line text-navy text-sm"></i>
                      </div>
                      <span className="text-cream text-xs font-semibold leading-tight">Three Pillars<br /><span className="text-cream/40 font-normal">Owner View</span></span>
                    </div>
                    <div className="space-y-1">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${activeTab === tab.id ? 'bg-gold text-navy' : 'text-cream/50 hover:text-cream hover:bg-white/5'}`}
                        >
                          <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                            <i className={`${tab.icon} text-sm`}></i>
                          </div>
                          {tab.label}
                          {tab.id === 'messages' && <span className="ml-auto text-xs bg-gold/30 text-gold px-1.5 rounded-full">1</span>}
                        </button>
                      ))}
                    </div>
                    <div className="mt-auto pt-16">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-cream/40 text-xs mb-1">Property</p>
                        <p className="text-cream text-xs font-semibold">3412 Maple Ave</p>
                        <p className="text-cream/40 text-xs">Hyattsville, MD</p>
                      </div>
                    </div>
                  </div>
                  {/* Main content */}
                  <div className="flex-1 p-4 min-w-0">
                    {/* Mobile tabs */}
                    <div className="flex gap-1 mb-4 md:hidden overflow-x-auto">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${activeTab === tab.id ? 'bg-gold text-navy' : 'text-cream/50 bg-white/5 hover:text-cream'}`}
                        >
                          <div className="w-3 h-3 flex items-center justify-center">
                            <i className={`${tab.icon} text-xs`}></i>
                          </div>
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <div className="animate-fadeIn">
                      {mockupMap[activeTab]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-charcoal-light text-sm mt-5">
              Interactive mockup — click the sidebar tabs to explore each section
            </p>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-24 bg-navy">
          <div className="max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-4">
                Everything in One Place
              </h2>
              <p className="text-cream/60 text-base max-w-xl mx-auto">
                Your Buildium portal puts the complete picture of your investment right in your hands.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((card) => (
                <div key={card.title} className="bg-navy-light rounded-xl p-6 border border-white/8">
                  <div className={`w-11 h-11 flex items-center justify-center ${card.bg} rounded-lg mb-4`}>
                    <i className={`${card.icon} ${card.color} text-lg`}></i>
                  </div>
                  <h3 className="text-cream font-semibold text-base mb-2">{card.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-cream-dark">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl text-navy mb-4">How You Get Access</h2>
              <p className="text-charcoal text-base max-w-xl mx-auto">From signing with us to your first login — here's exactly how it works.</p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px bg-gold/20"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: '01', icon: 'ri-handshake-line', title: 'Sign Management Agreement', desc: 'You sign our management agreement and we set up your owner profile in Buildium.' },
                  { step: '02', icon: 'ri-mail-send-line', title: 'Portal Invite Sent', desc: 'Within 24 hours, you receive a Buildium invitation to your email to create your login.' },
                  { step: '03', icon: 'ri-shield-keyhole-line', title: 'Set Up Your Login', desc: 'Create a secure password. Enable two-factor authentication if you choose.' },
                  { step: '04', icon: 'ri-dashboard-3-line', title: 'Full Dashboard Access', desc: 'Every rent payment, expense, document, and update is now visible in real time.' },
                ].map((s) => (
                  <div key={s.step} className="flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4 relative z-10 flex-shrink-0">
                      <i className={`${s.icon} text-gold text-xl`}></i>
                    </div>
                    <span className="text-xs font-bold text-gold tracking-widest mb-2">STEP {s.step}</span>
                    <h4 className="text-navy font-semibold text-sm mb-2">{s.title}</h4>
                    <p className="text-charcoal-light text-xs leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Buildium trust section */}
        <section className="py-16 bg-cream border-y border-gold/15">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-navy rounded-2xl mb-4">
                <i className="ri-building-2-line text-gold text-3xl"></i>
              </div>
              <p className="text-navy font-display font-bold text-2xl">Buildium</p>
              <p className="text-charcoal-light text-sm">Property Management Platform</p>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl text-navy mb-3">Why We Chose Buildium</h3>
              <p className="text-charcoal text-sm leading-relaxed mb-4">
                Buildium is used by over <strong>19,000 property management companies</strong> across the U.S. and manages more than 2 million rental units. We chose it because it&apos;s the gold standard for owner transparency — every transaction, every document, every update is logged and visible to you in real time.
              </p>
              <div className="flex flex-wrap gap-3">
                {['19,000+ PM companies', '2M+ units managed', 'SOC 2 Type II certified', 'BBB A+ Rating'].map((badge) => (
                  <span key={badge} className="text-xs bg-gold/10 text-navy border border-gold/25 px-3 py-1.5 rounded-full font-medium">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-cream-dark">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl text-navy mb-3">Owners Love the Portal</h2>
              <p className="text-charcoal text-base">Real feedback from property owners on the Buildium experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-cream rounded-xl p-6 border border-gold/15">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <i key={j} className="ri-star-fill text-gold text-sm"></i>
                    ))}
                  </div>
                  <p className="text-navy text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-navy font-semibold text-xs">{t.name}</p>
                    <p className="text-charcoal-light text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6 bg-gold/15 rounded-full">
              <i className="ri-shield-keyhole-line text-gold text-2xl"></i>
            </div>
            <h2 className="font-display text-4xl text-cream mb-4">Ready to See It For Yourself?</h2>
            <p className="text-cream/60 text-base mb-8 max-w-xl mx-auto">
              Become a Three Pillars owner and get immediate access to your Buildium dashboard — full transparency from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-gold text-navy font-semibold text-sm rounded-md hover:bg-gold-light transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-arrow-right-line"></i>
                Get a Free Property Analysis
              </Link>
              <a
                href="https://threepillars.managebuilding.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="px-7 py-3.5 bg-transparent text-cream text-sm font-medium rounded-md border border-cream/25 hover:border-gold hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
              >
                Already an Owner? Log In →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
