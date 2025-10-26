# Proyek UI Testing Jinom Reseller

Proyek ini berisi serangkaian pengujian antarmuka pengguna (UI) otomatis untuk aplikasi web Jinom Reseller menggunakan Cypress.

## 🚀 Memulai

### Prasyarat

Pastikan Anda telah menginstal Node.js dan npm di sistem Anda.

### Instalasi

1.  Clone repositori ini.
2.  Instal semua dependensi yang diperlukan dengan menjalankan perintah berikut di root proyek:
    ```sh
    npm install
    ```

### Konfigurasi

Proyek ini menggunakan file `.env` untuk menyimpan variabel lingkungan. Buat file `.env` di root proyek dan tambahkan variabel berikut.

```
// filepath: .env
CYPRESS_BASE_URL=your_url
```

## ⚙️ Penggunaan

Anda dapat menjalankan pengujian Cypress dalam dua mode:

1.  **Membuka Cypress Test Runner (Interaktif):**
    Untuk membuka antarmuka pengguna Cypress dan menjalankan pengujian secara manual.
    ```sh
    npm run cypress:open
    ```

2.  **Menjalankan Tes secara Headless dan Membuat Laporan:**
    Untuk menjalankan semua tes di browser Chrome secara headless dan menghasilkan laporan HTML.
    ```sh
    npm run html-report
    ```

## 📊 Laporan Pengujian

Proyek ini menggunakan `cypress-mochawesome-reporter` untuk menghasilkan laporan pengujian HTML yang terperinci. Setelah menjalankan skrip `html-report`, laporan akan tersedia di:

[`cypress/reports/html/index.html`](cypress/reports/html/index.html)

Laporan ini berisi ringkasan hasil pengujian, termasuk jumlah tes yang lulus, gagal, dan detail setiap langkah pengujian.

## 📹 Bukti Pengujian (Video & Screenshot)

Untuk setiap proses pengujian yang dijalankan, Cypress secara otomatis menghasilkan bukti berupa video dan screenshot.

### Video

Rekaman video dari setiap file spesifikasi pengujian disimpan di direktori:

`cypress/videos/`

### Screenshot

Screenshot diambil secara otomatis untuk setiap pengujian dan disimpan di direktori:

`images/`

Konfigurasi ini diatur dalam file [`cypress.config.js`](cypress.config.js) dan [`cypress/support/commands.js`](cypress/support/commands.js) untuk memastikan setiap status akhir dari tes didokumentasikan dengan baik.
