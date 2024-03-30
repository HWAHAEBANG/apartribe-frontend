![image](https://github.com/apartribe/apartribe-frontend/assets/101491870/cfc0b00a-beb2-43e9-8dae-bec7f5375d8f)

# 1. 프로젝트 개요 (Desciption)

## 1.1. 서비스 소개
아파트라이브는 `아파트 단지별 커뮤니티` 공간을 제공하는 서비스입니다.

아파트라이브는(APARTRIBE)는 '아파트(Apartment)'와 '종족(Tribe)'이 결합된 이름으로,  직설적으론 ‘아파트족’ 이라고 해석될 수 있습니다. 즉, `아파트의 거주하는 사람들` 이라는 의미입니다.

또한 ‘라이브’라는 단어의 발음은 Live(살다) 라는 단어로 들리기도 하면서, `아파트 생활` 이라는 이중적인 의미를 내포하고 있기도합니다.

이 서비스는 아파트라는 하나의 바운더리 안에 거주하는사람들을 하나의 종족으로 보는 재미있는 시각을 가지고, 그 안에서 일어나는 구성원들 사이의 일상과 소통을 담을 수 있는 커뮤니티 서비스입니다.

<br/>

## 1.2. 개발 배경

한국에는 ‘아파트’라는 주거 형태를 가장 선호하는 특별한 거주 문화가 존재합니다.

이러한 현상은 세대가 바뀌며 더욱 심화되는 양상을 보이고 있습니다.  즉, 단독 주택의 수요는 줄고, 아파트의 수요는 끊임없이 증가하는 아파트 강세 현상이 심화되어 가고 있다는 것입니다.

아파트는 비교적 작은 공간에 수많은 사람들이 집약적으로 모여사는 주거형태로, 많은 사람들이 같은 환경과 문화를 영위하기때문에 대체로 공통의 관심사를 가지고 있고, 이웃간의 정보 공유가 필요한 경우가 많습니다.

하지만 모순적으로 개인주의 성향이 강해지는 시대의 분위기에 따라 이웃과 직접 소통하는 것은 상당히 부담스러운일로 느껴집니다.

이러한 `소통에 대한 필요성`과 `직접 소통의 부담` 의 모순을 줄여줄 수 있는 방법으로 , `익명성을 기반으로한 아파트 별 커뮤니티 플랫폼` 이 큰 관심을 받을 수 있을 것으로 판단되여 개발을 하게 되었습니다.

<br/>

## 1.3. 유사 플랫폼 성공사례 분석

최근 특정 집단만 참여할 수 있는 커뮤니티들이 크게 인기를 끄는 사례를 찾아볼 수 있습니다.

모두가 접근할 수 있는 SNS (Instagram, FaceBook) 보다도 어떤 특정한 공통점이 있는 집단 내에서 정보들을 공유하며, 소통할 수 있는 기능을 제공하는 플랫폼들이 큰 성공을 거두고있습니다.

대표적인 사례로  ‘에브라타임’과 ‘블라인드’가 있습니다.

`에브리타임`

대학교 별 커뮤니티를 제공하는 서비스 ‘에브리타임’은 출시 초기 대학생들에게 시간표 위젯을 무료로 제공함으로써 많은 사용자를 모았습니다.  이후 사용자가 늘자 커뮤니티 기능을 적극 활성화하여 대학가의 커뮤니티 시장을 독식할 정도로 크게 성장한 케이스로 알려져 있습니다.

✅ **성공 요인 분석**

1. 무료 시간표 위젯 기능으로 사용자 대거 유입 성공
2. 적절한 시기에 커뮤니티 기능 적극 개발
3. 하나의 앱에서 학교 마다 각각의 커뮤니티 공간을 부여
4. 사용자가 게시판 카테고리를 직접 생성할 수 있는 자율성 부여
5. 익명 제도를 적용함으로써, 자유로운 소통 분위기 형성

`블라인드`

에브리타임과 유사한 성격을 지닌 직장인 커뮤니티 서비스 입니다. 블라인드는 회사별 소통 공간뿐 아니라 다른 회사원들과 소통할 수 있는 공간을 만들어 서로의 직장에 대한 정보 공유와 소통을 용이하게 하는 기능을 제공합니다.

✅ **성공 요인 분석**

1. 다른 회사의 평가를 보고싶으면 본인의 회사를 인증하고, 회사에 대한 평가를 남겨야함.
2. 회사들의 내부 분위기를 파악하고자 하는 취업자, 이직자의 회원가입을 유도.
3. 철저한 재직자 인증을 통해 검증된 회사 후기를 파악할 수 있음.
4. 익명 제도를 적용함으로써, 솔직하고 자유로운 소통 분위기 형성.

<br/>

## 1.4 유사 서비스 시장조사
- 위의 두 성공사례에서 알 수 있듯이 큰 성장을 이룬 서비스는 모바일 앱을 제공하고 있으며, 이용자의 대부분은 웹 보다는 모바일 앱으로 서비스를 이용하는 것을 선호한다는 것을 부정할 수 없습니다.
- 구글 스토어에 ‘아파트 커뮤니티' 검색 시 다운로드 수 상위를 차지하고 있는 모바일 앱들은 다음과 같습니다.

|아파트스토리|빌리진아이|아파트너|아파트리|
|---|---|---|---|
|![image](https://github.com/HWAHAEBANG/apartribe-frontend/assets/101491870/beb8af1f-f0ef-4fcc-8669-014010d3f44a)|![image](https://github.com/HWAHAEBANG/apartribe-frontend/assets/101491870/4acca043-dea0-4b24-8859-c7cb98dfa29b)|![image](https://github.com/HWAHAEBANG/apartribe-frontend/assets/101491870/d5e10ea0-911a-4383-ab4d-7738fa617a29)|![image](https://github.com/HWAHAEBANG/apartribe-frontend/assets/101491870/2184e7a2-0472-4530-b8ea-c6b5fac592d1)|



- 검색 결과의 대부분은 부동산 투자 관련한 어플들이었으며 위와 같이 커뮤니티 기능을 제공하는 어플들이 몇몇 있었으나, 소통의 목적으로 생성된 서비스가 아닌 아파트 거주 편의기능을 제공하는 어플에 부수적으로 커뮤니티 창구를 운영하는 것을 알 수 있습니다.
- 이 처럼 아파트 단지별 커뮤니티는 크게 흥행할 수 있는 아이템임에도 불구하고, 아직 제대로된 플랫폼이 자리잡지 않은 가능성의 영역이라 판단됩니다.
- 단순히 개발 경험을 넘어서, 상품화라는 원대한 목표를 가지고 개발 할만한 충분한 가치가 있는 사업 아이템입니다.
- 초기단계는 웹 개발로 시작하여 프로젝트의 완성도에 따라 앱개발을 병행하여 사용화할 수 있는 서비스를 만들어 내는 것이 이 프로젝트의 최종 목표입니다.

<br/>
<br/>

# 2. 프로젝트 구성

## 2.1. 웹 어플리케이션 구조
![image](https://github.com/apartribe/apartribe-frontend/assets/101491870/93c9d5ad-c35d-4d63-8a0f-2d1f1edb1224)

<br/>

## 2.2. 페이지 구조 및 권한
![image](https://github.com/HWAHAEBANG/apartribe-frontend/assets/101491870/4bf7fa8e-5409-4a32-a28e-8db9eb5f4071)
![image](https://github.com/HWAHAEBANG/apartribe-frontend/assets/101491870/26913ca5-9473-4bd8-9341-1ba442621b08)

<br/>

## 2.3. 페이지 라우팅 경로
| NO | PAGE NAME | PATH |
| --- | --- | --- |
| 1 | 랜딩 | / |
| 2 | 회원가입 선택   | /signup/select |
| 3 | 로컬 회원가입 | /signup/local |
| 4 | 로그인 | /login |
| 5 | 아이디 찾기 | /find/id |
| 6 | 비밀번호 찾기 | /find/pw |
| 7 | 비밀번호 재설정 | /find/pw/reset |
| 8 | 사이트 소개 | /about |
| 9 | 광고 및 제휴 문의 | /contact |
| 10 | 아파트 검색 (삭제) | /search-apartment |
| 11 | 설정 | /setting |
| 12 | 아파트 인증 선택 | /setting/apartment-verification |
| 13 | 거주민 인증(보류) | /setting/apartment-verification/resident |
| 14 | 관리인 인증(보류) | /setting/apartment-verification/manager |
| 15 | 비밀번호 변경 | /setting/pw/change |
| 16 | 닉네임 변경 | /setting/nickname/change |
| 17 | 프로필 사진 변경 | /setting/image/change |
| 18 | 커뮤니티 생성 | /community/:aptId/create |
| 19 | 게시물 목록 | /community/:aptId (article 쓰는게 더 일관성 있으나 nest 구조로 인해 제한) |
| 20 | 게시물 추가 | /community/:aptId/article/add |
| 21 | 게시물 디테일 | /community/:aptId/article/:postId/detail |
| 22 | 게시물 수정 | /community/:aptId/article/:postId/edit |
| 23 | 공지사항 목록 | /community/:aptId/announce |
| 24 | 공지사항 추가 | /community/:aptId/announce/add |
| 25 | 공지사항 디테일 | /community/:aptId/announce/:postId/detail |
| 26 | 공지사항 수정 | /community/:aptId/announce/:postId/edit |
| 27 | 구인 공고 목록 | /community/:aptId/together |
| 28 | 구인 공고 추가 | /community/:aptId/together/add |
| 29 | 구인공고 디테일 | /community/:aptId/together/:postId/detail |
| 30 | 구인공고 수정 | /community/:aptId/together/:postId/edit |

<br/>

## 2.4. 디렉터리 구조
<details>
<summary>토글하여 확인하기</summary>
<div markdown="1">
 
```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜AuthLayout.tsx
 ┃ ┃ ┣ 📜FindPwForm.tsx
 ┃ ┃ ┣ 📜OauthLoginButton.tsx
 ┃ ┃ ┣ 📜ResetPwForm.tsx
 ┃ ┃ ┣ 📜SignupInput.tsx
 ┃ ┃ ┣ 📜SignupInputArea.tsx
 ┃ ┃ ┣ 📜TermsAndConditionArea.tsx
 ┃ ┃ ┗ 📜TermsAndConditionModal.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂apt-sugget-search-bar
 ┃ ┃ ┃ ┣ 📜AptSearchBar.tsx // 배너용 아파트 검색 텍스트 박스
 ┃ ┃ ┃ ┗ 📜HeaderAptSearchBar.tsx // 헤더용 아파트 검색 텍스트 박스
 ┃ ┃ ┣ 📂effect
 ┃ ┃ ┃ ┣ 📜Confetti.tsx // 커뮤니티 생성시 빵빠레 효과
 ┃ ┃ ┃ ┗ 📜PostsLoading.tsx // 게시물 로딩시 효과
 ┃ ┃ ┣ 📜FlexibleModal.tsx // 유연한 다목적 선택형 모달
 ┃ ┃ ┣ 📜Footer.tsx // 푸터 영역
 ┃ ┃ ┣ 📜HeaderCommunity.tsx // 커뮤니티에서의 헤더
 ┃ ┃ ┣ 📜HeaderLanding.tsx // 랜딩페이지에서의 헤더
 ┃ ┃ ┣ 📜MessageModal.tsx
 ┃ ┃ ┣ 📜Pagination.tsx
 ┃ ┃ ┗ 📜QuestionModal.tsx
 ┃ ┣ 📂community
 ┃ ┃ ┣ 📂announce-page
 ┃ ┃ ┃ ┣ 📜AnnounceCard.tsx
 ┃ ┃ ┃ ┗ 📜AnnounceRangeDatePicker.tsx
 ┃ ┃ ┣ 📂article-page
 ┃ ┃ ┃ ┗ 📜ArticleCard.tsx
 ┃ ┃ ┣ 📂common // 커뮤니티 내에서 공통으로 사용되는 컴포넌트
 ┃ ┃ ┃ ┣ 📜AddCategoryModal.tsx // 카테고리 추가 모달
 ┃ ┃ ┃ ┣ 📜CategorySection.tsx // 동적으로 추가 가능한 카테고리 영역
 ┃ ┃ ┃ ┣ 📜CkEditor.tsx // 텍스트 에디터 (S3 이미지 업로드 연동)
 ┃ ┃ ┃ ┣ 📜CommentCard.tsx // 댓글 영역
 ┃ ┃ ┃ ┣ 📜DetailCommentSection.tsx // 게시물의 디테일 페이지 내 댓글 영역
 ┃ ┃ ┃ ┣ 📜DetailHeaderSection.tsx // 게시물의 디테일 페이지 내 헤더 영역 (제목, 작성자 등)
 ┃ ┃ ┃ ┣ 📜EditComment.tsx // 댓글 수정모드 시 보여질 텍스트 박스
 ┃ ┃ ┃ ┣ 📜EditReply.tsx // 답글 수정모드 시 보여질 텍스트 박스
 ┃ ┃ ┃ ┣ 📜FixedButtonList.tsx // 우측 하단 글쓰기 버튼 목록
 ┃ ┃ ┃ ┣ 📜PostListSection.tsx // 게시물 목록을 보여주는 여역
 ┃ ┃ ┃ ┗ 📜ReplyCard.tsx // 답글 영역
 ┃ ┃ ┣ 📂together-page
 ┃ ┃ ┃ ┣ 📜DetailInfoSection.tsx // 모집대상, 장소, 시간 등 모집 정보를 보여주는 영역
 ┃ ┃ ┃ ┣ 📜togetherCard.tsx // '같이 하실 분' 목록에서 보여질 각각의 카드
 ┃ ┃ ┃ ┗ 📜TogetherRangeDatePicker.tsx // 모집 기간을 설정할 수 있는 데이트피커
 ┃ ┃ ┗ 📂widget-bar
 ┃ ┃ ┃ ┣ 📜AdvertisementWidget.tsx // 협찬받은 광고를 띄워주는 위젯
 ┃ ┃ ┃ ┣ 📜AnnounceWidget.tsx // 현재 유효한 '공지 사항' 게시물만 골라 보여주는 위젯
 ┃ ┃ ┃ ┣ 📜BestPostsWidget.tsx // 조회수 순으로 가장 인기 있는 게시물 보여주는 위젯
 ┃ ┃ ┃ ┣ 📜CommentRankWidget.tsx // 댓글 많이 작성한 사용자 순위를 보여주는 위젯
 ┃ ┃ ┃ ┣ 📜SearchPostWidget.tsx // 커뮤니티 내 게시물을 검색할 수 있는 위젯
 ┃ ┃ ┃ ┣ 📜TogetherWidget.tsx // 현재 모집중인 '같이 하실분' 게시물만 골라 보여주는 위젯 
 ┃ ┃ ┃ ┣ 📜WidgetsSection.tsx // 위젯바 레이아웃 컴포넌트
 ┃ ┃ ┃ ┗ 📜WidgetTitleArea.tsx // 위젯 별 제목 섹션 공통 컴포넌트
 ┃ ┣ 📂landing // 랜딩 페이지
 ┃ ┃ ┣ 📜AptRankCard.tsx // 아파트 순위 카드
 ┃ ┃ ┣ 📜AptRankSection.tsx // 아파트 순위 영역
 ┃ ┃ ┣ 📜BannerFirst.tsx // 첫번째 배너
 ┃ ┃ ┣ 📜BannerSecond.tsx // 두번째 배너
 ┃ ┃ ┣ 📜BannerSection.tsx // 배너 영역
 ┃ ┃ ┣ 📜BannerThird.tsx // 세번째 배너
 ┃ ┃ ┣ 📜FAQCard.tsx // 자주 묻는 질문 카드
 ┃ ┃ ┣ 📜FAQSection.tsx // 자주 묻는 질문 영역
 ┃ ┃ ┣ 📜ReviewCard.tsx // 리뷰 카드
 ┃ ┃ ┣ 📜ReviewSection.tsx // 리뷰 영역
 ┃ ┃ ┗ 📜VideoSection.tsx // 비디오 재생 영역
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜DropdownCategory.tsx // 게시물 작성, 수정 시 카테고리 선택하는 드롭다운
 ┃ ┃ ┣ 📜DropdownSort.tsx // 게시물 목록에서 정렬 방식 설정하는 드롭다운
 ┃ ┃ ┗ 📜SearchBar.tsx // 검색 텍스트 박스 UI
 ┃ ┗ 📂verify-apt
 ┃ ┃ ┣ 📜SelectApt.tsx // 아파트 선택 영역
 ┃ ┃ ┣ 📜SelectPosition.tsx // 거주형태 또는 직책 선택 영역
 ┃ ┃ ┣ 📜SelectUserType.tsx // 유저 타입 선택 (거주자 or 관리자)
 ┃ ┃ ┗ 📜SelectVerifyMethod.tsx // 인증 방법 선택
 ┣ 📂configs
 ┃ ┗ 📜axios.ts // axios 인스턴스, 인터셉터
 ┣ 📂constants
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜path.ts
 ┃ ┃ ┣ 📜signupValidation.ts
 ┃ ┃ ┗ 📜termsAndConditions.ts
 ┃ ┣ 📂landing
 ┃ ┃ ┣ 📜about.ts // 소개 페이지 컨텐츠
 ┃ ┃ ┣ 📜banner.ts // 배너 컨텐츠
 ┃ ┃ ┣ 📜faq.ts // 자주 묻는 질문 컨텐츠
 ┃ ┃ ┣ 📜review.ts // 리뷰 컨텐츠
 ┃ ┃ ┗ 📜verifyApt.ts // 아파트 인증 페이지 컨텐츠
 ┃ ┣ 📂setting
 ┃ ┃ ┣ 📜pagination.ts
 ┃ ┃ ┗ 📜path.ts
 ┃ ┣ 📜advertisementList.ts // 커뮤니티 위젯 바 내 광고 이미지 및 경로
 ┃ ┣ 📜fixedButtonList.ts // 우측 하단 글쓰기 버튼 목록의 컨텐츠 및 경로
 ┃ ┣ 📜navList.ts // 네비게이션 바(GNB) 컨텐츠 및 경로 
 ┃ ┣ 📜sortList.ts // 게시물 정렬 옵션 컨텐츠
 ┃ ┗ 📜urgencyGuideList.ts // '공지 사항' 작성 시 긴급도 선택 요령 컨텐츠
 ┣ 📂contexts
 ┃ ┗ 📜.gitkeep
 ┣ 📂hooks
 ┃ ┣ 📜useGeolocation.ts // 경위도 조회 훅 (아파트 검색시 위치 기반 근접한 순으로 조회 가능)
 ┃ ┣ 📜useRedux.ts // 리덕스 툴킷
 ┃ ┣ 📜useScrollButton.ts // 커뮤니티 내 버튼 눌러 부드럽게 좌우 이동
 ┃ ┗ 📜useTimer.ts
 ┣ 📂mock
 ┃ ┗ 📜aptRankData.ts // 랜딩 페이지 아파트 순위 목 데이터
 ┣ 📂pages
 ┃ ┣ 📂announce-pages
 ┃ ┃ ┣ 📜AddAnnouncePage.tsx // '공지사항'작성 페이지
 ┃ ┃ ┣ 📜AnnouncePage.tsx // '공지사항' 페이지
 ┃ ┃ ┣ 📜DetailAnnouncePage.tsx // '공지사항' 디테일 페이지
 ┃ ┃ ┗ 📜EditAnnouncePage.tsx // '공지사항' 수정 페이지
 ┃ ┣ 📂article-pages
 ┃ ┃ ┣ 📜AddArticlePage.tsx // '일반 게시물'작성 페이지
 ┃ ┃ ┣ 📜ArticlePage.tsx // '일반 게시물' 페이지
 ┃ ┃ ┣ 📜DetailArticlePage.tsx // '일반 게시물' 디테일 페이지
 ┃ ┃ ┗ 📜EditArticlePage.tsx // '일반 게시물' 수정 페이지
 ┃ ┣ 📂auth-pages
 ┃ ┃ ┣ 📜FindPwPage.tsx // 비밀번호 찾기 페이지
 ┃ ┃ ┣ 📜LoginPage.tsx // 로그인 페이지
 ┃ ┃ ┣ 📜ResetPwPage.tsx // 비밀번호 찾을 때 새 비밀번호 입력하는 페이지
 ┃ ┃ ┣ 📜SignupLocalPage.tsx // 이메일로 회원가입 페이지
 ┃ ┃ ┗ 📜SignupSelectPage.tsx //  이메일 회원가입 할 지, 카카카오로 회원가입 할 지 선택하는 페이지
 ┃ ┣ 📂community-pages
 ┃ ┃ ┣ 📜CommunityHomePage.tsx // 커뮤니티 홈 페이지
 ┃ ┃ ┗ 📜CreateAptCommunityPage.tsx // 커뮤니티 생성 페이지
 ┃ ┣ 📂gather-people-pages
 ┃ ┃ ┣ 📜AddTogetherPage.tsx // '같이 하실 분'작성 페이지
 ┃ ┃ ┣ 📜DetailTogetherPage.tsx // '같이 하실 분' 디테일 페이지
 ┃ ┃ ┣ 📜EditTogetherPage.tsx // '같이 하실 분' 수정 페이지
 ┃ ┃ ┗ 📜TogetherPage.tsx // '같이 하실 분' 페이지
 ┃ ┣ 📂intro-pages
 ┃ ┃ ┣ 📜AboutUsPage.tsx // 사이트 설명 페이지
 ┃ ┃ ┣ 📜ContactPage.tsx // 광고 및 협찬 문의 페이지
 ┃ ┃ ┣ 📜LandingPage.tsx // 랜딩 페이지
 ┃ ┃ ┗ 📜NotFoundPage.tsx // 오류 페이지
 ┃ ┗ 📂setting-pages
 ┃ ┃ ┣ 📜ChangeImagePage.tsx // 이미지 변경 페이지
 ┃ ┃ ┣ 📜ChangeNicknamePage.tsx // 닉네임 변경 페이지
 ┃ ┃ ┣ 📜ChangePwPage.tsx // 비밀변호 변경 페이지
 ┃ ┃ ┣ 📜DeleteMemberPage.tsx // 회원 탈퇴 페이지
 ┃ ┃ ┣ 📜MyArticlePage.tsx // 내가 쓴 게시물 보기 페이지
 ┃ ┃ ┣ 📜MyCommentPage.tsx // 내가 쓴 댓글, 답글 보기 페이지
 ┃ ┃ ┣ 📜SettingPage.tsx // 설정 페이지
 ┃ ┃ ┣ 📜VerifyAptPage.tsx // 아파트 인증 페이지
 ┃ ┃ ┣ 📜VerifyManagerPage.tsx // 관리자 인증 페이지 (미사용)
 ┃ ┃ ┗ 📜VerifyResidentPage.tsx // 거주민 인증 페이지 (미사용)
 ┣ 📂redux
 ┃ ┗ 📂store
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜userSlice.ts // 리덕스 툴킷 슬라이스
 ┣ 📂routes
 ┃ ┣ 📜ProtectedRouteAptVerified.tsx // 아파트 인증한 사용자만 통과 시키는 라우트
 ┃ ┣ 📜ProtectedRouteExistentApt.tsx // 개설 되어있는 아파트 커뮤니티인지 확인하는 라우트
 ┃ ┣ 📜ProtectedRouteLoggedIn.tsx // 로그인 사용자만 통과 시키는 라우트
 ┃ ┣ 📜ProtectedRouteNotLoggedIn.tsx // 로그인하지 않은 사용자만 통과 시키는 라우트
 ┃ ┣ 📜ProtectedRouteOnlyManager.tsx // 관리자만 통과 시키는 라우트
 ┃ ┣ 📜ProtectedRoutePresentAptVerified.tsx // 현재 접속한 아파트와 내 아파트가 일치할 때 통과 시키는 라우트
 ┃ ┗ 📜Router.tsx // 라우트 구성
 ┣ 📂services
 ┃ ┣ 📂apt
 ┃ ┃ ┣ 📜advertiseService.ts // 광고 및 협찬 문의 관련 서비스
 ┃ ┃ ┣ 📜aptService.ts // 아파트 관련 서비스
 ┃ ┃ ┗ 📜externalAptSearchService.ts // 아파트 관련 외부 api 서비스 (호갱노노)
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜authService.ts
 ┃ ┃ ┗ 📜userService.ts
 ┃ ┗ 📂community
 ┃ ┃ ┣ 📜announceService.ts // '공지사항' 관련 서비스
 ┃ ┃ ┣ 📜articleService.ts // '일반 게시글' 관련 서비스
 ┃ ┃ ┣ 📜categoryService.ts // 커뮤니티 카테고리 관련 서비스
 ┃ ┃ ┣ 📜commentService.ts // 댓글, 답글 관련 서비스
 ┃ ┃ ┣ 📜likeService.ts // 좋아요 기능 관련 서비스
 ┃ ┃ ┣ 📜postsService.ts // 게시물 리스트 불러오기 관련 서비스 (세 가지 게시판 공통)
 ┃ ┃ ┣ 📜togetherService.ts // '같이 하실 분' 관련 서비스
 ┃ ┃ ┣ 📜utilService.ts // 이미지 업로드 관련 서비스
 ┃ ┃ ┗ 📜widgetSevice.ts // 커뮤니티 내 위젯 관련 서비스
 ┣ 📂styles
 ┃ ┣ 📂reusable-style
 ┃ ┃ ┣ 📜elementStyle.ts // 재사용 가능한 요소 스타일
 ┃ ┃ ┗ 📜layoutStyle.ts // 재사용 가능한 레이아웃 스타일
 ┃ ┗ 📜ckeditor.css // 텍스트 에디터 css
 ┣ 📂types
 ┃ ┣ 📂community-type
 ┃ ┃ ┣ 📜announceType.ts // '공지사항' 관련 타입
 ┃ ┃ ┣ 📜aptType.ts // 아파트 관련 타입
 ┃ ┃ ┣ 📜ArticleType.ts // '일반 게시물' 관련 타입
 ┃ ┃ ┣ 📜categoryType.ts // 카테고리 관련 타입
 ┃ ┃ ┣ 📜commentType.ts // 댓글, 답글 관련 타입
 ┃ ┃ ┣ 📜sortType.ts // 정렬 관련 타입
 ┃ ┃ ┣ 📜togetherType.ts // '같이 하실 분' 관련 타입
 ┃ ┃ ┗ 📜widgetType.ts // 커뮤니티 내 위젯 관련 타입
 ┃ ┣ 📂style-type
 ┃ ┃ ┗ 📜reusableStyleType.ts // 재사용 가능 스타일 관련 타입
 ┃ ┣ 📜advertiseType.ts
 ┃ ┣ 📜authType.ts
 ┃ ┣ 📜landingType.ts // 랜딩 페이지 관련 타입
 ┃ ┣ 📜settingType.ts // 설정 페이지 관련 타입
 ┃ ┗ 📜VerifyAptType.ts // 아파트 인증 관련 타입
 ┣ 📂utils
 ┃ ┣ 📜dateFormat.ts // 날짜 형식 파싱해주는 유틸 함수
 ┃ ┣ 📜localStorage.ts // 
 ┃ ┣ 📜tagRemover.ts // 문자열에서 html 태그 삭제해주는 유틸 함수
 ┃ ┗ 📜timeAgo.ts // 날짜 형식 변경 유틸 함수 (n분 전)
 ┣ 📜App.tsx
 ┣ 📜custom.d.ts
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜markdown.d.ts
 ┗ 📜react-app-env.d.ts
```
</div>
</details>

<br/>
 
## 2.5. 주요 종속성
```
    "typescript": "^4.9.5",
    "redux": "^4.2.1",
    "react-redux": "^8.1.3",
    "redux-persist": "^6.0.0",
    "@reduxjs/toolkit": "^1.9.7",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.16.0",
    "axios": "^1.5.0",
    "react-icons": "^4.11.0",
    "styled-components": "^6.0.8",
    "@ckeditor/ckeditor5-react": "^6.1.0", // 텍스트 에디터
    "html-react-parser": "^4.2.2", // html 파서
    "react-markdown": "^8.0.7", // 마크다운 파서
    "react-datepicker": "^4.18.0", // 날짜 선택기
    "timeago.js": "^4.0.2", // 날짜 포매터
    "react-intersection-observer": "^9.5.2", // 인터섹션 옵저버
    "react-slick": "^0.29.0", // 캐러셸 라이브러리
    "slick-carousel": "^1.8.1", // 캐러셸 라이브러리
    "react-toastify": "^9.1.3", // 토스트 메시지 라이브러리
    "react-youtube": "^10.1.0", // 유튜브 재생 라이브러리
    "react-canvas-confetti": "^1.4.0", // 빵빠레 효과
    "react-content-loader": "^6.2.1", // 로딩 효과
    "react-spinners": "^0.13.8", // 로딩 효과
```
<br/>

## 2.6. 기술 스택

<br/>
<div align="center">
<div>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black"/>
</div>

<div>
<img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">
</div>

</div>

<br/>
<br/>

# 3. 실행환경 (Environment)

## 3.1. 배포 환경 : https://apartribe.com
## 3.2. 개발 환경 : npm
```
// 로컬 클라이언트 실행 방법

$ git clone https://github.com/apartribe/apartribe-frontend.git
$ npm install
$ npm start
```

<br/>
<br/>

# 4. 핵심 로직
## 4.1. params을 기반으로 한 아파트 별 공간 분리
![image](https://github.com/apartribe/apartribe-frontend/assets/101491870/300bc3f0-5e2e-4058-864e-948b52d29a4b)

<br/>

## 4.2. protected route를 통한 권한별 접근 가능 페이지 제한
- '파일 이름 == 통과 조건' 입니다.
![image](https://github.com/apartribe/apartribe-frontend/assets/101491870/8d28d57e-55f9-46ef-9952-90cb349f7c5f)
- 조건에 맞으면 children을 리턴하고, 조건에 맞지 많으면 리다이렉트를 유도하는 FlexibleModal을 띄워줍니다.
- 각 라우터는 router.tsx. 파일에서 element 프로퍼티에 중첩하는 형태로 감싸 사용이 가능합니다. 가장 먼저 체크하고 싶은 protectedRouted을 가장 상위에 위치시키면 됩니다. 예를 들면 다음과 같습니다
![image](https://github.com/apartribe/apartribe-frontend/assets/101491870/650a165f-743f-4bda-85a6-9803f9f437a6)



# 5. 버그

- 추가적으로 확인된 버그 없음

  <br/>
  <br/>

# 6. 향후 발전사항
- 아파트 인증 모듈 개발 또는 기성 모듈 도입
- 회원 간 1:1 채팅 기능 도입
  
  <br/>
  <br/>

# 7. 프로그램 작성자 및 도움을 준 사람

- 방충림 (FE developer)
- 이지은 (FE developer)
- 이경학 (BE developer)
- 오동현 (BE developer)
  <br/>
  <br/>

# 8. 버전 (업데이트 소식)
- 1.0.0 - 개발단계 테스트 릴리즈 ( 2023.11.30. )

  <br/>
  <br/>

# 9. 저작권 및 사용권 정보

- 아파트 검색 api는 호갱노노에서 제공받고 있습니다.
  <br/>
  <br/>
