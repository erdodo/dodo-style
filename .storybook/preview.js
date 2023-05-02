/** @type { import('@storybook/react').Preview } */
    // Get HTML head element
import { themes } from '@storybook/theming';
import {DocsContainer} from "@storybook/blocks";
import React from 'react';

var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'output.css';
head.appendChild(link);
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.type = 'text/css';
link2.href = 'index.css';
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
      darkMode: {
          darkClass: 'dark',
          lightClass: 'light'
      },
      docs: {

          container: props => {
              const [darkMode, setDarkMode] = React.useState(null);
              React.useEffect(() => {

                  setDarkMode(JSON.parse(localStorage.getItem('sb-addon-themes-3')).current === 'dark');
                    window.addEventListener('storage', function(e) {
                        setDarkMode(JSON.parse(localStorage.getItem('sb-addon-themes-3')).current === 'dark');
                    })
                  let body = document.getElementsByTagName('html')[0];
                  if(darkMode){
                    body.setAttribute('style', 'background-color: #1B1C1D !important;')
                      body.classList.add('dark');
                      body.classList.remove('light');
                    }else{
                        body.setAttribute('style', 'background-color: #fff !important;')
                        body.classList.add('light');
                        body.classList.remove('dark');
                    }

              })
              return (
                  <div>
                      {themes[darkMode?'dark':'light']&& darkMode!== null &&
                          <DocsContainer theme={themes[darkMode?'dark':'light']} children={props.children} context={props.context} />
                      }

                  </div>
              );
          }
      },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
        storySort: {
            order: ["Hoş Geldiniz","Config", "Dökümanlar","Örnekler", "icons",["Döküman","İkonlar"]],

        }
    }
  },
};
export const globalTypes = {
    darkMode: true,
};
export default preview;
