import decode from 'jwt-decode';

class AuthService {
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }
  // get user data from JSON web token by decoding it
  getUser() {
    return decode(this.getToken());
  }
  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }
  login(idToken) {
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem('id_token', idToken);
    window.location.replace('/soundboard');
  }
  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.replace('/');
  }

  // checks to see if token is expired
  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }
}

const Auth = new AuthService();

export default Auth;
