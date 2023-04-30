/** @type { import('@storybook/react').Preview } */
    // Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'output.css';
head.appendChild(link);

var body = document.getElementsByTagName('body')[0];
var div = document.createElement('div');
div.id = 'root';
div.innerHTML = `
    <div style="position:fixed;right:-50px;bottom:20px;transform: rotate(-45deg);z-index: 20;display: flex; flex-direction: column;background-color: #d97706;color: white;">
        <span style=" padding: 0px 50px; ">Geliştiriliyor</span>
        <a href="https://github.com/erdodo" target="_blank" style=" padding: 0px 50px; ">@erdodo</a>
    </div>`;
body.appendChild(div);

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
        storySort: {
            order: [ "Dökümanlar","Örnekler", "icons",["Döküman","İkonlar"]],

        }
    }
  },
};

export default preview;
