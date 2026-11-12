export type Grade = { [size: string]: number };

export interface Product {
  id: string;
  name: string;
  reference: string;
  line: string;
  category: string;
  collection: string;
  price: number;
  priceRetail: number;
  image: string;
  images?: string[];
  availability: 'disponível' | 'baixo estoque' | 'esgotado';
  colors: string[];
  material: string;
  isFavorite?: boolean;
  rating: number;
  soldUnits: number;
  grades: Grade;
  description: string;
}

export interface CommercialPolicy {
  id: string;
  name: string;
  discount: number;
  paymentCondition: string;
  minOrderValue: number;
}

export interface Order {
  id: string;
  date: string;
  client: string;
  clientId: string;
  rep: string;
  status: 'aprovado' | 'em análise' | 'faturado' | 'cancelado' | 'entregue';
  total: number;
  items: number;
  paymentCondition: string;
  collection: string;
}

export interface Client {
  id: string;
  name: string;
  cnpj: string;
  city: string;
  state: string;
  region: string;
  rep: string;
  lastOrder: string;
  totalPurchased: number;
  status: 'ativo' | 'inativo' | 'em aberto';
  avatar: string;
  policyId: string;
}

export interface SelloutRecord {
  month: string;
  sellIn: number;
  sellOut: number;
  stock: number;
}

export interface RegionPerformance {
  region: string;
  revenue: number;
  target: number;
  growth: number;
  orders: number;
}

export const commercialPolicies: CommercialPolicy[] = [
  { id: 'TAB-A', name: 'Tabela A', discount: 0, paymentCondition: '5x sem juros', minOrderValue: 1500 },
  { id: 'TAB-B', name: 'Tabela B', discount: 3, paymentCondition: '5x sem juros', minOrderValue: 1200 },
  { id: 'TAB-C', name: 'Tabela C', discount: 5, paymentCondition: '3x sem juros', minOrderValue: 800 },
];

