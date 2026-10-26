
    export type RemoteKeys = 'addtocart/AddToCart' | 'addtocart/placeAddToCart';
    type PackageType<T> = T extends 'addtocart/placeAddToCart' ? typeof import('addtocart/placeAddToCart') :T extends 'addtocart/AddToCart' ? typeof import('addtocart/AddToCart') :any;