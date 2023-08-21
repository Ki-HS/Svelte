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
