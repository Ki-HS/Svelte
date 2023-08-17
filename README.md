# Svelte & SvelteKit

## Component

-   컴포넌트는 재사용 가능한 UI
-   현재 프론트엔드 언어에서 대부분 컴포넌트 기반으로 개발

**컴포넌트를 사용하는 이유**

1. 분류를 통한 관리의 효율성
2. 재사용을 통한 개발의 효율성

## State

-   컴포넌트가 어떤 값을 관리할 때 사용하는 것.
-   State는 컴포넌트로 표현할 값의 상태나 목록이 되기도 하며, 이벤트를 통해 발생된 마우스나 키보드의 데이터도 상태값이 될 수 있다.

## Reactivity

### 스크립트 반응성 코드 - $:

-   변수로 선언된 값을 참조하는 새로운 변수를 만들 때 앞에 붙여줌.
-   `var`, `let`, `const` 등의 키워드를 쓰지 않음
-   변수 값이 변경되면 자동으로 감지하여 함께 변경이 된다.

## Event

-   자바스크립트가 명령을 주는 시점
-   마우스 클릭, 키보드 입력, 스크롤 바 등

| <center>이벤트명</center>   | <center>설명</center>                   |
| --------------------------- | --------------------------------------- |
| <center>click</center>      | 요소에서 마우스를 클릭했을 때           |
| <center>mouseenter</center> | 요소에 마우가 들어갔을 때               |
| <center>mouseleave</center> | 요소에서 마우스가 떠났을 때             |
| <center>mousemove</center>  | 요소에서 마우스를 움직일 때             |
| <center>keydown</center>    | 키보드를 눌렀을 때(특수키 인식)         |
| <center>keyup</center>      | 눌렀던 키에서 뗄 때                     |
| <center>keypress</center>   | 키보드를 눌렀을 때(특수키 미인식)       |
| <center>scroll</center>     | 페이지 스크롤 바의 이동이 발생되었을 때 |
| <center>resize</center>     | 브라우저 창 크기가 변경되었을 때        |

### Event Modifiers(이벤트 수식어)

-   Svelte는 이벤트를 제어할 때 조건을 붙이는 수식어도 함께 사용할 수 있다.
-   대표적으로 `once`, 단어 뜻 그대로 한 번만 발생하도록 한다.

**종류**  
| <center>수식어</center> | <center>설명</center> |
| --------------------------- | --------------------------------------- |
|<center>preventDefault</center>|'e.preventDefault()'를 호출, 이벤트가 발생한 태그의 기본 이벤트를 막음.|
|<center>stopPropagation</center>|'e.stopPropagation()'을 호출. 발생한 이벤트가 겹쳐진 상위 요소로 전달되지 않게 막음.|
|<center>passive</center>|터치 혹은 휠 이벤트로 발생하는 스크롤 성능을 향상시킴|
|<center>capture</center>|버블링 단계가 아닌 캡쳐 단계에서 이벤트 핸들러를 실행함|
|<center>once</center>|이벤트 핸들러를 단 한번만 실행하도록 함|
|<center>self</center>|'e.target'과 이벤트 핸들러를 정의한 요소가 같은 때 이벤트 핸들러를 실행하도록 함.|

## Props

-   Props는 properties의 줄임말
-   부모 컴퍼넌트가 자손 컴포넌트에게 전달해주는 값
-   자손 컴포넌트는 전달되는 값을 변경할 수 없고, 오직 부모 컴포넌트에서만 변경이 가능하다.
-   값을 변경할 때는 부모 컴포넌트에서 변경한 후 다시 자식 컴포넌트로 넘기면 된다.

### Spread Props

-   펼침연산자
-   특정 객체나 배열의 값을 복제할 때 사용
-   자바스크리브의 비구조화할당과 많이 사용된다.

## Logic

### if block

```
{#if 조건}
{:else if 조건2}
{:else}
{/if}
```

### each Block

```
//기본 each block
{#each data as datum}
    {datum}
{/each}

//each block - 인덱스 제공
{#each data as datum,i}
    {i} : {datum}
{/each}

//객체 데이터 방식으로 반복 처리
{#each data as datum}
    {datum.id}
{/each}

{#each data as {속성명1, 속성명2}}
    {속성명1}, {속성명2};
{/each}
```

## Binding

-   바인딩은 상태 값과 그 값을 제어하는 요소와의 결합을 의미.
-   데이터를 입력하는 다양한 폼과 함께 사용
-   `svelte`에서는 양방향 바인딩을 이용해서 동시에 값이 변경되게 처리

```
<태그요소 bind:태그속성={상태값}>
```

## Routing

> `SvelteKit`의 핵심은 *파일 시스템 기반 라우터*다. 앱의 경로는 코드베이스의 디렉터리에 의해 정의된다.

**예시**

`src/routes`는 루트 라우트다.
`src/routes/about`는 `/about` 라우트를 생성한다.
`src/routes/blog/[slug]`는 `slug`라는 인자를 이용해 만드는데, `slug`는 사용자가 `/blog/hello`와 같은 페이지를 요청했을 때 동적으로 데이터를 불러오는데 사용될 수 있다.

