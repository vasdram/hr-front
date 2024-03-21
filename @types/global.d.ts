declare type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

declare type Keys<T> = Array<keyof T>;

declare type ValueOf<T> = T[keyof T];
