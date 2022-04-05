import React from 'react'
import Container from "./../Container";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from '../../http/userAPI';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
  const { user } = React.useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

  const signIn = async () => {
    try {
      const userResponse = await login(email, password);
      user.setUser(userResponse);
      user.setIsAuth(true);
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  const signUp = async () => {
    try {
      const userResponse = await registration(email, password);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	}

	const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

	return (
    <AuthContainer>
      <AuthForm>
        <FormLegend>
          {isLogin ? "Войти в кабинет" : "Зарегистрируйтесь"}
        </FormLegend>
        <Form autoComplete="on" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            value={email}
            name="login"
            autoComplete="username-email"
            onChange={onChangeEmail}
            placeholder="Email"
          />
          <Input
            type="password"
            value={password}
            name="password"
            autoComplete="current-password"
            onChange={onChangePassword}
            placeholder="Пароль"
          />
          {isLogin ? (
            <>
              <SubmitButton type="submit" onClick={signIn}>
                Войти
              </SubmitButton>
              <RegistrationWrap>
                {`Нет профиля? `}
                <RegistrationLink to="/registration">
                  Зарегистрируйтесь!
                </RegistrationLink>
              </RegistrationWrap>
            </>
          ) : (
            <>
              <SubmitButton type="submit" onClick={signUp}>
                Зарегистрироваться
              </SubmitButton>
              <RegistrationWrap>
                {`Есть профиль? `}
                <RegistrationLink to="/login">Войти!</RegistrationLink>
              </RegistrationWrap>
            </>
          )}
        </Form>
      </AuthForm>
    </AuthContainer>
  );
});

// Styled Components
const AuthContainer = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AuthForm = styled.div`
  padding: 24px 24px;
	border-radius: 8px;
	background-color: var(--gray-0);
	box-shadow: var(--box-shadow);
`;

const Form = styled.form`
	width: 320px;
	display: flex;
	flex-direction: column;
`;

const FormLegend = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  font-size: var(--h5-font-size);
`;

const Input = styled.input`
  margin-bottom: 12px;
  padding: 8px 16px;
  width: 100%;
  border: 1px solid var(--gray-3);
  border-radius: 8px;
  color: var(--gray-10);
  transition: 0.3s;
  font-size: var(--text-font-size);
	line-height: 20px;
  &:focus {
    border: 1px solid var(--brand-color);
  }
	&::placeholder {
		color: var(--gray-10);
	}
`;

const SubmitButton = styled.button`
	margin-top: 8px;
	padding: 8px 16px;
	line-height: 20px;;
	background-color: var(--brand-color);
	border-radius: 8px;
	color: var(--gray-0);
`;

const RegistrationWrap = styled.div`
	margin-top: 16px;
	text-align: center;
	color: var(--gray-6);
`;

const RegistrationLink = styled(Link)`
  margin-left: 8px;
  color: var(--link-color);
`;


export default Auth;