# Portofolio Mini QA — Automation Login (Playwright + POM)

Bagian ketiga portofolio mini QA untuk lamaran QA Engineer PT PAL:
test-case login sudah ada, Postman collection API sudah ada, dan ini bagian
automation-nya. Satu flow login, 3 test, struktur Page Object Model.

## Yang diuji

| Test | Kasus | Ekspektasi |
| --- | --- | --- |
| TC-01 | Login valid (`tomsmith` / `SuperSecretPassword!`) | Masuk secure area, tombol logout muncul |
| TC-02 | Password salah | Pesan "Your password is invalid!" |
| TC-04 | Username & password kosong | Pesan "Your username is invalid!" |

Situs yang diuji adalah `the-internet.herokuapp.com/login` — situs latihan
publik yang memang dibuat untuk latihan automation, dengan akun demo publik.
Bukan situs produksi, bukan akun pribadi.

## Cara menjalankan

```bash
npm install
npx playwright install chromium
npx playwright test
```

Hasil yang diharapkan: 3 passed. Screenshot hasil `npx playwright test`
bisa dilampirkan sebagai bukti portofolio automation.

## Kalau ditanya di interview

- **Kenapa POM?** Selector dan aksi halaman ada di `pages/LoginPage.js`
  saja; file test hanya berisi skenario. Kalau UI berubah, perbaikannya
  satu tempat.
- **Kenapa automation tidak menggantikan manual?** Test ini hanya
  mengunci regresi login; eksplorasi, usability, dan edge case tetap
  butuh pengujian manual (lihat sheet test-case-login.csv, 10 kasus).
- **Kenapa cuma Chromium?** Sengaja minimal — portofolio ini bukti
  konsep, bukan suite regresi penuh. Menambah browser tinggal tambah
  project di `playwright.config.js`.

## Struktur

```
playwright-qa-login/
├── package.json
├── playwright.config.js
├── pages/LoginPage.js   # Page Object
├── tests/login.spec.js  # 3 skenario
└── README.md
```
