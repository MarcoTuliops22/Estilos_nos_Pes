export interface ChineloItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
}

export const STORE_INFO = {
  name: 'Estilo nos Péz',
  whatsappNumber: '5563999145241',
  whatsappDisplay: '(63) 99914-5241',
  instagram: '@estilonospez',
  instagramUrl: 'https://instagram.com/estilonospez',
};

export function getWhatsAppLink(item?: ChineloItem): string {
  const baseNumber = STORE_INFO.whatsappNumber.replace(/\D/g, '');
  if (!item) {
    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(
      `Olá! Gostaria de tirar dúvidas sobre os chinelos da ${STORE_INFO.name}.`
    )}`;
  }
  const message = `Olá! Tenho interesse no chinelo:\n• *Código:* #${item.id}\n• *Modelo:* ${item.name}\n• *Valor:* R$ ${item.price.toFixed(2).replace('.', ',')}\n\nPoderia me confirmar a disponibilidade desse modelo?`;
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}

export const CHINELOS: ChineloItem[] = [
  {
    id: '01',
    name: 'Chinelo Lacoste Neon Crocodile',
    brand: 'Lacoste',
    price: 38.00,
    image: '/chinelos/modelo-01.jpeg',
  },
  {
    id: '02',
    name: 'Chinelo Lacoste Verde Script',
    brand: 'Lacoste',
    price: 38.00,
    image: '/chinelos/modelo-02.jpeg',
  },
  {
    id: '03',
    name: 'Chinelo Calvin Klein Swimwear Cyan',
    brand: 'Calvin Klein',
    price: 38.00,
    image: '/chinelos/modelo-03.jpeg',
  },
  {
    id: '04',
    name: 'Chinelo Acostamento Outfit 1993',
    brand: 'Acostamento',
    price: 38.00,
    image: '/chinelos/modelo-04.jpeg',
  },
  {
    id: '05',
    name: 'Chinelo Acostamento Listrado Verde & Branco',
    brand: 'Acostamento',
    price: 38.00,
    image: '/chinelos/modelo-05.jpeg',
  },
  {
    id: '06',
    name: 'Chinelo Calvin Klein Sixty Eight',
    brand: 'Calvin Klein',
    price: 38.00,
    image: '/chinelos/modelo-06.jpeg',
  },
  {
    id: '07',
    name: 'Chinelo Diesel Roxo & Preto',
    brand: 'Diesel',
    price: 38.00,
    image: '/chinelos/modelo-07.jpeg',
  },
  {
    id: '08',
    name: 'Chinelo Lacoste Glow Edição Especial',
    brand: 'Lacoste',
    price: 38.00,
    image: '/chinelos/modelo-08.jpeg',
  },
  {
    id: '09',
    name: 'Chinelo Lacoste Tipografia Vertical',
    brand: 'Lacoste',
    price: 38.00,
    image: '/chinelos/modelo-09.jpeg',
  },
  {
    id: '10',
    name: 'Chinelo Colcci Jeanswear Selo 1986',
    brand: 'Colcci',
    price: 38.00,
    image: '/chinelos/modelo-10.jpeg',
  },
  {
    id: '11',
    name: 'Chinelo Acostamento Laranja & Lobo Branco',
    brand: 'Acostamento',
    price: 38.00,
    image: '/chinelos/modelo-11.jpeg',
  },
  {
    id: '12',
    name: 'Chinelo TXC Brand Rustic Rhythms Roxo',
    brand: 'TXC',
    price: 38.00,
    image: '/chinelos/modelo-12.jpeg',
  },
  {
    id: '13',
    name: 'Chinelo Lacoste Listrado Verde Bandeira',
    brand: 'Lacoste',
    price: 38.00,
    image: '/chinelos/modelo-13.jpeg',
  },
  {
    id: '14',
    name: 'Chinelo Calvin Klein Swimwear Amarelo',
    brand: 'Calvin Klein',
    price: 38.00,
    image: '/chinelos/modelo-14.jpeg',
  },
  {
    id: '15',
    name: 'Chinelo Hugo Boss Vermelho Outline',
    brand: 'Hugo Boss',
    price: 38.00,
    image: '/chinelos/modelo-15.jpeg',
  },
  {
    id: '16',
    name: 'Chinelo Colcci Jeanswear Script Branco',
    brand: 'Colcci',
    price: 38.00,
    image: '/chinelos/modelo-16.jpeg',
  },
  {
    id: '17',
    name: 'Chinelo Hugo Boss In Motion Tricolor',
    brand: 'Hugo Boss',
    price: 38.00,
    image: '/chinelos/modelo-17.jpeg',
  },
  {
    id: '18',
    name: 'Chinelo Ellus Sport TDLX Azul',
    brand: 'Ellus',
    price: 38.00,
    image: '/chinelos/modelo-18.jpeg',
  },
  {
    id: '19',
    name: 'Chinelo Lacoste Bold Black & Green',
    brand: 'Lacoste',
    price: 38.00,
    image: '/chinelos/modelo-19.jpeg',
  },
];
