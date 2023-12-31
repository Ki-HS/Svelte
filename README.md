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
    parmas와 url은 `<a href="..">` 링크 클릭, <form> 상호작용, goto 호출, 리디렉션 등의 응답으로 바뀔 수 있다.

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

### Alternatives

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

### GET vs POST

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

## Page options

기본적으로 SvelteKit은 서버에 있는 모든 컴포넌트를 처음에 렌더링하고 HTML 같이 클라이언트로 보낸다. `hydration`으로 불리는 프로세스에서 상호적으로 만들도록 브라우저에 있는 컴포넌트를 다시 렌더링한다. 이런 이유때문에 컴포넌트가 두 곳 모두에서 실행될 수 있도록 확실히 해야한다. 그 후 SvelteKit은 후속 탐색을 이어 받는 라우터를 초기화한다.
+page.js 또는 +page.server.js에서 옵션을 내보내거나 공유 +layout.js 또는 +layout.server.js를 사용하여 페이지 그룹에 대한 옵션을 페이지 단위로 제어할 수 있다. 앱 전체에 대해 옵션을 정의하기 위해 root 레이아웃에서 내보내야 한다. 하위 layout과 page는 상위 layout에서 설정된 값을 덮을 수 있다. 그래서 전체 앱에 대해 prerendering을 가능케 하고 동적으로 렌더링될 필요가 있는 페이지에 대해 prerendering을 못하게 할 수 있다.

### prerender

일부 라우트는 빌드 시 생성된 간단한 HTML 파일로 표시될 수 있다. 이런 라우트는 `prerender`될 수 있다.

```
export const prerender = true;
```

대신, 루트 `+layout.js`나 루트 `+layout.server.js`에서 `export const prerender = true`를 설정할 수 있고 _not prerenderable_ 마크가 있는 페이지를 제외하고 모든 것을 prerender 할 수 있다.

```
export const prerender = false;
```

서버를 작게 만들기 위해 `prerender = true`인 라우트는 동적 SSR에 사용되는 메니페스트에서 제외된다. prerender하지만 manifest에 포함되도록 하고 싶은 경우 `auto`를 사용한다.

```
export const prerender = auto;
```

전체 앱이 prerendering에 적합한 경우, `adapter-static`을 사용해 정적 웹 서버에서 사용하기에 적합한 파일을 출력할 수 있다.
prerenderer는 앱의 root에서 시작하고 prerenderable 페이지나 `+server.js`에 대한 파일을 생성한다. 각 페이지는 prerendering의 후보인 다른 페이지를 가리키는 `<a>` 요소에 대해 스캔되었다. 이때문에 일반적으로 어떤 페이지가 접근되어야하는지 특정할 필요가 없다. 어떤 페이지에 접근해야 하는지 정말 필요하다면, *config.kit.prerender.entries*를 사용하거나 동적 라우트의 entries function를 내보내서 그렇게 할 수 있다.
prerendering 동안, `$app/environment`에서 호출된 `building`의 값은 true다.

**prerendering server routes**

다른 페이지 옵션과는 달리, `prerender`은 `+server.js`에 적용된다. 이런 파일은 layout의 영향을 받지 않지만, 레이아웃의 데이터를 fetch한 페이지의 기본 값을 상속한다.

```
export const prerender = true;
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch('/my-server-route.json');
  return await res.json();
}
```

그 후 `export const prerender = false`가 없다면 `+server.js`는 prerenderable하게 다뤄진다.

**When not to prerender**

기본 규칙은 페이지를 미리 작성할 수 있으려면 페이지를 직접 누른 두 사용자가 서버에서 동일한 내용을 가져와야 한다.
모든 페이지가 prerendering에 적합한 것은 아니다. prerender된 모든 콘텐츠는 모든 사용자가 볼 수 있다. prerendering된 페이지의`onMount`에서 개인화된 데이터를 가져올 수 있지만, 빈 초기 콘텐츠나 로딩 표시기를 포함하기 때문에 사용자 환경이 열악해질 수 있다.
페이지 인자에 기반한 데이터를 load하는 페이지를 계속 prerender할 수 있다.
prerendering 동안 *url.searchParams*에 접근하는 것은 금지된다. *url.searchParams*를 사용하고 싶으면, 브라우저에서만 사용할 것이라는 것을 확실히 해야 한다.
서버가 `POST` 응답 동작을 다룰 수 있어야 하기 때문에, actions이 있는 페이지는 prerender될 수 없다.

**Prerender and ssr**  
ssr option을 `false`로 설정했다면 같은 빈 HTML shell에서 각 요청이 발생할 것이다. 불필요한 작업에서 발생하기 때문에, SvelteKit은 기본적으로 `prerender`가 명시적으로 `false`로 설정되지 않은 페이지를 prerendering한다.

**Route conflict**  
prerendering이 파일 시스템에 쓰기 때문에, 같은 이름을 가지는 디렉터리와 파일을 발생시킬 수 있는 두 엔드포인트를 가질 수 없다.
이런 이유로 항상 파일 확장자를 포함하는 것이 좋다.
페이지의 경우 `foo`대신 `foo/index.html`를 사용해서 해결한다.

**Troubleshooting**  
`The following routes were marked as prerenderable, but were not prerendered`와 같은 에러를 본다면 문제의 라우터가 `export const prerender = ture`를 가졌지만 prerendering crawler에 의해 도달되지 않았기 때문에 페이지는 사실 prerender되지 않았기 때문이다.
이러한 라우트는 동적으로 server-rendered 될 수 없기 때문에, 문제의 라우트에 접근하려고 시도할때 오류가 발생된다. 두 가지 방법으로 해결할 수 있다.

1. *config.kit.prerender.entires*나 entries page option의 링크를 따라 경로를 찾을 수 있는지 확인한다. 다른 엔트리 포인트를 크롤링하는 과정을 통해 동적 라우트의 링크를 찾을 수 없는 경우 이 옵션에 링크를 추가한다. 그렇지 않으면 SvelteKit는 매개변수가 어떤 값을 가져야 하는지 모르기 때문에 prerendering 되지 않는다. prerenderable으로 표지 되지 않는 페이지는 무시되고 일부가 prerenderable하더라도 다른 페이지에 대한 링크는 크롤링되지 않는다.
2. `export const parameter = true`를 `export const parameter = 'auto'`로 바꾼다. `'auto'`가 있는 라우트는 동적으로 서버 렌더링된다.

### entries

SvelteKit은 *entry point*에서 시작해서 크롤링하면서 자동으로 prerender할 페이지를 찾는다. 기본적으로 동적이지않은 모든 라우트는 entry point로 간주된다.

```
/             # non-dynamic
/blog         # non-dynamic
/blog/[slug]  # dynamic, because of `[slug]`
```

SvelteKit은 `/`와 `/blog`를 prerender하고, 과정 중 prerender할 새로운 페이를 주는 `<a href="/blog/hello-world">`같은 링크를 찾는다.
대부분의 시간동안 충분하다. 일부 경우, `/blog/hello`같은 페이지로의 링크는 존재하지 않을 수 있으며 이러한 경우 SvelteKit에 그 존재에 대해 알려야 한다. `config.kit.prerender.entries`를 사용하거나 동적 라우트에 속한 +page.js나 +page.server.js나 +server.js의 `entries` 함수를 내보내서 완료될 수 있다.

```
/** @type {import('./$types').EntryGenerator} */
export function entries() {
  return [
    { slug: 'hello-world' },
    { slug: 'another-blog-post' }
  ];
}
 
export const prerender = true;
```

`entries`는 CMS나 DB의 post의 목록을 찾도록 해서 `async` 함수가 될 수 있다.

### ssr

일반적으로 SvelteKit은 처음에 서버의 페이지를 렌더링하고 _hydrate_ 된 HTML을 클라이언트에 보낸다. `ssr`을 `false`로 설정했다면 빈 'shell' 페이지가 대신 렌더링된다. 페이지가 서버에서 렌더링될 수 없다면 유용하지만, 대부분의 경우 추천하지 않는다.

```
export const ssr= false;
```

root `+layout.js`에 `export const ssr = false`를 추가했다면 전체 앱은 클라이언트에서 렌더링될거다.

### csr

원래 SvelteKit은 server-rendering된 페이지를 상호적인 클라이언트 측 렌더링 페이지로 *hydrate*한다. 일부 페이지가 전부 JS가 필요 없다. 이 경우 CSR을 비활성화 한다.

```
export const csr = false;
```

### trailingSlash

기본적으로 SvelteKit은 URL에서 뒤에 오는 슬래시를 제거한다. `'never'`,`'always'`나 `'ignore'` 중 하나로 trailingSlash`의 동작을 바꿀 수 있다.
다른 페이지 옵션과 마찬가지로 `+layout.js`나 `+layout.server.js`의 값을 내보낼 수 있고, 그 값을 모든 하위 페이지에 적용할 수 있다. `+server.js`의 설정을 내보낼 수 있다.

```
export const trailingSlash = 'always';
```

이 옵션은 prerendering에 영향을 미친다. `trailingSlash`가 `always`라면, `/about`같은 라우트는 `about/index.html`에서 발생한다. 그렇지 않으면 정적 웹서버 규칙을 미러링하는 about.html을 생성한다.

### config

`adapter`의 개념으로 SvelteKit는 다양한 플랫폼에서 실행할 수 있다. 이들 각각은 배포를 추가로 조정하기 위한 특정 구성을 가질 수 있다.
`config`는 최상위 레벨에서 key-value 쌍을 가진 객체다. 그 외에, 구체적인 형상은 사용하는 adapter에 따라 다르다. 모든 adapter은 type 안전을 위해 가져올 config 인터페이스를 제공해야한다.

```
/** @type {import('some-adapter').Config} */
export const config = {
  runtime: 'edge'
};
```

`config` 객체는 상위 레벨에서 병합되었다. 이는 상위 `+layout.js`의 일부 값을 덮어씌우기만 원할 때 `+page.js`의 모든 값을 반복할 필요가 없다는 것을 의미한다.

```
//+layout.js
export const config = {
  runtime: 'edge',
  regions: 'all',
  foo: {
    bar: true
  }
}

//+page.js
export const config = {
  regions: ['us1', 'us2'],
  foo: {
    baz: true
  }
}

//config value
{ runtime: 'edge', regions: ['us1', 'us2'], foo: { baz: true } }
```

## State management

### Avoid shared state on the server

브라우저는 *stateful(상태유지)*다. state는 메모리에 애플리케이션과 유저의 상호작용으로 저장되어있다. 반면 서버는 *stateless(무상태)*다. 응답의 컨텐츠가 요청의 컨텐츠에 전부 결정된다. 즉 서버가 클라이언트의 상태를 보존하지 않는다.
개념적으로 그렇다. 현실에서 서버는 종종 다수의 유저에 의해 오래 살아있고 공유된다. 따라서 공유 변수에 데이터를 저장하지 않는 것이 중요하다.

```
let user;
 
/** @type {import('./$types').PageServerLoad} */
export function load() {
  return { user };
}
 
/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
 
    // NEVER DO THIS!
    user = {
      name: data.get('name'),
      embarrassingSecret: data.get('secret')
    };
  }
}
```

`user` 변수는 서버에 연결된 모두에게 공유된다. 만약 Alice가 창피한 비밀을 등록하고 Bob가 뒤에 페이지를 방문하면 Bob은 Alice의 비밀을 알 것이다. 추가로, Alice가 다음에 사이트를 재방문할 때, 서버는 재시작해 데이터를 잃을 것이다.
대신, 쿠키를 사용하는 유저를 *authenticate*하고 DB에 데이터를 유지해야 한다.

### No side-effects in load

같은 이유로, load 함수는 *pure*해야 한다. 예를 들어 컴포넌트에 저장 값을 사용할 수 있도록 load 함수 내부의 저장 위치에 기록하고 싶을 수 있다.

```
import { user } from '$lib/user';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch('/api/user');
 
  // NEVER DO THIS!
  user.set(await response.json());
}
```

이전 예시처럼, 모든 사용자가 공유된 공간에 한 유저의 정보를 넣는 것이다. 대신 데이터를 반환하고 데이터가 필요한 컴포넌트에 넘기거나 `$page.data`를 사용해야 한다.

```
export async function load({ fetch }) {
  const response = await fetch('/api/user');

	return {
		user: await response.json()
	};
}
```

SSR을 사용하지 않는다면, 한 유저의 데이터가 다른 사람들에게 보여질 위험이 없다. 하지만 load 함수에서 부작용을 피해야 한다.

### Using stores with context

고유한 저장공간을 사용할 수 없는 경우 `$page.data` 및 기타 `app store`를 어떻게 사용할 수 있는지 궁금할 수 있다. 해답은 서버의 `app store`가 Svelte의 `context API`를 사용하는 것이다.

```
// +layout.svelte
<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  /** @type {import('./$types').LayoutData} */
  export let data;

  // Create a store and update it when necessary...
  const user = writable();
  $: user.set(data.user);

  // ...and add it to the context for child components to access
  setContext('user', user);
</script>

// +page.svelte
<script>
  import { getContext } from 'svelte';

  // Retrieve user store from context
  const user = getContext('user');
</script>

<p>Welcome {$user.name}</p>
```

SSR을 통해 페이지를 렌더링할 때 더 깊은 수준의 페이지 또는 구성 요소에서 컨텍스트 기반 저장 값을 업데이트해도 상위 구성 요소의 값에는 영향을 미치지 않는다. 상위 구성 요소는 저장 값이 업데이트될 때까지 이미 렌더링되었다. `hydration` 중 상태 업데이트 중에 값이 '점멸'되는 것을 방지하려면 일반적으로 상태를 위로 전달하는 것이 좋습니다.
SSR을 사용하지 않는다면, 공유 모듈의 state를 안전하게 유지할 수 있다.

### Component state is preserved

애플리케이션을 탐색할 때, SvelteKit는 존재하는 레이아웃과 페이지 컴포넌트를 재사용한다.

```
// +page.svelte
<script>
  /** @type {import('./$types').PageData} */
  export let data;

  // THIS CODE IS BUGGY!
  const wordCount = data.content.split(' ').length;
  const estimatedReadingTime = wordCount / 250;
