import { Button, TextareaAutosize } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function ComposeTweet() {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems="end"
            sx={{ padding: "5px", margin: "10px" }}
            gap={1}
        >
            <TextareaAutosize
                minRows={8}
                placeholder="What's happening?"
                style={{ width: "100%", borderRadius: "10px", minWidth: "300px" }}
            />
            <Button
                variant='contained'
                sx={{ borderRadius: "24px", maxWidth: "180px" }}
            >
                Tweet
            </Button>
        </Box>
    )
}

export default ComposeTweet