import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import MainContent from './MainContent'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

function Home() {
    return (
        <Box
            display={"flex"}
            flexDirection="row"
            margin={"40px"}
            padding="10px"
        >
            <Stack direction={"row"} spacing={3}>
                <Sidebar />
                <MainContent />
                <Rightbar />
            </Stack>
        </Box>
    )
}

export default Home