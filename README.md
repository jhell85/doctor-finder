# _Name of Application_

#### | Feb 5th. 2020_

#### By _** Josh Hellman**_
[link to demo site coming](#)

## Description
an app that lets you search betterdoctor.com 's API and find a doctor from a name search and/or a doctor specialty
## Setup/Installation Requirements

You will need to register for an API key at 
https://developer.betterdoctor.com/


_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. find the green 'Clone or Download' button and copy the link
2. open terminal and type...

**Windows**
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

 3. in terminal type '_git clone https://github.com/jhell85/doctor-finder.git_ '

```sh
git clone https://github.com/jhell85/doctor-finder.git
```

4. navigate to the new folder that was created on your desk
```sh
cd doctor-finder
```

5. run npm install
```sh
npm install
```
6. create a .env flie 
```sh
touch .env 
```
7. place your API key from https://developer.betterdoctor.com/ in your .env file
```sh
echo API_KEY = {your api key here remove {}} >> .env
```

6. run development server
```sh
npm run start
```



## Specs
### Behavior Driven Development Spec List

Behavoir | Input | Output
:---------|:------:|:------:
|1 - The program will let you put in a name in an input box and it'll return a list of doctor's names including the input | 'Smith' | 'return a list of names with smith in first or last name' |
|2 - The program will take in a list of specialties from a list populated from an API | 'hello' | 'hello' |



## Support 

_The software is provided as is. It might work as expected - or not. Use at your own risk._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [jQuery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
* [webpack](https://webpack.js.org/)
* [Sass](https://sass-lang.com/)
* [ESLint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Uglifyjs](https://www.uglifyjs.net/)
* [Jest](https://jestjs.io/)


### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Josh Hellman_**