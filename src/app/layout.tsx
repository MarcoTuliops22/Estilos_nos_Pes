import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Estilo nos Péz | Catálogo Oficial de Chinelos & Sandálias',
  description:
    'Showroom e catálogo oficial da Estilo nos Péz. Chinelos slides de alta densidade, rasteiras finas, modelos infantis e customizações exclusivas em pedraria. Atendimento direto no WhatsApp.',
  keywords: [
    'chinelos',
    'sandálias',
    'estilo nos péz',
    'chinelo slide',
    'chinelos masculinos',
    'sandálias femininas',
    'calçados infantis',
    'chinelos customizados',
    'pedrarias',
    'havaianas customizadas',
  ],
  authors: [{ name: 'Estilo nos Péz' }],
  openGraph: {
    title: 'Estilo nos Péz | Catálogo Oficial de Chinelos & Sandálias',
    description:
      'Descubra os melhores modelos em calçados casuais, slides e customizados. Compre ou tire dúvidas direto no WhatsApp!',
    url: 'https://estilonospez.com.br',
    siteName: 'Estilo nos Péz',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0f19',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
