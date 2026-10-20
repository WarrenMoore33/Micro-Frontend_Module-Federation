
    export type RemoteKeys = 'home/Header' | 'home/Footer' | 'home/products';
    type PackageType<T> = T extends 'home/products' ? typeof import('home/products') :T extends 'home/Footer' ? typeof import('home/Footer') :T extends 'home/Header' ? typeof import('home/Header') :any;