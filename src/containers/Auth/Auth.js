import React, {Component} from 'react'
import classes from './Auth.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {

  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validalion: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Введите верный пароль',
        valid: false,
        touched: false,
        validalion: {
          required: true,
          minLength: 6
        }
      }
    }
  }  

  loginHandler = () => {

  }

  registerHandler = () => {
  
  }

  submitHandler = event => {
    event.preventDefault() 
  }

  render() {
     return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <Input 
              label="Email" 
            />
            <Input 
              label="Password"
              errorMessage="TEST"
            />

            <Button
              type="success"
              onClick={this.loginHandler}
            >
              Войти
            </Button>

            <Button
              type="primary"
              onClick={this.registerHandler}
            >
              Зарегистрироваться
            </Button>
          </form>

        </div>
      </div>
    )
  }
}