</script>

<header>
  <h1>{data.title}</h1>
  <p>Reading time: {Math.round(estimatedReadingTime)} minutes</p>
</header>

<div>{@html data.content}</div>
```

/blog/A에서 /blog/B의 이동은 컴포넌트를 제거하고 다시 만들지 않느낟. 데이터 속성은 바뀌지만 코드는 재실행되지 않는다. `estimatedReadingTime`은 다시 계산되지 않는다.
대신, 값을 반응성있게 만들어야한다.

```
<script>
  /** @type {import('./$types').PageData} */
  export let data;

	$: wordCount = data.content.split(' ').length;
	$: estimatedReadingTime = wordCount / 250;
</script>
```

이처럼 컴포넌트를 재사용하는 것은 사이드 바 스크롤 state 같은 것들이 유지된다는 것을 의미하고, 변경된 값들 사이에서 애니메이션을 쉽게 만들 수 있다. 하지만 탐색 중 컴포넌트를 완전히 제거하고 다시 마운팅할 필요가 있다면 이 패턴을 사용하면 된다.

```
{#key $page.url.pathname}
  <BlogPost title={data.title} content={data.title} />
{/key}
```

### Storing state in the URL

테이블의 필터 또는 정렬 규칙과 같이 다시 로드하거나 SSR에 영향을 주는 state가 있는 경우 URL 검색 매개 변수를 배치하는 것이 좋다. 이러한 매개 변수를 `<a href="...">` 또는 `<form action="..."...>` 속성에 넣거나 `goto(?key=value')`를 통해 프로그래밍 방식으로 설정할 수 있다. 이러한 매개 변수는 `URL` 매개 변수를 통해 로드 함수 내부에 액세스하고 `$page.url.searchParams`를 통해 컴포넌트 내부에 액세스할 수 있다.

### Storing ephemeral state in snapshots

일부 UI state는 사용자가 다른 페이지로 이동하거나 페이지를 새로 고치면 state가 손실되어도 상관이 없다. 경우에 따라 사용자가 다른 페이지로 이동했다가 다시 돌아오면 데이터가 지속되기를 원하지만, URL이나 데이터베이스에 state를 저장하는 것은 과하다. 이를 위해 SvelteKit는 스냅샷을 제공하므로 컴포넌트 state를 기록 항목과 연결할 수 있다.

## Build your app

SvelteKit 앱을 빌딩하는 것은 두 단계에 걸쳐서 일어난다.

1. `Vite`는 서버 코드, 브라우저 코드, 서비스 워커의 최적화된 프로덕션 빌드를 만든다. prerendering이 이 단계에서 실행된다.
2. *adapter*는 이 프로덕션 빌드를 취하고 목표 확경에 맞춰 조정한다.

### During the build

SvelteKit은 빌드 동안 분석을 위해 `+page/layout(.server).js`을 불러온다. 이 단계에서 실행되지 않는 모든 코드는 반드시 `$app/environment`에서 `building`이 `false`` 여야 한다.

```
import { building } from '$app/environment';
import { setupMyDatabase } from '$lib/server/database';

if (!building) {
  setupMyDatabase();
}

export function load() {
  // ...
}
```

## Adapter

SvelteKit 앱을 배포할 수 있기 전에 배포 타겟을 위해 *adapt*할 필요가 있다. Adapter는 기본 앱을 입력으로 사용하여 배포를위한 출력을 생성하는 작은 플러그인이다.

### Using adapters

adapter은 `svelte.config.js`에 있다.

```
import adapter from 'svelte-adapter-foo';
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // adapter options go here
    })
  }
};
 
export default config;
```

### Platform-specific context

일부 Adapter는 요청에 대한 추가 정보에 액세스할 수 있다. 예를 들어 Cloudflare Workers는 KV namespace 등을 포함하는 `env` 객체에 액세스할 수 있다. 이는 `platform`속성으로 사용되는 `hooks`와 `server routes`에 사용되는 `RequestEvent`에 전달될 수 있다.

## Zero-config deployments

`npm create svelte@latest`로 SvelteKit project를 만들때, 기본적으로 `adapter-auto`로 설치한다. 이 Adapter는 자동으로 올바른 패포할때 지원하는 환경에 대한 올바른 adapter를 설치하고 사용한다.
잠금파일에 adapter을 추가하고 약간 CI의 설치시간을 개선하기 때문에 한번 목표 환경에 정착한 `devDependencides`에 적절한 adapter를 설치하는에 추천한다.

### Environment-specific configuration

<U>adapter-vercel</U>과 <U>adapter-netlify</U>의 `{edge : true}`같은 구성 옵션을 추가하기 위해 밑줄 친 어댑터를 설치해아한다.

### Adding community adapters

adapter.js를 편집하고 Pull Request를 열어 추가 어댑터에 대한 제로 구성 지원을 추가할 수 있다.

## Node servers

독립 노드 서버를 만들기 위해 `adapter-node`를 사용해야 한다.

### Usage

`npm i -D @sveltejs/adapter-node`로 설치하고 `svelte.config.js`에 어댑터를 추가해야 한다.

```
import adapter from '@sveltejs/adapter-node';
 
export default {
  kit: {
    adapter: adapter()
  }
};
```

### Deploying

`npm run build`로 빌드한다. 기본적으로 build이고 어댑터 옵션에서 지정된 출력 디렉터리에 프로덕션 서버가 생성된다.
출력 디렉터리, 프로젝트의 `pacakge.json`, 애플리케이션을 실행하기 위한 `node_module`의 프로덕션 의존성이 필요하다. 프로덕션 의존성은 package.json과 package-lock.json을 복사해서 생성되고 `npm ci --omit dev`로 실행된다. `node build`로 앱을 실행할 수 있다.
개발 의존성은 `Rollup`을 사용해 앱에 번들로 포함된다. 주어진 패키지가 번들로 포함되는지 아닌지 제어하기 위해서 `devDependencies`나 `package`에 있는 `dependencies`에 개발 의존성을 위치해야한다

### Environment variables

`dev`와 `preview`에서 SvelteKit는 `.env`에서 환경변수를 읽는다.
프로덕션 중에는 `.env`은 자동으로 로드되지 않는다. 로드하기 위해서 `dotenv`를 사용해야한다.

```
npm install dotenv

node build
node -r dotenv/config build
```

**PORT, HOST and SOCKET_PATH**

기본적으로 서버는 포트 3000을 사용해서 `0.0.0.0`에 연결을 받아들인다. `PORT`와 `HOST` 환경 변수로 변경할 수 있다.

```
HOST=127.0.0.1 PORT=4000 node build
```

대신, 서버는 특정 소켓 경로로의 연결을 하기위해 구성될 수 있다. `SOCKET_PATH` 환경 변수를 사용하면, `HOST`와 `POST` 환경변수는 무시된다.

```
SOCKET_PATH=/tmp/socket node build
```

**ORIGIN, PROTOCOL_HEADER and HOST_HEADER**

HTTP는 SvelteKit에게 현재 요청된 URL을 알 수 있는 신뢰할 수 있는 경로를 주지 않는다. SvelteKit에게 어디서 앱이 서비스되는지 알려주는 가장 간단한 방법은 `ORIGIN` 환경변수를 설정하는 것이다.

```
ORIGIN=https://my.site node build

# or e.g. for local previewing and testing
ORIGIN=http://localhost:3000 node build
```

이처럼, `/stuff` 경로에 대한 요청은 `https://my.site/stuff`로 올바르게 연결한다. 대신, SvelteKit에게 원래 URL을 구성할 수 있는 요청 프로토콜과 호스트에 대해 알려주는 헤더를 지정할 수 있다

```
PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host node build
```

> `x-forwarded-proto`와 `x-forwarded-host`는 리버스 프록시를 사용하는 경우 원래 프로토콜과 호스트를 포워딩하는 사실상의 표준 헤더다. 신뢰할 수 있는 리버스 프록시 뒤에 서버가 있는 경우에만 이러한 변수를 설정해야 한다. 그렇지 않으면 클라이언트가 이러한 헤더를 스푸핑할 수 있다.
> `adapter-node`가 배포 URL를 정확하게 결정할 수 없다면 form action을 사용했을 때 오류를 겪을 것이다.

**ADDRESS_HEADER and XFF_DEPTH**

hooks와 endpoints를 지나는 `RequestEvent` 객체는 클라이언트의 IP 주소를 반환하는 `event.getClientAddress()` 함수를 포함한다. 기본적으로 이것은 `remoteAddress`를 연결한다. 서버는 한 개 이상의 프록시 뒤에 있다. 이 값에는 클라이언트의 IP 주소가 아닌 가장 안쪽의 프록시의 IP 주소가 포함되므로 주소를 읽을 `ADDRESS_HEADER`를 지정해야 한다.

```
ADDRESS_HEADER=True-Client-IP node build
```

일부 가이드에서는 가장 왼쪽에 있는 주소를 읽으라고 하지만 이로 인해 `spoofing`에 취약하다.

```
<spoofed address>, <client address>, <proxy 1 address>, <proxy 2 address>
```

**BODY_SIZE_LIMIT**

스트리밍 동안 포함하여 바이트 단위로 수락할 최대 request body 크기다. 기본적으로 512kb. 0의 값으로 이 옵션을 비활성화하고 고급 기능이 필요한 경우 커스텀 체크인 `handle`을 구현할 수 있다.

### Options

어댑터는 다양한 옵션으로 구성될 수 있다.

```
import adapter from '@sveltejs/adapter-node';
 
export default {
  kit: {
    adapter: adapter({
      // default options are shown
      out: 'build',
      precompress: false,
      envPrefix: '',
      polyfill: true
    })
  }
};
```

**out**

서버를 빌드할 디렉터리다. 기본적으로 `build`

**precompress**

assets 및 prerendering된 페이지에 대해 gizp과 brotli를 사용하여 precompressing 가능하다. 기본적으로 `false`

**envPrefix**

배포를 구성하는데 사용되는 환경 변수의 이름을 변경해야 하는 경우 접두사를 지정할 수 있다.

```
envPrefix: 'MY_CUSTOM_';

MY_CUSTOM_HOST=127.0.0.1 \
MY_CUSTOM_PORT=4000 \
MY_CUSTOM_ORIGIN=https://my.site \
node build
```

**polyfill**
빌드에서 누락된 모듈에 대한 <U>polyfill</U>을 로드할지 여부를 제어한다. 기본적으로 `true`고 Node 18.11 이상을 사용할 때 비활성화해야 한다.

### Custom server

어댑터는 build 디렉터리에 index.js와 handler.js 두 파일을 만든다. index.js를 실행하는 것은 구성된 포트의 서버를 시작한다.
대신, `Express`, `Connect`나 `Polka`와 함께 사용하기에 적합한 핸들러를 내보내고 자체 서버를 설정하는 `handler.js` 파일을 import할 수 있다.

```
import { handler } from './build/handler.js';
import express from 'express';
 
const app = express();
 
// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
  res.end('ok');
});
 
// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);
 
app.listen(3000, () => {
  console.log('listening on port 3000');
});
```

### Troubleshooting

**Is there a hook for cleaning up before the server exits?**
cleanup hook는 현제 실행 환경에 크게 의존하기 때문에 SvelteKit에 내장된 기능은 없다. 노드에 대해서, 내장된 프로세스를 사용하여 서버가 종료되기 전에 실행되는 콜백을 구현할 수 있다.

```
function shutdownGracefully() {
  // anything you need to clean up manually goes in here
  db.shutdown();
}

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
```

## Static site generation

SvelteKit를 `Static Site Generator`로서 사용하기 위해 `adapter-static`를 사용해야 한다.
전체 사이트가 정적 파일 모음으로 prerender 된다. 일부페이지만 prerender하고 다른 페이지는 다른 페이지는 동적으로 서버 렌더링하려면 prerender 옵션과 함께 다른 어댑터를 사용해야 한다.

### Usage

`npm i -D @sveltejs/adapter-static`로 설치하고 `svelte.config.js`에 어댑터를 추가해야 한다.

```
import adapter from '@sveltejs/adapter-static';
 
export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};
```

그리고 prerender 옵션을 root 레이아웃에 추가해야 한다.

```
// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;
```

> SvelteKit의 `trailingSlash` 옵션이 환경에 적절히 설치됨을 확실히 해야 한다. 호스트가 `/a`에 대한 요청을 수신할 때 `/a.html`을 렌더링하지 않으면 루트 레이아웃에 `trailingSlash: 'always'`를 설정하여 대신 `/a/index.html`을 생성해야 한다.

### Zero-config support

일부 플랫폼은 zero-config support를 가진다. -> Vercel
이런 플랫폼에서는, `adapter-static`이 최적의 구성을 제공할 수 있도록 어댑터 옵션을 생략해야 한다.

```
export default {
  kit: {
		adapter: adapter({...})
		adapter: adapter()
  }
};
```

### Options

**pages**
prerendering 된 페이지가 쓰일 디렉터리. 기본적으로 `build`

**assets**
static asset이 쓰일 디렉터리. 일반적으로 `page`와 동일해야 하며, `page` 값이 무엇이든 기본적으로 설정되지만 드물게는 별도의 위치에 페이지와 asset을 출력해야 할 수도 있다.

**fallback**
`SPA mode`에 대한 fallback 페이지를 특정한다.

**precompress**
만약 `true`라면, 파일을 brotil과 gzip으로 precompress한다. `.br`과 `.gz` 파일을 생성한다.

**strict**
기본적으로 `adapter-static` 체크는 앱의 모든 페이지와 엔드포인트가 prerendering 되어 있는지 또는 사용자에게 fallback 옵션이 설정되어 있는지 확인한다. 이 검사는 일부가 최종 출력에 포함되지 않기 때문에 액세스할 수 없는 앱을 실수로 게시하는 것을 방지하기 위해 존재한다. 이 문제가 괜찮다는 것을 알고 있는 경우 `strict`을 `false`로 설정하여 이 검사를 해제할 수 있다.

### Github Pages

