# @socfafbmlist/bm-list

## Устанавливаем локальный npm репозиторий sinopia

`npm install -g sinopia`

`sinopia` - запускаем в отдельном терминале

`npm set registry http://localhost:4873/`

`npm adduser`

`npm login`

`npm publish`

## Порядок публикации модуля

Редактируем/добавляем новую фичу, если изменили template то запускаем галп таск, далее коммит и пуш `gulp && git add . && git add --all && git commit -m "Описание коммита" && git push origin master`

В зависимости от того что сделали делаем `npm run release` или `npm run patch` - поднимет версию пакета и опубликует его в синопию
