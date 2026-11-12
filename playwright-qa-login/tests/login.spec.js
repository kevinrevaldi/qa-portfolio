// 3 test login: 1 positif, 2 negatif. Cerminan TC-01/TC-02/TC-04
// dari sheet test-case-login.csv yang sudah ada.
// Kredensial ini adalah akun demo publik situs latihan itu sendiri,
// bukan akun pribadi siapa pun.
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login (situs latihan the-internet.herokuapp.com)', () => {
  test('TC-01 login valid berhasil dan tombol logout muncul', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('tomsmith', 'SuperSecretPassword!');
    await expect(login.flashMessage).toContainText('You logged into a secure area!');
    await expect(login.logoutButton).toBeVisible();
  });

  test('TC-02 password salah menampilkan pesan error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('tomsmith', 'password-salah');
    await expect(login.flashMessage).toContainText('Your password is invalid!');
  });

  test('TC-04 field kosong menampilkan pesan error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('', '');
    await expect(login.flashMessage).toContainText('Your username is invalid!');
  });
});
