import { createApp } from './app';
import { useClientRouter } from 'vite-plugin-ssr/client/router';
import { getPageMeta } from '@common/utils/getPageMeta';
import { PageContext } from '@common/types';

let app: ReturnType<typeof createApp>;

const { hydrationPromise } = useClientRouter({
    render(pageContext: PageContext) {
        if (!app) {
            app = createApp(pageContext);
            app.mount('#app');
        } else {
            app.changePage(pageContext);
        }

        const { title } = getPageMeta(pageContext);

        document.title = title;
    },
    onTransitionStart,
    onTransitionEnd,
});

hydrationPromise.then(() => {
    console.log('Hydration finished; page is now interactive.');
});

function onTransitionStart() {
    console.log('Page transition start');
}
function onTransitionEnd() {
    console.log('Page transition end');
}
