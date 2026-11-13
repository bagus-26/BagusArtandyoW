'use client';

import { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { PortofolioData } from '../data/PortofolioData';
import SectionHeading from './section-heading';

const socials = [
  { label: 'GitHub', href: PortofolioData.socials.github, Icon: Github },
  { label: 'LinkedIn', href: PortofolioData.socials.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: PortofolioData.socials.instagram, Icon: Instagram },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formspree.io/f/mljrezgr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        if (data && data.errors && data.errors.length > 0) {
          setErrorMsg(data.errors.map((err) => err.message).join(', '));
        } else {
          setErrorMsg('Gagal mengirim pesan. Silakan coba lagi nanti.');
        }
      }
    } catch (err) {
      setErrorMsg('Terjadi kesalahan jaringan. Silakan periksa koneksi Anda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="shell mt-24 md:mt-[18vh]">
      <SectionHeading title="Kontak" aside="Mari bekerja sama" />

      <div className="mt-10 grid gap-x-8 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Email</p>
          <a
            href={`mailto:${PortofolioData.socials.email}`}
            className="group mt-2 inline-block max-w-full text-[clamp(22px,2.4vw,34px)] font-medium leading-tight tracking-[-0.03em]"
          >
            <span className="break-all">{PortofolioData.socials.email}</span>
            <span className="mt-1 block h-px w-full bg-rule transition-colors group-hover:bg-ink" />
          </a>

          <div className="mt-10">
            <p className="eyebrow">Lokasi</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              Malang, Indonesia
            </p>
          </div>

          <nav aria-label="Media sosial" className="mt-8 border-t border-rule">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-12 items-center justify-between gap-4 border-b border-rule py-3 text-sm transition-colors hover:text-muted"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  {label}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div role="status" className="border-y border-rule py-14 text-center">
              <CheckCircle2 className="mx-auto h-8 w-8" strokeWidth={1.25} aria-hidden="true" />
              <p className="mt-4 font-medium">Pesan terkirim.</p>
              <p className="mt-1 text-sm text-muted">
                Terima kasih, saya akan segera merespons ke email Anda.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium tracking-[-0.02em]">Kirim pesan</h3>
                <Mail className="h-4 w-4 text-muted" strokeWidth={1.5} aria-hidden="true" />
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-2 border-l-2 border-rose-700 pl-3 text-sm text-rose-700"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="eyebrow mb-1 block">
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama lengkap"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="eyebrow mb-1 block">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@contoh.com"
                    className="field"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-subject" className="eyebrow mb-1 block">
                    Subjek
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Perihal pesan"
                    className="field"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="eyebrow mb-1 block">
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tulis pesan Anda di sini..."
                    className="field resize-y"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-medium text-paper transition-colors hover:bg-[#2b2b28] disabled:opacity-50 sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" /> Kirim pesan
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
