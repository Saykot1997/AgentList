import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'User',
    initialState: {
        User: localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')) : null,
        allUsers: null,
        searchAgent: null
    },
    reducers: {

        setUser: (state, action) => {
            state.User = action.payload
            localStorage.setItem('User', JSON.stringify(action.payload));
        },
        clearUser: (state) => {
            state.User = null
            localStorage.removeItem('user')
        },
        setAllUsers: (state, action) => {
            state.allUsers = action.payload
        },
        deleteSgent: (state, action) => {

            let newAgentList = [];

            state.allUsers.map((agent, index) => {
                agent._id !== action.payload._id && newAgentList.push(agent)
            });

            state.allUsers = newAgentList

        },
        updateAgent: (state, action) => {
            let newAgentList = [];

            state.allUsers.map((agent, index) => {

                if (agent._id !== action.payload._id) {
                    newAgentList.push(agent)
                } else {
                    newAgentList.push(action.payload)
                }

            });

            state.allUsers = newAgentList

        },
        searchAgent: (state, action) => {
            let newAgentList = [];

            state.allUsers.map((agent, index) => {

                if (agent.agentId === action.payload) {
                    newAgentList.push(agent)
                }

            });

            state.searchAgent = newAgentList
        }
    }
})

export const { setUser, clearUser, setAllUsers, deleteSgent, updateAgent, searchAgent } = userSlice.actions

export default userSlice.reducer