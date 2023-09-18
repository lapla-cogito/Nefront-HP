# Nefront-HP

株式会社 Nefront のホームページ([www.nefront.com](https://www.nefront.com/))のコードホストをしているリポジトリです．主に Next.js と Chakra UI を用いて作成されています．

# How to run

Install dependencies

```bash
$ yarn
```

Run the development server

```bash
$ yarn run dev
```

Format with Prettier

```bash
$ yarn run format
```

# 主要ディレクトリ構成

<pre>
.
├ .github:      CI/CD等
├ components:   Next.jsのコンポーネント
├ lib:          API等
├ news:         ニュース記事文面
├ pages:        サイト内の各ページに対応するファイル群
├ public:       HP内で用いる静的ファイル群
└ types:        型定義
</pre>

# How to contribute

サイトの UI や文言等を変更したい場合，基本的にはブランチを適切に切り，そこにコミットを積んで main ブランチに対して PR を出してください．現状 main ブランチへのマージ権限は@lapla-cogito のみが有しているので，その PR で変更したい機能が完成したタイミングで良いので@lapla-cogito に PR のコメントでメンションを飛ばしてください．その際，PR での大まかな変更点もコメントしてもらえるとレビューしやすくて助かります（PR のタイトルだけで充分理解できると思われる場合などは結構です）．

また，CI 内でコードフォーマットのチェックをかけているので package.json 内で定義されている

```shell
$ yarn run format
```

を適宜用いてフォーマットをしてください．この際の細かいフォーマットルールについては`.prettierrc`を参照してください．

Issue 等については，自由に起票してもらって構いません．内部で Assignees も設定できるので必要がある場合は適切に指定してください．既知の課題は起票してありますので，self-assign してもらっても構いません．

# CI/CD

本リポジトリには GitHub Actions を用いた CI/CD が含まれています．ここでは，その概要を記述します．

## deploy_preview.yml

PR に紐づく別リポジトリを作成して，そこに yarn export したものをコミット及びデプロイすることで PR のコードに基づくプレビューページを生成します．発火条件は PR が open されたとき，コミットが追加されたとき，reopen されたときです．

尚，open されたときのみ PR にプレビュー用 URL が記載されたコメントが自動で付きます．この URL は，投稿された直後はまだデプロイ中であるため，アクセスしても 404 になりますが，少し待つと表示されるようになります．

## delete_preview.yml

ある PR が閉じられたとき，該当のプレビュー用リポジトリを削除します．これにより，自動的にプレビューページも消えます．発火条件は PR が close されたときです．

## deploy.yml

コードフォーマットのチェックや yarn export，さらに main ブランチへの push の場合は GitHub Pages へのデプロイまでを行います．デプロイには，[peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)を利用しています．発火条件は main ブランチに push があったときです．

# Renovate

本リポジトリには[Renovate](https://github.com/renovatebot/renovate)を導入しているので，パッケージアップグレードの PR が bot により出されます．これは適宜確認してマージするので特に気にする必要は無いです．

# ウネウネ

トップページには謎のウネウネした物体がフヨフヨしている様子が確認できると思います．これは，[particles.js](https://github.com/VincentGarreau/particles.js/)という VanillaJS な OSS をインチキに書き換えることにより

-   タイプライター部分にパーティクルの侵入を許さない
-   ES6 以降でのコンパイルに対応
-   Next.js でのビルドに対応

を実現しているのですが，これは現状かなり属人的なのでその概要を記しておきます:

## タイプライター部分にパーティクルの侵入を許さない

particles.js では 本来であれば config 用の JS ファイルを particles.js とは別に読み込むことでパーティクルの挙動に対して様々な設定をすることができます．本来であれば，というのは本リポジトリではこれを事情により 1 つの JS ファイルにまとめているからです．これについては本章の「Dynamic import」節で詳細を述べています．さて，この設定できる項目中にはパーティクルの表示領域(canvas)でマウスホバーするとマウス座標を中心とした正円領域内のパーティクルを外側に追いやるという機能があります．

よってこれをマウスホバーしているかどうかにかかわらずキャンバスの中央を中心とした正円領域内の点を追いやるように改造すればタイプライター部分にパーティクルが侵入してこないようになります．マウスホバー時に追いやる実装は partices.js の`pJS.fn.modes.repulseParticle`内にあるのでこれを次のように書き換えます:

```diff
pJS.fn.modes.repulseParticle = function (p) {
            if (
                pJS.interactivity.events.onhover.enable &&
-               isInArray('repulse', pJS.interactivity.events.onhover.mode) &&
-               pJS.interactivity.status == 'mousemove'
+               isInArray('repulse', pJS.interactivity.events.onhover.mode)
            ) {
-               var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
-                   dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
+               var dx_mouse = p.x - pJS.canvas.w / 2,
+                   dy_mouse = p.y - pJS.canvas.h / 2,
                    dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

                var normVec = {
                        x: dx_mouse / dist_mouse,
                        y: dy_mouse / dist_mouse,
                    },
                    repulseRadius = pJS.interactivity.modes.repulse.distance,
                    velocity = 100,
                    repulseFactor = clamp(
                        (1 / repulseRadius) *
                            (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) *
                            repulseRadius *
                            velocity,
                        0,
                        50
                    );

+               if (pJS.canvas.w / 2 < repulseRadius) {
+                   repulseRadius = pJS.canvas.w / 2;
+               }
```

最後の追加されている 3 行については HP を閲覧しているタブの幅が狭い場合に円形領域の直径を画面幅に合わせる処理です．

## ES5 以降でのコンパイルに対応

このまま読み込もうとしても`Uncaught TypeError: 'caller’, 'callee’, and 'arguments’ properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.Object.deepExtend`が出ると思います．これは argments.callee() という大変に悪いやつ(悪い理由は後述)を使っているために生じるエラーですので callee を用いている無名関数を名前付きにしてやればよいため，ソースを次のように変更します:

```diff
-    Object.deepExtend = function (destination, source) {
+    Object.deepExtend = function deepExtendFunction(destination, source) {
        for (var property in source) {
            if (
                source[property] &&
                source[property].constructor &&
                source[property].constructor === Object
            ) {
                destination[property] = destination[property] || {};
-               arguments.callee(destination[property], source[property]);
+               deepExtendFunction(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    };
```

そもそも arguments.callee()は専ら無名関数を再帰的に適用したいときに用いられると思うのですが，これは例えば呼び出されたタイミングによって this の中身が変わりうるため，バグの温床となりかねません．なので今の時点でこれだけ短いのであれば最初から名前付きにしてほしかった感は個人的には否めません．

## Dynamic import

さて，ここまでで設定をいじったり ES6 でのコンパイルに対応してきたりしたわけですが，最後に window オブジェクト等を使えるようにしなければ動きません．これは Next.js が標準で SSR することが原因なので(少なくともこの部分については)CSR な構成にしたいわけで，これには例えば Dynamic import という機能が有用です．

Dynamic import を用いるとファイルのトップレベルに記載しなくても

```TypeScript
const hoge = dynamic(() => import('../fuga/piyo'), {
    ssr: false,
});
```

のようにすることで SSR を無効にしながら動的に import することができます．この様にして import したものは，通常通り import したものと同様に

```TypeScript
<hoge />
```

の様にして用いることができます．

ただしこのまま単純に Dynamic import するだけだと 1 つ問題が発生しかねません．本章冒頭で，本実装では本来 particles.js のライブラリとしての実装部分の JS ファイルと設定を記載する JS ファイルの 2 つに分けられるべきところを 1 つにしていると記載しました．これは Dynamic import の完了するタイミングによるものです．

前提として，前者(ライブラリ部分の JS ファイル)は CSR にする必要がありますが後者(config 用)は普通に import しても形式上は問題無いです(前者で宣言した particlesJS 関数を呼び出すだけなので)．また，このことから後者は前者が読み込まれた後に読み込まないとエラーが発生しますが，Dynamic import では import 完了のタイミングが不定です．このため実行の機序が保たれるような構成に変更する必要があります．

これを保証するためには例えば await/async を用いる等が挙げられると思いますがこれはもし particles に関係する処理を更に追加したい場合に更なる変更を入れる必要があるかもしれませんし，そもそも index.tsx 内で particles に関する処理はそこまで入れたくありません．

すなわち，求められるものは実行の機序が保証されているが，内部処理は基本的には particles.jsx 内で完結させ，index.tsx 内では Dynamic import したものを用いるだけにできるような構造です．これを実現するのは結構単純で，

-   particles.jsx 内では描画用の div を return し，それを Particles として export する
-   React の useEffect を用いて，Particles のマウントが完了した後に particlesJS 関数が実行されるようにする

とすればできます．

# 想定 FAQ

## Q. workflow で本来すぐ終わるはずのステップが終わらない

setup-node 等でたまに見ます．output が出ているけど滅茶苦茶遅い場合，タイムアウト（各ジョブ 10 分に設定してある）してしまう可能性があります．GHA 側で何らかのトラブルが起こっている可能性が高いので，この様な場合はタイムアウトを待たずして実行をキャンセルして Re-run すると大概解消されます．

ただし，[peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)の実行においては，別の workflow run（名前が"pages build and deployment"）が走るのですが，これを直接 Re-run すると，呼び出された際の情報が失われてしまうため，この場合は呼び出した元の workflow を Re-run してください．

## Q. deploy_preview や delete_preview で Unexpected input(s) の warning が出る

これは[octokit/request-action/action.yml](https://github.com/octokit/request-action/blob/main/action.yml)内で事前定義されているフィールドが route と MediaType しかないために生じているものですが，実行は可能ですしこちらから変更できるものではないので無視して問題無いです．

## Q. ${その他}

[`# わからんtv`](https://nefront.slack.com/archives/C03J090H34J)

# Why Next.js?

We're Nefront.
