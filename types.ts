export interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

export interface IFounder {
  name: string;
  role: string;
}

export interface Customer {
  id: string /* primary key */;
  stripe_customer_id?: string;
}

export interface UserDetails {
  id: string /* primary key */;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
}