### +page

**+page.svelte**  
`+page.svelte` 요소는 앱의 페이지를 정의한다. 기본적으로 메이지는 초기 요청을 위해 서버와 후속 탐색을 위해 브라우저 둘 모두에서 렌더링된다.

```
    <script>
    /** @type {import('./$types').PageData} */
    export let data;
    </script>

    <h1>{data.title}</h1>
    <div>{@html data.content}</div>
```

**+page.js**

> page는 렌더링되기 전에 데이터를 불러와야한다. 이 경우 `load`함수를 내보내는 `+page.js` 모듈을 추가한다.

```
    import { error } from '@sveltejs/kit';

    /** @type {import('./$types').PageLoad} */
    export function load({ params }) {
    if (params.slug === 'hello-world') {
        return {
        title: 'Hello world!',
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
    }

    throw error(404, 'Not found');
    }
```

이 함수는 `+page.svelte`와 함께 동작한다. 즉 서버 측 렌더링 동안에는 서버에서 동작하고 클라이언트 측 탐색 동안에는 브라우저에도 동작한다.
`+page.js`는 `load`뿐만 아니라 페이지 동작을 구성하는 값도 내보낼 수 있다.
`    export const prerennder = true/false/auto
        export const ssr = true/false
        export const csr = true/false`

**+page.server.js**  
`load` 함수가 서버에서만 동작한다면 `+page.js`를 `+page.server.js`로 이름을 바꾸고 `PageLoad` 타입을 `PageServerLoad`로 바꿀 수 있다.

```
    import { error } from '@sveltejs/kit';

    /** @type {import('./$types').PageServerLoad} */
    export async function load({ params }) {
    const post = await getPostFromDatabase(params.slug);

    if (post) {
        return post;
    }

    throw error(404, 'Not found');
    }
```

클라이언트 측 탐색동안, `SvelteKit`은 서버로부터 데이터를 불러온다. 즉 변환 값은 반드시 devalue를 사용해서 직렬화 되어야 한다.
`+page.server.js`는 동작을 내보낼 수 있다. load가 서버로부터 데이터를 읽을 수 있게 한다면, action은 `<form>`을 사용해서 서버에 데이터를 쓸 수 있게 한다.

**+error**  
load 동안 에러가 발생한다면, SvelteKit은 기본 에러 페이지를 렌더링할 것이다. `+error.svelte`를 추가해 에러페이지를 커스터마이징 할 수 있다.

```
    <script>
    import { page } from '$app/stores';
    </script>

    <h1>{$page.status}: {$page.error.message</h1>
```

SvelteKit은 가장 가까운 오류 경계를 찾아 부모로 탐색한다.
src/routes/blog/ 경로에서 +error.svelte이 없으면 src/routes/에서 +error.svelte를 찾음. 찾을 때까지 반복

### +layout

많은 앱에서 모든 페이지에서 최상위 네비게이션이나 footer같은 것들이 보여져야한다. 모든 `+page.svelte`에서 반복하기보단 layout에 집어 넣는다.

**+layout.svelte**  
모든 페이지에 적용될 레이아웃을 만들기 위해 `+src/routes/+layout.svelte`를 만들야한다.
기본 레이아웃은 다음과 같다.

```
    <slot></slot>
```

하지만 우리가 원하는 마크업, 스타일, 동작 무엇이든 추가할 수 있다. 단지 필요한 것은 요소가 `<slot>`을 포함하고 있으면 된다.

```
    ///+layout.svelte
    <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
    </nav>

    <slot></slot>

    // /+page.svelte
    <h1>Home</h1>
    // /about/+page.svelte
    <h1>About</h1>
    // /settings
    <h1>Settings</h1>
```

`nav`는 항상 보여질 것이고 세 페이지를 번갈아가며 클릭하면 `<h1>`만 교체 된다.

레이아웃은 *nested*될 수 있다. /settings 단일 페이지가 없고, 같은 서브 메뉴를 공유하는 /settings/profile, /settings/notifications가 있다고 하자.
/settings 하위 페이지들에 적용될 수 레이아웃을 만들어야 한다.

```
    // src/routes/settings/+layout.svelte
    <script>
    /** @type {import('./$types').LayoutData} */
    export let data;
    </script>

    <h1>Settings</h1>

    <div class="submenu">
    {#each data.sections as section}
        <a href="/settings/{section.slug}">{section.title}</a>
    {/each}
    </div>

    <slot></slot>
```

기본적으로 각 레이아웃은 상위 레이아웃을 상속받는다.

**+layout.js**  
`+page.js`에서 `+page.svelte`가 데이터를 로딩하는 것처럼 `+layout.svelte`도 `+layout.js`에서 데이터를 로딩한다.

```
    /** @type {import('./$types').LayoutLoad} */
    export function load() {
        return {
            sections: [
            { slug: 'profile', title: 'Profile' },
            { slug: 'notifications', title: 'Notifications' }
            ]
        };
    }
```

