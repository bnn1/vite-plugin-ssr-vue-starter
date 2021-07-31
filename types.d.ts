declare module '*.vue' {
    import { DefineComponent } from '@vue/runtime-core';
    const Component: DefineComponent;
    export default Component;
}
declare module '*.svg' {
    const imageUrl: string;
    export default imageUrl;
}
