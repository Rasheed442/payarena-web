import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "/account/login",
  async ({ email: username, password }, thunkAPI) => {
    const formData = new FormData();
    try {
      formData.append("username", username);
      formData.append("password", password);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}account/login`,
        {
          method: "POST",
          body: formData,
          redirect: "follow",
        }
      );
      let data = await response.json();
      console.log(data);
      // if (data?.Success === true) {
      //   sessionStorage.setItem(
      //     "token",
      //     JSON.stringify(data?.Data?.access_token)
      //   );
      //   sessionStorage.setItem(
      //     "userDetails",
      //     JSON.stringify(data?.Data?.userProfile)
      //   );
      //   window.location.href = "/dashboard";
      //   return data?.Data?.access_token;
      // } else {
      //   toast.error(data?.message);
      //   return thunkAPI.rejectWithValue(data);
      // }
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue([
        {
          message: "Failed to establish connection!",
        },
      ]);
    }
  }
);
