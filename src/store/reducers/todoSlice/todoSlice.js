import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  try {
    const { data } = await axios.get(
      "http://135.181.152.249:8085/ToDo/get-to-dos"
    );
    return data?.data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
});

export const delTodo = createAsyncThunk(
  "todo/delTodo",
  async (id, { dispatch }) => {
    try {
      await axios.delete(
        `http://135.181.152.249:8085/ToDo/delete-to-do?id=${id}`
      );
      dispatch(getTodo());
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);

export const delImg = createAsyncThunk(
  "todo/delImg",
  async (id, { dispatch }) => {
    try {
      await axios.delete(
        `http://135.181.152.249:8085/ToDo/delete-to-do-image?imageId=${id}`
      );
      dispatch(getTodo());
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);

export const searchTodo = createAsyncThunk(
  "todo/searchTodo",
  async (name) => {
    try {
      const { data } = await axios.get(
        `http://135.181.152.249:8085/ToDo/get-to-dos?ToDoName=${name}`
      );
      return data?.data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (formData, { dispatch }) => {
    try {
      await axios.post(
        "http://135.181.152.249:8085/ToDo/add-to-do",
        formData
      );
      dispatch(getTodo());
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const editTodo = createAsyncThunk(
  "todo/editTodo",
  async (todo, { dispatch }) => {
    try {
      await axios.put(
        "http://135.181.152.249:8085/ToDo/update-to-do",
        todo
      );
      dispatch(getTodo());
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    search: "",
    addModal: false,
    editModal: false,
    editName: "",
    editDesc: "",
    idx: "",
    valueWhere: "",
    valueTo: ""
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setAddModal: (state, action) => {
      state.addModal = action.payload;
    },
    setEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    setEditName: (state, action) => {
      state.editName = action.payload;
    },
    setEditDesc: (state, action) => { 
      state.editDesc = action.payload;
    },
    setIdx: (state, action) => {
      state.idx = action.payload;
    },
    setValueWhere: (state, action) => {
      state.valueWhere = action.payload;
    },
    setValueTo: (state, action) => {
      state.valueTo = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, () => {});
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(searchTodo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {
  setSearch,
  setAddModal,
  setEditModal,
  setEditName,
  setEditDesc, 
  setIdx,
  setValueTo,
  setValueWhere
} = todoSlice.actions;

export default todoSlice.reducer;