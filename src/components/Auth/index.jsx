import React from 'react'
import Container from "./../Container";
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const onSubmit = (e) => e.preventDefault();

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	}

	const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

	return (
    <AuthContainer>
      <AuthForm>
        <FormLegend>{isLogin ? 'Войти в кабинет' : 'Зарегистрируйтесь'}</FormLegend>
        <Form>
          <Input
            type="text"
            value={email}
            onChange={onChangeEmail}
            placeholder="Email"
          />
          <Input
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="Пароль"
          />
          <SubmitButton onClick={onSubmit}>Войти</SubmitButton>
					<RegistrationWrap>
						Нет профиля? 
						<RegistrationLink to="/registration">Зарегистрируйтесь!</RegistrationLink>
					</RegistrationWrap>
        </Form>
      </AuthForm>
    </AuthContainer>
  );
}

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