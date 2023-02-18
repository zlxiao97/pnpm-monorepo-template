# Welcome

## Mono Repo

- how to use

  - install

    ```shell
    pnpm i
    ```

  - dev

    ```shell
    pnpm dev
    ```

  - build

    ```shell
    pnpm build
    ```

- deps installation

  - how to install deps for all projects

    ```shell
    pnpm add package-name -r
    ```

  - how to install deps for specific project

    ```shell
    pnpm add package-name -F=@template/project-name
    ```

  - how to install deps at root level

    ```shell
    pnpm add package-name -w
    ```

## Folder Structure

- print the folder structure

  - command # 🖥️ `mac`

    - `tree -L 3 -I 'node_modules|dist'`

  ```shell
  .
  ├── apps
  ├── changelog.config.js         // git-cz configuration file
  ├── commitlint.config.ts        // commitlint configuration file
  ├── docs                        // vitepress
  ├── node_modules
  ├── package.json
  ├── packages
  ├── pnpm-lock.yaml
  ├── pnpm-workspace.yaml
  └── README.md
  ```
