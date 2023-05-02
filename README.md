
# 🦤 Dodo Style

[npm-image]: https://img.shields.io/npm/v/dodo-style
[npm-url]: https://www.npmjs.com/package/dodo-style

[![npm][npm-image]][npm-url]

Dodo Style, React ve Vue için bir UI kitidir. Element Plus, Material UI ve
Bootstrap gibi popüler UI kitleriyle benzer bir yapıya sahip olan Dodo Style,
kullanıcı arayüzleri geliştirmeye yardımcı olmak için tasarlanmıştır.

## Özellikleri
Dodo Style, aşağıdaki özelliklere sahiptir:

- Kolay kullanım
- Responsive tasarım
- Çeşitli renk şemaları
- Ikon desteği
- Tooltip desteği
- Modal desteği
- Form kontrolü desteği
- Button, Input, Select, Checkbox, Radio Button, Slider,
  Switch, Spinner, Badge, Alert, Card, Divider, Pagination, Table, Tabs,
  Toast, Menu, Navbar, Sidebar gibi birçok öğe ve bileşeni içerir

## Kurulum
Dodo Style'ı kullanmak için öncelikle npm paketi olarak kurmanız gerekmektedir.
Aşağıdaki komutu kullanarak Dodo Style'ı kurabilirsiniz:

```bash
  npm install dodo-style
```
Kurulum işlemi tamamlandıktan sonra, Dodo Style bileşenlerini kullanmaya başlamadan önce css dosyasını içe aktarmanız gerekmektedir.
Eğer index.css dosyanız varsa, aşağıdaki satırı eklemeniz yeterlidir:

```css
    @import 'dodo-style/assets/output.css';
```
Yada index.js dosyanıza aşağıdaki satırı eklemeniz yeterlidir:

```jsx
    import 'dodo-style/assets/output.css';
```

## Kullanım
Dodo Style, React ve Vue ile yazılmıştır. React ve Vue bileşenleri olarak sunulmaktadır.
Kullanımı oldukça kolaydır ve her bileşenin ayrıntılı belgeleri mevcuttur.

Dodo Style kullanarak bir buton oluşturmak istediğinizi varsayalım.
Bunun için, öncelikle Button bileşenini içe aktarmanız gerekmektedir.
Ardından, butonun görüntüsünü değiştirmek için desteklenen özellikleri kullanabilirsiniz.
Aşağıdaki örnek React örneğidir, bir buton oluşturmak için temel adımları göstermektedir:

```jsx
    import { Button } from 'dodo-style';

    function App() {
        return (
            <div>
                <Button>Kaydet</Button>
                <Button type="secondary">İptal</Button>
                <Button outlined>Düzenle</Button>
                <Button disabled>Devam Et</Button>
            </div>
        );
    }
```
Vue kullanıyorsanız eğer
```jsx
    import { Button } from 'dodo-style/vue';

    function App() {
        return (
            <div>
                <Button>Kaydet</Button>
                <Button type="secondary">İptal</Button>
                <Button outlined>Düzenle</Button>
                <Button disabled>Devam Et</Button>
            </div>
        );
    }
```

## Bileşenler
Dodo Style, birçok farklı bileşen içermektedir.
Bu bileşenlerin her biri, kullanıcının bir arayüz öğesini oluşturmasına yardımcı olur.
Aşağıdaki liste, Dodo Style tarafından sunulan bileşenleri ve kullanım örneklerini içermektedir:

- [Button Kullanımı](https://dodo-style.vercel.app/?path=/docs/components-form-button--docs)
- [SelectBox Kullanımı](https://dodo-style.vercel.app/?path=/docs/components-form-selectbox--docs)
- [Tag Kullanımı](https://dodo-style.vercel.app/?path=/docs/components-form-tag--docs)

