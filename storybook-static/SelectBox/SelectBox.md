Kullanım
```js static
import {SelectBox} from '@erdodocomp/dodo-style'
```

Büyüklük örnekleri
```js
let options = [{value:"key1",label:"value 1"},{value:"key2",label:"value 2"},{value:"key3",label:"value 3"}];
<>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <SelectBox  size="sm" options={options} value="key1"/>
    </div>
    <div style={{margin:"5px"}}>
        <SelectBox  size="md" options={options}/>
    </div>
    <div style={{margin:"5px",}} >
        <SelectBox  size="lg" options={options}/>
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  size="xl" options={options}/>
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  size="2xl" options={options}/>
    </div>
</div>

</>

```

Köşe Yumuşatma örnekleri
```js
let options = [{value:"key1",label:"value 1"},{value:"key2",label:"value 2"},{value:"key3",label:"value 3"}];
<>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <SelectBox  rounded="sm" options={options} />
    </div>
    <div style={{margin:"5px"}}>
        <SelectBox  rounded="md" options={options} />
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  rounded="lg" options={options} />
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  rounded="xl" options={options} />
    </div>
    <div style={{margin:"5px",}}>
        <SelectBox  rounded="full" options={options} />
    </div>
</div>

</>

```

Devre Dışı Örneği
```js
<>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <SelectBox  disabled/>
    </div>
</div>

</>

```

Veri Yok Örneği
```js
<>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <SelectBox />
    </div>
</div>

</>

```

Birden fazla veri seçme örneği
```js
let options = [{value:"key1",label:"value 1"},{value:"key2",label:"value 2"},{value:"key3",label:"value 3"}];
<>
    
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <SelectBox options={options} multiple />
    </div>
</div>

</>

```

Özel Tag örneği
```js
import Tag from '../Tag';
let options = [{value:"key1",label:"value 1"},{value:"key2",label:"value 2"},{value:"key3",label:"value 3"}];
<>
    
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <SelectBox options={options} multiple tag={<Tag type="danger" />} value={["key1"]} />
    </div>
    <div style={{margin:"5px"}}>
        <SelectBox options={options} multiple tag={<Tag type="primary" outline />}  value={["key1"]}/>
    </div>
    <div style={{margin:"5px"}}>
        <SelectBox options={options} multiple tag={<Tag type="success" plain />}  value={["key1"]}/>
    </div><div style={{margin:"5px"}}>
    <SelectBox options={options} multiple size="2xl" tag={<Tag type="info"  />}  value={["key1"]}/>
</div>
    
</div>

</>

```
Arama örneği
```js
let options = [{value:"key1",label:"value 1"},{value:"key2",label:"value 2"},{value:"key3",label:"value 3"}];
<>
    
<div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
    <div style={{margin:"5px"}}>
        <SelectBox options={options} multiple  search/>
    </div>
</div>

</>

```
---
