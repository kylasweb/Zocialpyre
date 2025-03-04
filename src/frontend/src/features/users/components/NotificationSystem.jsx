import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  IconButton,
  Badge,
  Popover,
  Card,
} from '@mui/material';
import {
  Notifications,
  MonetizationOn,
  Group,
  EmojiEvents,
  Close,
} from '@mui/icons-material';

const mockNotifications = [
  {
    id: 1,
    type: 'achievement',
    title: 'New Achievement Unlocked!',
    message: 'You have reached Gold rank status',
    timestamp: '2 hours ago',
    icon: <EmojiEvents color="warning" />,
  },
  {
    id: 2,
    type: 'finance',
    title: 'Commission Received',
    message: 'You received $250 in commissions',
    timestamp: '3 hours ago',
    icon: <MonetizationOn color="success" />,
  },
  {
    id: 3,
    type: 'team',
    title: 'New Team Member',
    message: 'John Doe joined your downline',
    timestamp: '5 hours ago',
    icon: <Group color="primary" />,
  },
];

export const NotificationSystem = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        size="large"
        sx={{ mr: 2 }}
      >
        <Badge badgeContent={notifications.length} color="error">
          <Notifications />
        </Badge>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Card sx={{ width: 360, maxHeight: 480 }}>
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Typography variant="h6">Notifications</Typography>
          </Box>
          <List sx={{ maxHeight: 400, overflow: 'auto' }}>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <ListItem
                  key={notification.id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveNotification(notification.id)}
                    >
                      <Close />
                    </IconButton>
                  }
                >
                  <ListItemIcon>{notification.icon}</ListItemIcon>
                  <ListItemText
                    primary={notification.title}
                    secondary={
                      <React.Fragment>
                        {notification.message}
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{ display: 'block' }}
                        >
                          {notification.timestamp}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText
                  primary="No notifications"
                  secondary="You're all caught up!"
                />
              </ListItem>
            )}
          </List>
        </Card>
      </Popover>
    </Box>
  );
};