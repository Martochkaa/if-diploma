import React, {useState} from 'react';
import close_icon from '../../img/close-icon.svg';


const Account = ({setAccountIsVisible, setSignInIsVisible, setSignOutIsVisible}) => {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const closeAccount = () => {
        setAccountIsVisible(prev => !prev);
    };

    const handleFirstName = (elem) => {
        setFirstName(elem.target.value);
        if (!elem.target.value) {
            setFirstNameError('Please enter your first name');
        } else {
            setFirstNameError('');
        }
    };

    const handleLastName = (elem) => {
        setLastName(elem.target.value);
        if (!elem.target.value) {
            setLastNameError('Please enter your last name');
        } else {
            setLastNameError('');
        }
    };

    const handleEmail = (elem) => {
        setEmail(elem.target.value);
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!elem.target.value) {
          setEmailError('Please enter your email');
        } else {
          if(re.test(String(elem.target.value).toLowerCase())) {
            setEmailError('')
          } else {
            setEmailError('Please enter valid email');
          }
        }
    };

    const handlePassword = (elem) => {
        setPassword(elem.target.value);
        if(elem.target.value.length < 4 || elem.target.value.length > 8) {
            setPasswordError('Password should include from 4 to 8 characters');
            if (!elem.target.value) {
                setPasswordError('Please enter your password');
            }
        } else {
            setPasswordError('');
        }
    };

    const signIn = () => {
        if(firstNameError === '' && lastNameError === '' && emailError === '' && passwordError === ''
          && firstName !== '' && lastName !== '' && email !== '' && password !== '') {
            setAccountIsVisible(prev => !prev);
            setSignInIsVisible(prev => !prev);
            setSignOutIsVisible(prev => !prev);
        } else {
          setFirstNameError('Please enter the First Name');
          setLastNameError('Please enter the Last Name');
          setEmailError('Please enter the Email');
          setPasswordError('Please enter the Password'); 
        }
    };

    const enter = () => {
        setAccountIsVisible(prev => !prev);
        setSignInIsVisible(prev => !prev);
        setSignOutIsVisible(prev => !prev);
    };

  return (
    <>
      <section className="section-account">
        <div className="container-account">
          <p className="title-account">CREATE ACCOUNT</p>
          <img src={close_icon} className="closeAccount" onClick={closeAccount} alt="close_icon" />
        </div>
        <form className="form-account">
            <div className="accountError">{firstNameError}</div>
        <input type="text" name="text" className="account__input" placeholder="First Name" onChange={(elem) => handleFirstName(elem)} required />
        <hr className="account__hr"/>
            <div className="accountError">{lastNameError}</div>
        <input type="text" name="text" className="account__input" placeholder="Last Name" onChange={(elem) => handleLastName(elem)} required />
        <hr className="account__hr"/>
            <div className="accountError">{emailError}</div>
        <input type="email" name="email" className="account__input" placeholder="Email" onChange={(elem) => handleEmail(elem)} required />
        <hr className="account__hr"/>
            <div className="accountError">{passwordError}</div>
        <input type="password" name="password" className="account__input" placeholder="Password" onChange={(elem) => handlePassword(elem)} required />
        <hr className="account__hr"/>
        </form>
        <div className="account__checkboxContainer">
          <input className="account__checkbox" type="checkbox" />
          <div className="account__checkboxBox">
            <p className="account__text">Let's get personal! We'll send you only the good stuff:</p>
            <p className="account__text">Exclusive early access to Sale, new arrivals and promotions. No nasties.</p>
          </div>
        </div>
        <span className="account__text, color_gray">By signing up you agree to </span>
        <span className="account__text, text-decoration">Terms of Service</span>
        <span className="account__text, color_gray"> and </span>
        <span className="account__text, text-decoration">Privacy Policy</span>
        <button type="submit" className="account__button" onClick={signIn}>SIGN UP</button>
        <p className="account__href" onClick={enter}><a href="#">I HAVE AN ACCOUNT</a></p>
      </section>
    </>
  )
}

export default Account;