**+layout.server.js**  
레이아웃의 로드 함수를 서버에서 동작시키기 위해 `+layout.sever.js`로 옮겨야 한다. 그리고 타입을 `LayoutLoad`에서 `LayoutServerLoad`로 변경해야 한다.

### +server

페이지뿐만 아니라 응답을 완전히 제어할 수 있는 `+server.js` 파일로 경로를 정의할 수 있다.
`+server.js` 파일은 RequestEvent 인수를 사용하여 응답 개체를 반환하는 GET, POST, PATCH, PUT, DELETE, OPTIONS 및 HEAD와 같은 HTTP 동작어에 해당하는 함수를 내보낸다.

```
    import { error } from '@sveltejs/kit';

    /** @type {import('./$types').RequestHandler} */
    export function GET({ url }) {
    const min = Number(url.searchParams.get('min') ?? '0');
    const max = Number(url.searchParams.get('max') ?? '1');

    const d = max - min;

    if (isNaN(d) || d < 0) {
        throw error(400, 'min and max must be numbers, and min must be less than max');
    }

    const random = min + Math.random() * d;

    return new Response(String(random));
    }
```

응답에 대한 첫 인자는 `ReadableStream`이 될 수 있고, 이는 많은 양의 데이터를 스트리밍하거나 서버에서 보낸 이벤트를 만들 수 있다.
편의를 위해 `@sveltejs/kit`의 error, redirect, json을 사용할 수 있다.
에러가 발생하면 응답은 에러의 json형태나 에러 페이지를 반환한다. 이 경우 `+error.svelte`가 렌더링 되지 않는다.

**Receiving data**  
POST/PUT/PATCH/DELETE/OPTION/HEAD 핸들러를 내보내서 `+server.js`는 완전한 API를 만드는데 사용될 수 있다.

```
    //+page.svelte
    <script>
    let a = 0;
    let b = 0;
    let total = 0;

    async function add() {
        const response = await fetch('/api/add', {
        method: 'POST',
        body: JSON.stringify({ a, b }),
        headers: {
            'content-type': 'application/json'
        }
        });

        total = await response.json();
    }
    </script>
    //+server.js
    import { json } from '@sveltejs/kit';

    /** @type {import('./$types').RequestHandler} */
    export async function POST({ request }) {
    const { a, b } = await request.json();
    return json(a + b);
    }
```

**Content negotiation**

> `+server.js`는 `+page`처럼 같은 디렉터리에 위치할 수 있으므로 동일한 경로를 페이지 또는 API endpoint로 사용할 수 있다.

-   PUT/PATCH/DELETE/OPTIONS 요청은 페이지에 적용할 수 없기 때문에 항상 `+server.js`에 의해 다뤄진다.
-   GET/POST/HEAD 요청은 `accept` 헤더가 `text/html`의 우선순위를 지정한다면 페이지 요청처럼 다뤄지고, 그렇지않으면 `+server.js`에 의해 다뤄진다.
-   GET 요청에 대한 응답은 프록시와 브라우저가 HTML 및 JSON 응답을 별도로 캐싱하도록 하기 위해 `Vary : Accept` 헤더를 포함하고 있을 것이다.

### $types

> 위의 예를 통해 $types.d.ts 파일에서 유형을 가져오고 있습니다. 이 파일은 루트 파일을 작업할 때 안전하게 타이프스크립트(또는 JSDoc 유형 주석이 있는 자바스크립트)를 사용하는 경우 SvelteKit이 숨겨진 디렉토리에 생성하는 파일입니다.
> 예를 들어, PageData와 함께 `export let data`를 어노테이닝하는 것은 데이터의 타입이 로드에서 반환된 항목임을 TypeScript에 알린다.

## Loading Data

-   `.svelte`의 구성요소를 렌더링하기 전에 일부 데이터를 가져와야 하는데, `load` 함수를 정의해 해당 기능을 수행할 수 있다.
-   `load` 함수는 서버가 동작 중일 때만 작동한다.

```
    // +page.js
    /** @type {import('./$types').PageLoad} */
    export function load({ params }) {
        return {
            post: {
                title: `Title for ${params.slug} goes here`,
                content: `Content for ${params.slug} goes here`
            }
        };
    }

    // +page.svelte
    <script>
    /** @type {import('./$types').PageData} */
        export let data;
    </script>

    <h1>{data.post.title}</h1>
    <div>{@html data.post.content}</div>
```

-   `$types` 모듈 덕에 완전한 유형의 안전성을 얻을 수 있다.

### Universal vs Server

**`load` function 종류**

-   universal : 서버와 브라우저 두 곳 모두에서 동작 가능하다
    `+page.js`, `+layout.js`
-   server : 서버에서만 동작한다.
    `+page.server.js`, `layout.server.js`

**언제, 어떤 `load`함수가 동작하나?**  
`server` 함수는 항상 서버에서 동작한다.
기본적으로 `universal`함수는 사용자가 처음 페이지를 방문했을 때 SSR 동안, 즉 서버 측에서 렌더링될 동안 동작한다. 서버 측 랜더링을 비활성화하면 단일 페이지 앱을 얻을 수 있고, `universal` 함수는 항상 클라이언트에서 동작한다.

