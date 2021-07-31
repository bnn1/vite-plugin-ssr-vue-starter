import vue from '@vitejs/plugin-vue';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const root = `${__dirname}/src`;

const config: UserConfig = {
    plugins: [vue(), ssr()],
    resolve: {
        alias: {
            '@': root,
            '@assets': `${root}/assets`,
            '@modules': `${root}/modules`,
            '@common': `${root}/common`,
        },
    },
};

export default config;