깃허브 페이지에 대해서 빌딩할 때, 사이트가 root보다 특정 레파지토리로 부터 서비스 될 때 <U>paths.base</U>을 레파지토리 이름과 일치하도록 업데이트 해야 한다.
`static` 폴더에 빈 `.nodekyll`을 넣어 깃허브에서 제공한 Jekyll이 사이트를 관리하는 것을 막아야 한다.
깃허브 페이지에 대한 구성은 다음과 같다.

```
import adapter from '@sveltejs/adapter-static';
 
const dev = process.argv.includes('dev');
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    }
  }
};
```

변화가 있을 때 자동으로 사이트를 깃허브 페이지에 배포하기 위해 깃허브 action을 사용할 수 있다.

```
name: Deploy to GitHub Pages

on:
  push:
  branches: 'main'

jobs:
  build_site:
  runs-on: ubuntu-latest
  steps:
    - name: Checkout
    uses: actions/checkout@v3

    # If you're using pnpm, add this step then change the commands and cache key below to use `pnpm`
    # - name: Install pnpm
    #   uses: pnpm/action-setup@v2
    #   with:
    #     version: 8

    - name: Install Node.js
    uses: actions/setup-node@v3
    with:
      node-version: 18
      cache: npm

    - name: Install dependencies
    run: npm install

    - name: build
    env:
      BASE_PATH: '/your-repo-name'
    run: |
      npm run build
      touch build/.nojekyll

    - name: Upload Artifacts
    uses: actions/upload-pages-artifact@v1
    with:
      # this should match the `pages` option in your adapter-static options
      path: 'build/'

  deploy:
  needs: build_site
  runs-on: ubuntu-latest

  permissions:
    pages: write
    id-token: write

  environment:
    name: github-pages
    url: ${{ steps.deployment.outputs.page_url }}

  steps:
    - name: Deploy
    id: deployment
    uses: actions/deploy-pages@v1
```

## Single-page apps

어느 어댑터를 사용해 어느 SvelteKit 앱을 루트 레이아웃에서 SSR을 비활성화해서 완전히 클라이언트 렌더링된 `Single-page app(SAP)`으로 바꿀 수 있다.

```
// src/routes/+layout.js
export const ssr = false;
```

> 대부분의 경우 추천되지는 않는다. : 이는 SEO에 해를 끼치고, 인지된 성능을 저하시키는 경향이 있으며, JavaScript가 실패하거나 비활성화된 경우 사용자가 앱에 액세스할 수 없게 한다.
> `+page.server.js`, `+layout.server.js` 와 같은 서버 측 로직이 없는 경우, *fallback page*을 추가해서 SPA를 추가하기 위해 `adapter-static`을 사용할 수 있다.

### Usage

`npm i -D @sveltejs/adapter-static`으로 설치하고 다음 옵션으로 `svelte.config.js`에 어댑터를 추가해야 한다.

```
import adapter from '@sveltejs/adapter-static';
 
export default {
  kit: {
    adapter: adapter({
      fallback: '200.html' // may differ from host to host
    })
  }
};
```

`fallback` 페이지는 앱을 로드하고 올바른 라우트로 이동하는 페이지 템플릿의 SvelteKit에 의해 만들어진 HTML 페이지다. 예를 들어 정적 웹 호스트인 <U>Serge</U>는 정적 assets이나 prerendering된 페이지에 부합하지 않은 어느 요청이든 다룰 수 있는 `200.html` 파일을 추가하게 한다.
일부 호스트에 대해서 `index.html`이나 완전히 다른 것이 될 수 있다.
`

### Apache

<U>Apache</U>에서 SPA를 실행하기 위해서 요청을 라우팅할 `static/.htaccess` 파일을 fallback 페이지에 추가해야 한다.

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^200\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /200.html [L]
</IfModule>
```

### Prerendering individual pages

prerendering 될 특정 페이지를 원한다면,앱의 해당 부분에 대해서만 `prerender`와 함께 ssr을 다시 활성화 할 수 있다.

```
export const prerender = true;
export const ssr = true;
```

### Cloudflare Pages

<U>Cloudflare Pages</U>로 배포하기 위해서 <U>adapter-cloudflare</U>을 사용해야 한다.
이 어댑터는 기본적으로 <U>adapter-auto</U>를 사용할 때 설치된다. Cloudflare 페이지를 계속 사용할 경우, <U>adapter-auto</U>를 이 어댑터를 직접 사용하는 것으로 바꿀 수 있다. 그래서 타입 선엉ㄴ은 자동으로 적용되고 Cloudflare-specific 옵션을 설정할 수 있다.

### Comparisons

-   `adapter-cloudflare` : 모든 SvelteKit 기능을 지원한다;Cloudflare 페이지를 위한 빌드
-   `adapter-cloudflare-workers` : 모든 SvelteKit 기능을 지원한다;Cloudflare Workers를 위한 빌드
-   `adapter-static` : 오직 클라이언트 측 static assets만 제공한다.; Cloudflare 페이지와 호환된다.

### Usage

`npm i -D @sveltejs/adapter-cloudflare`로 설치하고 어댑터를 `svelte.config.js`에 설치해라.

```
import adapter from '@sveltejs/adapter-cloudflare';
 
export default {
  kit: {
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    })
  }
};
```

### Options

`routes` 옵션은 `adapter-cloudflare`에 의해 생성된 <U>\_routes.json</U> 파일을 커스텀할 수 있게 한다.

-   `include`는 함수를 호출하고 기본 값은 `['/*']`인 라우트를 정의한다.
-   `exclude`는 함수를 호출하지 않는 라우트를 정의한다. : 이는 앱의 static asset을 제공하는 가장 빠르고 쉬운 방법이다. 이 배열은 다음 특별한 값을 포함할 수 있다.
    -   `<build>`는 앱의 빌트 아티팩트를 포함한다.
    -   `<files>`는 `static` 디렉터리의 컨텐츠를 포함한다.
    -   `<prerendered>`는 prerendering 된 페이지의 목록을 포함한다.
    -   `<all>` (기본) 위의 모든 것

병합된 `include`와 `exclude` 100개 까지 가질 수 있다. 일반적으로 `routes` 옵션을 포함할 수 있지만 `<prerendered>` 경로가 한계를 초과한다면 자동으로 생성된 `['/articles/foo', '/article/bar', ...]`을 대신해 `'/article/*'`을 포함하는 `exclude` 목록을 수동으로 만드는 것이 도움이 될 수 있다.

### Deployment

시작하려면 Cloudflare Page의 <U>Get Started Guide</U>를 따라야 한다.
프로젝트 설정을 구성할 때, 다음 설정을 사용해야 한다.

-   **Framework preset** - SvelteKit
-   **Build command** - `npm run build` or `vite build`
-   **Build output directory** - `.svelte-kit/cloudflare`

### Bindings

<a href="https://developers.cloudflare.com/workers/runtime-apis/fetch-event#parameters">env</a> 객체는 KV/DO namespaces 등으로 구성도니 프로젝트의 <a href="https://developers.cloudflare.com/workers/configuration/environment-variables/">bindings</a>를 포함한다. `platform` 속성을 통해 `context`, `caches`와 함께 SvelteKit으로 통과하므로 hooks와 endpoints에서 액세스할 수 있다.

> SvelteKit의 내장된 `$env` 모듈은 환경 변수에 대해 선호되어야 한다.

이러한 타입을 앱에 사용가능케 하려면 `src/app.d.ts`에 참조해야 한다.

```
declare global {
  namespace App {
    interface Platform {
			env?: {
				YOUR_KV_NAMESPACE: KVNamespace;
				YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
			};
    }
  }
}

export {};
```

**Testing Locally**
`platfom.env`는 개발자 모드에서가 아닌 오직 최종 빌드에서만 사용할 수 있다. 빌드를 테스트하기 위해 <U>wrangler</U> 버전 3를 사용할 수 있다. 사이트를 한번 빌드하면 `wrangler pages dev .svelte-kit/cloudflare`을 실행해라. `wrangler.toml`에 <U>bindings</U>을 가지고 있는지 확인해야 한다.

### Notes

프로젝트 루트에 있는 `/functions` 디렉터리에 포함된 함수는 <U>single_worker.js file</U>로 컴파일된 배포에 포함되지 않는다. 함수는 SvelteKit 앱에서 <U>server endpoints</U>로 구현되어야 한다.
Cloudflare 페이지 별 `_header`, `_redirect` 파일은 `/static` 폴더에 넣어서 정적 자산 응답을 위해 사용될 수 있다.
하지만, 커스텀 헤더릴 반환하거나 <U>server endpoints</U> 또는 <U>handle</U> 후크에서 응답을 리디렉션해야 하는 SvelteKit에 의해 동적으로 렌더링된 응답에 영향일 미치지 않는다.

### Troubleshooting

**Further reading**

<a href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site"> SvleteKit 사이트 배포를 위한 Cloudflare의 공식 문서</a>를 참조할 수 있다.

**Accessing the file system**

Serverless/Edge 환경에서 `fs.readFileSync`같은 방법을 통해 파일 시스템에 액세스할 수 없다. 그런 방법으로 파일에 액세스해야 한다면, <U>prerendering</U>을 통한 앱을 빌드하는 동안 해야한다. 예시의 블로그를 가지고 있고 CMS를 통해 컨텐츠를 관리하고 싶지 않다면 컨텐츠를 prerender 하고 새로운 컨텐츠를 추가할때 마다 블로그를 재배포해야한다.

## Cloudflare Workers

<a href="https://workers.cloudflare.com/">Cloudflare Workers</a>에 배포하기 위해 <a href = "https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare-workers">adapter-cloudflare-workers</a>를 사용해야 한다.

### Usage

`npm i -D @sveltejs/adapter-cloudflare-workers`로 설치하고 `svelte.config.js`에 어댑터를 설치해야 한다.

```
import adapter from '@sveltejs/adapter-cloudflare-workers';
 
export default {
  kit: {
    adapter: adapter()
  }
};
```

### Basic Configuration

이 어댑터는 프로젝트 루트에 있는 <a href = "https://developers.cloudflare.com/workers/configuration/sites/configuration/">wrangler.toml</a>를 찾을 수 있다. 다음처럼 보여야 한다.

```
name = "<your-service-name>"
account_id = "<your-account-id>"

main = "./.cloudflare/worker.js"
site.bucket = "./.cloudflare/public"

build.command = "npm run build"

compatibility_date = "2021-11-12"
workers_dev = true
```

`<your-service-name>`은 어느 것이든 될 수 있다. `<your-account-id>`는 <a href = "https://dash.cloudflare.com/login">Cloudflare dashboard</a>에 로그인하고 URL의 끝에서 가져와서 찾을 수 있다.

> <a href = "https://developers.cloudflare.com/workers/wrangler/install-and-update/">wrangler</a>를 설치하고 로그인해야 한다.

```
npm i -g wrangler
wrangler login

//deploy
wrangler publish
```

### Custom config

`wrangler.toml`이 아닌 다른 구성 파일을 사용하고자 하는 경우, 그렇게 할 수 있다.

```
// svelte.config.js
import adapter from '@sveltejs/adapter-cloudflare-workers';
 
export default {
  kit: {
    adapter: adapter({ config: '<your-wrangler-name>.toml' })
  }
};
```

### Bindings

<a href="https://developers.cloudflare.com/workers/runtime-apis/fetch-event#parameters">env</a> 객체는 KV/DO namespaces 등으로 구성도니 프로젝트의 <a href="https://developers.cloudflare.com/workers/configuration/environment-variables/">bindings</a>를 포함한다. `platform` 속성을 통해 `context`, `caches`와 함께 SvelteKit으로 통과하므로 hooks와 endpoints에서 액세스할 수 있다.

```
export async function POST({ request, platform }) {
  const x = platform.env.YOUR_DURABLE_OBJECT_NAMESPACE.idFromName('x');
}
```

> SvelteKit의 내장된 `$env` 모듈은 환경 변수에 대해 선호되어야 한다.

이러한 타입을 앱에 사용가능케 하려면 `src/app.d.ts`에 참조해야 한다.

```
declare global {
  namespace App {
    interface Platform {
			env?: {
				YOUR_KV_NAMESPACE: KVNamespace;
				YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
			};
    }
  }
```

**Testing Locally**

`platform.env`는 개발자 모드에서가 아닌 오직 최종 빌드에서만 사용할 수 있다. 빌드를 테스트하기 위해 <U>wrangler</U>를 사용할 수 있다. 사이트를 한번 빌드하면 `wrangler pages dev`을 실행해라. `wrangler.toml`에 <U>bindings</U>을 가지고 있는지 확인해야 한다. Wrangler version 3이 추천된다.

### Troubleshooting

**Worker size limits**

workers에 배포할 때, SvelteKit에 의해 생성된 서버는 단일 파일로 번들링 된다.
Wrangler는 압축 후에 <a href="https://developers.cloudflare.com/workers/platform/limits/#worker-size">크기 제한<a>을 넘긴다면 worker를 퍼블리싱하지 못하게 한다. 일반적으로 이 한계에 도달할 가능성은 낮지만 일부 대규모 라이브러리에서는 이 한계가 발생할 수 있다. 그 경우, 클라이언트 측의 그러한 라이브러리를 import함으로써 worker의 크기를 줄일 수 있다.

**Accessing the file system**

Serverless/Edge 환경에서 `fs.readFileSync`같은 방법을 통해 파일 시스템에 액세스할 수 없다. 그런 방법으로 파일에 액세스해야 한다면, <U>prerendering</U>을 통한 앱을 빌드하는 동안 해야한다. 예시의 블로그를 가지고 있고 CMS를 통해 컨텐츠를 관리하고 싶지 않다면 컨텐츠를 prerender 하고 새로운 컨텐츠를 추가할때 마다 블로그를 재배포해야한다.

## Netlify

Netlify에 배포하기 위해 <a href="https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify">adapter-netlify</a>
이 어댑터는 기본적으로 <a href ="https://kit.svelte.dev/docs/adapter-auto">adapter-auto</a>를 사용할 때 설치되지만, 프로젝트에 추가하는 것은 Netlify 관련된 옵션을 지정하게 한다.

