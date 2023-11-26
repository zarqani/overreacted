import { setDarkClassName } from "@/utils/common";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: ColorScheme = {
  colorScheme: "",
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleColorScheme: (state, action: PayloadAction<string | undefined>) => {
      const colorScheme =
        action.payload ||
        (localStorage?.colorScheme === "light" ? "dark" : "light");
      localStorage?.setItem("colorScheme", colorScheme);
      state.colorScheme = colorScheme;
      setDarkClassName();
    },
  },
});

export const { toggleColorScheme } = globalSlice.actions;

/* Types */
export interface ColorScheme {
  colorScheme: string;
}