**Input**  
`universal`과 `server` 모두 요청을 묘사하는 속성ㅇ과 다양한 기능에 액세스 할 수 있다.

-   서버 load 함수는 `ServerLoadEvent`라고 불린다. 이는 `RequestEvent`로부터 clientAddress, cookies, locals, platform, request를 상속한다.
-   universal load 함수는 `LoadEvent`라고 불린다. 이는 data 속성을 가졌다.
    `+page.js`, `+page.server.js`가 있을 때, server load 함수의 반환 값은 universal load 함수의 인수의 데이터 속성이다.

**Output**

-   Universal load 함수는 객체가 어느 값을 가졌든 상관없이 반환할 수 있다.
-   Server load 함수는 반드시 devalue로 나열된 데이터를 반환해야 한다. 데이터는 `promises`를 포함할 수 있고, 이 경우 브라우저에 보여진다.
    `devalue` : JSON과 BigInt, Date 등 반복적이고 순환하는 형태로 표현될 수 있는 모든 것

**언제 어떤 것을 사용하나?**

-   Server `load` 함수는 데이터베이스나 파일시스템으로부터 데이터를 직접 접근하거나 개인 환경 변수를 사용해야할 때 편리하다.
-   Universal `load`함수는 외부 API에서 데이터를 가져오고 개인 자격 증명이 필요하지 않을 때 유용하다. Svelte 구성 요소와 같이 나열할 수 없는 것들을 반환할 때도 유용하다.
    -> `SvelteKit`은 서버를 통하기보단 API에서 직접 데이터를 얻을 수 있다.

### Using URL data

> `load` function은 URL에 따라 어느 방식으로든 달라진다.

**url**  
원본, hostname, pathname, searchParams와 같은 속성을 포함하는 URL의 인스턴스. `url.hash`에 `load`하는 동안 접근할 수 없다.

**route**  
현재 라우트 디렉터리의 이름을 포함한다.

```
    //+page.js
    /** @type {import('./$types').PageLoad} */
    export function load({ route }) {
        console.log(route.id); // '/a/[b]/[...c]'
    }
```

**params**  
`params`은 `url.pathname`과 `route.id`로부터 파생되었다.
route.id가 /a/[b]/[...c]이고 url.pathname이 /a/x/y/z일때, params 객체는 다음과 같다.

```
{
    "b":"x",
    "c": "y/z"
}
```

### Making fetch requests

> 외부 API나 `+server.js` 핸들러로부터 데이터를 얻고자할 때, `fetch`를 사용한다. 이는 몇 추가된 기능과 함께 기존의 fetch 웹 API과 동일하게 동작한다.

**Additional features**

-   cookie와 authorization 헤더를 상속해 자격증명 요청하는데 사용될 수 있다.
-   서버에서 상대적인 요청을 할 수 있다.
-   내부 요청은 서버에서 동작 중일때 HTTP 호출의 오버헤드 없이, 핸들러 함수로 바로 간다.
-   서버측 렌더링 중 응답은 응답 객체의 text와 json 메서드를 연결해 렌더링된 HTML에 캡쳐하고 인라인된다.
-   Hydration 동안 응답은 HTML에서 읽어서 일관성을 보장하고 추가 네트워크 요청을 방지한다.

```
    /** @type {import('./$types').PageLoad} */
    export async function load({ fetch, params }) {
        const res = await fetch(`/api/items/${params.id}`);
        const item = await res.json();

        return { item };
    }

    브라우저 페치 대신 로드 패치 사용해야 함.
```

### Cookies

| server `load` 함수는 쿠키를 얻고 설정할 수 있다.

```
    // src/routes/+layout.server.js
    import * as db from '$lib/server/database';

    /** @type {import('./$types').LayoutServerLoad} */
    export async function load({ cookies }) {
    const sessionid = cookies.get('sessionid');

    return {
        user: await db.getUser(sessionid)
    };
    }
```

쿠키는 만약 타켓 호스트가 SvelteKit 앱이나 그것의 더 특정한 하위도메인과 같다면 오직 제공된 fetch 함수로만 통할 수 있다.

-   domain.com -> 쿠키 못 받음
-   my.domain.com -> 쿠키 받음
-   api.domain.dom 쿠키 못 받음
-   sub.my.domain.com -> 쿠키 받음

다른 쿠키는 `credentials: 'include'`가 설정되어 있을 때는 SvelteKit이 어떤 쿠키가 어떤 도메인에 속해 있는지 모르기 때문에 통과할 수 없다.

### Headers

server, universal `load` 함수 둘다 서버에서 동작 중일 때 응답에 대한 헤더를 설정할 수 있는 `setHeader` 함수에 접근할 수 있다.
페이지 캐시할 때 유용하다.