### Usage

`npm i -D @sveltejs/adapter-netlify`로 설치하고 `svelte.config.js`에 어댑터를 설치해야 한다.

```
import adapter from '@sveltejs/adapter-netlify';
 
export default {
  kit: {
    // default options are shown
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,
 
      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
  }
};
```

프로젝트 루트에 있는 <a href ="https://docs.netlify.com/configure-builds/file-based-configuration">netlify.toml</a>을 가지고 있음을 확인해야 한다. `build.publish` 설정에 기반한 정적 자산을 쓰일 곳을 결정한다.

```
[build]
  command = "npm run build"
  publish = "build"
```

`netlify.toml` 파일이나 `build.publish` 값이 없는 경우, `"build"`의 기본 값이 사용될 것이다. Netlify의 퍼블리시 디렉터리를 다른 무언가로 설정했다면 `netlify.toml`에도 설정하거나 `"build"`의 기본 값으로 사용해야 한다.

**Node version**

새로운 프로젝트는 Node 16을 기본적으로 사용한다. 하지만 이전에 오래된 버전으로 생성한 프로젝트를 업그레이드 한다면 Node 16 이상을 수동으로 지정하는 방법에 대한 자세한 내용은 <a href="https://docs.netlify.com/configure-builds/manage-dependencies/#node-js-and-javascript">Netlify 공식 문서</a>를 참조해라

### Netlify Edge Functions (beta)

SvelteKit은 <a href = "https://docs.netlify.com/edge-functions/overview/">Netlify Edge Functions</a>의 베타 릴리즈를 지원한다. `edge : true` 옵선을 `adapter` 함수로 패스한다면 서버 측 렌더링은 사이트 방문자 가까이 배치된 Deno-based edge 함수에서 일어난다. `false`로 설정되었다면, 사이트는 기본적인 Node-based Netlify 함수에 배포한다.

```
import adapter from '@sveltejs/adapter-netlify';
 
export default {
  kit: {
    adapter: adapter({
      // will create a Netlify Edge Function using Deno-based
      // rather than using standard Node-based functions
      edge: true
    })
  }
};
```

### Netlify alternatives to SvelteKit functionality

Netlifify 기능에 의존하지 않고 SvelteKit에서 직접 제공하는 기능을 사용하여 앱을 구축할 수 있다. 이러한 기능의 SvelteKit 버전을 사용하면 개발 모드에서 사용할 수 있고, 통합 테스트로 테스트할 수 있으며, Netlify에서 전환하기로 결정한 경우 다른 어댑터와 함께 작업할 수 있다. 그러나 일부 시나리오에서는 이러한 기능의 Netlify 버전을 사용하는 것이 유익할 수 있다. 한 가지 예는 이미 Netlify에서 호스팅된 앱을 SvelteKit로 마이그레이션하는 경우다.

**Redirect rules**

컴파일동안, 리다이텍트 규치근 자동으로 `_redirects` 파일에 추가된다.

-   `netlify.toml`에 있는 `[[redirects]]`은 더 높은 우선 순위를 가진 `_redirects`에 매치되지 않는다. 그래서 항상 <a href="https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file">\_redirects file</a>에 규칙을 추가해야 한다.
-   `_redirects`는 `/\* /foobar/:splat 같은 모든 커스텀 "catch all" 규칙을 가지면 안된다. 반면 Netlify가 <a href="https://docs.netlify.com/routing/redirects/#rule-processing-order">첫 번째로 일치한 규칙만을</a> 처리 중이기 때문에 자동으로 추가된 규칙은 절대 적용되지 않는다.

**Netlify Forms**

1. 묘사된 <a href="https://docs.netlify.com/forms/setup/#html-forms">이것</a>처럼 Netlify HTML form을 생성해라
2. Netlify의 빌드 못은 배포 시 HTML 파일을 파싱한다. 즉, 폼은 HTML로 prerendering 된다. `export const prerender = true`를 바로 그 페이지에 prerender할 `contact.svelte`에 추가하거나 `kit.prerender.force: true` 옵션을 모든 페이지를 prerendering 하도록 설정할 수 있다.
3. Netlify form이 `<form netlify ... action ="/success">`같은 <a href="https://docs.netlify.com/forms/setup/#success-messages">커스텀 성공 메시지</a>를 가진다면 일치한 `/routes/success/+page.svelte`가 존재하고 prerender되었는지 확인해야한다.

**Netlify Functions**

이 어댑터로 SvelteKit endpoints는 <a href = "https://docs.netlify.com/functions/overview/">Netlify Functions</a>로 호스팅된다. Netlify function 핸들러는 <a href="https://docs.netlify.com/visitor-access/identity/">Netlify Identity</a> 정보를 포함하는 추가 컨텐스트를 가진다. hooks와 `+page.server.`이나 `+layout.server` endpoints 내부의 `event.platform.context` 필드를 통한 이런 컨텍스트에 액세스할 수 있다. 이런 것들은 어댑터 구성에서 `edge` 속성이 `false`일때 <a href="https://docs.netlify.com/functions/overview/">serless function</a>이거나 `true`일때는 <a href ="https://docs.netlify.com/edge-functions/overview/#app">edge function</a>다.

```
export const load = async (event) => {
  const context = event.platform.context;
  console.log(context); // shows up in your functions log in the Netlify app
};
```

추가로, 디렉터리를 생성하고 `netlify.toml` 파일에 구성을 추가해서 고유한 Netlify functions를 추가할 수 있다.

```
[build]
  command = "npm run build"
  publish = "build"

[functions]
  directory = "functions"
```

### Troubleshooting

**Accessing the file system**

Serverless/Edge 환경에서 `fs.readFileSync`같은 방법을 통해 파일 시스템에 액세스할 수 없다. 그런 방법으로 파일에 액세스해야 한다면, <U>prerendering</U>을 통한 앱을 빌드하는 동안 해야한다. 예시의 블로그를 가지고 있고 CMS를 통해 컨텐츠를 관리하고 싶지 않다면 컨텐츠를 prerender 하고 새로운 컨텐츠를 추가할때 마다 블로그를 재배포해야한다.

## Vercel

Vercel에 배포하려면 <a href ="https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel" >adapt-vercel</a>을 사용해야 한다.
이 어댑터는 기본적으로 <a href ="https://kit.svelte.dev/docs/adapter-auto">adapter-auto</a>를 사용할 때 설치되지만 프로젝트에 추가하는 것은 Vercel 특화 옵션을 지정하게 한다.

### Usage

`npm i -D @sveltejs/adapter-vercel`로 설치하고 `svelte.config.js`에 어댑터를 추가해야 한다.

```
import adapter from '@sveltejs/adapter-vercel';
 
export default {
  kit: {
    adapter: adapter({
      // see the 'Deployment configuration' section below
    })
  }
};
```

### Deployment configuration

route가 Vercel에 function으로 배치되는 방법을 제어하기 위해, 배포 구성을 위에 있는 옵션 통하거나 `+sever.js`, `+page(.server).js`, `+layout(.server).js`파일로 지정할 수 있다.
Edge Functions으로 앱의 일부분을 배포할 수 있는 예시 :

```
//+page.js
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
  runtime: 'edge'
};
```

Serverless 예시:

```
//+layout.js
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
  runtime: 'nodejs18.x'
};
```

다음 옵션은 모든 functions에 적용된다.

-   `runtime` : `'edge'`, `'nodejs16.x'`이나 `'nodejs18.x'`. 기본적으로 어댑터는 Vercel 대시보드에 사용하기 위해 프로젝트에 구성된 노드 버전에 따라 `'nodejs16.x'`이나 `'nodejs18.x'`를 선택한다.
-   `region` : <a href ="https://vercel.com/docs/edge-network/regions">edge network regions</a>의 배열이나 `runtime`이 `edge`이면 `'all'`(디폴트). serverless functions에 대한 다중 regions이 Enterprise plans에서만 지원된다.
-   `split` : `true`라면 라우트가 개별 function으로 배포된다. `split`이 어댑터 레벨에서 `true`로 설정됨녀 모든 라우트는 개별 function으로 배포된다.

추가로, 다음 옵션은 edge function에 적용된다.

-   `external` : 함수를 번들링할 때 esbuild가 외부로 취급해야 하는 종속성 배열. 이는 노드 외부에서 실행되지 않는 선택적 종속성을 제외하는 데만 사용되어야 합니다

다음 옵션은 serverless functions에 적용된다.

-   `memory` : function에 사용가능한 메모리의 총량. 기본적으로 1024 Mb, 128MB로 감소될 수 있거나 프로나 기업 계정에서 64MB에서 최대 3008 MB로 증가될 수 있다.
-   `maxDuration` : function의 최대 실행 기간. Hobby 계정에서는 기본적으로 10초, 프로에서는 60, 기업에서는 900초
-   `isr` : 아래 묘사된 Incremental Static Regeneration 구성
    function이 특정 구역의 데이터에 액세스 해야 한다면, 최적 퍼포먼스르 위해 같은 구역에 배포되는게 추천된다.

### Incremental Static Regeneration

Vercel은 동적으로 렌더링되는 콘텐츠의 유연성과 함께 prerendering된 콘텐츠의 성능 및 비용 이점을 제공하는 <a href = "https://vercel.com/docs/image-optimization/overview">점증적 정적 갱신(ISR)</a>을 지원한다.
라우트에 ISR을 추가하기 위해 `config`객체에 `isr` 속성을 추가해야 한다.

```
import { BYPASS_TOKEN } from '$env/static/private';
 
export const config = {
  isr: {
    // Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
    // Setting the value to `false` means it will never expire.
    expiration: 60,
 
    // Random token that can be provided in the URL to bypass the cached version of the asset, by requesting the asset
    // with a __prerender_bypass=<token> cookie.
    //
    // Making a `GET` or `HEAD` request with `x-prerender-revalidate: <token>` will force the asset to be re-validated.
    bypassToken: BYPASS_TOKEN,
 
    // List of valid query parameters. Other parameters (such as utm tracking codes) will be ignored,
    // ensuring that they do not result in content being regenerated unnecessarily
    allowQuery: ['search']
  }
};
```

`expiration` 속성이 필요로 된다.

### Environment variables

Vercel은 <a href="https://vercel.com/docs/projects/environment-variables#system-environment-variables">배포 관련 환경 변수</a> 집합을 사용할 수 있도록 한다. 다른 환경변수 같이 이런 것들은 `$env/static/private`와 `$env/dynamic/private`에서 접근할 수 있고 공공 관계자가 접근할 수 없다. 클라이언트의 이러한 변수에 접근하기 위해서는 :

```
//+layout.server.js
import { VERCEL_COMMIT_REF } from '$env/static/private';
 
/** @type {import('./$types').LayoutServerLoad} */
export function load() {
  return {
    deploymentGitBranch: VERCEL_COMMIT_REF
  };
}

//+layout.svelte
<script>
  /** @type {import('./$types').LayoutServerData} */
  export let data;
</script>

