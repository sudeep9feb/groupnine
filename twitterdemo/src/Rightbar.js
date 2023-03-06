import { Box } from '@mui/material'
import React from 'react'

function Rightbar() {
    return (
        <Box
            flex={2}
            sx={{
                display: {
                    xs: "none", sm: "none", md: "flex"
                }
            }}
        >Rightbar
        </Box>
    )
}

export default Rightbar