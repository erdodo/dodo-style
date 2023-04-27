Kullanım
```js static
import {Button} from '@erdodocomp/dodo-style'
```
<br />  
---


Büyüklük örnekleri
```js
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary" size="sm" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="primary" size="md" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="primary" size="lg" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="primary" size="xl" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="primary" size="2xl" >Tıkla bana</Button>
    </div>
</div>
```

Renk Tipi Örnekleri

```js { "props": { "className": "checks" } }
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="warning" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" >Tıkla bana</Button>
    </div>
</div>
```
İcon Örnekleri

```js { "props": { "className": "checks" } }
import {FaFacebookF,FaLinkedinIn,FaGithub,FaYoutube,FaWhatsapp,FaSnapchatGhost,FaTumblr,FaSteamSymbol} from "react-icons/fa";
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary" ><FaLinkedinIn/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary" ><FaGithub/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" ><FaFacebookF/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger" ><FaYoutube/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" ><FaWhatsapp/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="warning" ><FaSnapchatGhost/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" ><FaTumblr/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" ><FaSteamSymbol/></Button>
    </div>
    <div style={{width:"1px","border":"1px solid gray",height:"50px"}}></div>
    <div style={{margin:"5px",}}>
        <Button type="primary" outline rounded="full" classList="py-4" ><FaLinkedinIn/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary"  plain rounded="full" classList="py-4" ><FaGithub/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" disabled rounded="full" classList="py-4" ><FaFacebookF/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger"  outline rounded="full" size="sm" classList="!py-2 !px-2"><FaYoutube/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" plain rounded="full" size="sm" classList="!py-2 !px-2" ><FaWhatsapp/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button classList="bg-red-600 text-yellow-200" rounded="full" ><FaSnapchatGhost/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" disabled><FaTumblr/></Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" plain><FaSteamSymbol/></Button>
    </div>
</div>
```

Geçişli Renk Tipi Örnekleri

```js { "props": { "className": "checks" } }
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary" gradient>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary" gradient>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" gradient>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger" gradient>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" gradient>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="warning" gradient>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" gradient>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" gradient>Tıkla bana</Button>
    </div>
</div>
```

Çerçeveli Örnekleri
```js { "props": { "className": "checks" } }
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary"  outline>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary" outline >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" outline >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger" outline>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" outline>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="warning" outline>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" outline>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" outline>Tıkla bana</Button>
    </div>
</div>
```

Sade Örnekleri
```js { "props": { "className": "checks" } }
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary"  plain>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary" plain >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" plain >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger" plain>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" plain>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="warning" plain>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" plain>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" plain>Tıkla bana</Button>
    </div>
</div>
```

Köşe Yumuşatma Örnekleri
```js { "props": { "className": "checks" } }
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary" outline rounded="sm">Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="primary" outline rounded="md">Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="primary" outline rounded="lg">Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="primary" outline rounded="xl">Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="primary" outline rounded="full">Tıkla bana</Button>
    </div>
</div>
```


Devre Dışı örnekleri
```js
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary" disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary" disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger" disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="warning" disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" disabled>Tıkla bana</Button>
    </div>
</div>
```

Link Buton örnekleri
```js
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary" link>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary" link>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" link>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger" link>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" link>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="warning" link>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" link>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" link>Tıkla bana</Button>
    </div>
</div>
```

Devre Dışı Link Buton örnekleri
```js
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px",}}>
        <Button type="primary" link disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="secondary" link disabled >Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="info" link disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="danger" link disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="success" link disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="warning" link disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="light" link disabled>Tıkla bana</Button>
    </div>
    <div style={{margin:"5px",}}>
        <Button type="dark" link disabled>Tıkla bana</Button>
    </div>
</div>
```
---
