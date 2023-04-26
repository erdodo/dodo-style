Kullanım
```js static
import {SelectBox} from '@erdodocomp/dodo-style'
```

Büyüklük örnekleri
```js
let options = [{value:"key1",label:"value1"},{value:"key2",label:"value2"},{value:"key3",label:"value3"}];

<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <SelectBox  size="sm" disabled>Tıkla bana</SelectBox>
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  size="md" multiple options={options}>Tıkla bana</SelectBox>
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  size="lg" >Tıkla bana</SelectBox>
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  size="xl" options={options} value="key1">Tıkla bana</SelectBox>
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  size="2xl" >Tıkla bana</SelectBox>
    </div>
</div>
```

---
