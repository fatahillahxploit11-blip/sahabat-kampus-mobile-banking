# Sahabat Kampus Digital Banking - proyek APK (Capacitor)

## Yang perlu dipasang dulu
- Node.js 18 atau lebih baru
- JDK 17
- Android Studio (sudah termasuk Android SDK)

## Langkah build APK
Jalankan di folder proyek ini:

1. `npm install`
2. `npm run libs`              (menyalin Chart.js, jsPDF, SheetJS ke www/lib agar jalan offline)
3. `npx cap add android`
4. `npx @capacitor/assets generate --android`   (membuat ikon aplikasi dari folder assets)
5. Buka `android/app/src/main/AndroidManifest.xml`, lalu tambahkan di dalam <manifest>:
   `<uses-permission android:name="android.permission.USE_BIOMETRIC" />`
6. `npx cap sync android`
7. APK debug:
   - Windows: `cd android` lalu `gradlew assembleDebug`
   - Mac/Linux: `cd android && ./gradlew assembleDebug`
   - Hasil: `android/app/build/outputs/apk/debug/app-debug.apk`
   - Atau lewat Android Studio: `npx cap open android` lalu Build > Build APK(s)
8. Kirim file APK ke HP, izinkan "Pasang dari sumber tidak dikenal", lalu pasang.

## Rilis (Play Store atau APK bertanda tangan)
Di Android Studio: Build > Generate Signed Bundle / APK. Buat keystore, lalu SIMPAN
file keystore dan passwordnya, karena dibutuhkan untuk setiap pembaruan.

## Catatan penting
- Data tersimpan di IndexedDB di dalam aplikasi pada HP itu saja (tidak ada sinkronisasi antar perangkat).
  Menghapus data aplikasi atau uninstall akan menghapus semua data. Rutin gunakan Akun > Backup JSON.
- Unduhan PDF/Excel/JSON membuka menu "Bagikan" Android, lalu pilih Simpan ke File atau Drive.
- Scan wajah memakai plugin biometrik native. HP harus sudah punya wajah/sidik jari terdaftar.
- Jika build gagal karena versi plugin, sesuaikan versi di package.json dengan versi Capacitor yang terpasang.

## Tanpa install apa pun (build di cloud, GitHub Actions)
1. Buat akun GitHub dan repositori baru (branch utama bernama `main`).
2. Unggah SEMUA isi folder ini ke repositori, termasuk folder tersembunyi `.github/workflows/build-apk.yml`.
3. Buka tab Actions > "Build APK" > Run workflow. Tunggu sekitar 5-10 menit.
4. Buka hasil run tersebut, lalu unduh artefak "SahabatKampus-APK" (berisi app-debug.apk).