<p>This staging environment was deployed from {data.deploymentGitBranch}.</p>
```

이런 변수들 모두 Vercel에서 빌드될 때 빌드 타임과 런타임 사이에서 변하지 않기 때문에 `$env/dynamic/private`보단 `$env/static/private`를 사용하는 것을 추천한다.

### Notes

**Vercel functions**

프로젝트 루트의 `api` 디렉터리에 포함된 Vercel function를 가지고 있다면, `/api/*`에 대한 모든 요청은 SvelteKit에 의해 핸들링되지 않는다. SvelteKit 앱에서 어느 `/api/*`를 가지고 있지 않음을 확인하는게 필요한 경우 JavaScript가 아닌 언어를 사용하는 것이 필요하지 않다면 SvelteKit app에서 <a href ="https://kit.svelte.dev/docs/routing#server" >API routes</a>로서 이런 것들을 구현해야 한다.

**Node version**

특정 일 이전에 생성도니 프로젝트는 SvelteKit이 Node 16 이상을 필요로 한 동안 기본적으로 Node 14를 사용한다. <a href ="https://vercel.com/docs/functions/serverless-functions/runtimes/node-js#node.js-version">프로젝트 설정에서 노트 버전 변경</a>할 수 있다.

### Troubleshooting

**Accessing the file system**

Serverless/Edge 환경에서 `fs.readFileSync`같은 방법을 통해 파일 시스템에 액세스할 수 없다. 그런 방법으로 파일에 액세스해야 한다면, <U>prerendering</U>을 통한 앱을 빌드하는 동안 해야한다. 예시의 블로그를 가지고 있고 CMS를 통해 컨텐츠를 관리하고 싶지 않다면 컨텐츠를 prerender 하고 새로운 컨텐츠를 추가할때 마다 블로그를 재배포해야한다.

## Writing adapters

선호되는 환경에 대한 어댑터가 아직 존재하지 않는다면 고유한 것을 빌드할 수 있다. 사용자와 유사한 <a href ="https://github.com/sveltejs/kit/tree/master/packages">플랫폼의 어댑터 소스를 보고</a> 시작점으로 복사하는 것이 좋다.
어댑터 패키지는 `<a href = "https://kit.svelte.dev/docs/types#public-types-adapter">Adapter</a>`를 생성하는 다음 API를 구현해야 한다.

```
/** @param {AdapterSpecificOptions} options */
export default function (options) {
  /** @type {import('@sveltejs/kit').Adapter} */
  const adapter = {
    name: 'adapter-package-name',
    async adapt(builder) {
      // adapter implementation
    }
  };

  return adapter;
}
```

`adapt` 방법 내에서 어댑터는 다음과 같은 여러 가지 작업을 수행해야 한다. :

-   빌드 디렉터리를 비우기
-   SvelteKit 결과물을 `build.writeClient`, `build.writeServer`, `builder.write.writePrerendered`와 함께 작성
-   다음과 같은 코드를 출력한다.:
    -   `${builder.getServerDirectory()}/index.js`에서 `<a href="https://kit.svelte.dev/docs/types#public-types-server">Server</a>` 호출
    -   `builder.generateManifest({relativePath})`로 생성된 매니페스트로 앱을 인스턴스화 한다.
    -   플랫폼에서 요청을 듣고, 필요하다면 기본적인 <a href= "https://developer.mozilla.org/en-US/docs/Web/API/Request">요청</a>으로 바꾸고, `<a href="https://developer.mozilla.org/en-US/docs/Web/API/Response">응답</a>`을 생성하고 연관시키는 `server.respond(request,{getClientAddress})` function을 호출한다.
    -   모든 플랫폼 특화 정보를 `server.respond`으로 통과하는 `platform` 옵션을 통해 SvelteKit에 노출한다.
    -   필요하다면, 타겟 플랫폼에서 동작하기 위해 `fetch`를 shim 한다. SvelteKit는 `undici`를 사용할 수 있는 플랫폼을 위한 `@sveltejs/kit/node/polyfills` 헬퍼를 제공한다.
-   필요하다면, 타겟 플랫폼에 의존성을 설치할 필요가 없도록 출력을 번들링한다.
-   사용자의 정적파일과 생성된 JS/CSS를 타겟 플랫폼의 올바른 위치에 넣는다.
    가능한 경우 어댑터 출력을 `build/` 디렉터리 아래에 놓고 중간 출력 `.svelte-kit/[adapter-name]` 아래에 놓는 것이 좋다.

## Advanced routing

### Reset parameters

route segment의 수는 알 수 없다면 나머지 구문을 사용할 수 있다. - 예를 들어 깃허브 파일 뷰어가 다음과 같이 구현되었다면

```
/[org]/[repo]/tree/[branch]/[...file]
```

요청은 결과적으로 페이지에서 다음 매개변수를 사용할 수 있게 된다.

```
{
  org: 'sveltejs',
  repo: 'kit',
  branch: 'master',
  file: 'documentation/docs/04-advanced-routing.md'
}
```

> `src/routes/a/[...rest]/z/+page.svelte`는 `/a/z/` 뿐만 아니라 `/a/b/z` 및 `/a/b/c/z` 등과도 일치하게 된다. 나머지 매개변수의 값이 유효한지 체크해야 한다.

**404 pages**
나머지 매개변수는 또한 커스텀 404를 랜더링하게 한다. 주어진 이런 라우트는

```
src/routes/
├ marx-brothers/
│ ├ chico/
│ ├ harpo/
│ ├ groucho/
│ └ +error.svelte
└ +error.svelte
```

`/marx-brother/karl`에 방문한다면 일치하는 라우트가 없기 때문에 `/marx-borther/+error.svelte` 파일은 렌더링되지 않는다. 중첩된 에러 페이지를 렌더링하고 싶다면 모든 `/marx-brother/*` 요청과 일치한 라우트를 생성해야 하고, 404를 반환해야 한다.

```
src/routes/
├ marx-brothers/
| ├ [...path]/
│ ├ chico/
│ ├ harpo/
│ ├ groucho/
│ └ +error.svelte
└ +error.svelte
```

```
// src/routes/marx-brothers/[...path]/+page.js
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load(event) {
  throw error(404, 'Not Found');
}
```

> 404 케이스를 다루지 않는다면 <a href="https://kit.svelte.dev/docs/hooks#shared-hooks-handleerror">handleError</a>에서 발생할 것이다.

### Optional parameters

`[lang]/home`과 같은 라우트는 필요로 되는 `lang`라고 명명된 매개변수를 포함한다. 때때로 이런 매개변수는 선택적으로 만드는 것이 유익하다. 그래서 이 예시에서는 `home`과 `en/home` 모두 같은 페이지를 가리킨다. 매개 변수를 다른 대괄호 쌍으로 감싸면 이 작업을 수행할 수 있다.:`[[lang]]/home`
매개변수가 _탐욕스럽게_ 일치하고 선택적인 매개변수는 항상 사용되지 않기 때문에 선택적 라우트 매개변수는 나머지 매개변수를 따를 수 없다.

### Matching

`src/routes/archive/[page]`같은 라우트는 `/archive/3`과 일치할 것이지만 `/archive/potato` 와도 일치할 것이다. 라우트 매개변수가 매개변수 문자열을 취해 유효하다면 `true`를 반환하는 *matcher*을 <a href ="https://kit.svelte.dev/docs/configuration#files">params</a> 디렉터리에 추가하고

```
/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return /^\d+$/.test(param);
}
```

경로를 확대해서 잘 구성됨을 확인해야 한다.

```
//X
src/routes/archive/[page]
//O
src/routes/archive/[page=integer]
```

경로 이름이 일치하지 않는다면 SvelteKit는 결국 404를 반환하기 전에 다른 라우트와 매치하려고 시도한다.
matcher를 단위 테스트 하는데 사용될 수 있는 `*.test.js` 및 `*.spec.js` 파일을 제외하고, `params` 디렉터리 내 각 모듈은 matcher에 일치한다.

### Sorting

다중 라우트가 주어진 경로에 일치할 수 있다. 예를 들어 이런 라우트 각각은 `/foo-abc`에 일치한다:

```
src/routes/[...catchall]/+page.svelte
src/routes/[[a=x]]/+page.svelte
src/routes/[b]/+page.svelte
src/routes/foo-[c]/+page.svelte
src/routes/foo-abc/+page.svelte
```

SvelteKit은 어떤 라우트가 필요로 되는지 알 필요가 있다. 그렇게 하려면, 다음규칙을 따라 분류해야 한다.

-   더 많은 특정 라우트는 더 높은 우선 순위다.
-   <a href="https://kit.svelte.dev/docs/advanced-routing#matching">matchers</a>(`[name=type]`)가 있는 매개변수는 (`[name]`)가 없는 것보다 더 높은 우선순위를 가진다.
-   `[[optional]]`과 `[...rest]` 매개변수는 가장 낮은 우선순위로 취급되는 경우 라우트의 최종 부분이 아니면 무시된다. 반면 `x/[[y]]/z`은 정렬을 위해 `x/z`와 동등하게 다뤄진다.
-   묶음은 알파벳 순서로 해결된다.

즉, `/foo-abc`가 `src/routes/foo-abc/+page.svelte`가 호출하고 `/foo-def`가 더 적은 특정 라우트 보다 `src/routes/foo-[c]/+page.svelte`를 호출한다.

### Encoding

일부 문자는 파일 시슽템에서 사용될 수 없다. - 리눅스와 맥에서는 `/`, 윈도우에서는 `\ / : * ? " < > |`. `#`과 `%`는 URL에서 특별한 의미를 가지고, `[ ] ( )` 문자는 SvelteKit에 특별한 의미를 가진다. 그래서 이런 문자들은 라우트의 일부로 직접 사용될 수 없다.
라우트에서 이런 문자들을 사용하기 위해 nn이 16진수 문자 코드이고 `[x+nn]` 형식을 가지는 *16진수 escape sequences*를 사용할 수 있다.

-   `\` — `[x+5c]`
-   `/` — `[x+2f]`
-   `:` — `[x+3a]`
-   `-` — `[x+2a]`
-   `?` — `[x+3f]`
-   `"` — `[x+22]`
-   `<` — `[x+3c]`
-   `>` — `[x+3e]`
-   `|` — `[x+7c]`
-   `#` — `[x+23]`
-   `%` — `[x+25]`
-   `[` — `[x+5b]`
-   `]` — `[x+5d]`
-   `(` — `[x+28]`
-   `)` — `[x+29]`

예를 들어 `/foo/:->` 라우트를 생성하기 위해 `src/routes/foo/[x+3a]-[x+3e]/+page.svelte` 을 생성한다.
JavaScript를 가진 문자에 대해 16진수 코드를 결정한다.

```
':'.charCodeAt(0).toString(16); // '3a', hence '[x+3a]'
```

*Unicode escape sequence*를 사용할 수 있다. 일반적으로 암호화되지 않은 문자를 직접 사용할 수 있으므로 그럴 필요가 없지만 emoji를 가진 파일을 가질 수 없다면 escaped 문자를 사용할 수 있다. 반면, 이것들은 동등하다:

```
src/routes/[u+d83e][u+dd2a]/+page.svelte
src/routes/🤪/+page.svelte
```

*Unicode escape sequence*에 대한 형식은 `nnnn`이 `0000`과 `10ffff`사이의 유효한 값일 때 `[u+nnnn]`이다.

> TypeScript가 앞에 오는 `.` 문자를 가진 디렉터리와 `<a href = "https://github.com/microsoft/TypeScript/issues/13399">씨름하기</a>` 때문에, 작성할 때 이러한 문자를 인코딩하는 것이 유용할 수 있다.

### Advanced layouts

기본적으로 `레이아웃 계층`은 `라우트 계층`을 따른다. 일부 경우, 원하는 경우가 아닐 수 있다.

**(group)**
하나의 레이아웃을 가져야 하는 'app' 경로인 일부 경로와 다른 레이아웃을 가져야 하는 'marketing' 경로가 있다. 이런 라우트를 이름이 괄호로 둘러 쌓인 디렉터리로 그룹화할 수 있다.

```
src/routes/
│ (app)/
│ ├ dashboard/
│ ├ item/
│ └ +layout.svelte
│ (marketing)/
│ ├ about/
│ ├ testimonials/
│ └ +layout.svelte
├ admin/
└ +layout.svelte
```

예를 들어 `/`이 `(app)`이나 `(marketing)` 페이지여야 한다면 `(group)` 내부에 직접 `+page`를 넣을 수 있다.

**Breaking out of layouts**

루트 레이아웃은 앱의 모든 페이지에 적용된다 - 생략된 경우 기본 값은 `<slot />`이다. 일부 페이지의 레이아웃 계층을 나머지 페이지와 다르게 하려면 공통 레이아웃을 상속하지 않는 경로를 제외한 전체 앱을 하나 이상의 그룹에 넣을 수 있다.

**+page@**

페이지는 경로별로 현재 레이아웃 계층에서 벗어날 수 있다. 이전 예시에서 `(app)` 그룹 내부의 `/item/[id]/embed` 라우트를 가지고 있다고 가정하자:

```
src/routes/
├ (app)/
│ ├ item/
│ │ ├ [id]/
│ │ │ ├ embed/
│ │ │ │ └ +page.svelte
│ │ │ └ +layout.svelte
│ │ └ +layout.svelte
│ └ +layout.svelte
└ +layout.svelte
```

원래, 루트 레이아웃, `(app)` 레이아웃, `item` 레이아웃과 `[id]` 레이아웃을 상속받는다. `@` 다음에 세그먼트 이름을 추가하여 이러한 레이아웃 중 하나로 재설정할 수 있다. 이 예시에서, 다음 옵션을 선택할 수 있다.

-   `+page@[id].svelte` : `src/routes/(app)/item/[id]/+layout.svelte`로 부터 상속받는다.
-   `+page@item.svelte` : `src/routes/(app)/item/+layout.svelte`로 부터 상속받는다.
-   `+page@(app).svelte` : `src/routes/(app)/+layout.svelte`로 부터 상속받는다.
-   `+page@.svelte` : `src/routes/+layout.svelte`로 부터 상속받는다.

**+layout@**

페이지와 마찬가지로 레이아웃도 동일한 기술을 사용하여 상위 레이아웃 계층에서 벗어날 수 있다. 예를 들어, `+layout@.svelte` 컴포넌트는 모든 하위 라우트에 대해 계층을 재설정할 수 있다.

```
src/routes/
├ (app)/
│ ├ item/
│ │ ├ [id]/
│ │ │ ├ embed/
│ │ │ │ └ +page.svelte  // uses (app)/item/[id]/+layout.svelte
│ │ │ ├ +layout.svelte  // inherits from (app)/item/+layout@.svelte
│ │ │ └ +page.svelte    // uses (app)/item/+layout@.svelte
│ │ └ +layout@.svelte   // inherits from root layout, skipping (app)/+layout.svelte
│ └ +layout.svelte
└ +layout.svelte
```

**When to use layout groups**

모든 유스케이스가 레이아웃 그룹화에 적합한 것은 아니며, 사용할 필요가 없다고 느껴서도 안된다. 유스케이스가 복합한 `(group)` 중첩이나 하나의 이상치에 대해 `(group)`을 소개하지 않으려는 것을 초래한다. 원하는 것을 달성하기 위해 합성이나 if 구문과 같은 다른 수단을 사용하는 것은 완벽하게 좋다. 다음 예제에서는 루트 레이아웃으로 되감기하고 다른 레이아웃에서도 사용할 수 있는 컴포넌트 및 functions을 재사용하는 레이아웃을 보여준다.:

```
// +layout@.svelte
<script>
  import ReusableLayout from '$lib/ReusableLayout.svelte';
  export let data;
</script>

<ReusableLayout {data}>
  <slot />
</ReusableLayout>

// +layout.js
import { reusableLoad } from '$lib/reusable-load-function';
 
/** @type {import('./$types').PageLoad} */
export function load(event) {
  // Add additional logic here, if needed
  return reusableLoad(event);
}
```

## Hooks

'Hooks'는 SvelteKit가 특정 이벤트에 응답하여 호출한다고 선언하는 앱 전체 function으로 프레임워크의 동작을 세분화하여 제어할 수 있다.
둘 모두 선택적인 hook 파일이 있다. :

-   `src/hooks.server.js` : 앱의 서버 hooks
-   `src/hooks.client.js` : 앱의 클라이언트 hooks

이러한 모듈의 코드는 애플리케이션이 시작될 때 실행되므로 데이터베이스 클라이언트를 초기화하는데 유용하다.

> 이러한 파일의 위치를 <a href ="https://kit.svelte.dev/docs/configuration#files">config.kit.files.hooks</a>로 구성할 수 있다.

### Server hooks

다음 hooks은 `src/hooks.server.js`에 추가될 수 있다.

**handle**

이 functions은 SvelteKit 서버가 응답을 받을 때마다 실행되며(앱이 실행되는 중에 발생하는지 prerendering 중에 발생하는지), 응답을 결정한다. 라우ㅡ를 렌더링하고 `Response`를 생성하며 `resolve`로 불리는 function과 요청을 나타내는 `event` 객체를 받는다. 응답 헤더나 바디를 변경하거나 SvelteKit 전체를 우회하도록 한다.

```
// src/hooks.server.js
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/custom')) {
    return new Response('custom response');
  }
 
  const response = await resolve(event);
  return response;
}
```

> 이미 prerendering된 페이지를 포함하는 정적 자산에 대한 요청은 SvelteKit에 의해 핸들링 되지 않는다.

구현되지 않았다면 기본적으로 `({event, resolve}) => resolve(event)`이다. 커스텀 데이터를 `+server.js`의 핸들러와 서버 `load` functions로 통과하는 요청에 추가하려면, `event.device` 객체를 채워야 한다.

```
// src/hooks.server.js
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  event.locals.user = await getUserInformation(event.cookies.get('sessionid'));
 
  const response = await resolve(event);
  response.headers.set('x-custom-header', 'potato');
 
  return response;
}
```

다중 `handle` function을 정의하고 <a href = "https://kit.svelte.dev/docs/modules#sveltejs-kit-hooks">sequence helper function</a>로 실행할 수 있다.
`resolve`는 응답을 렌더링하는 방법을 보다 자세히 제어할 수 있는 두 번째, 선택적 매개변수를 지원한다. 그 매개변수는 다음 필드를 가진 객체다 :

-   `transformPageChunk(opts: { html: string, done: boolean }): <a href = "https://kit.svelte.dev/docs/types#private-types-maybepromise">MaybePromise</a><string | undefined>` : 커스텀 변형을 HTML에 적용한다. `done`이 true라면, 마지막 chunk다. Chunks는 잘 형성된 HTML로 보장되지 않지만, `%sveltekit.head%` 또는 layout/page 컴포넌트와 같은 합리적인 경계에서 항상 분할된다.
-   `filterSerializedResponseHeader(name: string, value: string): boolean` : `load` function이 `fetch`를 가진 자원을 로드할 때, 어떤 헤더가 나열된 응답에 포함될 수 있는지 결졍한다. 기본적으로 아무것도 포함되지 않는다.
-   `preload(input: { type: 'js' | 'css' | 'font' | 'asset', path: string}): boolean` : `<head>` 태그에 추가할 파일을 미리 로드할 파일을 결정한다. 이 메서드는 코드 청크를 구성하는 동안 빌드 시에 발견된 각 파일과 함께 호출된다. 빌드 시 발생하는 분석에 따라 달리지기 때문에 개발 모드에서 `preload`가 호출되지 않는다. 프리로딩은 자산을 더 빨리 다운로드 해서 성능을 향상시킬 수 있지만 불필요하게 너무 많이 다운로드되면 손상이 될 수 있다. 기본적으로 `js`와 `css` 파일은 프리로딩된다. `asset` 파일은 현재 전혀 프리로딩 되지 않지만 피드백 평가 후에 이를 추가할 수 있다.

```
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('old', 'new'),
    filterSerializedResponseHeaders: (name) => name.startsWith('x-'),
    preload: ({ type, path }) => type === 'js' || path.includes('/important/')
  });
 
  return response;
}
```

`resolve(...)`은 절대 error를 throw하지 않고 항상 적절한 상태 코드를 가진 `Promise<Response>`를 반환한다. 에러가 `handle`동안 어디서든 발생하면, 치명적인 것으로 취급되고, SvelteKit는 `Accept` 헤더에 따라 오류에 대한 JSON 표현 또는 src/error.html을 통해 커스텀할 수 있는 fallback error 페이지로 응답한다. 오류 처리에 대한 자세한 내용은 <a href = "https://kit.svelte.dev/docs/errors">여기</a>에서 확인할 수 있다.

**handleFetch**

이 function은 서버에서 실행하는 `load`나 `action` function 내부에서 발생하는 `fetch` 요청을 변경토록 한다.
예를 들어 `load` function은 사용자가 해당 페이지로 클라이언트 측 탐색을 수행할 때 공용 URL으로의 요청을 만들지만 SSR 동안 API를 직접 입력하는 것이 합리적일 수 있다.

```
/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
  if (request.url.startsWith('https://api.yourapp.com/')) {
    // clone the original request, but change the URL
    request = new Request(
      request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'),
      request
    );
  }
 
  return fetch(request);
}
```

_<U>Credentials</U>_
동일 origin 요청의 경우, SvelteKit의 `fetch` 구현은 `credentials` 옵션이 `"omit"`이 설정되지 않았다면 `cookie`와 `authorization` 헤더를 전달한다.
cross-origin 요청의 경우, 요청된 URL이 앱의 하위 도메인에 속한다면 `cookie`는 포함된다.
앱과 API의 자매 하위 도메인일 경우, SvelteKit는 쿠키가 어떤 도메인에 속하는지 알 수 없기 때문에 공통 부모 도메인에 속한 쿠키는 포함되지 않는다. 이 경우 `handleFetch`를 사용해서 쿠키를 수동으로 포함할 필요가 있다.

```
/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ event, request, fetch }) {
  if (request.url.startsWith('https://api.my-domain.com/')) {
    request.headers.set('cookie', event.request.headers.get('cookie'));
  }
 
  return fetch(request);
}
```

### Shared hooks

다음은 `src/hooks.server.js`와 `src/hooks.client.js`에 추가된다.

**handleError**

예상치 않은 에러가 로딩이나 렌더링동안 발생하면 이 function은 `error`과 `event`로 호출된다. 두 가지를 허용한다. :

-   오류를 기록할 수 있다.
-   메시지 및 스택 추적과 같은 중요한 세부 정보를 생략하고 사용자에게 안전하게 표시할 수 있는 오류에 대한 커스텀 표현을 생성할 수 있습니다. 반환 값은 `$page.error`의 값이 된다. 404인 경우 `{ message: 'Not Found'}`이 기본 값이고, 그 외 모든 경우에는 `message : 'Internal Error'}`이 기본 값이다. type-safe하게 만들려면 `App.Error` 인터페이스를 선언해서 예상된 모양을 커스텀할 수 있다.

다음 코드는 에러 모양을 `{ message: string; errorId: string}`으로 입력하고 `handleError` function에서 반환하는 예를 보여준다.

```
// src.app.d.ts
declare global {
  namespace App {
    interface Error {
      message: string;
      errorId: string;
    }
  }
}
 
