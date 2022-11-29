# KockaVilag

Egy LEGO webshop a választott témám.

Választás oka, hogy hamarosan jön a karácsony és a LEGO egy jó ajándék kicsiknek és nagyoknak egyaránt.

_Mellesleg nagy LEGO gyűjtő is vagyok, ezért nem volt nehéz összerakni az adatbázist, végre egy kicsit pihenhettem :)_


## Indítás
Json-server futtatása: `json-server --watch .\server\legos.json`
Angular futtatása: `npm start`
Angualar verzió: [Angular CLI](https://github.com/angular/angular-cli) 14.2.6.

## Frontend

A felülethez [Bootstra](https://getbootstrap.com/docs/5.2) 5.2-es elemeket és [Font Awesone](https://fontawesome.com/v4/icons/) 4.7-es ikonokat használtam. Pár helyen saját CSS-t azért kellett írni.

A lapozóhoz az [ngx-pagination](https://github.com/michaelbromley/ngx-pagination/blob/master/README.md) kiegészítőt használtam.