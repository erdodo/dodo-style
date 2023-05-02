<script>
import Button from '../../components/Button'
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'



export default {
    components: {
        Button,SshPre
    },
    data () {
        return {}
    }
}
</script>
<template>
  <div class="px-1 sm:px-5 md:px-10 lg:px-32 xl:px-60 mx-auto">
      <h1 class="text-4xl">Button</h1>

      <div class="w-full mt-10 mb-2 border-b">
          <span class="text-2xl">Kullanım</span>
      </div>
      <ssh-pre language="js" class="dark:bg-gray-800" >
        import { Button } from 'dodo-style/vue'
      </ssh-pre>
      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Büyüklük örnekleri</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary" size="sm" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" size="md" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" size="lg" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" size="xl" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" size="2xl" >Tıkla bana</Button>
          </div>
      </div>




          <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" size="sm"&gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="primary" size="md" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="primary" size="lg" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="primary" size="xl" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="primary" size="2xl" &gt;Tıkla bana&lt;/Button&gt;
</pre>
          </ssh-pre>


      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Renk Tipi Örnekleri</span>
      </div>

      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="secondary" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="info" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="danger" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="success" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="warning" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="light" >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="dark" >Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary"  &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info"  &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark"  &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>


      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">İcon Örnekleri</span>
      </div>

      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Geçişli Renk Tipi Örnekleri</span>
      </div>

      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary" gradient>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="secondary" gradient>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="info" gradient>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="danger" gradient>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="success" gradient>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="warning" gradient>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="light" gradient>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="dark" gradient>Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" gradient &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary" gradient &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info" gradient &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" gradient &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" gradient &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" gradient &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark" gradient &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>

      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Çerçeveli Örnekleri</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary"  outline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="secondary" outline >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="info" outline >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="danger" outline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="success" outline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="warning" outline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="light" outline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="dark" outline>Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" outline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary" outline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info" outline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" outline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" outline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" outline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark" outline &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>

      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Sade Örnekleri</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary"  plain>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="secondary" plain >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="info" plain >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="danger" plain>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="success" plain>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="warning" plain>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="light" plain>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="dark" plain>Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" plain &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary" plain &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info" plain &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" plain &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" plain &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" plain &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark" plain &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>
      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Çerçevesiz Sade Örnekleri</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary"  plain notOutline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="secondary" plain notOutline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="info" plain notOutline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="danger" plain notOutline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="success" plain notOutline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="warning" plain notOutline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="light" plain notOutline>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="dark" plain notOutline>Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" plain notOutline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary" plain notOutline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info" plain notOutline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" plain notOutline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" plain notOutline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" plain notOutline &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark" plain notOutline &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>

      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Köşe Yumuşatma Örnekleri</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary" outline rounded="sm">Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" outline rounded="md">Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" outline rounded="lg">Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" outline rounded="xl">Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" outline rounded="2xl">Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" outline rounded="3xl">Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="primary" outline rounded="full">Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" outline rounded="sm" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary" outline rounded="sm" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info" outline rounded="sm" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" outline rounded="sm" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" outline rounded="sm" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" outline rounded="sm" &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark" outline rounded="sm" &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>


      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Devre Dışı örnekleri</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary" disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="secondary" disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="info" disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="danger" disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="success" disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="warning" disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="light" disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="dark" disabled>Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary" disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info" disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark" disabled &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>

      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Link Buton örnekleri</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary" link>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="secondary" link>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="info" link>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="danger" link>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="success" link>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="warning" link>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="light" link>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="dark" link>Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" link &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary" link &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info" link &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" link &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" link &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" link &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark" link &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>


      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Devre Dışı Link Buton örnekleri</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button type="primary" link disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="secondary" link disabled >Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="info" link disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="danger" link disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="success" link disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="warning" link disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="light" link disabled>Tıkla bana</Button>
          </div>
          <div class="m-5">
              <Button type="dark" link disabled>Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
<pre>
&lt;Button type="primary" link disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="secondary" link disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="info" link disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="success" link disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="warning" link disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="light" link disabled &gt;Tıkla bana&lt;/Button&gt;
&lt;Button type="dark" link disabled &gt;Tıkla bana&lt;/Button&gt;
</pre>
      </ssh-pre>


      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Özel class örneği</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button classList="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition ease-in-out delay-150 duration-300 transform hover:-translate-y-1 hover:scale-110" >Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
&lt;Button classList="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition ease-in-out delay-150 duration-300 transform hover:-translate-y-1 hover:scale-110"&gt;Tıkla bana&lt;/Button&gt;

      </ssh-pre>


      <div class="mt-10 w-full mb-2 border-b">
          <span class="text-2xl">Özel style örneği</span>
      </div>
      <div class="flex flex-row items-center flex-wrap">
          <div class="m-5">
              <Button style="width:200px;background-color:#90a9d1;border:1px solid #6189c7" >Tıkla bana</Button>
          </div>
      </div>

      <ssh-pre language="html" label="Vue" class="dark:bg-gray-800">
          &lt;Button style="width:200px;background-color:#90a9d1;border:1px solid #6189c7" &gt;Tıkla bana&lt;/Button&gt;

      </ssh-pre>
  </div>
</template>

