import { PageContext } from '@common/types';
import { getPageMeta } from '@common/utils/getPageMeta';
import { renderToString } from '@vue/server-renderer';
import { html } from 'vite-plugin-ssr';
import { createApp } from './app';

export { passToClient };
export { render };

const passToClient = ['pageProps', 'documentProps', 'routeParams'];

async function render(pageContext: PageContext) {
    const app = createApp(pageContext);
    const appHtml = await renderToString(app);

    const { title, description } = getPageMeta(pageContext);

    return html`<!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="description" content=${description} />
            </head>
            <body>
                <div id="app">${html.dangerouslySkipEscape(appHtml)}</div>
            </body>
        </html>`;
}
