
    export type RemoteKeys = 'pdp/PDPContent';
    type PackageType<T> = T extends 'pdp/PDPContent' ? typeof import('pdp/PDPContent') :any;