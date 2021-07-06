import React from 'react';
import {
  Container,
  Grid,
  Paper,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import Search from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import MessageIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PermIdentity';

const useHomeStyles = makeStyles(() => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    margin: 0,
    padding: 0,
  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center',
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  sideMenuListItemLabel: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 15,
  },
}));

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton className={classes.logo} color="primary">
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <Search className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Поиск
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <NotificationIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Уведомления
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <MessageIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Сообщения
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <BookmarkIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Закладки
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <ListIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Список
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <UserIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6">
                Профиль
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
