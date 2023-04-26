export interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

export interface Charity {
  first_donated: string;
  id: string;
  name: string;
  selected: boolean;
  slug: string;
  total_donated: number;
  total_transactions: number;
  user_id: string;
}
export interface Transaction {
  created_at: string;
  donated: boolean;
  donated_at?: string | null;
  id: string;
  marketplace: string;
  selected_charity: string;
  total_emissions: number;
  total_offset: number;
  total_price: number;
  user_id: string;
  charities?: Charity[];
}

export interface Product {
  emissions: number;
  height: number | null;
  length: number | null;
  materials: string[] | null;
  offset: number;
  price: number;
  title: string;
  transaction_id: string;
  user_id: string;
  uuid: string;
  weight: number | null;
  width: number | null;
}

export interface UserDetails {
  id: string /* primary key */;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
}