export {};

// src/hooks.server.js
import * as Sentry from '@sentry/node';
import crypto from 'crypto';
 
Sentry.init({/*...*/})
 
/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error, event }) {
  const errorId = crypto.randomUUID();
  // example integration with https://sentry.io/
  Sentry.captureException(error, { extra: { event, errorId } });
 
  return {
    message: 'Whoops!',
    errorId
  };
}

// src/hooks.client.js
import * as Sentry from '@sentry/svelte';
 
Sentry.init({/*...*/})
 
/** @type {import('@sveltejs/kit').HandleClientError} */
export async function handleError({ error, event }) {
  const errorId = crypto.randomUUID();
  // example integration with https://sentry.io/
  Sentry.captureException(error, { extra: { event, errorId } });
 
  return {
    message: 'Whoops!',
    errorId
  };
}
```

> `src/hooks.client.js`에서 `handleError`의 유형은 `<a href = "https://kit.svelte.dev/docs/types#public-types-handleservererror">HandleServerError</a>` 대신 `<a href="https://kit.svelte.dev/docs/types#public-types-handleclienterror">HandleClientError</a>`이고, `event`는 `<a href ="https://kit.svelte.dev/docs/types#public-types-requestevent">RequestEvent</a>`보단 `<a href = "https://kit.svelte.dev/docs/types#public-types-navigationevent">NavigationEvent</a>`이다.

이 function은 _예상된_ 에러에 대해 호출되지 않는다.
개발 동안, 에러는 Svelte 코드에서 syntax error 때문에 발생하면, 전달된 오류에는 오류의 위치를 강조하는 `frame` 속성이 추가된다.

> `handleError`은 절대 throw 되지 않는다는 것을 확인한다.

## Errors

에러는 소프트웨어 개발의 피할 수 없는 사실이다. SvelteKit는 오류가 발생하는 위치, 오류 종류 및 수신 요청의 성격에 따라 오류를 다르게 처리한다.

### Error objects

SvelteKit은 예상된 오류와 예상하지 못한 오류를 구분하며 기본적으로 두 오류 모두 단순한 `{message : string}` 객체로 표시된다. `code`나 추적하는 `id` 같은 추가 속성을 추가할 수 있다.

### Expected errors

_예상한_ 에러는 `@sveltejs/kit`에서 가져온 에러 헬퍼를 사용하여 생성된 오류다.

```
// src/routes/blog/[slug]/+page.server.js
import { error } from '@sveltejs/kit';
import * as db from '$lib/server/database';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const post = await db.getPost(params.slug);
 
  if (!post) {
    throw error(404, {
      message: 'Not found'
    });
  }
 
  return { post };
}
```

그러면 SvelteKit가 응답 상태 코드를 404로 설정하고 `+error.svelte` 컴포넌트를 렌더링하도록 합니다. 여기서 `$page.error`는 `error(...)`의 두 번째 인수로 제공된 개체입니다.

```
// +errror.svelte
<script>
  import { page } from '$app/stores';
</script>

