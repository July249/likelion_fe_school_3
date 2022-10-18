# HTML

## 1. HTML이란?

웹에서 문서를 표현하기 위한 방법

## 2. HTML 표준

- HTML Living Standard (https://html.spec.whatwg.org/multipage/)

- living standard 안에 MDN 문서가 같이 있습니다. 따라서 MDN을 보셔도 좋습니다.

## 3. HTML 요소

- 시작 태그(start tag, opening tag), 종료 태그(end tag, closing tag) - h1, p

- 빈 태그(void tag, empty tag)

## 4. The elements of HTML

### The document element

- html element

### Document metadata

- head
- title
- base
- link
- meta
  - https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
  - https://ogp.me/
- style

### Sections

- body
- article
  - 콘텐츠의 내용이 독립적이다.
  - heading 요소를 꼭 포함해야 합니다.
- section
  - 범용적인 묶음 목적으로 사용한다.
  - heading 요소를 꼭 포함해야 합니다.
- nav
- aside
  - 광고, 위젯 등 콘텐츠와 연관성이 낮은 콘텐츠의 집합들에 사용됩니다.
- h1, h2, h3, h4, h5, h6
- hgroup
  - 문서 구획을 할 때 2차 제목 연결
  - 주의! hgroup은 이론적으로만 유효합니다.(MDN 문서 참조: https://developer.mozilla.org/ko/docs/Web/HTML/Element/hgroup)
- header
  - 콘텐츠의 시작 부분을 나타내는 요소(구역의 제목을 포함하는 용도로 많이 사용합니다.)
  - h1 > a > img
  - h1(screen out) + img
- footer
  - 작성자 정보, 저작권, 관련된 링크 등의 내용을 담는 구획
- address
  - 주소 정보 등을 담습니다.

### Grouping content

- p
- hr
  - 브라우저마다 보여지는 화면이 달라서 은행권 같은 곳에서는 사용을 지양합니다.
  - border나 이미지 사용합니다.
- pre
  - html이 공백 병합이 되는데 공백을 병합하고 싶지 않을 때 사용
- blockquote
- ol
- ul
- menu
- li
- dl
- dt
- dd
- figure
- figcaption
- main
- div
  - 최후의 수단으로 활용. 이상과 현실의 괴리가 있을 수 있습니다.

### Text-level semantics

- a
  - a 태그 내부에 block 요소 삽입 가능(HTML 5부터)
- em
- strong
- small
- s
- cite
- q
- dfn
- abbr
- ruby
- rt
- rp
- data
- time
- code
- var
- samp
- kbd
- sub and sup
- i
- b
- u
- mark
- bdi
- dbo
- span
- br
- wbr

### Embedded content

- picture
- source
- img
- iframe
- embed
- video
- audio
- track
- map
- area
- Tabular data
- table
- caption
- colgroup
- col
- tbody
- thead
- tfoot
- tr
- td
- th

### Forms

- form
- label
- input
- button
- select
- datalist
- opstgroup
- option
- textarea
- output
- progress
- meter
- fieldset
- legend
- Interactive elements
- details
- summary
- dialog

## 5. Emmet abbreviation

- 자주 사용되는 emmet

  ```html
  h1 h1+h2+p h2*3 h2{hello world}*10 h1#hojun h1.hoju
  (div>table>(tr>(td*2))*3)+(footer>p) div#one.c1.c2.c3 ul>li.item$*5
  table>(tr#id$>td.class$*6)*3 a{Click} lorem img:z

  <!-- lorem*5는 5개의 문장 -->
  lorem*5

  <!-- lorem5는 5개의 단어 -->
  lorem5 [a='value1' b="value2" c=1] a[href='www.naver.com']
  ```

- emmet cheat sheet : `https://docs.emmet.io/cheat-sheet/`
