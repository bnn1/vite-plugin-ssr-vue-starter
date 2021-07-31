import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';
export type PageProps = Record<string, unknown>;
export type Component = any;
export type PageContext = PageContextBuiltIn & {
    pageProps?: PageProps;
    documentProps?: {
        title?: string;
        description?: string;
    };
};
