import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainTasks: [],
    tasks: [],
    initialized: false,
    isError: false,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
            state.mainTasks = action.payload;
            state.initialized = true;
            state.isError = false;
        },
        setError: (state) => {
            state.initialized = true;
            state.isError = true;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            state.mainTasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            const updatedTasks = state.mainTasks.filter((task) => task.id !== taskId);
            state.mainTasks = updatedTasks;
            state.tasks = updatedTasks;
        },
        editTask: (state, action) => {
            const editedTask = action.payload;
            const index = state.mainTasks.findIndex((task) => task.id === editedTask.id);
            if (index !== -1) {
                state.mainTasks[index] = editedTask;
                state.tasks = [...state.mainTasks];
            }
        },
        filterBySearch: (state, action) => {
            const query = action.payload.toLowerCase();
            const filter = state.mainTasks.filter(
                (task) =>
                    task.task.toLowerCase().includes(query) ||
                    task.category.toLowerCase().includes(query)
            );
            state.tasks = filter;
        },
        filterByStatus: (state, action) => {
            const filtered = state.mainTasks.filter((task) => task.status === action.payload);
            state.tasks = filtered;
        },
        filterByDate: (state, action) => {
            const { startDate, endDate } = action.payload;
            if (startDate && endDate) {
                const filtered = state.mainTasks.filter((task) => {
                    const taskDate = new Date(task.deadline);
                    const start = new Date(startDate);
                    const end = new Date(endDate);
                    return taskDate >= start && taskDate <= end;
                });
                state.tasks = filtered;
            } else {
                state.tasks = state.mainTasks;
            }
        },
        sortTasks: (state, action) => {
            switch (action.payload) {
                case "A-Z":
                    state.tasks.sort((a, b) => a.task.localeCompare(b.task));
                    break;
                case "Z-A":
                    state.tasks.sort((a, b) => b.task.localeCompare(a.task));
                    break;
                case "Yaklaşan Görevler":
                    state.tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
                    break;
                case "Uzak Görevler":
                    state.tasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
                    break;
                case "Yüksek Öncelik":
                    state.tasks.sort((a, b) => {
                        const priorityOrder = { "Yüksek Öncelik": 1, "Orta Öncelik": 2, "Düşük Öncelik": 3 };
                        const priorityComparison = priorityOrder[a.status] - priorityOrder[b.status];
                        if (priorityComparison === 0) {
                            return new Date(a.deadline) - new Date(b.deadline);
                        }
                        return priorityComparison;
                    });
                    break;
                case "Düşük Öncelik":
                    state.tasks.sort((a, b) => {
                        const priorityOrder = { "Yüksek Öncelik": 1, "Orta Öncelik": 2, "Düşük Öncelik": 3 };
                        const priorityComparison = priorityOrder[b.status] - priorityOrder[a.status];
                        if (priorityComparison === 0) {
                            return new Date(b.deadline) - new Date(a.deadline);
                        }
                        return priorityComparison;
                    });
                    break;
                default:
                    break;
            }
        },
        clearFilters: (state) => {
            state.tasks = state.mainTasks;
        },
        toggleComplete: (state, action) => {
            const taskId = action.payload;
            const task = state.mainTasks.find(task => task.id === taskId);
            if (task) {
                task.completed = !task.completed;
                state.tasks = [...state.mainTasks];
            }
        }
    },
});

export const {
    setTasks,
    setError,
    addTask,
    deleteTask,
    filterBySearch,
    filterByStatus,
    filterByDate,
    sortTasks,
    clearFilters,
    editTask,
    toggleComplete,
} = taskSlice.actions;

export default taskSlice.reducer;
