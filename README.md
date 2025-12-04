KampüsPost Mobil Uygulama Projesi - ÖDEV 4'ün eklentileri alt kısımda

2-Proje Oluşturma: npx @react-native-community/cli@latest init KampusPost komutu ile yeni React Native projesi oluşturdum.

3-Ana Ekran Düzenleme: App.tsx güncelleyerek uygulama açılışında LoginScreen bileşenini gösterttim.

4-Giriş Ekranı Oluşturma: components/LoginScreen.tsx dosyası oluşturdum.

5-Giriş Formu: E-posta ve Şifre giriş kutuları (TextInput) ve bir "Giriş Yap" butonu (TouchableOpacity) ekledim.

6-Yeniden Kullanılabilir Bileşen: components/CustomInput.tsx bileşeni oluşturdum ve LoginScreen içindeki tüm giriş kutularında kullanılarak kod tekrarının önlenmesini sağladım.

7-Değerleri Konsola Yazdırma: "Giriş Yap" butonuna basıldığında girilen e-posta ve şifre değerleri console.log() ile konsola yazdırılmaktadır

2. Adımın Ekran Görüntüsü: 
![alt text](image.png)

3. Adımın Ekran Görüntüsü:
![alt text](image-1.png)

4. Adımın Ekran Görüntüsü:
![alt text](image-2.png)

5. Adımın Ekran Görüntüsü:
![alt text](image-3.png)

6. Adımın Görüntüsü 5. Adım ile aynıydı SS istenmediği için ekleme yapmadım.

7. Adımın Ekran Görüntüsü:
![alt text](image-4.png)

ÖDEV 4:
Ödev kapsamında aşağıdaki yapıları ekledim:
-React Navigation (Stack Navigator)
-Login → Register → Home ekran akışı
-CustomInput bileşeni
-RegisterScreen’de şifre doğrulama
-HomeScreen’de uzak API’den veri çekme (JSONPlaceholder)
-FlatList ile gönderi listeleme

1. Proje Klasör Yapısı
![Folders](01ss.png)

3. Navigation Yapısı (App.tsx)
![Navigation](02ss.png)

4. LoginScreen – Giriş Ekranı
![Login](03ss.png)

5. HomeScreen – Gönderi Listesi (FlatList)
![Home](04ss.png)

6. RegisterScreen – Arayüz
![Register](05ss.png)

7. Şifreler Uyuşmuyor Uyarısı
![Mismatch](06ss.png)

8. Kayıt Başarılı Uyarısı
![Success](07ss.png)

9. Konsol – Kayıt Başarılı Log'u
![Register Log](08ss.png)

10. HomeScreen – Fetch Kodu
![Fetch Code](09ss.png)

11. Konsol – Posts Data Array(100)
![Posts Console](10ss.png)



