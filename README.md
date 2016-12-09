# MoovOne test AngularJS

L'ojectif de ce test est de réaliser une micro app de recherche d'images gif [Giphy](http://giphy.com/).
Cette application devra être sur une seule page avec un champ de recherche, la liste des images en fonction des mots clés saisis
avec une pagination de 8 images par page de pagination.

Voici le Wireframing voulu : 

![wireframe](http://image.prntscr.com/image/58a610df20cb496e8d6de2f24e93311d.png)



### Lancer l'application

Nous vous avons pré-configuré un simple projet angular pour vos développement.
Il est obligatoire d'utiliser Boostrap.
Vous étes libre d'ajouter la gestion de pré-proccessing CSS avec Sass et nous vous recommendons d'utiliser Gulp pour
builder vos fichiers CSS à la volée avec un watcher de changement de fichiers pour réfraichir votre navigateur 
automatiquement.

astuce : 

- Pour ajouter Bootstrap, utiliser [Bower](Bower)
- En utilisant Bootstrap, vous ne devriez pas avoir beaucoup de CSS à écrire

Pour lancer le server nodeJS : 

```
npm start
```

Votre application est accessible à l'adressse `http://localhost:8000/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

[bower]: http://bower.io
[git]: http://git-scm.com/
[http-server]: https://github.com/nodeapps/http-server
[jasmine]: https://jasmine.github.io
[jdk]: https://en.wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads/index.html
[karma]: https://karma-runner.github.io
[node]: https://nodejs.org
[npm]: https://www.npmjs.org/
[protractor]: https://github.com/angular/protractor
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
