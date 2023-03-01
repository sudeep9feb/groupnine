import React from 'react'

function Sidebar() {
    return (
        <Box>
            <List disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
            </List>
        </Box>
    )
}

export default Sidebar