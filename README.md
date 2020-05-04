# demo
- 컴포넌트 전체 구성.


## Todo
- [x] useProvider part1 (상위 컴포넌트를 호출하여, Wrapped Component에 상태 값 공유)
- [ ] useProvider part2 (컴포넌트에 args값도 함께 전달하기)

- [ ] 중첩된 Raect.Suspense를 사용.

## Study
- React.Suspense가 중첩해서 사용하면, 에러가 난다.
- 그래서 같은 로직에서 React.lazy()로 데이터를 패치하였는데도 문제가 발생.
- 그래서 다음과같이 정리함.
- 라우터에서는 컴포넌트를 동적으로 불러와서 각 코드 스플릿을 하엿음.
- 하지만, 각각의 컨테이너에서는 React.lazy()대신에 helmet을 사용할 예정.


## GraphQL Codgen

```bash
yarn add -D @graphql-codegen/{cli,typescript,typescript-{operations,react-apollo}}
```

```yml
overwrite: true #
schema: https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn  # graphql의 endpoint르 작성
documents: src/**/*.queries.ts  # query, mutation, subscription, fragment를 정의해 둔 파일(*.queries.*)를 참조
generates: 
  src/generated/graphql.tsx:
    plugins: 
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
    config: 
      - withHOC: true
      - withComponent: false
      - withHooks: true


```


## Refs
- [React tools](https://blog.bitsrc.io/11-top-react-developer-tools-for-2020-3860f734030b)
