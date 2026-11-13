'use client';

import { useState } from 'react';
import { PortofolioData } from '../data/PortofolioData';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

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
          setErrorMsg(data.errors.map(err => err.message).join(', '));
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
    <section id="contact" className="py-20 relative bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">Kontak</h2>
          <p className="text-stone-500 text-base">
            Silakan hubungi saya melalui email atau media sosial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">

            <a
              href={`mailto:${PortofolioData.socials.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-amber-300 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-400 mb-0.5">Email</div>
                <div className="text-stone-700 text-sm font-medium group-hover:text-amber-700 transition-colors">
                  {PortofolioData.socials.email}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-500 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-400 mb-0.5">Lokasi</div>
                <div className="text-stone-700 text-sm font-medium">Malang, Indonesia</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <div className="text-xs text-stone-400 mb-3">Media Sosial</div>
              <div className="flex items-center gap-3">
                <a href={PortofolioData.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-800 hover:border-stone-400 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href={PortofolioData.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-800 hover:border-stone-400 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={PortofolioData.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-800 hover:border-stone-400 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-stone-800 mb-6">Kirim Pesan</h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <p className="text-stone-700 font-semibold">Pesan terkirim!</p>
                  <p className="text-stone-500 text-sm">Terima kasih, saya akan segera merespons ke email Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs text-stone-400 mb-2">Nama</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama lengkap"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs text-stone-400 mb-2">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@contoh.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs text-stone-400 mb-2">Subjek</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Perihal pesan"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs text-stone-400 mb-2">Pesan</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tulis pesan Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-amber-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-stone-800 text-white font-semibold text-sm shadow-md hover:bg-stone-700 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