```
    //+page.js
    /** @type {import('./$types').PageLoad} */
    export async function load({ fetch, setHeaders }) {
    const url = `https://cms.example.com/products.json`;
        const response = await fetch(url);

        // cache the page for the same length of time
        // as the underlying data
        setHeaders({
            age: response.headers.get('age'),
            'cache-control': response.headers.get('cache-control')
        });

        return response.json();
    }
```

같은 헤더를 여러번 세팅하는 것은 오류가 발생할 수 있다. `setHeaders`로 `set-cookie` 헤더를 추가할 수 없고, cookies.set(name,value, option)을 사용해야 한다.

### Using parent data

load 함수가 `await parent()`를 사용해서 부모 load 함수의 데이터에 접근하는 것은 유용하다.

```
    //src/routes/+layout.js
    /** @type {import('./$types').LayoutLoad} */
    export function load() {
        return { a: 1 };
    }

    //src/routes/abc/+layout.js
    /** @type {import('./$types').LayoutLoad} */
    export async function load({ parent }) {
        const { a } = await parent();
        return { b: a + 1 };
    }

    //src/routes/abc/+page.js
    /** @type {import('./$types').PageLoad} */
    export async function load({ parent }) {
        const { a, b } = await parent();
        return { c: a + b };
    }

    //src/routes/abc/+page.svelte
    <script>
  /** @type {import('./$types').PageData} */
    e   xport let data;
    </script>

    <!-- renders `1 + 2 = 3` -->
    <p>{data.a} + {data.b} = {data.c}</p>
```

> `+page.js`안에 있는 load 함수는 부모의 데이터를 바로 받는 것이 아니라 두 레이아웃 load 함수의 병합된 데이터를 받는다.

`+page.server.js`와 `+layout.server.js` 내부에서 `parent`는 부모 `layout.server.js`의 데이터를 반환한다.
`+page.js`나 `+layout.js`에서 부모 `+layout.js`로부터의 데이터를 반환한다.
누락된 `+layout.js`는 `({ data }) => data function`로 처리된다. 즉, `+layout.js`에 의해 가려지지 않은 부모 `+layout.server.js`의 데이터도 반환한다.

`await parent()`를 사용할때 *waterfalls*이 발생하지 않도록 주의해야 한다.

```
    /** @type {import('./$types').PageLoad} */
    export async function load({ params, parent }) {
        const parentData = await parent();
        const data = await getData(params);
        const parentData = await parent();

        return {
            ...data
            meta: { ...parentData.meta, ...data.meta }
        };
    }

    getData(params)은 parent() 호출의 결과에 의존하지 않으므로 지연된 렌더를 피하기 위해 먼저 호출해야 한다.
```

### Errors

> load 동안 에러가 throw 된다면, 가장 가까운 `+error.svelte`가 렌더링 된다. _예상된_ 에러에 대해 `@sveltejs/kit`의 error helper을 사용해서 HTTP 상태 코트와 선택적 메시지를 특정한다.

```
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
    throw error(401, 'not logged in');
  }
 
  if (!locals.user.isAdmin) {
    throw error(403, 'not an admin');
  }
}
```

_예상되지 않은_ 에러가 발생하면, SvelteKit은 `handleError`을 호출하고 500 Internal Error로 다룰 것이다.

### Redirects

> 사용자들을 리다이렉트 하기 위해 3xx 상태 코드와 함께 리디렉션할 위치를 지정하는 `@sveltejs/kit`의 redirect helper를 사용한다.

```
//+layout.server.js
import { redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
  if (!locals.user) {
    throw redirect(307, '/login');
  }
}
```

### Streaming with promises

> 반환된 객체의 상위 레벨에 있는 Promises는 대기되어 *waterfalls*를 만들지 않고 여러 Promises를 쉽게 반환할 수 있다. server load를 사용할 때, _중첩된_ Promises은 해결된대로 브라우저로 스트리밍된다. 이는 모든 데이터가 사용 가능해지기 전에 페이지 렌더링을 시작할 수 있기 때문에 필요하지 않고, 느린 데이터가 있으면 유용하다.

```
//+page.server.js
/** @type {import('./$types').PageServerLoad} */
export function load() {
  return {
    one: Promise.resolve(1),
    two: Promise.resolve(2),
    streamed: {
      three: new Promise((fulfil) => {
        setTimeout(() => {
          fulfil(3)
        }, 1000);
      })
    }
  };
}

//로딩 단계를 만들 때 유용하다.
//+page.svelte
<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<p>
  one: {data.one}
</p>
<p>
  two: {data.two}
</p>
<p>
  three:
  {#await data.streamed.three}
    Loading...
  {:then value}
    {value}
  {:catch error}
    {error.message}
  {/await}
</p>
```

### Parallel loading

> 페이지를 렌더링하거나 탐색할 때, SvelteKit은 요청의 *waterfalls*을 피하기 위해 모든 load 함수를 동시에 동작한다.
> 클라이언트 측 탐색 동안 다중 server load 함수 호출의 결과는 단일 응답으로 묶인다. 한번 모든 load 함수가 반환되면 페이지가 렌더링된다.

### Rerunning load functions

> SvelteKit은 탐색동안 불필요하게 재동작을 피하기 위해 각 load 함수의 의존성을 추적한다.

```
//+page.server.js
import * as db from '$lib/server/database';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    post: await db.getPost(params.slug)
  };
}

