# plarailers.github.io

https://plarailers.github.io/

## 内容

- `README.md`
- `.gitignore` ... Git の管理に含めないファイルを指定する。生成結果は `_site` に作られるのでそれを無視。
- `Gemfile` ...  Ruby のライブラリを管理する。（後述）

その他のファイルはそのまま公開されます。


## 軽く編集したい場合

https://github.com/plarailers/plarailers.github.io で HTML やマークダウンなどの各種ファイルを直接編集できます。


## ローカルサーバで確認しながら編集したい場合

### 環境構築

#### Ruby をインストール

（省略）

#### Bundler をインストール

Gem というのは Ruby のライブラリです。GitHub Pages は Jekyll などのライブラリによって動いていますが、`Gemfile` に書かれた情報をもとにライブラリの管理をいい感じにしてくれるのが Bundler です。

```
gem install bundler
```

#### このリポジトリをクローン

```
git clone https://github.com/plarailers/plarailers.github.io.git
```

### ローカルサーバを立てて動作確認する

必要に応じて

```
cd plarailers.github.io.git
```

でリポジトリ内に移動して

```
bundle exec jekyll serve
```
