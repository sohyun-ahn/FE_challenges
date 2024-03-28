## REST API

CRUD
[GET] /movies : 전체 유저 목록을 받아오는 API --> READ
[POST] /movies : 새로운 영화 하나를 생성하는 API --> CREATE
[GET] /movies/23 : 23에 해당하는 하나의 영화를 받아오는 API --> READ
[PUT] /movies/23 : 23에 해당하는 하나의 영화의 정보를 전체 업데이트(덮어씌우기) 하는 API --> Update
[PATCH] /movies/23 : (이걸 사용안한다면 PUT 메소드만 쓸 것) 23에 해당하는 하나의 영화의 정보 일부분을 수정하는 API --> Update
[DELETE] /movies/23 : 23에 해당하는 하나의 영화를 삭제하는 API --> Delete
