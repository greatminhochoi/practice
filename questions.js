window.QUIZ_QUESTIONS = [
  {
    "id": "q001",
    "kind": "multiple",
    "question": "다음 코드가 실행되었을 때의 결과로 올바른 것을 고르시오.",
    "passage": "let x = 10\nif (true) {\nvar x = 20\n}\nconsole.log(x)  // ⓐ",
    "codeType": "javascript",
    "answerText": "Error가 발생한다.",
    "explanation": "이미 let 키워드로 선언된 변수 x가 동일한 스코프 내에 존재하므로, var 키워드로 같은 이름의 변수를 재선언하면 문법 에러(SyntaxError)가 발생합니다.",
    "choices": [
      "10",
      "20",
      "undefined",
      "Error가 발생한다."
    ],
    "answer": 3
  },
  {
    "id": "q002",
    "kind": "short",
    "question": "for...in 반복문을 사용하여 객체 obj의 속성을 순회할 때, ⓐ 변수에 할당되는 것은 객체의 '키(key)'와 '값(value)' 중 무엇인지 한글 단어로 작성하시오.",
    "passage": "const user = { name: 'Alice', age: 20 }\nfor (const ⓐ in user) {\n// ⓐ 변수에는 무엇이 할당되는가?\n}",
    "codeType": "javascript",
    "answerText": "키",
    "explanation": "for...in 반복문은 JavaScript에서 객체(Object)를 순회할 때 사용됩니다.\n이때 for...in은 해당 객체가 가지고 있는 속성의 이름(property name), 즉 '키(key)'를 순서대로 ⓐ 변수에 할당합니다.\n예시 코드에서 user 객체는 name과 age라는 두 개의 키를 가지고 있습니다. 따라서 반복문이 실행되면 ⓐ 변수에는 첫 번째로 문자열 'name'이 할당되고, 두 번째로 문자열 'age'가 할당됩니다."
  },
  {
    "id": "q003",
    "kind": "multiple",
    "question": "다음 코드에서 div 요소에서 이미 존재하는 'blue' 클래스를 제거하려고 한다. 아래 보기 중 올바른 코드를 고르시오.",
    "passage": "const divElement = document.querySelector('div')",
    "codeType": "javascript",
    "answerText": "divElement.classList.remove('blue')",
    "explanation": "classList.remove('클래스명')을 사용하면 해당 클래스를 요소에서 제거할 수 있다.removeClass(), class.remove(), className.remove() 등은 유효한 메서드/속성이 아니므로 동작하지 않는다.",
    "choices": [
      "divElement.removeClass('blue')",
      "divElement.class.remove('blue')",
      "divElement.className.remove('blue')",
      "divElement.classList.remove('blue')"
    ],
    "answer": 3
  },
  {
    "id": "q004",
    "kind": "essay",
    "question": "JSON.stringify() 메서드와 JSON.parse() 메서드의 역할(기능)을 '데이터 변환 방향' 관점에서 각각 서술하시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "JSON.stringify()는 JavaScript 객체(Object)나 값을 JSON 형식의 문자열(String)로 변환(직렬화)한다. JSON.parse()는 JSON 형식의 문자열(String)을 JavaScript 객체(Object)나 값으로 변환(파싱)한다.",
    "explanation": "JavaScript에 JSON 형태의 데이터를 다루는 방식에 대하여 데이터 관점에서 서술한다."
  },
  {
    "id": "q005",
    "kind": "short",
    "question": "배열의 각 요소를 순회하면서 특정 작업을 수행하는 메서드로, 새로운 배열이나 의미 있는 반환값을 만들지 않고 undefined를 반환하는 메서드 이름을 작성하시오. (정답은 대소문자를 구분하여 정확하게 작성하시오.)",
    "passage": "",
    "codeType": "none",
    "answerText": "forEach",
    "explanation": "forEach 메서드는 배열의 각 요소를 순회하면서 주어진 콜백 함수를 실행하지만, 새로운 배열이나 값을 반환하지 않는다."
  },
  {
    "id": "q006",
    "kind": "multiple",
    "question": "NodeList에 대한 설명으로 옳은 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "NodeList는 querySelectorAll 메서드로 반환되는 객체이다.",
    "explanation": "NodeList는 querySelectorAll과 같은 메서드로 반환되는 객체로, 배열과 유사하지만 배열은 아니다. forEach는 사용할 수 있지만, 일부 배열 메서드는 지원하지 않는다.",
    "choices": [
      "NodeList는 배열과 동일한 구조를 가지고 있으며 배열의 모든 메서드를 지원한다.",
      "NodeList는 forEach 메서드를 사용할 수 없다.",
      "NodeList는 querySelectorAll 메서드로 반환되는 객체이다.",
      "NodeList는 항상 동적으로 업데이트된다."
    ],
    "answer": 2
  },
  {
    "id": "q007",
    "kind": "multiple",
    "question": "다음 코드의 실행 결과로 올바른 것을 고르시오.",
    "passage": "const a = 0\nconsole.log(a++, ++a)",
    "codeType": "javascript",
    "answerText": "Error 가 발생한다.",
    "explanation": "const 키워드는 재할당이 불가능하므로 증감 연산자 사용시 에러가 발생한다.",
    "choices": [
      "0, 0",
      "0, 1",
      "1, 0",
      "Error 가 발생한다."
    ],
    "answer": 3
  },
  {
    "id": "q008",
    "kind": "short",
    "question": "다음 코드 지문은 배열의 첫 번째 요소를 제거하는 코드이다. (ⓐ)에 들어갈 메서드명을 작성하시오. (정답은 모두 소문자로 작성하시오.)",
    "passage": "const fruits = ['Apple', 'Banana', 'Cherry']\nfruits.ⓐ()\n// console.log(fruits) -> ['Banana', 'Cherry']",
    "codeType": "javascript",
    "answerText": "shift",
    "explanation": "shift() 메서드는 배열의 첫 번째 요소를 제거하고 그 요소를 반환한다. (반대: unshift())"
  },
  {
    "id": "q009",
    "kind": "essay",
    "question": "다음 코드를 실행했을 때 발생하는 문제점과 문제를 해결하기 위한 방법을 작성하시오. (백틱 기호는 문제 없이 작성되어 있습니다.)",
    "passage": "const mySong = {\ntrackList: {1: 'song-title1', 7:'song-title7', 12: 'song-title12'},\nmyTrack: [1, 12],\nmyFunc: function () {\nthis.myTrack.forEach( function (number) {\nconsole.log(`No.${number} : ${this.trackList[number]}`)\n})\n}\n}\nmySong.myFunc()",
    "codeType": "javascript",
    "answerText": "forEach 메서드의 인자로 전달된 일반 함수 내부의 this는 호출한 객체(mySong)를 가리키지 못하므로 undefined나 window를 바라보게 되어 this.trackList에 접근할 수 없습니다. 이를 해결하기 위해 상위 스코프의 this를 그대로 이어받는 화살표 함수(Arrow Function)로 수정해야 합니다.",
    "explanation": "객체 내부의 콜백 함수의 정의 방법에 따라 this 의 접근 방법이 달라진다."
  },
  {
    "id": "q010",
    "kind": "short",
    "question": "다음 코드에서 객체의 모든 값을 배열로 반환하는 코드 ⓐ를 작성하시오. (정답은 실행 가능한 코드 형태로 작성하시오.)",
    "passage": "let user = {\nname: \"Alice\",\nage: 30\n};\nconsole.log(ⓐ);  // [\"Alice\", 30] 출력",
    "codeType": "javascript",
    "answerText": "Object.values(user)",
    "explanation": "Object.values() 메서드는 객체의 모든 속성 값을 배열로 반환한다. 이 경우 [\"Alice\", 30]이 출력된다."
  },
  {
    "id": "q011",
    "kind": "multiple",
    "question": "다음 중 CSS 속성 중 font-size를 변경하는 방법으로 올바른 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "element.style.fontSize = '16px';",
    "explanation": "style 객체를 통해 CSS 속성을 조작할 수 있으며, fontSize는 camelCase로 작성된다.",
    "choices": [
      "element.style.fontSize = '16px';",
      "element.setStyle('font-size', '16px');",
      "element.modifyFontSize('16px');",
      "element.fontSize = '16px';"
    ],
    "answer": 0
  },
  {
    "id": "q012",
    "kind": "short",
    "question": "배열의 모든 요소를 순회하면서 콜백 함수에서 반환된 값으로 '새로운 배열'을 생성하는 배열 헬퍼 메서드 이름을 작성하시오. (정답은 대소문자를 구분하여 정확하게 작성하시오.)",
    "passage": "const arr = [1, 2, 3]\n// ⓐ : 각 요소를 2배 하여 [2, 4, 6] 배열을 생성\nconst newArr = arr.ⓐ(num => num * 2)",
    "codeType": "javascript",
    "answerText": "map",
    "explanation": "map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 콜백 함수를 호출한 결과를 모아 새로운 배열을 반환한다."
  },
  {
    "id": "q013",
    "kind": "multiple",
    "question": "다음 코드 지문은 변수에 저장된 값을 객체의 속성으로 할당하는 코드이다. user 객체의 최종 형태로 올바른 것을 고르시오.",
    "passage": "const name = 'Alice'\nconst age = 20\nconst user = {\nname,\nage,\ncity: 'Seoul'\n}",
    "codeType": "javascript",
    "answerText": "{ name: 'Alice', age: 20, city: 'Seoul' }",
    "explanation": "ES6+ 문법에서는 객체를 정의할 때, 변수명과 객체의 속성명이 같다면 { name: name, age: age } 대신 { name, age }와 같이 '단축 속성(shorthand property)'으로 간결하게 작성할 수 있다. user 객체는 { name: 'Alice', age: 20, city: 'Seoul' }과 동일하게 생성된다.",
    "choices": [
      "{ name: 'name', age: 'age', city: 'Seoul' }",
      "{ name: 'Alice', age: 20, city: 'Seoul' }",
      "{ 'Alice', 20, city: 'Seoul' }",
      "SyntaxError (문법 오류) 발생"
    ],
    "answer": 1
  },
  {
    "id": "q014",
    "kind": "short",
    "question": "다음 코드에서 구조 분해 할당을 통해 email 변수를 추출하기 위해, (ⓐ)에 들어갈 코드를 작성하시오.",
    "passage": "const user = {\nusername: \"john_doe\",\nemail: \"john@example.com\"\n}\nconst { ⓐ } = user\nconsole.log(email) // \"john@example.com\" 출력",
    "codeType": "javascript",
    "answerText": "email",
    "explanation": "구조 분해 할당을 통해 객체의 특정 속성을 변수로 추출할 수 있으며, 이 경우 email이 \"john@example.com\"으로 할당된다."
  },
  {
    "id": "q015",
    "kind": "multiple",
    "question": "다음 코드에서 div 요소의 class 속성에 새로운 클래스를 추가하는 방법으로 올바른 것을 고르시오.",
    "passage": "const divElement = document.querySelector('div');",
    "codeType": "javascript",
    "answerText": "divElement.classList.add('new-class');",
    "explanation": "classList.add는 DOM 요소의 class 속성에 새로운 클래스를 추가하는 표준 메서드이다.",
    "choices": [
      "divElement.addClass('new-class');",
      "divElement.className.add('new-class');",
      "divElement.classList.add('new-class');",
      "divElement.class.add('new-class');"
    ],
    "answer": 2
  },
  {
    "id": "q016",
    "kind": "multiple",
    "question": "다음 중 querySelector와 관련된 설명으로 틀린 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "querySelector는 잘못된 CSS 선택자를 무조건 자동으로 보정하여 반환한다.",
    "explanation": "올바른 CSS 선택자를 전달해야 하며, 잘못된 선택자를 전달하면 에러가 발생한다. 자동 보정 기능은 제공되지 않는다.",
    "choices": [
      "querySelector에 #myId처럼 id 선택자를 전달할 수 있다.",
      "querySelector('div.myClass')와 같이 태그와 클래스를 동시에 사용 가능하다.",
      "querySelector는 문서 전체가 아닌, 특정 요소에 대해서도 사용할 수 있다.",
      "querySelector는 잘못된 CSS 선택자를 무조건 자동으로 보정하여 반환한다."
    ],
    "answer": 3
  },
  {
    "id": "q017",
    "kind": "short",
    "question": "배열의 모든 요소가 주어진 조건을 만족하는지 확인하는 메서드의 이름을 작성하시오. (정답은 소문자로 작성하시오.)",
    "passage": "",
    "codeType": "none",
    "answerText": "every",
    "explanation": "every 메서드는 배열의 모든 요소가 주어진 조건을 만족하면 true, 그렇지 않으면 false를 반환한다."
  },
  {
    "id": "q018",
    "kind": "multiple",
    "question": "다음 코드에서 div 요소의 텍스트를 \"Hello, World!\"로 변경하는 방법으로 올바른 것을 고르시오.",
    "passage": "const targetDiv = document.querySelector('#myDiv')",
    "codeType": "javascript",
    "answerText": "targetDiv.textContent = 'Hello, World!'",
    "explanation": "textContent 속성은 요소가 포함하는 텍스트 내용을 직접 다룰 수 있도록 해줍니다. value나 innerHTML(...)처럼 잘못된 사용법과 혼동하지 않도록 주의해야 합니다.",
    "choices": [
      "targetDiv.value = 'Hello, World!'",
      "targetDiv.innerHTML('Hello, World!')",
      "targetDiv.textContent = 'Hello, World!'",
      "targetDiv.setText('Hello, World!')"
    ],
    "answer": 2
  },
  {
    "id": "q019",
    "kind": "short",
    "question": "객체 리터럴(Object literal)을 생성할 때, 변수의 이름과 객체의 속성(key) 이름이 동일한 경우 : value 부분을 생략하고 변수명만 작성하는 문법을 무엇이라고 하는지 한글 용어로 작성하시오. (정답은 한글 2단어로 작성하시오. 띄어쓰기에 주의하시오.)",
    "passage": "const name = 'Alice'\nconst age = 20\n// 이 문법(name, age)을 무엇이라 하는가?\nconst user = { name, age }",
    "codeType": "javascript",
    "answerText": "단축 속성",
    "explanation": "ES6+에서는 { name: name, age: age }를 { name, age }와 같이 간결하게 표현할 수 있으며, 이를 '단축 속성(Shorthand property names)'이라고 한다."
  },
  {
    "id": "q020",
    "kind": "multiple",
    "question": "다음 HTML 구조와 JavaScript 코드 지문이 주어졌을 때, 사용자가 <p> 태그(id=\"child\")를 클릭했을 때 콘솔에 출력되는 결과를 고르시오.",
    "passage": "<!-- HTML 코드 -->\n<div id=\"parent\">\n<p id=\"child\">Click Me</p>\n</div>\n<script>\n// JavaScript 코드\nconst parent = document.querySelector('#parent')\nparent.addEventListener('click', function (event) {\nconsole.log('Target:', event.target.id)\nconsole.log('CurrentTarget:', event.currentTarget.id)\n})\n</script>",
    "codeType": "javascript",
    "answerText": "Target: child, CurrentTarget: parent",
    "explanation": "이벤트 버블링(Event Bubbling) 현상으로 인해 #child에서 발생한 클릭 이벤트가 상위 요소인 #parent로 전파된다.\nevent.target: 이벤트가 최초로 발생한 요소. 사용자가 #child를 클릭했으므로 event.target은 <p id=\"child\">이다.\nevent.currentTarget: 이벤트 리스너가 현재 연결되어 있는 요소. 이벤트 리스너는 #parent에 연결되어 있으므로 event.currentTarget은 <div id=\"parent\">이다. 따라서 event.target.id는 'child'이고, event.currentTarget.id는 'parent'이다.",
    "choices": [
      "Target: child, CurrentTarget: child",
      "Target: parent, CurrentTarget: parent",
      "Target: child, CurrentTarget: parent",
      "Target: parent, CurrentTarget: child"
    ],
    "answer": 2
  },
  {
    "id": "q021",
    "kind": "multiple",
    "question": "다음 코드에서 변수 z에 할당된 값으로 올바른 것을 고르시오.",
    "passage": "let x = 5;\nlet y = 10;\nlet z = x > y ? y : x;\nconsole.log(z);",
    "codeType": "javascript",
    "answerText": "5",
    "explanation": "삼항 연산자에서 x > y는 거짓이므로, z에 x의 값인 5가 할당된다.",
    "choices": [
      "5",
      "10",
      "NaN",
      "undefined"
    ],
    "answer": 0
  },
  {
    "id": "q022",
    "kind": "short",
    "question": "다음은 인공 신경망의 기초 모델 중 하나로, 다수의 입력 값을 받아 가중치를 곱한 후 더하고, 그 결과를 활성화 함수를 통해 출력하는 알고리즘으로서, 선형 분류 문제를 해결할 수 있는 이 알고리즘의 이름은 무엇인가? (정답은 한글로 작성하시오.)",
    "passage": "",
    "codeType": "none",
    "answerText": "퍼셉트론",
    "explanation": "퍼셉트론은 인공 신경망의 가장 기본적인 모델로, 여러 입력 값에 가중치를 곱한 후 합산하여 결과를 구합니다. 이 결과를 활성화 함수에 통과시켜 최종 출력을 생성하며, 선형 분류 문제를 해결할 수 있습니다."
  },
  {
    "id": "q023",
    "kind": "multiple",
    "question": "다음 코드 지문을 실행했을 때 numbers 배열의 최종 상태와 poppedItem의 값으로 올바른 것을 고르시오.",
    "passage": "const numbers = [10, 20, 30]\nnumbers.push(40) // ⓐ\nconst poppedItem = numbers.pop() // ⓑ\nconsole.log(poppedItem)\nconsole.log(numbers)",
    "codeType": "javascript",
    "answerText": "poppedItem: 40, numbers: [10, 20, 30]",
    "explanation": "push(40) (ⓐ)는 배열의 '끝'에 40을 추가하여 [10, 20, 30, 40]으로 만든다. pop() (ⓑ)는 배열의 '끝'에 있는 요소를 제거하고 그 요소를 반환한다. 따라서 40을 제거하고 poppedItem 변수에 40을 할당한다. numbers 배열의 최종 상태는 [10, 20, 30]이 된다.",
    "choices": [
      "poppedItem: 40, numbers: [10, 20, 30, 40]",
      "poppedItem: 40, numbers: [10, 20, 30]",
      "poppedItem: 30, numbers: [10, 20, 40]",
      "poppedItem: undefined, numbers: [10, 20, 30, 40]"
    ],
    "answer": 1
  },
  {
    "id": "q024",
    "kind": "short",
    "question": "다음 코드에서 객체 movie의 제목을 출력하는 코드ⓐ를 작성하시오.",
    "passage": "let movie = {\ntitle: \"Welcome~!\",\nrunningTime: 125,\n}\nconsole.log(ⓐ) // 제목 출력",
    "codeType": "javascript",
    "answerText": "movie.title",
    "explanation": "객체의 속성에 접근하려면 객체명.속성명 형식을 사용한다. 이 경우 movie.title의 \"Welcome~!\" 을 출력한다."
  },
  {
    "id": "q025",
    "kind": "multiple",
    "question": "다음 코드 지문을 실행했을 때 evenNumbers 배열에 포함되는 값으로 올바른 것을 고르시오.",
    "passage": "const numbers = [1, 2, 3, 4, 5]\nconst evenNumbers = numbers.filter(num => {\nreturn num % 2 === 0\n})\nconsole.log(evenNumbers)",
    "codeType": "javascript",
    "answerText": "[2, 4]",
    "explanation": "filter() 메서드는 배열의 각 요소를 순회하며 콜백 함수를 실행한다. 콜백 함수가 true를 반환하는 요소들만 모아서 '새로운 배열'을 생성하여 반환한다.\nnum % 2 === 0 조건은 짝수(2, 4)일 때만 true를 반환한다.\n따라서 true를 반환한 2와 4만 모아서 [2, 4]라는 새 배열이 evenNumbers에 할당된다.",
    "choices": [
      "[1, 3, 5]",
      "[2, 4]",
      "[1, 2, 3, 4, 5]",
      "undefined"
    ],
    "answer": 1
  },
  {
    "id": "q026",
    "kind": "multiple",
    "question": "다음 코드 지문을 실행했을 때 콘솔에 출력되는 결과를 고르시오.",
    "passage": "const arr = [10, 20, 30]\nfor (const item in arr) {\nconsole.log(item)\n}",
    "codeType": "javascript",
    "answerText": "'0', '1', '2' (순서대로 출력)",
    "explanation": "for...in 반복문은 객체의 '키(key)'를 순회한다. JavaScript에서 배열(Array)도 객체의 일종이며, 배열의 '키'는 '인덱스(index)'이다. 따라서 for...in을 배열에 사용하면 0, 1, 2와 같은 인덱스 값이 문자열(string) 형태로 출력된다. (배열의 요소를 순회하려면 for...of나 forEach, map 등을 사용해야 한다.)",
    "choices": [
      "10, 20, 30 (순서대로 출력)",
      "'0', '1', '2' (순서대로 출력)",
      "undefined, undefined, undefined (순서대로 출력)",
      "TypeError 발생 (arr is not an object)"
    ],
    "answer": 1
  },
  {
    "id": "q027",
    "kind": "short",
    "question": "다음 코드 지문을 실행했을 때 ⓐ 지점에서 콘솔에 출력되는 값을 작성하시오.",
    "passage": "const x = 10\nif (true) {\nconst  x = 20\n}\nconsole.log(x) // ⓐ",
    "codeType": "javascript",
    "answerText": "10",
    "explanation": "const 키워드는 블록 스코프를 가진다. if 블록 내에서 선언된 const x = 20은 블록 외부의 const x = 10과 다른 변수이다. if 블록이 종료된 후, ⓐ 지점의 console.log(x)는 전역 또는 외부 스코프의 x 값인 10을 출력한다."
  },
  {
    "id": "q028",
    "kind": "multiple",
    "question": "다음 코드에서 for 반복문이 총 몇 번 실행되는지 고르시오.",
    "passage": "for (let i = 0; i <= 5; i++) {\nconsole.log(i);\n}",
    "codeType": "javascript",
    "answerText": "6",
    "explanation": "반복문은 i가 0부터 5까지 실행되므로 총 6번 실행된다.",
    "choices": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 3
  },
  {
    "id": "q029",
    "kind": "short",
    "question": "다음 코드에서 배열 arr의 길이를 출력하는 코드 ⓐ로 올바른 것을 작성하시오. (정답은 소문자로 작성하시오.)",
    "passage": "let arr = [1, 2, 3, 4, 5];\nconsole.log(arr.ⓐ); // 배열의 길이 출력",
    "codeType": "javascript",
    "answerText": "length",
    "explanation": "배열의 길이는 length 속성을 통해 확인할 수 있으며, 이 코드에서는 arr.length가 5를 출력한다."
  },
  {
    "id": "q030",
    "kind": "multiple",
    "question": "다음 코드에서 img 요소의 alt 속성을 \"A sample image\"로 변경하는 코드를 올바르게 고르시오.",
    "passage": "const imgElement = document.querySelector('img')",
    "codeType": "javascript",
    "answerText": "imgElement.alt = 'A sample image'",
    "explanation": "DOM 요소의 alt 속성은 직접 alt 프로퍼티를 사용해 변경할 수 있습니다. setAttribute('class', ...), setAlt(), alt() 등은 alt 속성을 변경하는 올바른 방법이 아닙니다.",
    "choices": [
      "imgElement.alt = 'A sample image'",
      "imgElement.setAttribute('class', 'A sample image')",
      "imgElement.setAlt('A sample image')",
      "imgElement.alt('A sample image')"
    ],
    "answer": 0
  },
  {
    "id": "q031",
    "kind": "multiple",
    "question": "다음 코드의 실행 결과로 올바른 것을 고르시오.",
    "passage": "if (\"0\") {\nconsole.log(\"True Value\");\n} else {\nconsole.log(\"False Value\");\n}",
    "codeType": "javascript",
    "answerText": "True Value",
    "explanation": "빈 문자열은 거짓으로 평가되지만, \"0\"은 값이 있는 문자열이므로 참으로 평가되어 \"True Value\"가 출력된다.",
    "choices": [
      "True Value",
      "False Value",
      "아무것도 출력되지 않는다.",
      "Error 가 발생한다."
    ],
    "answer": 0
  },
  {
    "id": "q032",
    "kind": "short",
    "question": "다음 코드에서 구조 분해 할당을 통해 age 변수를 추출하는 코드 ⓐ를 작성하시오. (정답은 소문자로 작성하시오.)",
    "passage": "let person = {\nname: \"Alice\",\nage: 30\n};\nlet { ⓐ } = person;\nconsole.log(age);  // 30 출력",
    "codeType": "javascript",
    "answerText": "age",
    "explanation": "구조 분해 할당을 통해 객체의 특정 속성을 변수로 추출할 수 있으며, 이 경우 age가 30으로 할당된다."
  },
  {
    "id": "q033",
    "kind": "multiple",
    "question": "다음 코드에서 변수 result에 할당된 값으로 올바른 것을 고르시오.",
    "passage": "let result = 0 / 0\nconsole.log(result)",
    "codeType": "javascript",
    "answerText": "NaN",
    "explanation": "0을 0으로 나누는 연산은 유효하지 않으므로 NaN이 반환된다.",
    "choices": [
      "0",
      "Infinity",
      "NaN",
      "undefined"
    ],
    "answer": 2
  },
  {
    "id": "q034",
    "kind": "short",
    "question": "다음 코드에서 새로운 DOM 요소를 생성하는 메서드 ⓐ를 작성하시오. (정답은 대소문자를 구분하여 정확하게 작성하시오.)",
    "passage": "const div = document.ⓐ('div')",
    "codeType": "javascript",
    "answerText": "createElement",
    "explanation": "DOM 요소를 생성하는 메서드는 createElement 메서드이다."
  },
  {
    "id": "q035",
    "kind": "multiple",
    "question": "다음 코드 지문을 실행했을 때 inputId 변수에 할당되는 값으로 올바른 것을 고르시오.",
    "passage": "<!-- HTML 코드 -->\n<input type=\"text\" id=\"username\" value=\"test\">\n<script>\n// JavaScript 코드\nconst inputElement = document.querySelector('#username')\nconst inputId = inputElement.id\nconsole.log(inputId)\n</script>",
    "codeType": "javascript",
    "answerText": "'username'",
    "explanation": "element.id는 해당 DOM 요소의 id 속성 값을 문자열로 반환한다. inputElement의 id는 'username'이므로 'username'이 출력된다. ('test'는 value 속성이다.)",
    "choices": [
      "'username'",
      "'test'",
      "null",
      "undefined"
    ],
    "answer": 0
  },
  {
    "id": "q036",
    "kind": "multiple",
    "question": "다음 중 자바스크립트로 버튼 요소에 click 이벤트 핸들러를 등록하는 올바른 방법으로 옳은 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "buttonElement.addEventListener('click', function() { ... })",
    "explanation": "자바스크립트에서 이벤트를 등록할 때는 addEventListener('click', callback) 구문을 사용한다.\nclickHandler, click, addHandler 같은 속성이나 메서드는 표준 이벤트 등록 방식이 아니다.",
    "choices": [
      "buttonElement.clickHandler = function() { ... }",
      "buttonElement.addEventListener('click', function() { ... })",
      "buttonElement.click = function() { ... }",
      "buttonElement.addHandler('click', function() { ... })"
    ],
    "answer": 1
  },
  {
    "id": "q037",
    "kind": "short",
    "question": "다음 코드에서 img 태그의 이미지를 변경하고 다른 divElement에 추가하는 코드이다. ⓐ에 들어갈 메서드를 작성하시오. (정답은 대소문자를 구분하여 정확하게 작성하시오.)",
    "passage": "const myImg = document.querySelector('#logo-img')\nmyImg.src = 'my-image.png'\ndivElement.ⓐ(myImg)",
    "codeType": "javascript",
    "answerText": "appendChild",
    "explanation": "다른 element에 추가하는 메서드는 appendChild 메서드이다."
  },
  {
    "id": "q038",
    "kind": "multiple",
    "question": "다음 코드 지문을 실행했을 때 콘솔에 출력되는 결과를 고르시오.",
    "passage": "const user = {\nname: 'Alice',\nage: 30\n};\nfor (const item of user) {\nconsole.log(item)\n}",
    "codeType": "javascript",
    "answerText": "TypeError 발생 (user is not iterable)",
    "explanation": "for...of 반복문은 배열(Array), 문자열(String), Map, Set 등과 같이 반복 가능한(iterable) 객체를 순회하기 위해 사용된다. 일반적인 객체(Object)는 iterable하지 않으므로 for...of 문을 직접 사용할 경우 TypeError가 발생한다. 객체의 키나 값을 순회하려면 for...in 문이나 Object.keys(), Object.values() 등을 사용해야 한다.",
    "choices": [
      "'Alice', 30 (순서대로 출력)",
      "'name', 'age' (순서대로 출력)",
      "{ name: 'Alice' }, { age: 30 } (순서대로 출력)",
      "TypeError 발생 (user is not iterable)"
    ],
    "answer": 3
  },
  {
    "id": "q039",
    "kind": "multiple",
    "question": "다음 코드 지문을 실행했을 때 변수 result에 할당되는 값으로 올바른 것을 고르시오.",
    "passage": "const a = 0\nconst b = 'Hello'\nconst result = a || b\nconsole.log(result)",
    "codeType": "javascript",
    "answerText": "'Hello'",
    "explanation": "|| (OR) 논리 연산자는 '단축 평가(short-circuit evaluation)'를 수행한다. 왼쪽 피연산자(a)부터 평가하여 true로 평가될 수 있는 값(truthy value)을 만나면 즉시 그 값을 반환한다.\na의 값은 0이며, 0은 false로 평가되는 값(falsy value)이다.\n연산자는 오른쪽 피연산자(b)를 마저 평가한다. b의 값 'Hello'는 비어있지 않은 문자열이므로 'truthy' 값이다.\n따라서 result에는 'Hello'가 할당된다.",
    "choices": [
      "0",
      "'Hello'",
      "true",
      "false"
    ],
    "answer": 1
  },
  {
    "id": "q040",
    "kind": "multiple",
    "question": "다음 코드에서 for…in 반복문이 출력하는 값으로 올바른 것을 고르시오.(보기의 공백이 줄 바꿈이라고 가정한다.)",
    "passage": "const string = \"abc\"\nfor (let value in string) {\nconsole.log(value);\n}",
    "codeType": "javascript",
    "answerText": "0 1 2",
    "explanation": "for...in 반복문은 객체의 키를 순회하며, 문자열에 사용하면 각 문자의 인덱스가 출력된다.",
    "choices": [
      "a b c",
      "0 1 2",
      "1 2 3",
      "Error 가 발생한다."
    ],
    "answer": 1
  },
  {
    "id": "q041",
    "kind": "multiple",
    "question": "null과 undefined에 대한 설명으로 올바른 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "null과 undefined는 동등 비교(==)에서 동일하게 취급되며, 엄격 비교(===)에서는 다른 값으로 취급된다.",
    "explanation": "null과 undefined는 동등 비교에서 동일하지만, 엄격 비교에서는 다르게 취급된다.",
    "choices": [
      "null은 변수에 값이 없음을 의미하며, undefined는 변수에 값이 존재하지만 초기화되지 않은 상태를 의미한다.",
      "null과 undefined는 동등 비교(==)에서 동일하게 취급되며, 엄격 비교(===)에서는 다른 값으로 취급된다.",
      "null과 undefined는 완전히 동일하며, 같은 방식으로 처리된다.",
      "null은 원시 자료형이지만, undefined는 object이다."
    ],
    "answer": 1
  },
  {
    "id": "q042",
    "kind": "multiple",
    "question": "다음 코드에서 spread 연산자를 사용한 결과로 올바른 값을 고르시오.",
    "passage": "let arr1 = [1, 2, 3]\nlet arr2 = [...arr1, 4, 5]\nconsole.log(arr2)",
    "codeType": "javascript",
    "answerText": "[1, 2, 3, 4, 5]",
    "explanation": "spread 연산자를 사용하면 배열 arr1의 각 요소가 펼쳐지며, 새로운 배열에 4와 5가 추가되어 [1, 2, 3, 4, 5]가 된다.",
    "choices": [
      "[1, 2, 3, 4, 5]",
      "[arr1, 4, 5]",
      "[4, 5]",
      "Error 가 발생한다."
    ],
    "answer": 0
  },
  {
    "id": "q043",
    "kind": "multiple",
    "question": "다음 코드 지문을 실행했을 때 콘솔에 출력되는 결과를 고르시오.",
    "passage": "console.log(10 == '10')  // ⓐ\nconsole.log(10 === '10')  // ⓑ",
    "codeType": "javascript",
    "answerText": "ⓐ: true, ⓑ: false",
    "explanation": "== (동등 연산자)는 비교 시 암묵적 형 변환을 수행한다. 숫자 10과 문자열 '10'을 비교하면 문자열이 숫자로 변환되어 true가 된다. 반면 === (일치 연산자)는 형 변환 없이 타입과 값을 모두 비교한다. 숫자(Number)와 문자열(String)은 타입이 다르므로 false가 된다.",
    "choices": [
      "ⓐ: true, ⓑ: true",
      "ⓐ: true, ⓑ: false",
      "ⓐ: false, ⓑ: true",
      "ⓐ: false, ⓑ: false"
    ],
    "answer": 1
  },
  {
    "id": "q044",
    "kind": "multiple",
    "question": "다음 중 자바스크립트 원시 자료형에 속하지 않는 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "배열 (array)",
    "explanation": "배열은 객체의 한 종류이지 원시 자료형이 아니다. 자바스크립트의 원시 자료형에는 문자열, 숫자, 불리언, null, undefined, symbol 등이 포함된다.",
    "choices": [
      "문자열 (string)",
      "배열 (array)",
      "불리언 (boolean)",
      "숫자 (number)"
    ],
    "answer": 1
  },
  {
    "id": "q045",
    "kind": "multiple",
    "question": "다음 코드를 실행했을 때 올바르게 설명한  것을 고르시오.",
    "passage": "var v = 10;\nfunction myFunction() {\nconsole.log(v); // ⓐ\nvar v = 20;\n}\nmyFunction();\nconsole.log(v); // ⓑ",
    "codeType": "javascript",
    "answerText": "ⓐ의 console.log(v)는 undefined를 출력한다.",
    "explanation": "var는 함수 스코프를 가지게 되며 ⓐ는 hoisting으로 undefined 를 출력하고 ⓑ는 10이 출력된다.",
    "choices": [
      "ⓐ의 console.log(v)는 10을 출력한다.",
      "ⓐ의 console.log(v)는 undefined를 출력한다.",
      "ⓐ의 console.log(v)에서 Error가 발생한다.",
      "ⓑ의 console.log(v)는 20을 출력한다."
    ],
    "answer": 1
  },
  {
    "id": "q046",
    "kind": "multiple",
    "question": "이벤트 리스너의 콜백 함수 내에서 event.preventDefault() 메서드를 호출하는 주된 목적을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "이벤트와 관련된 브라우저의 기본 동작(예: 폼 제출, 링크 이동)을 취소한다.",
    "explanation": "event.preventDefault()는 앵커 태그(<a>)의 페이지 이동, 폼(<form>)의 제출 등과 같이 요소가 가진 브라우저의 기본 동작을 막기 위해 사용된다. 이벤트 전파를 막는 것은 event.stopPropagation()이다.",
    "choices": [
      "이벤트가 상위 요소로 전파(버블링)되는 것을 중단시킨다.",
      "이벤트가 하위 요소로 전파(캡처링)되는 것을 중단시킨다.",
      "해당 요소에 할당된 다른 이벤트 리스너의 실행을 막는다.",
      "이벤트와 관련된 브라우저의 기본 동작(예: 폼 제출, 링크 이동)을 취소한다."
    ],
    "answer": 3
  },
  {
    "id": "q047",
    "kind": "multiple",
    "question": "map 메서드에서 콜백 함수의 두 번째 인자로 전달되는 값이 무엇인지 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "배열의 인덱스",
    "explanation": "map 메서드에서 콜백 함수의 두 번째 인수는 배열의 현재 요소의 인덱스이다.",
    "choices": [
      "배열의 현재 요소 값",
      "배열의 길이",
      "배열의 인덱스",
      "map 을 호출한 배열"
    ],
    "answer": 2
  },
  {
    "id": "q048",
    "kind": "multiple",
    "question": "다음 코드의 실행 결과로 올바른 것을 고르시오.",
    "passage": "let count = 0;\nconst increase = () => ++count;\nconsole.log(increase());\nconsole.log(count);",
    "codeType": "javascript",
    "answerText": "1, 1",
    "explanation": "전위 증가 연산자 ++count는 값을 먼저 1 증가시킨 뒤 그 값을 반환한다. 따라서 첫 번째 출력은 1이고, count에도 1이 저장되어 두 번째 출력도 1이다.",
    "choices": [
      "0, 0",
      "1, 1",
      "0, 1",
      "1, 0"
    ],
    "answer": 1
  },
  {
    "id": "q049",
    "kind": "short",
    "question": "배열의 마지막 요소를 제거하고 그 값을 반환하는 메서드 이름을 작성하시오.",
    "passage": "const numbers = [1, 2, 3];\nconst removed = numbers.ⓐ();\nconsole.log(removed); // 3",
    "codeType": "javascript",
    "answerText": "pop",
    "explanation": "pop 메서드는 배열의 마지막 요소를 제거하고 제거된 값을 반환한다."
  },
  {
    "id": "q050",
    "kind": "multiple",
    "question": "다음 중 addEventListener에 대한 설명으로 옳은 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "같은 이벤트 타입에 여러 콜백 함수를 등록할 수 있다.",
    "explanation": "addEventListener는 하나의 요소에 같은 이벤트 타입의 리스너를 여러 개 등록할 수 있다.",
    "choices": [
      "같은 요소에는 하나의 이벤트 리스너만 등록할 수 있다.",
      "이벤트 리스너는 반드시 HTML 속성으로만 등록해야 한다.",
      "같은 이벤트 타입에 여러 콜백 함수를 등록할 수 있다.",
      "등록한 이벤트 리스너는 절대 제거할 수 없다."
    ],
    "answer": 2
  },
  {
    "id": "q051",
    "kind": "essay",
    "question": "let과 const의 공통점과 차이점을 간단히 서술하시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "let과 const는 모두 블록 스코프를 가진다. let으로 선언한 변수는 재할당할 수 있지만, const로 선언한 변수는 재할당할 수 없다. 단, const로 선언한 객체나 배열의 내부 값은 변경될 수 있다.",
    "explanation": "핵심은 블록 스코프, 재할당 가능 여부, 참조형 값의 내부 변경 가능성을 구분하는 것이다."
  },
  {
    "id": "q052",
    "kind": "multiple",
    "question": "다음 코드의 실행 결과로 올바른 것을 고르시오.",
    "passage": "const user = { name: 'Kim' };\nconst copy = user;\ncopy.name = 'Lee';\nconsole.log(user.name);",
    "codeType": "javascript",
    "answerText": "Lee",
    "explanation": "객체를 다른 변수에 대입하면 객체 자체가 복사되는 것이 아니라 같은 객체를 참조한다. 따라서 copy.name을 바꾸면 user.name도 바뀐 것처럼 보인다.",
    "choices": [
      "Kim",
      "undefined",
      "Error",
      "Lee"
    ],
    "answer": 3
  },
  {
    "id": "q053",
    "kind": "short",
    "question": "문자열 양쪽의 공백을 제거하는 메서드 이름을 작성하시오.",
    "passage": "const input = '  hello  ';\nconsole.log(input.ⓐ()); // 'hello'",
    "codeType": "javascript",
    "answerText": "trim",
    "explanation": "trim 메서드는 문자열의 앞뒤 공백을 제거한 새 문자열을 반환한다."
  },
  {
    "id": "q054",
    "kind": "multiple",
    "question": "다음 코드에서 버튼을 클릭했을 때 콘솔에 출력되는 값으로 올바른 것을 고르시오.",
    "passage": "const button = document.querySelector('button');\nbutton.addEventListener('click', function () {\n  console.log(this === button);\n});",
    "codeType": "javascript",
    "answerText": "true",
    "explanation": "일반 함수로 등록된 이벤트 리스너 내부의 this는 이벤트 리스너가 연결된 요소를 가리킨다.",
    "choices": [
      "true",
      "false",
      "undefined",
      "TypeError"
    ],
    "answer": 0
  },
  {
    "id": "q055",
    "kind": "multiple",
    "question": "다음 코드의 실행 결과로 올바른 것을 고르시오.",
    "passage": "const numbers = [1, 2, 3];\nconst result = numbers.map((num) => num * 2);\nconsole.log(numbers);\nconsole.log(result);",
    "codeType": "javascript",
    "answerText": "[1, 2, 3] / [2, 4, 6]",
    "explanation": "map은 원본 배열을 직접 바꾸지 않고, 콜백 함수의 반환값으로 새 배열을 만든다.",
    "choices": [
      "[2, 4, 6] / [2, 4, 6]",
      "[1, 2, 3] / [2, 4, 6]",
      "[1, 2, 3] / undefined",
      "[2, 4, 6] / [1, 2, 3]"
    ],
    "answer": 1
  },
  {
    "id": "q056",
    "kind": "short",
    "question": "객체의 모든 키를 배열로 반환하는 메서드 호출 코드를 작성하시오.",
    "passage": "const user = { name: 'Kim', age: 20 };\nconsole.log(ⓐ); // ['name', 'age']",
    "codeType": "javascript",
    "answerText": "Object.keys(user)",
    "explanation": "Object.keys(obj)는 객체의 열거 가능한 속성 이름들을 배열로 반환한다."
  },
  {
    "id": "q057",
    "kind": "multiple",
    "question": "다음 중 화살표 함수에 대한 설명으로 옳은 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "자신만의 this를 가지지 않는다.",
    "explanation": "화살표 함수는 자신만의 this를 만들지 않고, 선언된 위치의 바깥 this를 사용한다.",
    "choices": [
      "항상 function 키워드 함수보다 먼저 실행된다.",
      "자신만의 this를 가지지 않는다.",
      "반드시 return 키워드를 작성해야 값을 반환한다.",
      "객체 생성자 함수로 사용하는 것이 권장된다."
    ],
    "answer": 1
  },
  {
    "id": "q058",
    "kind": "multiple",
    "question": "다음 코드의 실행 결과로 올바른 것을 고르시오.",
    "passage": "console.log(typeof null);\nconsole.log(Array.isArray([]));",
    "codeType": "javascript",
    "answerText": "'object', true",
    "explanation": "typeof null은 역사적인 이유로 'object'를 반환한다. 배열 여부는 Array.isArray로 확인할 수 있다.",
    "choices": [
      "'null', true",
      "'object', false",
      "'object', true",
      "'array', true"
    ],
    "answer": 2
  },
  {
    "id": "q059",
    "kind": "short",
    "question": "id가 title인 요소 하나를 선택하는 코드를 작성하시오.",
    "passage": "const title = ⓐ;",
    "codeType": "javascript",
    "answerText": "document.querySelector('#title')",
    "explanation": "querySelector는 CSS 선택자를 사용하므로 id 선택자는 #title처럼 작성한다."
  },
  {
    "id": "q060",
    "kind": "multiple",
    "question": "다음 코드의 실행 순서로 올바른 것을 고르시오.",
    "passage": "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nconsole.log('C');",
    "codeType": "javascript",
    "answerText": "A, C, B",
    "explanation": "setTimeout의 콜백은 지정 시간이 0이어도 현재 실행 중인 동기 코드가 끝난 뒤 실행된다.",
    "choices": [
      "A, B, C",
      "A, C, B",
      "B, A, C",
      "C, A, B"
    ],
    "answer": 1
  },
  {
    "id": "q061",
    "kind": "short",
    "question": "배열에 특정 값이 포함되어 있는지 확인하는 메서드 이름을 작성하시오.",
    "passage": "const fruits = ['apple', 'banana'];\nconsole.log(fruits.ⓐ('banana')); // true",
    "codeType": "javascript",
    "answerText": "includes",
    "explanation": "includes 메서드는 배열에 특정 요소가 포함되어 있으면 true를 반환한다."
  },
  {
    "id": "q062",
    "kind": "multiple",
    "question": "다음 중 Promise의 then 메서드에 대한 설명으로 옳은 것을 고르시오.",
    "passage": "",
    "codeType": "none",
    "answerText": "성공적으로 처리된 결과를 받을 콜백을 등록할 수 있다.",
    "explanation": "then은 Promise가 fulfilled 상태가 되었을 때 실행할 콜백을 등록하고, 다시 Promise를 반환하므로 체이닝할 수 있다.",
    "choices": [
      "성공적으로 처리된 결과를 받을 콜백을 등록할 수 있다.",
      "동기 코드보다 항상 먼저 실행된다.",
      "오직 DOM 이벤트에서만 사용할 수 있다.",
      "한 번 호출하면 Promise의 상태가 pending으로 되돌아간다."
    ],
    "answer": 0
  }
];