<h1>{$page.error.message}</h1>
```

필요하다면 추가 속성을 에러 객체에 추가할 수 있다.

```
throw error(404, {
  message: 'Not found',
	code: 'NOT_FOUND'
});
```

그렇지 않다면, 편의를 위해, 두번째 인자로 문자열을 전달할 수 있다.

```
//X
throw error(404, {message : 'Not found});
//O
throw error(404, 'Not found');
```

### Unexpected errors

_예상치 못한_ 에러는 요청을 처리하는 동안 발생하는 다른 예외다. 이러한 오류에는 중요한 정보가 포함될 수 있으므로 사용자에게 예상치 못한 오류 메시지와 스택 추적이 노출되지 않는다.
기본적으로 사용자에게 노출되는 오류는 일반적인 모양인 반면 예기치 않은 오류는 콘솔에 인쇄된다.

```
{ "message" : "Internal Error"}
```

예상치 못한 에러는 handleError hook을 통해 발생하며, 이 후크에서는 자신의 오류 처리를 추가할 수 있다.

```
// src/hooks.server.js
import * as Sentry from '@sentry/node';
 
Sentry.init({/*...*/})
 
/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {
  // example integration with https://sentry.io/
  Sentry.captureException(error, { extra: { event } });
 
  return {
    message: 'Whoops!',
    code: error?.code ?? 'UNKNOWN'
  };
}
```

### Responses

`handle`이나 +server.js 요청 핸들러 내부에서 에러가 발생한다면, SvelteKit는 요청의 `Accept` 헤더에 따라 fallback error 에러나 에러 객체의 JSON 표현으로 응답한다.
`src/error.html`파일을 추가해서 fallback error page을 커스텀할 수 있다.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>%sveltekit.error.message%</title>
  </head>
  <body>
    <h1>My custom error page</h1>
    <p>Status: %sveltekit.status%</p>
    <p>Message: %sveltekit.error.message%</p>
  </body>
</html>
```

SvelteKit는 `%sveltekit.status%`와 `%sveltekit.error.message%`을 일치하는 값으로 대체한다.
페이지를 렌더링하는 동안 `load` function 내부에서 오류가 발생하면 SvelteKit는 오류가 발생한 위치에 가장 가까운 +error.svelte 컴포넌트를 렌더링한다. `+layout(.server).js`의 `load` function 내부에서 오류가 발생하면 트리에서 가장 가까운 에러 경계는 레이아웃 위의 `+error.svelte`다.
루트 레이아웃에 일반적으로 +error.svelte 컴포넌트가 포함되므로 루트 `+layout.js` 또는 `+layout.server.js` 내부에서 오류가 발생하는 경우는 예외다. 이 경우 SvelteKit는 fallback error 페이지를 사용한다.

### Type safety

TypeScript를 사용하고 있고 오류의 모양을 커스텀해야 하는 경우 `App.Error`을 선언하여 커스텀할 수 있다.

```
declare global {
  namespace App {
    interface Error {
			code: string;
			id: string;
    }
  }
}

export {};
```

이 인터페이스는 항상 `message: string` 속성을 포함한다.

## Link options

SvelteKit에서 `<a>` 요소는 앱의 라우트 간 이동하는데 사용된다. 사용자가 `href`가 app에 의해 '소유된' 링크를 클릭한다면 SvelteKit은 코드를 가져오고 데이터를 fetch가 필요로 되는 모든 `load` function을 호출하는 새로운 페이지로 이동한다.
`data-sveltekit-*` 속성을 가진 링크의 행동을 커스텀 할 수 있다. 이는 `<a>` 자체나 부모 속성에 적용될 수 있다.
이 옵션은 GET method 인 `<form>` 요소에 적용할 수 있다.

### data-sveltekit-preload-data

사용자가 링크를 클릭한 것을 브라우저가 등록하기 전에, 마우스를 올렸는거나 `touchsmart`나 `mousedown` 이벤트가 발생한 것을 감지한다. 두 경우에서 `click` 이벤트가 발생할 것이라는 학습된 추측을 할 수 있다.
SvelteKit는 이 정보를 사용하여 코드를 가져오고 페이지의 데이터를 가져오는 작업을 먼저 시작할 수 있으며, 이를 통해 수백 밀리초의 추가 시간을 얻을 수 있다.
두 개의 값 중 하나를 가진 `data-sveltekit-preload-data` 속성을 가진 동작을 제어할 수 있다.:

-   `"hover"`은 링크 위에 마우스가 멈출때 프리로딩이 시작된다는 것을 의미한다. 모바일에서는 `touchsmart`일 때 시작한다.
-   `"tap"`은 `touchsmart`나 `mousedown` 이벤트가 등록되자마자 프리로딩이 시작된다는 것을 의미한다.
    기본 프로젝트 템플릿은 `src/app.html`에서 `<body>`에 적용된 `data-sveltekit-preload-data = "hover"` 속성을 가졌다. 즉, 모든 링크는 기본적으로 호버되면 프리로딩된다.

```
<body data-sveltekit-preload-data="hover">
  <div style="display: contents">%sveltekit.body%</div>
</body>
```

때때로, 사용자가 링크에 호버할 때 `load`를 호출하는 것은 가짜 긍정을 초래하거나 데이터가 너무빨리 업데이트되고 딜레이가 오래 걸릴 수 있기 때문에 불필요할 수 있다.
이런 경우에는 SvelteKit이 사용자가 링크를 클릭했을때만 `load`를 호출하도록 하는 `"tap"`값을 지정할 수 있다.

```
<a data-sveltekit-preload-data="tap" href="/stonks">
  Get current stonk values
</a>
```

> 프로그래밍 방식으로 `$app/navigation`에서 `preloadData`를 호출할 수 있다.

### data-sveltekit-preload-code

링크에 대해 데이터를 프리로딩하고 싶지 않은 경우에도 코드를 프리로딩하는게 유용할 수 있다. `data-sveltekit-preload-code` 속성은 네 가지중 하나를 가지는 경우를 제외하고 `data-sveltekit-preload-data`처럼 동작한다.:

-   `"eager"` : 바로 프리로딩되는 링크
-   `"viewport"` : viewport에 한번 방문하면 프리로딩 되는 링크
-   `"hover"` : 코드만 프리로딩되는 것을 제외하고 `data-sveltekit-preload-data`에서처럼 동작한다.
-   `"tap"` : 코드만 프리로딩되는 것을 제외하고 `data-sveltekit-preload-data`에서처럼 동작한다.

`viewport`와 `eager`은 이동 직후 DOM에 있는 링크에만 적용된다. 이는 변경 사항에 대한 DOM을 적극적으로 관찰함으로써 발생하는 성능 저하를 방지하기 위한 것이다.

> 프리로딩 코드는 데이터 프리로딩의 전제조건이기때문에 이 속성은 존재하는 모든 `data-sveltekit-preload-data` 속성보다 더 열망적인 값을 지정하는 경우에만 미친다.

### data-sveltekit-reload

우연히 SvelteKit에게 링크를 처리하지 말고 브라우저가 링크를 처리하도록 해야 한다.

```
<a data-sveltekit-reload href="/path">Path</a>
```

`data-sveltekit-reload` 속성을 링크에 추가하는 것은 링크가 클릭되면 전체 페이지 이동을 발생시킨다.
`rel="external"` 속성을 가진 링크는 같은 처리를 받는다. 게다가, 프리렌더링 동안 무시된다.

### data-sveltekit-replacestate

때때로 이동을 통해 브라우저의 세션 기록에 새 항목이 생성되지 않도록 할 수 있다.

```
<a data-sveltekit-replacestate href="/path">Path</a>
```

링크에 `data-sveltekit-replacestate` 추가하는 것은 새로운 것을 생성하는 것보다 현재 `history` 엔트리를 링크가 클릭되면 `pushState`로 대체한다.

### data-sveltekit-keepfocus

이동 후에 포커스를 재설정하고 싶지 않을 때가 있다. 예를 들어 사용자가 입력할 때 제출하는 검색폼을 가지고 있고 텍스트 입력에 포커스를 맞추고 싶다.

```
<form data-sveltekit-keepfocus>
  <input type="text" name="query">
</form>
```

`data-sveltekit-keepfocus` 속성을 추가하는 것은 이동후에도 현재 포커싱된 요소가 포커스를 유지하도록 한다. 일반적으로 포커싱된 요소는 `<a>` 태그와 화면 판독기가 될 수 있고 다른 보조 기술 사용자들은 종종 이동 후 포커스가 이동될 것으로 예상하기 때문에 링크에서 이 속성을 사용하는 것을 피해야 한다. 이동 후에도 유지하길 원하는 요소에만 이 속성을 사용해야 한다. 더 이상 요소가 존재하지 않는다면, 사용자의 포커스는 소실되어 보조 기술 사용자에게 혼란스러운 경험을 제공한다.

### data-sveltekit-noscroll

내부 링크로 이동할 때, SvelteKit는 브라우저의 기본 이동 동작을 따라한다: 스크롤 위치를 0,0으로 바꿔서 사용자가 페이지의 최상단 좌측에 위치하도록 한다.
특정 케이스에서 이 동작을 비활성화 하고 싶을 수 있다.

```
<a href="path" data-sveltekit-noscroll>Path</a>
```

`data-sveltekit-noscroll`을 추가하는 것은 링크 클릭 후에 스크롤을 방지한다.

### Disabling options

활성화된 요소 내에서 이러한 옵션을 비활성화 하려면, `false` 값을 사용해야 한다:

```
<div data-sveltekit-preload-data>
  <!-- these links will be preloaded -->
  <a href="/a">a</a>
  <a href="/b">b</a>
  <a href="/c">c</a>

  <div data-sveltekit-preload-data="false">
    <!-- these links will NOT be preloaded -->
    <a href="/d">d</a>
    <a href="/e">e</a>
    <a href="/f">f</a>
  </div>
</div>
```

요소에 속성을 조건부로 적용하려면 이렇게 하면된다.

```
<div data-sveltekit-reload={shouldReload}>
```

## Service workers

서비스 워커는 앱 내부에서 네트워크 요청을 다루는 프록시 서버처럼 행동한다. 이는 오프라인에서 앱이 동작하도록 만들지만 오프라인을 지원하는 것이 필요하지 않더라도 내장된 JS와 CSS를 precaching하면서 탐색 속도를 향상시키는데 서비스 워커를 사용하는 것이 유용할때도 있다.
SvelteKit에서 `src/service-worker.js`가 있다면 번들링되고 자동으로 등록된다. 필요하다면 `<a href = "https://kit.svelte.dev/docs/configuration#files">서비스 워커의 위치</a>`는 바뀐다.
고유한 로직을 가진 서비스워커를 등록하거나 다른 방법을 사용해야 한다면 `<a href="https://kit.svelte.dev/docs/configuration#serviceworker">자동 등록 비활성화</a>`할 수 있다. 기본 등록은 이처럼 보인다:

```
if ('serviceWorker' in navigator) {
  addEventListener('load', function () {
    navigator.serviceWorker.register('./path/to/service-worker.js');
  });
}
```

### Inside the service worker

서비스 워커 내부에서 모든 정적 자산, 빌드파일 및 prerendering된 페이지에 대한 경로를 제공하는 <a href="https://kit.svelte.dev/docs/modules#$service-worker">$service-worker module</a>에 액세스할 수 있다. 고유 캐시 이름을 생성하는데 사용할 수 있는 앱의 버전 문자열과 배포의 `base` 경로도 제공된다. Vite 구성이 `define`을 지정한다면, 서비스 워커와 서버/클라이언트 빌드에 적용된다.
다음 예시는 설치된 앱과 `static`의 모든 파일을 캐시하고 다른 모든 요청이 발생할 때 캐시한다. 이렇게 하면 일단 방문ㄴ하면 각 페이지가 오프라인으로 작동한다.

```
/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
  ...build, // the app itself
  ...files  // everything in `static`
];

self.addEventListener('install', (event) => {
  // Create a new cache and add all files to it
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }

  event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
  // Remove previous cached data from disk
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key);
    }
  }

  event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
  // ignore POST requests etc
  if (event.request.method !== 'GET') return;

  async function respond() {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    // `build`/`files` can always be served from the cache
    if (ASSETS.includes(url.pathname)) {
      return cache.match(url.pathname);
    }

    // for everything else, try the network first, but
    // fall back to the cache if we're offline
    try {
      const response = await fetch(event.request);

      if (response.status === 200) {
        cache.put(event.request, response.clone());
      }

      return response;
    } catch {
      return cache.match(event.request);
    }
  }

  event.respondWith(respond());
});
```

> 캐시할 때 주의해! 일부 경우에는 오래된 데이터가 오프라인 상태에서 사용할 수 없는 데이터보다 더 나쁠 수 있다. 브라우저에서 캐시가 너무 가득 차면 캐시가 비워지기 때문에 비디오 파일과 같은 대용량 자산을 캐싱하는 것도 주의해야 한다.

### During development

서비스 워커는 개발 동안이 아닌 프로덕션동안 번들링된다. 그 이유로 서비스 워커의 모듈을 지원하는 브라우저만 개발 동안 사용할 수 있다. 서비스 워커를 수동으로 등록하는 경우, 개발때 `{type : 'module'}` 옵션을 통과할 필요가 있다.

```
import { dev } from '$app/environment';

navigator.serviceWorker.register('/service-worker.js', {
  type: dev ? 'module' : 'classic'
});
```

> `build`와 `prerendered`는 개발동안 빈 배열이다.

### Type safety

서비스 워커에게 적절한 타입을 설정하려면 일부 수동 설정이 필요하다. `service-worker.js` 내부에서 파일에 최상단에 다음을 추가해야 한다.

```
/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = /** @type {ServiceWorkerGlobalScope} */ (/** @type {unknown} */ (self));
```

그러면 서비스 워커 내부에서 사용할 수 없는 `HTMLElement`와 같은 DOM 형식에 대한 액세스가 비홀성화되고 올바른 전역변수가 인스턴스화 된다.

### Other solutions

SvelteKit의 서비스 워커 구현은 고의로 낮은 계층이다. 보다 본격적이지만 보다 전문적인 솔루션이 필요한 경우 Workbox을 사용하는 Vite PWA plugin과 같은 솔루션을 검토하는 것이 좋다. 서비스워커의 더많은 일반적인 정보에 대해 <a href ="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers">MDN 웹 문서</a>를 추천한다.

## Server-only modules

좋은 친구처럼 스벨트키트는 비밀을 지킨다. 동일한 저장소에 백엔드와 프론트엔드를 작성할 때 중요한 데이터를 프론트엔드 코드(예: API 키를 포함하는 환경 변수)로 실수로 가져오기가 쉬울 수 있다. 스벨트키트는 이를 완전히 방지하는 방법을 제공한다. 서버 전용 모듈이다.

### Private environment variables

모듈 구역에 커버된 `$env/static/private`와 `$env/dynamic/private` 모듈은 hooks.server.js나 +page.server.js같은 서버에서만 돌아가는 모듈에만 가져와질 수 있다.

### Your modules

두 가지 방법으로 모듈을 서버에서만 동작하도록 만들 수 있다:

-   `.server`을 파일 이름에 추가하기
-   `$lib/server`에 놓기

### How it works

서버 전용 코드를 가져오는 일반적인 코드가 있을 때마다, SvelteKit는 오류가 발생된다.

```
// $lib/server/secrets.js
export const atlantisCoordinates = [/* redacted */];

// src/routes/utils.js
export { atlantisCoordinates } from '$lib/server/secrets.js';
 
export const add = (a, b) => a + b;

// src/routes/+page.svelte
<script>
  import { add } from './utils.js';
</script>

//ERROR
Cannot import $lib/server/secrets.js into public-facing code:
- src/routes/+page.svelte
  - src/routes/utils.js
    - $lib/server/secrets.js
```

public-facing 코드가 `add` 내보내기만 사용하고 비밀 `atlantisCoordinates` 내보내기를 사용하지 않더라도 비밀 코드는 브라우저가 다운로드 하는 JavaScript로 끝날 수 있으므로 가져오기 체인은 안전하지 않을 것으로 간주된다.
이 특징은 동적 가져오기, 심지어 `await import('./${foo}.js')와 같은 삽입된 가져오기에서도 동작하며 작은 주의 사항은 다음과 같다: 개발 중에 public-facing 코드와 서버 전용 모듈 사이에 둘 이상의 동적 가져오기가 있는 경우 코드가 처음 로드될 때 허락되지 않은 가져오기가 감지되지 않는다.

> Vitest와 같은 단위 테스트 프레임워크는 서버 전용 코드와 public-facing 코드를 구분하지 않기 때문에 `process.env.TEST === 'true'`에 의해 결정되는 것처럼 테스트를 실행할 때 허락되지 않은 가져오기 탐지가 비활성화 된다.

## Asset handling

### Caching and inlining

향상된 성능을 위해 <a href ="https://vitejs.dev/guide/assets.html">Vite는 자동으로 가져온 자산을 처리한다.</a> 해시는 이름에 추가돼서 캐시되고 `assetsInlineLimit`보다 작은 자산은 한 줄로 표시될 것이다.

```
<script>
  import logo from '$lib/assets/logo.png';
</script>

<img alt="The project logo" src={logo} />
```

마크업에 직접 자산을 참조하길 원한다면, <a href ="https://github.com/bluwy/svelte-preprocess-import-assets">svelte-preprocess-import-assets</a>같은 전처리기를 사용할 수 있다.
CSS `url()` 함수를 통해 포함된 자산에 대해 <a href="https://kit.svelte.dev/docs/integrations#preprocessors-vitepreprocess">vitePreprocess</a>가 유용하다는 것을 알 수 있다.
이미지를 `.webp` 또는 `.avif`와 같은 압축 이미지 형식, 다른 장치에 대해 다른 크기의 응답 이미지 또는 개인 정보 보호를 위해 제거된 EXIF 데이터가 있는 이미지를 출력하도록 변환할 수 있다. 정적으로 포함된 이미지의 경우 <a href="https://github.com/JonasKruckenberg/imagetools">vite-imagetools</a>와 같은 Vite 플러그인을 사용할 수 있다. 또한 `Accept` HTTP 헤더 및 쿼리 문자열 매개 변수를 기반으로 적절한 변환 이미지를 제공할 수 있는 CDN을 고려할 수 있다.

## Snapshots

일시적인 DOM 상태는 다른 페이지로 이동할 때 버려진다.
예를 들어, 사용자는 양식을 작성하지만 제출하기 전에 링크를 클릭한 다음 브라우저의 뒤로 가기 버튼을 누르면 입력한 값이 손실된다. 해당 입력을 보존하는 것이 중요한 경우 DOM 상태의 *snapshot*을 찍을 수 있으며, 이 *snapshot*은 사용자가 다시 탐색하면 복원될 수 있다.
이를 하기 위해 `+page.svelte`나 `+layout.svelte`의 `capture`과 `restore` 메서드를 가진 `snapshot` 객체를 내보내야 한다:

```
// +page.server
<script>
  let comment = '';

  /** @type {import('./$types').Snapshot<string>} */
  export const snapshot = {
    capture: () => comment,
    restore: (value) => comment = value
  };
</script>

<form method="POST">
  <label for="comment">Comment</label>
  <textarea id="comment" bind:value={comment} />
  <button>Post comment</button>
</form>
```

이 페이지에서 다른 곳으로 이동할 때, `capture` 함수는 페이지 업데이트 바로 전에 호출되고, 반환 값은 브라우저의 히스토리 스택의 현재 항목과 관련있다. 다시 돌아온다면, `restore` 함수는 페이지가 업데이트 되자마자 저장된 값을 가지고 호출된다.
데이터를 `sessionStorage`로 유지하려면 JSON으로 직렬화할 수 있어야 한다. 상태가 페이지가 리로드되거나 사용자가 다른 사이트에서 다시 돌아올 때 복구되도록 한다.

> `capture`에서 엄청 큰 객체를 반환하면 안된다. - 한번 캡쳐되면, 객체는 세션이 있는 동안 유지된다. 그리고 극한의 경우 너무 커서 `sessionStorage`를 유지할 수 없다.

## Packaging

`@sveltejs/package` 패키지를 사용하며 앱과 컴포넌트 라이브러리를 사용할 SvelteKit을 사용할 수 있다.
앱을 생성할 때, `src/routes`의 컨텐츠는 public-facing stuff다.
컴포넌트 라이브러리는 `src/lib`가 공용 비트이고 루트 `package.json`이 패키지를 퍼블리시하는데 사용된다는 점을 제외하고 SvelteKit 앱과 완전히 동일한 구조를 가진다. `src/routes`는 라이브러리를 동반하는 공식문서나 데모 사이트일 수 있거나 개발동안 사용하는 샌드박스일 수 있다.
`@sveltejs/package`의 `svelte-package` 명령어를 수행하는 것은 `src/lib`의 컨텐츠를 취하고 다음을 포함하는 `dist` 디렉터리를 생성한다:

-   `src/lib`의 모든 파일. Svelte 컴포넌트는 전처리되고, TypeScript 파일은 JavaScript로 변환된다.
-   Svelte, JavaScript, TypeScript 파일에 대해 생성된 타입 정의. 이를 `typescript >= 4.0.0`으로 설치해야 한다. 타입 정의는 구현 옆에 배치되고, 작성한 `d.ts` 파일이 그대로 복사된다. `생성 비활성화`할 수 있지만, 하지 않는 것을 강력히 추천한다.
    > `package.json`을 생성한 `@sveltejs/package` 버전 1. 이는 더 이상 해당되지 않으며 이제 프로젝트의 `package.json`을 사용하고 대신 정확한지 확인한다. version 1에 아직도 있는 경우 마이그레이션 지침은 <a href="https://github.com/sveltejs/kit/pull/8922">이 PR</a>을 참조해

## Anatomy of a package.json

공적인 목적으로 라이브러리를 빌드하고 있기 때문에, `package.json`의 컨텐츠는 더 중요해진다. 어떤 파일이 npm에 퍼블리시되는지, 라이브러리가 어떤 의존성을 가지는지 구성하고 패키지의 엔트리 포인트를 구성한다.

**name**

패키지의 이름이다. 다른 사람들이 그 이름을 사용해 설치할 수 있고, `http://npmjs.com/package/<name>`에서 볼 수 있다.

```
{
  "name": "your-library"
}
```

**license**

모든 패키지는 라이선스 필드를 가져야한다. 그래서 사람들이 어떻게 그것을 사용하도록 허락받았는지 안다. 보증 없이 배포 및 재사용 측면에서 매우 허용적이고 매우 인기 있는 라이센스는 `MIT`다.

```
{
  "license": "MIT"
}
```

패키지에 `LICENSE`를 포함해야 한다.

**files**

어떤 파일을 포장하고 npm에 업로드할 것인지 알려준다. 출력 폴더를 포함해야 한다. `package.json`와 `README` 및 `LICENSE`는 항상 포함돼서 그것들을 지정할 필요없다.

```
{
  "files": ["dist"]
}
```

불필요한 파일을 제외하기 위해 `.npmignore`파일에 추가한다. 결과적으로 더 작은 패키지를 만들어 설치하기에 더 빨라진다.

**exports**

`"exports"` 필드는 패키지의 엔트리 포인트를 포함한다. `npm create svelte@latest`를 통해 새 라이브러리 프로젝트를 설정한다면 패키지 루트인 단일 내보내기를 설정한다:

```
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "svelte": "./dist/index.js"
    }
  }
}
```

패키지에 루트라는 하나의 엔트리 포인트만 있고 모든 것이 이를 통해 가져와야 한다는 것을 번들러와 툴링에 알려준다.

```
import { Something } from 'your-library';
```

`type`와 `svlete` 키는 <a href="https://nodejs.org/api/packages.html#conditional-exports">내보내기 조건</a>이다. 라이브러리 가져오기를 찾을 때 가져올 파일이 무엇인지 툴링에 알려준다.

-   TypeScript는 `types` 조건을 보고 타입 정의 파일 찾는다. 타입 정의를 퍼블리시 안한다면 이 조건을 생략한다.
-   Svelte 인식 툴링은 `svelte` 조건을 보고 Svelte 컴포넌트 라이브러리라는 것을 안다. Svelte 컴포넌트를 내보내지 않고 Svelte가 아닌 프로젝트에서도 작동할 수 있는 라이브러리를 게시하는 경우 이 조건을 `default`로 바꿀 수 있다.

> `@sveltejs/package`의 이전버전은 `package.json` 내보내기도 추가했다. 이것은 모든 툴링은 명시적으로 내보내지 않는 `package.json`을 처리할 수 있기 때문에 더이상 템플릿의 일부가 아니다.

`exports`를 선호에 알맞게 조정하고 더 많은 엔트리 포인트를 제공할 수 있다. 예를 들어, 컴포넌트를 다시 내보낸 `src/lib/index.js` 파일 대신 `src/lib/Foo.svelte` 컴포넌트를 직접 노출하려는 경우 다음과 같은 내보내기 맵을 생성하고 라이브러리의 소비자가 컴포넌트를 가져올 수 있다.

```
{
  "exports": {
    "./Foo.svelte": {
      "types": "./dist/Foo.svelte.d.ts",
      "svelte": "./dist/Foo.svelte"
    }
  }
}

import Foo from 'your-library/Foo.svelte';
```

> 타입 정의를 제공한다면 추가적인 케어가 필요하다.
> 일반적으로, 내보내기 맵의 각 키는 사용자가 패키지에서 가져오기 위해 사용할 경로고, 값은 가져올 파일의 경로 또는 이러한 파일의 경로를 포함하는 내보내기 조건의 맵이다.

**svlete**

이 필드는 툴링이 Svelte 컴포넌트 라이브러리를 인식할 수 있도록 해준 레거시 필드다. `svelte` 내보내기 조건을 사용할때 더 이상 필요하지 않지만, 아직 내보내기 조건에 대해 모르는 구식 툴링과의 하위 호환성을 위해서 지속적으로 유지하는 것이 좋다. 루트 엔트리 포인트를 가리켜야 한다.

### TypeScript

라이브러리를 사용할 때 적절한 인텔리센스를 얻기 위해 직접 TypeScript를 사용하지 않더라도 라이브러리에 대한 타입 정의를 보내야 한다.
`@sveltejs/pacakge`는 타입 생성 프로세스를 대부분 불투명하게 만든다. 기본적으로 라이브러리를 패키징할 때 JavaScript, TypeScript 및 Svelte 파일에 대한 것은 내보내기 맵의 `types` 조건이 올바른 파일을 가리키도록 하는 것이다. `npm create svelte@latest`를 통해 라이브러리 프로젝트를 초기화할 때 루트 내보내기에 대해 자동으로 설정된다.
루트 내보내기 이외의 다른 항목이 있는 경우에는 타입 정의를 제공하는 데 추가적인 주의를 기울여야 한다.
불행히도, TypeScript는 기본적으로 `{ "./foo": { "types": "./dist/foo.d.ts", ... }}`과 같은 내보내기 `types` 조건을 해결하지 않는다. 라이브러리 루트와 관련된 `foo.d.ts`를 검색한다. 이를 해결하려면 두 가지 옵션이 있다:

-   첫 번째 옵션은 라이브러리를 사용하는 사용자가 `tsconfig.json`의 `moduleResolution` 옵션을 번들러, Node 16 또는 nodenext로 설정하도록 요구하는 것이다. 이렇게 하면 TypeScript가 실제로 내보내기 맵을 보고 타입을 오바르게 해결하도록 선택된다.
-   두 번째 옵션은 TypeScript의 `TypesVersions` function을 사용하여 유형을 연결하는 것이다. 이것은 TypeScript 버전에 따라 타입 정의를 확인하기 위해 TypeScript가 사용하는 `package.json` 내부 필드이며, 이에 대한 경로 매핑 기능도 포함한다. 이 경로 매핑 기능을 활용하여 원하는 것을 얻는다. 위에서 언급한 `foo` 내보내기의 경우, 해당 `typesVersions`는 다음과 같다:

```
{
  "exports": {
    "./foo": {
      "types": "./dist/foo.d.ts",
      "svelte": "./dist/foo.js"
    }
  },
  "typesVersions": {
    ">4.0": {
      "foo": ["./dist/foo.d.ts"]
    }
  }
}
```

`>4.0` 은 사용된 TypeScript 버전이 4보다 클 경우 TypeScript가 내부 맵을 확인하도록 말한다. 내부 맵은 TypeScript에 `library/foo`에 대한 타이핑이 `./dist/foo.d.ts` 내에서 발견된다는 것을 알려주며, 이는 기본적으로 `exports` 조건을 복제한다. 또한 `*`를 와일드카드로 사용하여 반복하지 않고 여러 타입 정의를 한 번에 사용할 수 있다. `typeVersions`를 선택한 경우 루트 가져오기를 포함하여 모든 형식 가져오기를 선언해야 한다.

### Best practices

패키지에 `$app`과 같은 <a href ="https://kit.svelte.dev/docs/modules">SvelteKit 관련 모듈</a>은 다른 SvelteKit 프로젝트에서만 사용할 수 있도록 의도하지 않는 한 사용을 피해야 한다. `$app/store`, `$app/navigation` 등에 직접 의존하지 않고 현재 URL이나 네비게이션 작업 등을 소품으로 전달 할 수도 있다. 보다 일반적인 방식으로 앱을 작성하면 테스트, UI, 데모 등을 위한 도구를 보다 쉽게 설정할 수 있다.
`svelte.config.js`를 통해 <a href ="https://kit.svelte.dev/docs/configuration#alias">별칭</a>을 추가하여 `svelte-package`로 처리해야 한다.
패키지를 변경한 것이 버그 수정인지, 새로운 기능인지, 아니면 변경 중단인지 신중하게 생각하고 그에 따라 패키지 버전을 업데이트 해야 한다. 기존 라이브러리에서 `exports` 또는 내부의 `export` 조건에서 경로를 제거하면 변경 사항이 발생하는 것으로 간주된다.

```
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
// changing `svelte` to `default` is a breaking change:
			"default": "./dist/index.js"
    },
// removing this is a breaking change:
// adding this is ok:
		"./bar": {
			"types": "./dist/bar.d.ts",
			"svelte": "./dist/bar.js",
			"default": "./dist/bar.js"
		}
  }
}
```

### Options

`svelte-package`는 다음 옵션을 허용한다:

-   `-w`/`--watch` : `src/lib`의 파일에서 변경 사항을 확인하고 패키지를 재구성한다.
-   `-i`/`--input` : 패키지의 모든 파일을 포함하는 input 디렉터리. 기본값은 `src/lib`이다.
-   `-o`/`--output` : 처리된 파일이 기록되는 output 디렉터리. `package.json`의 `export`는 그 안에 있는 파일을 가리키고, 파일 배열은 그 폴더를 포함해야 한다. 기본 값은 `dist`다.
-   `-t`/`--types` : 타입 정의(d.ts 파일)를 만들 것인지의 여부. 생태계 라이브러리 품질을 향상시키므로 이 작업을 수행하는 것이 좋다. 기본 값은 `true`다.

## Publishing

생성된 패키지를 퍼블리시하기:

```
npm publish
```

### Caveats

모든 상대적인 파일 가져오기는 노드의 ESM 알고리즘을 준수하여 완전히 지정해야 한다. 따라서 `src/lib/something/index.js`와 같은 파일의 경우 확장자가 있는 파일의 이름을 포함해야 한다:

```
//X
import { something } from './something';

//O
import { something } from './something/index.js';
```

TypeScript를 사용한다면 `.ts` 파일 ending이 아니라 `.js` 파일 ending을 사용하여 같은 방식으로 `.ts` 파일을 가져와야 한다.
`tsconfig.json` 또는 `jsconfig.json`에서 `"moduleResolution" : "NodeNext"`를 설정하면 이러한 작업에 도움이 된다.
전처리된 Svelte 파일 및 JavaScript로 변환된 TypeScript 파일을 제외한 모든 파일은 그대로 복사된다.

## Why your load functions are slow

waterfall이 발생하지 않도록 해야한다.
같은 계층에서 Promise는 동시에 시작하지만 끝나는 시간이 다르기 때문에 모두 끝날 때까지 기다린다.

```
const a = async ()=>{
  await setTimeout(1000, "a");
}

const b = async ()=>{
  await setTimeout(1000, "b");
}

const c = async ()=>{
  await setTimeout(1000, "c");
}

//result
거의 1초

//waterfall 발생해서 1+3
const a = async ()=>{
  await setTimeout(1000, "a");
  await setTimeout(3000, "a");
}
const b = async ()=>{
  await setTimeout(1000, "b");
}
//result
거의 4초
```

따라서, 하나의 메서드로 여러 동작을 취하기 보단 비동기 함수 여러 개로 나눠 동시에 시작하면 보다 빠르다.