// Fotos oficiais dos produtos (src/assets/produtos/<slug>/NN.webp)
const productFiles = import.meta.glob('../../assets/produtos/*/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const productImage = (slug: string, file: string) =>
  productFiles[`../../assets/produtos/${slug}/${file}`];
const productImages = (slug: string, files: string[]) =>
  files.map((f) => productImage(slug, f));

export const products: Product[] = [
  {
    id: 'P001',
    name: "Sapatilha Vanessa Off White Esferas",
    reference: '27000700000001',
    line: "Sapatilha",
    category: "Sapatilhas",
    collection: 'Coleção 2026',
    price: 109.95,
    priceRetail: 219.9,
    image: productImage('sapatilha-vanessa-salto-baixo-off-white-27000700000001', '01.webp'),
    images: productImages('sapatilha-vanessa-salto-baixo-off-white-27000700000001', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Off White Esferas"],
    material: '—',
    isFavorite: true,
    rating: 4.6,
    soldUnits: 1340,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 24, '35': 12, '36': 36, '37': 60, '38': 0, '39': 0 },
  },
  {
    id: 'P002',
    name: "Tênis Off White com Rosa",
    reference: '94802000000004',
    line: "Tênis",
    category: "Tênis",
    collection: 'Coleção 2026',
    price: 234.95,
    priceRetail: 469.9,
    image: productImage('tenis-maxi-tech-anabela-medio-off-white-ouro-94802000000004', '01.webp'),
    images: productImages('tenis-maxi-tech-anabela-medio-off-white-ouro-94802000000004', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["White com Rosa"],
    material: '—',
    isFavorite: false,
    rating: 4.5,
    soldUnits: 400,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 24, '35': 48, '36': 0, '37': 48, '38': 12, '39': 0 },
  },
  {
    id: 'P003',
    name: "Sandália Rita Salto Médio Prata",
    reference: '61200500000001',
    line: "Sandália",
    category: "Sandálias",
    collection: 'Coleção 2026',
    price: 139.95,
    priceRetail: 279.9,
    image: productImage('sandalia-rita-salto-medio-prata-61200500000001', '01.webp'),
    images: productImages('sandalia-rita-salto-medio-prata-61200500000001', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Salto Médio Prata"],
    material: '—',
    isFavorite: true,
    rating: 4.6,
    soldUnits: 1340,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 0, '35': 12, '36': 0, '37': 48, '38': 36, '39': 0 },
  },
  {
    id: 'P004',
    name: "Tênis Soft Step Preto",
    reference: '94000100000024',
    line: "Tênis",
    category: "Tênis",
    collection: 'Coleção 2026',
    price: 124.95,
    priceRetail: 249.9,
    image: productImage('tenis-soft-step-anabela-medio-preto-94000100000024', '01.webp'),
    images: productImages('tenis-soft-step-anabela-medio-preto-94000100000024', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Step Preto"],
    material: '—',
    isFavorite: false,
    rating: 4.5,
    soldUnits: 1040,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 12, '35': 60, '36': 60, '37': 48, '38': 0, '39': 48 },
  },
  {
    id: 'P005',
    name: "Sandália Monica Salto Baixo Branco com Cristal",
    reference: '59100900000003',
    line: "Sandália",
    category: "Sandálias",
    collection: 'Coleção 2026',
    price: 99.95,
    priceRetail: 199.9,
    image: productImage('sandalia-monica-salto-baixo-branco-neve-cristal-59100900000003', '01.webp'),
    images: productImages('sandalia-monica-salto-baixo-branco-neve-cristal-59100900000003', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Salto Baixo Branco com Cristal"],
    material: '—',
    isFavorite: false,
    rating: 4.3,
    soldUnits: 820,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 12, '35': 0, '36': 48, '37': 84, '38': 12, '39': 24 },
  },
  {
    id: 'P006',
    name: "Sapato Silvia Salto Baixo Preto",
    reference: '27905300000003',
    line: "Sapato",
    category: "Sapatos",
    collection: 'Coleção 2026',
    price: 139.95,
    priceRetail: 279.9,
    image: productImage('sapato-silvia-salto-baixo-preto-27905300000003', '01.webp'),
    images: productImages('sapato-silvia-salto-baixo-preto-27905300000003', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Salto Baixo Preto"],
    material: '—',
    isFavorite: false,
    rating: 4.3,
    soldUnits: 520,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 0, '35': 48, '36': 24, '37': 48, '38': 84, '39': 60 },
  },
  {
    id: 'P007',
    name: "Sandália Flavia Salto Alto Off White Esferas",
    reference: '62607200000001',
    line: "Sandália",
    category: "Sandálias",
    collection: 'Coleção 2026',
    price: 144.95,
    priceRetail: 289.9,
    image: productImage('sandalia-flavia-salto-alto-off-white-62607200000001', '01.webp'),
    images: productImages('sandalia-flavia-salto-alto-off-white-62607200000001', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'baixo estoque',
    colors: ["Salto Alto Off White Esferas"],
    material: '—',
    isFavorite: false,
    rating: 4.6,
    soldUnits: 880,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 0, '35': 0, '36': 3, '37': 8, '38': 8, '39': 5 },
  },
  {
    id: 'P008',
    name: "Tênis Fabi Preto",
    reference: '97013100000005',
    line: "Tênis",
    category: "Tênis",
    collection: 'Coleção 2026',
    price: 94.95,
    priceRetail: 189.9,
    image: productImage('tenis-fabi-preto-97013100000005', '01.webp'),
    images: productImages('tenis-fabi-preto-97013100000005', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Preto"],
    material: '—',
    isFavorite: true,
    rating: 4.7,
    soldUnits: 1180,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 36, '35': 24, '36': 24, '37': 12, '38': 84, '39': 12 },
  },
  {
    id: 'P009',
    name: "Sandália Tainá Preto Esferas",
    reference: '44501000000004',
    line: "Sandália",
    category: "Rasteirinhas",
    collection: 'Coleção 2026',
    price: 124.95,
    priceRetail: 249.9,
    image: productImage('sandalia-taina-rasteira-preto-44501000000004', '01.webp'),
    images: productImages('sandalia-taina-rasteira-preto-44501000000004', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Preto Esferas"],
    material: '—',
    isFavorite: false,
    rating: 4.5,
    soldUnits: 1220,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 0, '35': 48, '36': 24, '37': 48, '38': 36, '39': 24 },
  },
  {
    id: 'P010',
    name: "Scarpin Salto Alto Cacau",
    reference: '77200900000006',
    line: "Scarpin",
    category: "Scarpins",
    collection: 'Coleção 2026',
    price: 134.95,
    priceRetail: 269.9,
    image: productImage('scarpin-70-anos-salto-alto-cacau-77200900000006', '01.webp'),
    images: productImages('scarpin-70-anos-salto-alto-cacau-77200900000006', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Alto Cacau"],
    material: '—',
    isFavorite: false,
    rating: 4.4,
    soldUnits: 1260,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 48, '35': 0, '36': 0, '37': 48, '38': 36, '39': 12 },
  },
  {
    id: 'P011',
    name: "Sandália Monica Salto Baixo Ouro Strass",
    reference: '59100900000004',
    line: "Sandália",
    category: "Sandálias",
    collection: 'Coleção 2026',
    price: 99.95,
    priceRetail: 199.9,
    image: productImage('sandalia-monica-salto-baixo-ouro-rose-59100900000004', '01.webp'),
    images: productImages('sandalia-monica-salto-baixo-ouro-rose-59100900000004', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Salto Baixo Ouro Strass"],
    material: '—',
    isFavorite: false,
    rating: 4.6,
    soldUnits: 1000,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 36, '35': 36, '36': 0, '37': 60, '38': 0, '39': 84 },
  },
  {
    id: 'P012',
    name: "Tênis Kelly Off White",
    reference: '90602300000007',
    line: "Tênis",
    category: "Tênis",
    collection: 'Coleção 2026',
    price: 134.95,
    priceRetail: 269.9,
    image: productImage('tenis-kelly-rasteira-off-white-90602300000007', '01.webp'),
    images: productImages('tenis-kelly-rasteira-off-white-90602300000007', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Off White"],
    material: '—',
    isFavorite: false,
    rating: 4.6,
    soldUnits: 920,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 84, '35': 24, '36': 24, '37': 60, '38': 24, '39': 48 },
  },
  {
    id: 'P013',
    name: "Rasteirinha Tainá Ouro Esferas",
    reference: '44501000000001',
    line: "Rasteirinha",
    category: "Rasteirinhas",
    collection: 'Coleção 2026',
    price: 124.95,
    priceRetail: 249.9,
    image: productImage('sandalia-taina-rasteira-ouro-44501000000001', '01.webp'),
    images: productImages('sandalia-taina-rasteira-ouro-44501000000001', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Ouro Esferas"],
    material: '—',
    isFavorite: false,
    rating: 4.7,
    soldUnits: 1180,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 36, '35': 0, '36': 84, '37': 0, '38': 24, '39': 36 },
  },
  {
    id: 'P014',
    name: "Tênis Boneca Soft Step Preto",
    reference: '94001600000005',
    line: "Tênis",
    category: "Tênis",
    collection: 'Coleção 2026',
    price: 144.95,
    priceRetail: 289.9,
    image: productImage('boneca-soft-step-anabela-medio-preto-94001600000005', '01.webp'),
    images: productImages('boneca-soft-step-anabela-medio-preto-94001600000005', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'baixo estoque',
    colors: ["Soft Step Preto"],
    material: '—',
    isFavorite: false,
    rating: 4.3,
    soldUnits: 740,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 8, '35': 5, '36': 8, '37': 5, '38': 0, '39': 8 },
  },
  {
    id: 'P015',
    name: "Scarpin Carla Salto Médio Preto",
    reference: '28000100000002',
    line: "Scarpin",
    category: "Scarpins",
    collection: 'Coleção 2026',
    price: 109.95,
    priceRetail: 219.9,
    image: productImage('scarpin-carla-salto-medio-preto-28000100000002', '01.webp'),
    images: productImages('scarpin-carla-salto-medio-preto-28000100000002', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Salto Médio Preto"],
    material: '—',
    isFavorite: false,
    rating: 4.7,
    soldUnits: 460,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 0, '35': 36, '36': 0, '37': 12, '38': 84, '39': 24 },
  },
  {
    id: 'P016',
    name: "Tênis Boneca Fabi Off White",
    reference: '97012900000004',
    line: "Tênis",
    category: "Tênis",
    collection: 'Coleção 2026',
    price: 134.95,
    priceRetail: 269.9,
    image: productImage('tenis-fabi-rasteira-off-white-97012900000004', '01.webp'),
    images: productImages('tenis-fabi-rasteira-off-white-97012900000004', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Fabi Off White"],
    material: '—',
    isFavorite: false,
    rating: 4.5,
    soldUnits: 860,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 36, '35': 36, '36': 84, '37': 36, '38': 0, '39': 12 },
  },
  {
    id: 'P017',
    name: "Tamanco Monica Salto Baixo Ouro",
    reference: '59100800000001',
    line: "Tamanco",
    category: "Tamancos",
    collection: 'Coleção 2026',
    price: 99.95,
    priceRetail: 199.9,
    image: productImage('tamanco-monica-salto-baixo-ouro-59100800000001', '01.webp'),
    images: productImages('tamanco-monica-salto-baixo-ouro-59100800000001', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Salto Baixo Ouro"],
    material: '—',
    isFavorite: false,
    rating: 4.7,
    soldUnits: 640,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 24, '35': 12, '36': 84, '37': 36, '38': 84, '39': 48 },
  },
  {
    id: 'P018',
    name: "Sandália Nathalia Salto Médio Preto",
    reference: '24900800000004',
    line: "Sandália",
    category: "Sandálias",
    collection: 'Coleção 2026',
    price: 134.95,
    priceRetail: 269.9,
    image: productImage('sandalia-nathalia-salto-medio-preto-24900800000004', '01.webp'),
    images: productImages('sandalia-nathalia-salto-medio-preto-24900800000004', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Salto Médio Preto"],
    material: '—',
    isFavorite: false,
    rating: 4.3,
    soldUnits: 520,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 24, '35': 60, '36': 36, '37': 12, '38': 12, '39': 0 },
  },
  {
    id: 'P019',
    name: "Sapatilha Vanessa Ouro Esferas",
    reference: '27000700000004',
    line: "Sapatilha",
    category: "Sapatilhas",
    collection: 'Coleção 2026',
    price: 109.95,
    priceRetail: 219.9,
    image: productImage('sapatilha-vanessa-salto-baixo-ouro-27000700000004', '01.webp'),
    images: productImages('sapatilha-vanessa-salto-baixo-ouro-27000700000004', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Ouro Esferas"],
    material: '—',
    isFavorite: false,
    rating: 4.4,
    soldUnits: 520,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 60, '35': 12, '36': 0, '37': 36, '38': 84, '39': 48 },
  },
  {
    id: 'P020',
    name: "Tamanco Monica Salto Baixo Off White",
    reference: '59100800000002',
    line: "Tamanco",
    category: "Tamancos",
    collection: 'Coleção 2026',
    price: 99.95,
    priceRetail: 199.9,
    image: productImage('tamanco-monica-salto-baixo-off-white-59100800000002', '01.webp'),
    images: productImages('tamanco-monica-salto-baixo-off-white-59100800000002', ["01.webp", "02.webp", "03.webp", "04.webp"]),
    availability: 'disponível',
    colors: ["Salto Baixo Off White"],
    material: '—',
    isFavorite: false,
    rating: 4.4,
    soldUnits: 1020,
    description: "Calçado feminino Piccadilly. Numeração 34 ao 39.",
    grades: { '34': 0, '35': 12, '36': 36, '37': 48, '38': 24, '39': 48 },
  },
];

export const orders: Order[] = [
  { id: 'PED-2026-0412', date: '2026-06-09', client: 'Calçadão Paulista LTDA', clientId: 'CLI-001', rep: 'Marcos Andrade', status: 'aprovado', total: 10540.00, items: 124, paymentCondition: '5x sem juros', collection: 'Coleção 2026' },
  { id: 'PED-2026-0411', date: '2026-06-08', client: 'Sapataria Mineira', clientId: 'CLI-002', rep: 'Fernanda Lima', status: 'faturado', total: 7310.00, items: 86, paymentCondition: '5x sem juros', collection: 'Coleção 2026' },
  { id: 'PED-2026-0410', date: '2026-06-07', client: 'Mundo dos Sapatos RJ', clientId: 'CLI-003', rep: 'Carlos Mendes', status: 'em análise', total: 14616.00, items: 168, paymentCondition: '5x sem juros', collection: 'Coleção 2026' },
  { id: 'PED-2026-0409', date: '2026-06-06', client: 'Pé de Pato Bahia', clientId: 'CLI-004', rep: 'Ana Santos', status: 'entregue', total: 5760.00, items: 72, paymentCondition: '3x sem juros', collection: 'Coleção 2026' },
  { id: 'PED-2026-0408', date: '2026-06-05', client: 'Shoestore Norte', clientId: 'CLI-005', rep: 'Marcos Andrade', status: 'cancelado', total: 3840.00, items: 48, paymentCondition: '3x sem juros', collection: 'Coleção 2026' },
  { id: 'PED-2026-0407', date: '2026-06-04', client: 'Fashion Feet SP', clientId: 'CLI-006', rep: 'Fernanda Lima', status: 'entregue', total: 18480.00, items: 210, paymentCondition: '5x sem juros', collection: 'Coleção 2026' },
  { id: 'PED-2026-0406', date: '2026-06-03', client: 'Step Up Calçados', clientId: 'CLI-007', rep: 'Carlos Mendes', status: 'faturado', total: 9180.00, items: 108, paymentCondition: '5x sem juros', collection: 'Coleção 2026' },
  { id: 'PED-2026-0405', date: '2026-06-02', client: 'Andar Bem Gaúcha', clientId: 'CLI-008', rep: 'Ana Santos', status: 'entregue', total: 5120.00, items: 64, paymentCondition: '3x sem juros', collection: 'Coleção 2026' },
];

export const clients: Client[] = [
  { id: 'CLI-001', name: 'Calçadão Paulista LTDA', cnpj: '12.345.678/0001-90', city: 'São Paulo', state: 'SP', region: 'Sudeste', rep: 'Marcos Andrade', lastOrder: '2026-06-09', totalPurchased: 142000, status: 'ativo', avatar: 'CP', policyId: 'TAB-A' },
  { id: 'CLI-002', name: 'Sapataria Mineira', cnpj: '23.456.789/0001-01', city: 'Belo Horizonte', state: 'MG', region: 'Sudeste', rep: 'Fernanda Lima', lastOrder: '2026-06-08', totalPurchased: 76500, status: 'ativo', avatar: 'SM', policyId: 'TAB-B' },
  { id: 'CLI-003', name: 'Mundo dos Sapatos RJ', cnpj: '34.567.890/0001-12', city: 'Rio de Janeiro', state: 'RJ', region: 'Sudeste', rep: 'Carlos Mendes', lastOrder: '2026-06-07', totalPurchased: 196000, status: 'ativo', avatar: 'MS', policyId: 'TAB-A' },
  { id: 'CLI-004', name: 'Pé de Pato Bahia', cnpj: '45.678.901/0001-23', city: 'Salvador', state: 'BA', region: 'Nordeste', rep: 'Ana Santos', lastOrder: '2026-06-06', totalPurchased: 54000, status: 'ativo', avatar: 'PB', policyId: 'TAB-C' },
  { id: 'CLI-005', name: 'Shoestore Norte', cnpj: '56.789.012/0001-34', city: 'Manaus', state: 'AM', region: 'Norte', rep: 'Marcos Andrade', lastOrder: '2026-06-05', totalPurchased: 33400, status: 'em aberto', avatar: 'SN', policyId: 'TAB-C' },
  { id: 'CLI-006', name: 'Fashion Feet SP', cnpj: '67.890.123/0001-45', city: 'Campinas', state: 'SP', region: 'Sudeste', rep: 'Fernanda Lima', lastOrder: '2026-06-04', totalPurchased: 246000, status: 'ativo', avatar: 'FF', policyId: 'TAB-A' },
  { id: 'CLI-007', name: 'Step Up Calçados', cnpj: '78.901.234/0001-56', city: 'Curitiba', state: 'PR', region: 'Sul', rep: 'Carlos Mendes', lastOrder: '2026-06-03', totalPurchased: 123500, status: 'ativo', avatar: 'SU', policyId: 'TAB-B' },
  { id: 'CLI-008', name: 'Andar Bem Gaúcha', cnpj: '89.012.345/0001-67', city: 'Porto Alegre', state: 'RS', region: 'Sul', rep: 'Ana Santos', lastOrder: '2026-06-02', totalPurchased: 70400, status: 'ativo', avatar: 'AB', policyId: 'TAB-B' },
  { id: 'CLI-009', name: 'Passo Certo Campinas', cnpj: '98.765.432/0001-11', city: 'Campinas', state: 'SP', region: 'Sudeste', rep: 'Marcos Andrade', lastOrder: '2026-06-01', totalPurchased: 87000, status: 'ativo', avatar: 'PC', policyId: 'TAB-A' },
  { id: 'CLI-010', name: 'Péquenos do Sul', cnpj: '11.222.333/0001-22', city: 'Florianópolis', state: 'SC', region: 'Sul', rep: 'Marcos Andrade', lastOrder: '2026-05-28', totalPurchased: 45200, status: 'ativo', avatar: 'PS', policyId: 'TAB-B' },
  { id: 'CLI-011', name: 'Caminhos Infantis RJ', cnpj: '22.333.444/0001-33', city: 'Niterói', state: 'RJ', region: 'Sudeste', rep: 'Marcos Andrade', lastOrder: '2026-05-25', totalPurchased: 67800, status: 'em aberto', avatar: 'CI', policyId: 'TAB-A' },
  { id: 'CLI-012', name: 'Pé de Anjo Brasília', cnpj: '33.444.555/0001-44', city: 'Brasília', state: 'DF', region: 'Centro-Oeste', rep: 'Marcos Andrade', lastOrder: '2026-05-20', totalPurchased: 115000, status: 'ativo', avatar: 'PA', policyId: 'TAB-B' },
  { id: 'CLI-013', name: 'Estilo Kids SP', cnpj: '44.555.666/0001-55', city: 'Guarulhos', state: 'SP', region: 'Sudeste', rep: 'Marcos Andrade', lastOrder: '2026-05-18', totalPurchased: 92000, status: 'ativo', avatar: 'EK', policyId: 'TAB-A' },
  { id: 'CLI-014', name: 'Sapatinho de Ouro BH', cnpj: '55.666.777/0001-66', city: 'Contagem', state: 'MG', region: 'Sudeste', rep: 'Marcos Andrade', lastOrder: '2026-05-15', totalPurchased: 38100, status: 'inativo', avatar: 'SO', policyId: 'TAB-C' },
  { id: 'CLI-015', name: 'Mundo Infantil Vitória', cnpj: '66.777.888/0001-77', city: 'Vitória', state: 'ES', region: 'Sudeste', rep: 'Marcos Andrade', lastOrder: '2026-05-10', totalPurchased: 56400, status: 'ativo', avatar: 'MV', policyId: 'TAB-B' },
  { id: 'CLI-016', name: 'Alegria nos Pés PR', cnpj: '77.888.999/0001-88', city: 'Londrina', state: 'PR', region: 'Sul', rep: 'Marcos Andrade', lastOrder: '2026-05-08', totalPurchased: 72300, status: 'ativo', avatar: 'AP', policyId: 'TAB-A' },
];

export const selloutData: SelloutRecord[] = [
  { month: 'Jan', sellIn: 420000, sellOut: 380000, stock: 140000 },
  { month: 'Fev', sellIn: 380000, sellOut: 410000, stock: 110000 },
  { month: 'Mar', sellIn: 510000, sellOut: 480000, stock: 140000 },
  { month: 'Abr', sellIn: 620000, sellOut: 590000, stock: 170000 },
  { month: 'Mai', sellIn: 580000, sellOut: 540000, stock: 210000 },
  { month: 'Jun', sellIn: 490000, sellOut: 460000, stock: 240000 },
];

export const regionData: RegionPerformance[] = [
  { region: 'Sudeste', revenue: 1840000, target: 1600000, growth: 12.4, orders: 284 },
  { region: 'Sul', revenue: 920000, target: 850000, growth: 8.2, orders: 142 },
  { region: 'Nordeste', revenue: 680000, target: 720000, growth: -5.6, orders: 108 },
  { region: 'Centro-Oeste', revenue: 480000, target: 440000, growth: 9.1, orders: 76 },
  { region: 'Norte', revenue: 280000, target: 300000, growth: -6.7, orders: 44 },
];

export const kpiData = {
  totalSellIn: 3000000,
  totalSellOut: 2860000,
  activeClients: 247,
  pendingOrders: 18,
  avgTicket: 8800,
  collectionGiro: 78.4,
  monthlyGrowth: 9.8,
  encalheAlerts: 6,
};

export const topProducts = [
  { name: "Sapatilha Vanessa Off White Esferas", units: 1340, revenue: 147333, growth: 6.8 },
  { name: "Sandália Rita Salto Médio Prata", units: 1340, revenue: 187533, growth: 17.0 },
  { name: "Scarpin Salto Alto Cacau", units: 1260, revenue: 170037, growth: 18.3 },
  { name: "Sandália Tainá Preto Esferas", units: 1220, revenue: 152439, growth: 14.2 },
  { name: "Tênis Fabi Preto", units: 1180, revenue: 112041, growth: 15.4 },
];

export const repTargets = [
  { name: 'Marcos Andrade', target: 480000, achieved: 524000, clients: 68, orders: 82 },
  { name: 'Fernanda Lima', target: 420000, achieved: 398000, clients: 54, orders: 71 },
  { name: 'Carlos Mendes', target: 390000, achieved: 441000, clients: 62, orders: 79 },
  { name: 'Ana Santos', target: 350000, achieved: 312000, clients: 48, orders: 58 },
];

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
};
