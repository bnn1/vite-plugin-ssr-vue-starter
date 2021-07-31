import { PageContext } from '@common/types';

export { getPageMeta };

interface IPageMeta {
    title: string;
    description: string;
}

function getPageMeta(pageContext: PageContext): IPageMeta {
    const title =
        // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
        pageContext.pageExports.documentProps?.title ||
        // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
        pageContext.documentProps?.title ||
        'Demo';
    const description =
        pageContext.pageExports.documentProps?.description ||
        pageContext.documentProps?.description;

    return { title, description };
}
