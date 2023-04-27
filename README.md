# Dodo Style
Dodo Style, React için bir UI kitidir. Element Plus, Material UI ve 
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
  npm install @erdodocomp/dodo-style
```
Kurulum işlemi tamamlandıktan sonra, Dodo Style bileşenlerini kullanmaya başlayabilirsiniz. 
Örneğin, Button bileşenini aşağıdaki gibi kullanabilirsiniz:

```jsx
    import { Button } from '@erdodocomp/dodo-style';
    
    function App() {
        return (
            <div>
                <Button>Bir Buton</Button>
            </div>
        );
    }
```

## Kullanım
Dodo Style, React ile yazılmıştır ve React bileşenleri olarak sunulmaktadır. 
Kullanımı oldukça kolaydır ve her bileşenin ayrıntılı belgeleri mevcuttur.

Dodo Style kullanarak bir buton oluşturmak istediğinizi varsayalım. 
Bunun için, öncelikle Button bileşenini içe aktarmanız gerekmektedir. 
Ardından, butonun görüntüsünü değiştirmek için desteklenen özellikleri kullanabilirsiniz. 
Aşağıdaki örnek, bir buton oluşturmak için temel adımları göstermektedir:

```jsx
    import { Button } from '@erdodocomp/dodo-style';
    
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

- [Button Kullanımı](https://dodo-style.vercel.app/#!/Button)
- [SelectBox Kullanımı](https://dodo-style.vercel.app/#!/SelectBox)
- [Tag Kullanımı](https://dodo-style.vercel.app/#!/Tag)

