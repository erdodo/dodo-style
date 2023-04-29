/** @type { import('@storybook/react').Preview } */
    // Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'output.css';
head.appendChild(link);

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
            order: [ "Dökümanlar","Örnekler", "icons",["Döküman","Ara","İkonlar"]],

        }
    }
  },
};

export default preview;