//+layout.server.js
import * as db from '$lib/server/database';
 
/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  return {
    posts: await db.getPostSummaries()
  };
}
```

    ...params.slug가 변경되었기 때문에 /blog/trying-the-raw-meat-diet에서 /blog/i-regret-my-choice로 이동하면 +page.js에 있는 데이터가 다시 실행됩니다. 데이터가 여전히 유효하므로 +layout.server.js에 있는 데이터는 다시는 db.getPostSummaries()를 호출하지 않습니다.

`await parent()`를 호출한 _load_ 함수는 부모 _load_ 함수가 재동작하면 같이 재동작한다.

의존성 추적은 _load_ 함수가 반환된 후에 적용되지 않는다.

### Manual invalidation

> url에 의존하는 모든 _load_ 함수를 다시 실행하는 `invalidate(url)`와 모든 _load_ 함수를 다시 실행하는 `invalidateAll()`을 사용하여 현재 페이지에 적용되는 _load_ 함수를 다시 실행할 수도 있다.
> _load_ 함수는 `fetch(url)이나 (depends(url)을 호출한다면 url에 의존한다. url이 [a-z]로 시작하는 사용자 지정 식별자가 될 수 있음을 알아야 한다.

```
    /** @type {import('./$types').PageLoad} */
    export async function load({ fetch, depends }) {
        // load reruns when `invalidate('https://api.example.com/random-number')` is called...
        const response = await fetch('https://api.example.com/random-number');
         
        // ...or when `invalidate('app:random')` is called
        depends('app:random');
         
        return {
            number: await response.json()
        };
    }

    //+page.svelte
    <script>
    import { invalidate, invalidateAll } from '$app/navigation';

    /** @type {import('./$types').PageData} */
    export let data;

    function rerunLoadFunction() {
        // any of these will cause the `load` function to rerun
        invalidate('app:random');
        invalidate('https://api.example.com/random-number');
        invalidate(url => url.href.includes('random-number'));
        invalidateAll();
    }
    </script>

    <p>random number: {data.number}</p>
    <button on:click={rerunLoadFunction}>Update random number</button>

```

**언제 _load_ 함수가 재실행될까?**  
요약하자면, _load_ 함수는 다음과 같은 상황에 재실행된다.

-   값이 변경된 매개변수의 속성을 참조할 때
-   값이 변경된 url의 속성을 참조할 때. 이때 `requeset.url`의 속성은 추적되지 않는다.
-   `await parent()`를 호출하고 parent load 함수가 재실행되었을 때
-   `fetch`, `depend`을 통한 url과 `invalidate(url)`로 invalid 마크된 url에 종속성을 선언했을 때
-   활성화된 모든 _load_ 함수가 `invalidateAll()`을 사용하여 강제로 다시 실행되었을 때
    parmas와 url은 <a href=".."> 링크 클릭, <form> 상호작용, goto 호출, 리디렉션 등의 응답으로 바뀔 수 있다.

## Form actions

`+page.server.js`는 `<form>`을 사용해서 데이터를 서버로 **POST**하도록 하는 *actions*을 내보낼 수 있다.
`<form>`을 사용할 때, 클라이언트 측 자바스크립트는 옵션이지만 자바스크립트를 사용해서 form 상호작용을 최상의 UX를 제공할 수 있다.

### Default actions

```
//+page.server.js
/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    // TODO log the user in
  }
};

//+page.svelte
<form method="POST">
  <label>
    Email
    <input name="email" type="email">
  </label>
  <label>
    Password
    <input name="password" type="password">
  </label>
  <button>Log in</button>
</form>
```

버튼을 누르면 POST 요청을 통해 form 데이터가 서버로 전송된다.

### Named actions

```
//+page.server.js
/** @type {import('./$types').Actions} */
export const actions = {
	login: async (event) => {
    // TODO log the user in
  },
	register: async (event) => {
		// TODO register the user
	}
};

//+page.svelte
<form method="POST" action="?/register">

//+layout.svelte
<form method="POST" action="/login?/register">
```

`action` 속성뿐만 아니라 버튼의 `formaction` 속성을 사용해 동일한 폼 데이터를 상위 `<form>`과 다른 액션을 POST할 수 있다.

```
//+page.svelte
<form method="POST">
<form method="POST" action="?/login">
  <label>
    Email
    <input name="email" type="email">
  </label>
  <label>
    Password
    <input name="password" type="password">
  </label>
  <button>Log in</button>
	<button formaction="?/register">Register</button>
</form>
```

## Anatomy of an action

> 각 액션은 `RequestEvent` 객체를 수신하여 `request.formData()`로 데이터를 읽을 수 있다.
> 요청을 처리한 후, 액션은 해당 페이지의 양식 속성과 `$page.form app-wide`를 통해 다음 업데이트까지 사용할 수 있는 데이터로 응답할 수 있습니다.

```
//+page.server.js
/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const user = await db.getUserFromSession(cookies.get('sessionid'));
  return { user };
}
 
/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
 
    const user = await db.getUser(email);
    cookies.set('sessionid', await db.createSession(user));
 
    return { success: true };
  },
  register: async (event) => {
    // TODO register the user
  }
};

//+page.svelte
<script>
  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

{#if form?.success}
  <!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
  <p>Successfully logged in! Welcome back, {data.user.name}</p>
{/if}
```

**Validation errors**
유효하지 않은 데이터때문에 요청이 처리될 수 없다면, 사용자에게 보내 다시 시도할 수 있도록 *validation error*을 반환한다. `fail` 함수는 HTTP 상태 코드(400,422)를 데이터와 함께 반환한다. 상태 코드는 `$page.status`와 form을 통한 데이터를 통해 이용할 수 있다.

```
//+page.server.js
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

		if (!email) {
			return fail(400, { email, missing: true });
		}

    const user = await db.getUser(email);

		if (!user || user.password !== hash(password)) {
			return fail(400, { email, incorrect: true });
		}

    cookies.set('sessionid', await db.createSession(user));

    return { success: true };
  },
  register: async (event) => {
    // TODO register the user
  }
};

//+page.svelte
<form method="POST" action="?/login">
	{#if form?.missing}<p class="error">The email field is required</p>{/if}
	{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
  <label>
    Email
		<input name="email" type="email">
		<input name="email" type="email" value={form?.email ?? ''}>
  </label>
  <label>
    Password
    <input name="password" type="password">
  </label>
  <button>Log in</button>
  <button formaction="?/register">Register</button>
</form>
```

반환 값은 JSON처럼 나열되어 있어야 한다. 그 이상의 구조는 당신에게 달려있다. 예를 들어, 페이지에 다중 폼을 가지고 있다면, 어떤 폼이 id 속성이나 유사한 속성으로 참조되는 판환된 fomr 데이터가 어떤 `<form>`인지 구별할 수 있다.

**Redirects**
리다이렉트는 정확히 `load`에서처럼 동작한다.

```
//+page.server.js
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    const user = await db.getUser(email);
    if (!user) {
      return fail(400, { email, missing: true });
    }

    if (user.password !== hash(password)) {
      return fail(400, { email, incorrect: true });
    }

    cookies.set('sessionid', await db.createSession(user));

		if (url.searchParams.has('redirectTo')) {
			throw redirect(303, url.searchParams.get('redirectTo'));
		}

    return { success: true };
  },
  register: async (event) => {
    // TODO register the user
  }
};
```

### Loading data

> *action*이 실행된 후, 페이지는 액션의 반환값을 form 속성으로 사용할 수 있도록 다시 렌더링될 것이다. 이는 페이지 load 함수가 action이 끝난 후 동작함을 의미한다.
> `handle`이 *action*이 호출되기 전에 동작되며 load 함수 전에는 다시 실행되지 않는다. 예를 들어, 쿠키를 기준으로 `event.locals`를 채우기 위해 `handle`을 사용하는 경우 action에서 쿠키를 설정하거나 지울 때 `event.locals`를 업데이트해야 한다.

```
//hooks.server.js
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  event.locals.user = await getUser(event.cookies.get('sessionid'));
  return resolve(event);
}

//+page.server.js
/** @type {import('./$types').PageServerLoad} */
export function load(event) {
  return {
    user: event.locals.user
  };
}
 
/** @type {import('./$types').Actions} */
export const actions = {
  logout: async (event) => {
    event.cookies.delete('sessionid');
    event.locals.user = null;
  }
};
```

### Progressive enhancement

> 앞의 섹션에서 클라이언트 측 자바스크립트 없이 동작하는 `/login` 액션을 구축했다. 그것도 좋지만, 자바스크립트를 사용할때 form 상호작용을 점진적으로 향상시켜 다 나은 UX를 제공할 수 있다.

**use:enhance**
fom을 향상시키는 가장 쉬운 방법은 `use:enhance` action을 추가하는 것이다.

```
//+page.svelte
<script>
	import { enhance } from '$app/forms';

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<form method="POST" use:enhance>
```

인자 없이, 전체 페이지 리로딩없이 `use:enhance`는 brower-native 행동을 모방할 것이다.

-   form 속성, `$page.form`, `$page.status`를 성공하거나 유요하지 않는 응다브로 업데이트 한다. action이 제출하는 동일한 페이지에 있는 경우에만 해당된다. 예를 들어, `<form action="/somewhere/else" ..>`에 있을 때, form과 $page는 업데이트 되지 않는다. 기본 form 제출의 경우 action이 있는 페이지로 리디렉션되기 때문이다. 둘 중 하나를 업데이트하려면 `applyAction`을 사용해야한다.
-   `<form>` 요소와 성공 응답의 `invalidateAll`을 사용하는 모든 무효한 데이터를 리셋한다.
-   `goto`를 리다이렉트 응답에 호출한다.
-   에러 발생 시가장 가까운 `+error` 경계를 렌더링한다.
-   포커스를 적절한 요소로 재설정한다.

동작을 사용자 지정하기 위해 form이 제출되기 전에 실행되는 `SubmitFunction`을 제공하고 `ActionResult`와 실행되는 콜백을 반환해야 한다.
콜백이 반환되면 위에 언급한 기본 동작은 트리거되지 않는다. 반환하려면 `update`를 호출해야 한다.

```
<form
  method="POST"
  use:enhance={({ formElement, formData, action, cancel, submitter }) => {
    // `formElement` is this `<form>` element
    // `formData` is its `FormData` object that's about to be submitted
    // `action` is the URL to which the form is posted
    // calling `cancel()` will prevent the submission
    // `submitter` is the `HTMLElement` that caused the form to be submitted

    return async ({ result, update }) => {
      // `result` is an `ActionResult` object
      // `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
    };
  }}
