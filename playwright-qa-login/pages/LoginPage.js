// Page Object Model untuk halaman login situs latihan.
// Prinsip POM: selector dan aksi halaman tinggal di sini, bukan di file test,
// supaya kalau UI berubah, yang diubah hanya satu tempat.
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.locator('a[href="/logout"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async flashText() {
    return (await this.flashMessage.textContent()) || '';
  }
}

module.exports = { LoginPage };
