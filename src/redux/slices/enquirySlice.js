import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enquiryReferenceID: null,
  sellerRateReferenceID: null,
  buyingRateReferenceID: null
};

const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    setEnquiryReferenceID(state, action) {
      state.enquiryReferenceID = action.payload;
    },
    setSellerRateReferenceID(state, action) {
      state.sellerRateReferenceID = action.payload;
    },
    setbuyingRateReferenceID(state, action) { // Add this reducer
      state.buyingRateReferenceID = action.payload;
    },
  },
});

export const { setEnquiryReferenceID, setSellerRateReferenceID, setbuyingRateReferenceID } = enquirySlice.actions; 
export default enquirySlice.reducer;
