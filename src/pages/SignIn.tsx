import React, { useState } from 'react';
import {
  Button,
  makeStyles,
  Typography,
  FormGroup,
  FormControl,
  TextField,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import ModalBlock from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    backgroundColor: '#71c9f8',
    overflow: 'hidden',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '260%',
    height: '260%',
  },
  blueSideList: {
    position: 'relative',
    margin: 0,
    padding: 0,
    width: 380,
    listStyle: 'none',
    '& li': {
      display: 'flex',
      alignItems: 'center',
      fontSize: 20,
      fontWeight: 700,
      color: 'white',
    },
    '& li:not(:last-of-type)': {
      marginBottom: 40,
    },
  },
  blueSideIcon: {
    marginRight: 15,
    fontSize: 32,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 45,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
}));

export const SignIn: React.FC = () => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => setVisibleModal('signIn');
  const handleClickOpenSignUp = (): void => setVisibleModal('signUp');
  const handleClickClose = (): void => setVisibleModal(undefined);

  return (
    <section className={classes.wrapper}>
      <div className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideList}>
          <li>
            <SearchIcon className={classes.blueSideIcon} />
            <Typography variant="h6">
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li>
            <PeopleIcon className={classes.blueSideIcon} />
            <Typography variant="h6">Узнайте, о чем говорят в мире.</Typography>
          </li>
          <li>
            <MessageIcon className={classes.blueSideIcon} />
            <Typography variant="h6">Присоединяйтесь к общению.</Typography>
          </li>
        </ul>
      </div>
      <div className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography className={classes.loginSideTitle} variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            onClick={handleClickOpenSignUp}
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth>
            Зарегистрироваться
          </Button>
          <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleClickClose}
            title="Создайте учетную запись">
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  variant="filled"
                  label="Имя"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  id="Email"
                  variant="filled"
                  label="Email"
                  type="Email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  id="password"
                  label="Пароль"
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button
                  onClick={handleClickClose}
                  variant="contained"
                  color="primary"
                  fullWidth>
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>

          <Button
            onClick={handleClickOpenSignIn}
            variant="outlined"
            color="primary"
            fullWidth>
            Войти
          </Button>
          <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleClickClose}
            title="Войти в аккаунт">
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="Email"
                  variant="filled"
                  label="Email"
                  type="Email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  id="password"
                  label="Пароль"
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button
                  onClick={handleClickClose}
                  variant="contained"
                  color="primary"
                  fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </div>
    </section>
  );
};
