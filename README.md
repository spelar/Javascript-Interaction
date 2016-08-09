
## Javascript-Interaction
이 repository는 [AJAX](http://api.jquery.com/jquery.ajax/) call하여 받은 리스트를 화면에 보여줍니다.
Cross Domain 문제를 회피하기 위해 JSONP를 사용했고, 받은 데이터는 [Underscore](http://underscorejs.org/) template을 사용하여 화면에 보여줍니다.

### Bower
의존성 라이브러리 관리는 [Bower](https://bower.io/)를 사용합니다.  
Bower는 트위터에서 만든 프론트앤드용 패키지 매니저인데 Npm과 매우 유사하므로 Npm에 익숙하다면 Bower도 쉽게 사용할 수 있습니다.

### Gulp
[Gulp](http://gulpjs.com/)는 웹브라우즈에 로딩되기 전에 소스의 문법을 검사하고 SASS를 컴파일 해줍니다.
또한 퍼포먼스를 위해서 파일의 최적화를 도와주고, 테스트 작업 자동화를 도와줍니다

### Browserify
[Browserify](http://browserify.org/)는 Javascript 코드를 깔끔하게 빌드해줍니다.
Gulp task에 Browserify를 등록하려면 Browserify의 스트림을 걸프에서 사용하는 vinyl 객체로 변경해줘야 합니다.
이 용도로 vinyl-source-stream 모듈을 사용했습니다.
그리고 Bower 에서 받은 외부 라이브러리들도 browserify-shim 플러그인을 사용해서 그대로 사용할 수 있습니다.

### Underscore
[Underscore](http://underscorejs.org/)는 JavaScript 객체들을 확장하지 않고 함수형 프로그래밍을 지원할 수 있는 자바스크립트 라이브러리 입니다.
유용한 함수들을 지원하고 있기 때문에 좀 더 편하게 개발할 수 있습니다.
