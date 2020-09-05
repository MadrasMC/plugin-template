# @telecraft/plugin

Use this template to initialise a [Telecraft](https://github.com/telecraft) plugin.

```bash
git clone https://github.com/telecraft/plugin.git
mv plugin <my_plugin_name>
cd <my_plugin_name>
rm -rf .git # remove git information
git init # initialise your own git repo
pnpm install

# edit package.json, do your thing in src/index.ts!

pnpm run build # to build TypeScript source to ./dist
pnpm run build:w # to watch for file changes and incrementally build
```
