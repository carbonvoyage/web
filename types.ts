export interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
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
  charities: {
    name: string;
  };
}

export interface UserDetails {
  id: string /* primary key */;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
}
