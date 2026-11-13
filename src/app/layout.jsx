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
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-paper text-ink antialiased selection:bg-ink selection:text-paper min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
