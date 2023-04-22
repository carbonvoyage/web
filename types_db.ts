export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      charities: {
        Row: {
          first_donated: string | null;
          id: string;
          name: string;
          selected: boolean;
          slug: string;
          total_donated: number;
          total_transactions: number;
          user_id: string;
        };
        Insert: {
          first_donated?: string | null;
          id?: string;
          name: string;
          selected?: boolean;
          slug: string;
          total_donated?: number;
          total_transactions?: number;
          user_id: string;
        };
        Update: {
          first_donated?: string | null;
          id?: string;
          name?: string;
          selected?: boolean;
          slug?: string;
          total_donated?: number;
          total_transactions?: number;
          user_id?: string;
        };
      };
      products: {
        Row: {
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
        };
        Insert: {
          emissions?: number;
          height?: number | null;
          length?: number | null;
          materials?: string[] | null;
          offset?: number;
          price?: number;
          title: string;
          transaction_id: string;
          user_id: string;
          uuid?: string;
          weight?: number | null;
          width?: number | null;
        };
        Update: {
          emissions?: number;
          height?: number | null;
          length?: number | null;
          materials?: string[] | null;
          offset?: number;
          price?: number;
          title?: string;
          transaction_id?: string;
          user_id?: string;
          uuid?: string;
          weight?: number | null;
          width?: number | null;
        };
      };
      transactions: {
        Row: {
          created_at: string;
          donated: boolean;
          donated_at: string | null;
          id: string;
          marketplace: string;
          selected_charity: string;
          total_emissions: number;
          total_offset: number;
          total_price: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          donated?: boolean;
          donated_at?: string | null;
          id?: string;
          marketplace: string;
          selected_charity: string;
          total_emissions?: number;
          total_offset?: number;
          total_price?: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          donated?: boolean;
          donated_at?: string | null;
          id?: string;
          marketplace?: string;
          selected_charity?: string;
          total_emissions?: number;
          total_offset?: number;
          total_price?: number;
          user_id?: string;
        };
      };
      users: {
        Row: {
          avatar_url: string | null;
          first_name: string | null;
          id: string;
          last_name: string | null;
          total_donated: number;
          total_emissions: number;
        };
        Insert: {
          avatar_url?: string | null;
          first_name?: string | null;
          id: string;
          last_name?: string | null;
          total_donated?: number;
          total_emissions?: number;
        };
        Update: {
          avatar_url?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          total_donated?: number;
          total_emissions?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
