import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// --- Types ---

export interface ProductVariants {
  title: string;
  value: string;
}

export interface ProductSchema {
  id: string;
  title: string;
  image: string;
  quantity: number;
  price: number;
  variant?: ProductVariants[];
}

export interface ProductCartState {
  clientId?: string;
  clientName?: string;
  date?: string;
  email?: string;
  products: ProductSchema[];
}

// --- LocalStorage Utils ---

const STORAGE_KEY = "productCartState";

// Load Redux state from local storage
const loadStateFromLocalStorage = (): ProductCartState | undefined => {
  if (typeof window === "undefined") return undefined; // Prevent SSR crash

  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState) as ProductCartState;
  } catch (err) {
    console.error("Error loading cart from localStorage:", err);
    return undefined;
  }
};

// Save Redux state to local storage
const saveStateToLocalStorage = (state: ProductCartState) => {
  if (typeof window === "undefined") return;

  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error("Error saving cart to localStorage:", err);
  }
};

// --- Initial State ---

const initialState: ProductCartState =
  loadStateFromLocalStorage() || {
    clientId: "",
    clientName: "",
    date: "",
    email: "",
    products: [],
  };

// --- Slice ---

const productCartSlice = createSlice({
  name: "product-cart",
  initialState,
  reducers: {
    setClientInfo: (
      state,
      action: PayloadAction<{
        clientId: string;
        clientName: string;
        date: string;
        email: string;
      }>
    ) => {
      const { clientId, clientName, date, email } = action.payload;
      state.clientId = clientId;
      state.clientName = clientName;
      state.date = date;
      state.email = email;
      saveStateToLocalStorage(state);
    },

    addProduct: (state, action: PayloadAction<ProductSchema>) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.products.find((p) => p.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push(action.payload);
      }

      saveStateToLocalStorage(state);
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      saveStateToLocalStorage(state);
    },

    updateProductQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((p) => p.id === id);

      if (product) {
        product.quantity = quantity;
        saveStateToLocalStorage(state);
      }
    },

    clearCart: (state) => {
      state.products = [];
      saveStateToLocalStorage(state);
    },
  },
});

// --- Exports ---

export const {
  setClientInfo,
  addProduct,
  removeProduct,
  updateProductQuantity,
  clearCart,
} = productCartSlice.actions;

export default productCartSlice.reducer;
