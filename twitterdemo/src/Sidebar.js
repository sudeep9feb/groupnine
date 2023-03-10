import { Box, Button, List, ListItemButton, ListItemIcon, ListItemText, Modal, Stack } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import ComposeTweet from './ComposeTweet';
function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box
            flex={1}
            sx={{ display: { xs: "none", sm: "flex" } }}
            marginLeft={"40px"}
            marginTop={"10px"}
        >
            <Stack direction={"column"} spacing="3px" position="fixed"
            >
                <List disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ForumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tweets" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Signout" />
                    </ListItemButton>
                </List>

                <Button
                    variant='contained'
                    onClick={handleOpen}
                    sx={{ borderRadius: "24px", maxWidth: "180px" }}
                >
                    Tweet
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <ComposeTweet />
                </Modal>
            </Stack>
        </Box>
    )
}

export default Sidebar