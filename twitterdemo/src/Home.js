import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import MainContent from './MainContent'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

function Home() {
    return (
        <Box
        >
            <Stack direction={"row"} spacing={2}>
                <Sidebar />
                <MainContent />
                <Rightbar />
            </Stack>
        </Box>
    )
}

export default Home