>
```

**applyAction**

> 고유한 callback을 제공한다면 가장 가까운 `+error` 경계 호출 같은 기본 `use:enhance` 동작의 일부분을 재생산해야한다. 대부분 callback으로 전달된 `update` 호출은 충분하다. 더 많은 사용자 지정이 필요하다면 `applyAction`을 사용하면 된다.

```
<script>
	import { enhance, applyAction } from '$app/forms';

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<form
  method="POST"
  use:enhance={({ formElement, formData, action, cancel }) => {

    return async ({ result }) => {
      // `result` is an `ActionResult` object
			if (result.type === 'error') {
				await applyAction(result);
			}
    };
  }}
>

```

`applyAction(result)`의 동작은 `result.type`에 따른다.

-   `success`, `failure` : `$page.status`를 `result.status`로 설정하고 `form`과 `$page.form`을 `result.data`로 업데이트한다(`enhance`의 `update`와는 달리, 어떤 form을 제출했든 상관없다.).
-   `redirect` : `goto(result.location)`을 호출한다.
-   `error` : `result.error`로 가장 가까운 `+error` 경계를 렌더링한다.
    모든 경우에서 포커스는 재설정된다.

**Custom event listener**

> `use:enhance`없이 `<form>`에서 일반 *custom event listener*로 점진적 향상을 개발할 수 있다.

```
<script>
  import { invalidateAll, goto } from '$app/navigation';
  import { applyAction, deserialize } from '$app/forms';

  /** @type {import('./$types').ActionData} */
  export let form;

  /** @type {any} */
  let error;

  async function handleSubmit(event) {
    const data = new FormData(this);

    const response = await fetch(this.action, {
      method: 'POST',
      body: data
    });

    /** @type {import('@sveltejs/kit').ActionResult} */
    const result = deserialize(await response.text());

    if (result.type === 'success') {
      // rerun all `load` functions, following the successful update
      await invalidateAll();
    }

    applyAction(result);
  }
