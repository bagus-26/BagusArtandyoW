import './globals.css';

export const metadata = {
  title: 'Bagus Artandyo Witjaksono - Portfolio',
  description: 'Personal Portfolio of Bagus Artandyo Witjaksono | Project Manager, System Analyst, Backend Developer, Mobile Developer, Machine Learning Engineer | Sarjana Informatika ITSK RS dr. Soepraoen Malang',
  keywords: ['Bagus Artandyo Witjaksono', 'Project Manager', 'System Analyst', 'Backend Developer', 'Mobile Developer', 'Machine Learning Engineer'],
  authors: [{ name: 'Bagus Artandyo Witjaksono' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#faf9f6] text-stone-800 antialiased selection:bg-amber-200 selection:text-amber-900 min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
