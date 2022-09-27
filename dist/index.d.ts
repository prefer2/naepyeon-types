export declare type ValueOf<T> = T[keyof T];
export declare type PartialRequired<T extends Record<string | number | symbol, unknown>, K extends keyof T> = {
    [P in keyof Omit<T, K>]: T[P];
} & Required<Pick<T, K>>;
export declare type PartialOptional<T extends Record<string | number | symbol, unknown>, K extends keyof T> = {
    [P in keyof Omit<T, K>]: T[P];
} & Partial<Pick<T, K>>;
export declare type PickWithPrefix<T, K extends keyof T & string, Prefix extends string> = {
    [P in K as `${Prefix}${Capitalize<P>}`]: T[P];
};
