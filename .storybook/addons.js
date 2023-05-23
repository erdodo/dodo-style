import "storybook-addon-i18n/register.js";
import { addParameters } from "@storybook/react";

addParameters({
    i18n: {
        provider: LionessProvider,
        providerProps: {
            messages
        },
        supportedLocales: ["en", "ru"],
        providerLocaleKey: "locale"
    }
});
