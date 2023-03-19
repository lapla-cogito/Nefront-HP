# Nefront-HP

株式会社 Nefront のホームページ([www.nefront.com](https://www.nefront.com/))のリポジトリです．詳しくは特記事項の章の管理方針の節を見てほしいのですが，デプロイされる本体は laplacian の private なリポジトリにあります．主に Next.js と ChakraUI を用いて作成されています．

文責: laplacian

# How to run

Install dependencies

```
$ yarn
```

dev でビルド

```
$ yarn run dev
```

prod でビルド

```
$ yarn run build
```

フォーマット

```
$ yarn run format
```

# ディレクトリ構成

```
.
├ .github: CI用のymlファイル群
├ components: Nextのコンポーネント
├ lib: 各種テーマ設定
├ pages: サイト内の各ページに対応するファイル群
├ public: HP内で用いる静的ファイル群
└
```

# 特記事項

## 管理方針

本 Organization(NefrontInc)はアップグレードされていない為，private なリポジトリに対して GitHub Pages が適用できません．そのため，GitHub Pages を用いてのデプロイは laplacian の個人リポジトリから行っています．

## How to contribute

サイトの UI や文言等を変更したい場合は本リポジトリの main ブランチから新規ブランチを生やし，そのブランチ上で中身を変更後，main ブランチに対して PR を作成してください．PR を作成した時点で後述する CI によりプレビュー用サイトが生成され，その URL が PR のコメントに付きます．本 Organization はアップグレードされていないのでドラフトの PR にすることができないため，ひとまず完成したという段階で PR のコメント内で@laplaciancpp にメンションを飛ばしてください．また，CI 内でコードフォーマットのチェックをかけているので package.json 内の

```
$ yarn run format
```

を用いてフォーマット，

```
$ yarn run format:check
```

を用いて正しくフォーマットされているかのチェック

の 2 つのコマンドを適宜用いてください．

以上の概要を示した図が次のものになります:

![How to contribute](./howtocontribute.png)

## CI

本リポジトリには GitHub Actions による CI が含まれており， PR 時か main ブランチへのプッシュ時に発火するようになっています．この CI について本章で概要を記述します．

### deploy_preview.yml

別リポジトリに PR のコードでのプレビューを生成し，その URL をコメントに付けます．発火条件は PR が open されたとき，コミットが追加されたとき，reopen されたときです．

open されたときのみ PR にプレビュー用 URL が記載されたコメントが自動で付きます．

### delete_preview.yml

ある PR が閉じたとき，該当のプレビュー用リポジトリを削除します．発火条件は PR が close されたときです．

### deploy.yml

コードフォーマットのチェックとビルド，さらに main ブランチへのプッシュの場合はデプロイまでを行います．

## ウネウネ

トップページには謎のウネウネした物体がフヨフヨしている様子が確認できると思います．これは，[particles.js](https://github.com/VincentGarreau/particles.js/)という VanillaJS な OSS をインチキに書き換えることにより

-   タイプライター部分にパーティクルの侵入を許さない
-   ES6 以降でのコンパイルに対応

を実現しているのですが，これは現状かなり属人的なのでその概要を記しておきます:

### タイプライター部分にパーティクルの侵入を許さない

particles.js では 本来であれば config 用の JS ファイルを particles.js とは別に読み込むことでパーティクルの挙動に対して様々な設定をすることができます．本来であれば，というのは本リポジトリではこれを事情により 1 つの JS ファイルにまとめているからです．これについては本章の「JavaScript の Dynamic import」の節で詳細を述べています．さて，この設定できる項目中にはパーティクルの表示領域(canvas)でマウスホバーするとマウス座標を中心とした正円領域内のパーティクルを外側に追いやるという機能があります．

よってこれをマウスホバーしているかどうかにかかわらずキャンバスの中央を中心とした正円領域内の点を追いやるように改造すればよいです．マウスホバー時に追いやる実装は partices.js の`pJS.fn.modes.repulseParticle`内にあるのでこれを次のように書き換えます:

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

### ES5 以降でのコンパイルに対応

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

### JavaScript の Dynamic import

さて，ここまでで設定をいじったり ES6 でのコンパイルに対応してきたりしたわけですが，最後に window オブジェクト等を使えるようにしなければ動きません．これは Next.js が標準で SSR することが原因なので(少なくともこの部分については)CSR な構成にしたいわけで，これには例えば Dynamic import という機能が有用です．

Dynamic import を用いるとトップレベルに記載しなくても

```
const hoge = dynamic(() => import('../fuga/piyo'), {
    ssr: false,
});
```

のようにすることで SSR を無効にしながら動的に import することができます．

ただしこのままだと 1 つ問題が発生しかねません．本章冒頭で，本実装では本来 particles.js のライブラリとしての実装部分の JS ファイルと設定を記載する JS ファイルの 2 つに分けられるべきところを 1 つにしていると記載しました．これは Dynamic import の完了するタイミングによるものです．

前提として，前者(ライブラリ部分の JS ファイル)は CSR にする必要がありますが後者(config 用)は普通に import しても形式上は問題無いです(前者で宣言した particlesJS 関数を呼び出すだけなので)．また，このことから後者は前者が読み込まれた後に読み込まないとエラーが発生します．最後に，Dynamic import では import 完了のタイミングが不定です．このため

そのため，例えばの解決法として await/async を用いる等が挙げられると思いますが最も簡潔なのは config 部分をまとめて return すれば解決ですのでそうしました．
