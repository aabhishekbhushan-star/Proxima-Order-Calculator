
export interface Product {
  id: string;
  name: string;
  nrv: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AppState {
  quantities: Record<string, number>;
  searchQuery: string;
}
