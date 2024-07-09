# Görev Yöneticisi Projesi

Bu proje, görevleri takip etmek için kullanılan bir React uygulamasıdır. Redux Toolkit ile state yönetimi sağlanmıştır.

## Başlangıç

Proje dosyalarını bilgisayarınıza indirmek ve çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Proje dosyalarını bilgisayarınıza klonlayın veya indirin.
2. Terminal veya komut istemcisini açın ve proje dizinine gidin.
3. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
4. JSON Server'ı başlatmak için `json-server --watch db.json --port 3001` komutunu çalıştırın.
5. Proje uygulamasını başlatmak için `npm run dev` komutunu kullanın.

## Kullanılan Teknolojiler

- React
- React Router DOM
- Redux Toolkit
- axios
- sass
- react-toastify
- json-server
- uuid
- bcrypt

## Componentler ve Sayfalar

- **Card.jsx**: Görev kartı componenti.
- **Filter.jsx**: Filtre componenti.
- **Header.jsx**: Sayfa başlık componenti.
- **Modal.jsx**: Modal componenti
- **UserContext.jsx**: Kullanıcı Componenti
- **Login.jsx**: Oturum açma sayfası.
- **Signup.jsx**: Kayıt olma sayfası.

## Redux State Yönetimi

Proje, Redux Toolkit kullanılarak state yönetimi sağlamaktadır. `taskSlice.js` dosyasında action'lar, reducers ve initial state tanımlanmıştır.

## JSON Server ve Veritabanı

Proje, görev verilerini yönetmek için json-server ve db.json kullanmaktadır.

### Card Componenti

Card componenti, görevleri temsil etmek için kullanılan bir componenttir. Her bir görevin ayrıntılarını gösterir, düzenlenmesine ve silinmesine olanak tanır. Ayrıca, görevin öncelik durumuna göre renkli bir etiket gösterir.

#### Kullanılan Teknolojiler

- React
- Redux Toolkit
- react-redux

#### Kullanılan Hooks ve Fonksiyonlar

- `useState`: Modal'ın açık/kapalı durumunu takip etmek için kullanılır.
- `useDispatch`: Redux eylemlerini tetiklemek için kullanılır.

#### İşlevselliği ve Bileşenin Özellikleri

- `task` prop'u üzerinden gelen veriyi kullanarak her bir görevin detaylarını gösterir.
- `isModalOpen` state'i, modal'ın açık veya kapalı olup olmadığını takip eder.
- `getClassName` fonksiyonu, görevin durumuna bağlı olarak CSS sınıfını belirler.
- `handleDelete` fonksiyonu, "Sil" butonuna tıklandığında görevi siler.
- `handleEdit` fonksiyonu, "Düzenle" butonuna tıklandığında modal'ı açar.
- `closeModal` fonksiyonu, modal'dan çıkış yapıldığında modal'ı kapatır.

### Filter Bileşeni

Filter bileşeni, görev listesini filtreleme ve sıralama seçenekleri sunan bir bileşendir. Kullanıcıya görevleri arama, duruma göre filtreleme, türe göre filtreleme ve sıralama imkanı tanır.

#### Kullanılan Teknolojiler

- React
- Redux Toolkit
- react-redux
- useRef hook

#### Kullanılan Hooks ve Fonksiyonlar

- `useRef`: Giriş alanlarına erişim sağlamak ve değerleri güncellemek için kullanılır.
- `useDispatch`: Redux eylemlerini tetiklemek için kullanılır.

### Header Bileşeni

Header bileşeni, uygulama başlığını ve sayfa gezinme bağlantılarını içeren bir bileşendir. Kullanıcıyı görev listesi sayfasına yönlendirir ve yeni bir görev eklemek için görev ekleme sayfasına yönlendirir. Aynı zamanda kayıt olma ve oturum açma sayfalarını içerir.

#### Kullanılan Teknolojiler

- React
- react-router-dom

### Modal Bileşeni

Modal bileşeni, görev detaylarını düzenlemek için kullanılan bir modal penceresini temsil eder. Kullanıcıya görev detaylarını düzenleme imkanı tanır.

#### Kullanılan Teknolojiler

- React
- react-redux
- useState hook

### UserContext Bileşeni

Kullanıcı verilerini ve kimlik doğrulamayı yönetmek için kullanılan bileşen

### Constants Dosyası

`constants.js` dosyası, projede kullanılan sabit verileri içerir. Bu sabitler, filtreleme seçenekleri ve sıralama seçenekleri gibi ögeleri tanımlar.

### AddTask Sayfası

AddTask sayfası, yeni bir görev eklemek için kullanılan bir formu temsil eder. Kullanıcıdan görev, tür, görev açıklaması, kategori, durum ve tarih bilgilerini girmesini bekler.

#### Kullanılan Teknolojiler

- React
- react-redux
- axios
- react-toastify

### TaskList Sayfası

TaskList sayfası, görev listesini görüntülemek için kullanılan bir bileşeni içerir. Kullanıcıya filtreleme seçenekleri, görev sayısı, bilgisi ve her bir görevi gösteren kartları içerir.

#### Kullanılan Teknolojiler

- React
- axios
- react-redux
- react-toastify

### Redux - taskSlice

`taskSlice.js` dosyası, Redux store için bir dilim (slice) oluşturan `createSlice` fonksiyonu ile oluşturulmuştur. Bu dilim, işlemler ve state yönetimi ile ilgili özelleştirilmiş eylemleri içerir.

### Redux Store - store.js

`store.js` dosyası, Redux store'unun oluşturulduğu ve kullanıldığı bir konfigürasyon içerir.

### React Uygulaması - App.jsx

`App.jsx` dosyası, React uygulamasının ana bileşenini içerir. Sayfa yönlendirmeleri için `react-router-dom` kullanılarak, `TaskList` ve `AddTask` sayfalarını içeren bir uygulama tasarlanmıştır.

### React Uygulaması - main.jsx

`main.jsx` dosyası, React uygulamasının başlangıç noktasını belirler. Uygulamanın render edildiği ana dosyadır.

### style.scss Dosyası

Bu `style.scss` dosyası, görev takip uygulamasının görünümünü düzenlemek ve stiline özgü özellikleri belirlemek için kullanılan SCSS (Sassy CSS) dosyasıdır.

---

## Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak isterseniz, aşağıdaki adımları takip edebilirsiniz:

1. Depoyu Fork edin
2. Kendi branch'inizi oluşturun (`git checkout -b özellik/YeniÖzellik`)
3. Yaptığınız değişiklikleri commit edin (`git commit -m 'Yeni özellik ekledim'`)
4. Branch'inizi push edin (`git push origin özellik/YeniÖzellik`)
5. Bir Pull Request oluşturun

---

Bu README dosyası, Görev Yöneticisi uygulamasının kullanımını ve geliştirilmesini kolaylaştırmak için tasarlanmıştır. Uygulama hakkında daha fazla bilgi edinmek ve detaylı dökümantasyon için proje dosyalarını inceleyebilirsiniz.

---