</script>

<form method="POST" on:submit|preventDefault={handleSubmit}>
  <!-- content -->
</form>
```

`$app/forms`에서 상응하는 방법을 사용하여 응답을 더 처리하기 전에 `deserialize`해야 한다. load 함수 같은 form 동작이 Date나 BigInt 객체를 반환을 지원하기 때문에 `JSON.parse()`는 충분하지 않다.
`+server.js`와 `+page.server.js`를 가지고 있다면, `fetch` 응답은 기본적으로 라우팅된다. `page.server.js`의 action에 `POST`하려면 커스텀 `x-sveltekit-action` 헤더를 사용해야한다.

```
const response = await fetch(this.action, {
  method: 'POST',
  body: data,
	headers: {
		'x-sveltekit-action': 'true'
	}
});
```

## Alternatives

> form action은 점진적으로 향상될 수 있기에 데이터를 서버로 보내는데 선호되는 방식이지만, _+server.js_ 파일을 사용해서 예를 들어 JSON API를 보여줄 수 있다.

```
//send-message/+page.svelte
<script>
  function rerun() {
    fetch('/api/ci', {
      method: 'POST'
    });
  }
</script>

<button on:click={rerun}>Rerun CI</button>

// api/ci/+server.js
/** @type {import('./$types').RequestHandler} */
export function POST() {
  // do something
}
```

## GET vs POST

form 동작을 호출하기 위해 `method="POST"`를 사용해야 한다.
일부 form은 데이터를 서버로 `POST`할 필요 없다. 이 경우, `method="GET"`를 사용할 수 있고 SvelteKit는 페이지 전체 탐색 대신 클라이언트 측 라우터를 사용해 `<a>` 요소처럼 다룬다.

```
<form action="/search">
  <label>
    Search
    <input name="q">
  </label>
</form>
```

이 form의 제출은 `/search?q=...`로 이동하여 load function을 호출하지만 action을 호출하진 않는다. `<a/>` 처럼, 라우터의 동작을 제어하기 위해 `<form>`의 data-svelte-reload, data-sveltekit-replacestate, data-sveltekit-keepfocus, data-sveltekit-noscroll 속성을 설정할 수 있다.

## Fetching Data
