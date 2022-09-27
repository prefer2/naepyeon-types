# naepyeon-types

### ValueOf

```tsx
ValueOf<T>
```

### PartialRequired

```tsx
PartialOptional<
  T extends Record<string | number | symbol, unknown>,
  K extends keyof T
>
```


### PartialOptional

```tsx
PartialOptional<
  T extends Record<string | number | symbol, unknown>,
  K extends keyof T
>
```

### PickWithPrefix
```tsx
PickWithPrefix<T, K extends keyof T & string, Prefix extends string>
```
