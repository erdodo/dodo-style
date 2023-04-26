Kullanım
```js static
import {AutoComplete} from '@erdodocomp/dodo-style'
```

Büyüklük örnekleri
```js
let options = [{value:"key1",label:"value1"},{value:"key2",label:"value2"},{value:"key3",label:"value3"}];

<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <AutoComplete  size="sm" >Tıkla bana</AutoComplete>
    </div>
    <div style={{margin:"5px",}}>
        <AutoComplete  size="md" >Tıkla bana</AutoComplete>
    </div>
    <div style={{margin:"5px",}}>
        <AutoComplete  size="lg" >Tıkla bana</AutoComplete>
    </div>
    <div style={{margin:"5px",}}>
        <AutoComplete  size="xl" options={options} value="key1">Tıkla bana</AutoComplete>
    </div>
    <div style={{margin:"5px",}}>
        <AutoComplete  size="2xl" >Tıkla bana</AutoComplete>
    </div>
</div>
```

---
