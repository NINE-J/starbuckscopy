<template>
  <div
    class="nav__menu"
    :class="{ active: isMenuDirty }"
    @mouseenter="isMenuActive(true)"
    @mouseleave="isMenuActive(false)"
  >
    <ul class="list__wrapper inner">
      <li
        class="items__wrapper"
        v-for="(item, i) in menu[navDataProp]"
        :key="i"
      >
        <dl class="item__list">
          <dt class="item__title">{{ item.title }}</dt>
          <dd
            class="item__content"
            v-for="(item__inner, i) in item.items"
            :key="i"
          >
            {{ item__inner }}
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    navDataProp: {
      type: String,
      default: undefined
    },
    isMenuDirty: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isMenuActive(state) {
      this.$emit('isMenuActive', state);
    }
  },
  data() {
    return {
      menu: {
        coffee: [
          {
            title: '커피',
            items: ['스타벅스 원두', '스타벅스 비아', '스타벅스 오리가미']
          },
          {
            title: '에스프레소 음료',
            items: [
              '도피오',
              '에스프레소 마키아또',
              '아메리카노',
              '아메리카노',
              '마키아또',
              '카푸치노',
              '라떼',
              '모카',
              '리스트레또 비안코'
            ]
          },
          {
            title: '커피 이야기',
            items: [
              '스타벅스 로스트 스팩트럼',
              '최상의 아라비카 원두',
              '한 잔의 커피가 완성되기까지',
              '클로버® 커피 추출 시스템'
            ]
          },
          {
            title: '최상의 커피를 즐기는 법',
            items: [
              '커피 프레스',
              '푸어 오버',
              '아이스 푸어 오버',
              '커피 메이커',
              '리저브를 매장에서 다양하게 즐기는 법'
            ]
          }
        ],
        menu: [
          {
            title: '음료',
            items: [
              '콜드 브루',
              '브루드 커피',
              '에스프레소',
              '프라푸치노',
              '블렌디드 음료',
              '스타벅스 피지오',
              '티(티바나)',
              '기타 제조 음료',
              '스타벅스 주스(병음료)'
            ]
          },
          {
            title: '푸드',
            items: [
              '베이커리',
              '케익',
              '샌드위치 & 샐러드',
              '따뜻한 푸드',
              '과일 & 요거트',
              '스낵 & 미니 디저트',
              '아이스크림'
            ]
          },
          {
            title: '상품',
            items: [
              '머그',
              '글라스',
              '플라스틱 텀블러',
              '스테인리스 텀블러',
              '보온병',
              '액세서리',
              '커피 용품',
              '패키지 티(티바나)'
            ]
          },
          {
            title: '카드',
            items: ['실물카드', 'e-Gift 카드']
          },
          {
            title: '메뉴 이야기',
            items: ['콜드 브루', '스타벅스 티바나']
          }
        ],
        store: [
          { title: '매장 찾기', items: ['퀵 검색', '지역 검색', 'My 매장'] },
          {
            title: '매장 이야기',
            items: ['청담스타', '티바나 인스파이어드 매장', '파미에파크']
          }
        ],
        responsibility: [
          {
            title: '지역 사회 참여 활동',
            items: [
              '회망배달 캠페인',
              '재능기부 카페 소식',
              '커뮤니티 스토어',
              '청년인재 양성',
              '우리 농산물 사랑 캠페인',
              '우리 문화 지키기'
            ]
          },
          {
            title: '환경보호 활동',
            items: [
              '환경 발자국 줄이기',
              '일회용 컵 없는 매장',
              '커피 원두 재활용'
            ]
          },
          {
            title: '윤리 구매',
            items: ['윤리적 원두 구매', '공정무역 인증', '커피 농가 지원 활동']
          },
          {
            title: '글로벌 사회 공헌',
            items: ['윤리경영 보고서', '스타벅스 재단', '지구촌 봉사의 달']
          }
        ],
        rewards: [
          {
            title: '마이 스타벅스 리워드',
            items: [
              '마이 스타벅스 리워드 소개',
              '등급 및 혜택',
              '스타벅스 별',
              '자주하는 질문'
            ]
          },
          {
            title: '스타벅스 카드',
            items: [
              '스타벅스 카드 소개',
              '스타벅스 카드 갤러리',
              '등록 및 조회',
              '충전 및 이용안내',
              '분실신고/환불신청',
              '자주하는 질문'
            ]
          },
          {
            title: '스타벅스 카드 e-Gift',
            items: [
              '스타벅스 카드 e-Gift 소개',
              '이용안내',
              '선물하기',
              '자주하는 질문'
            ]
          }
        ],
        new: [
          {
            title: '프로모션 & 이벤트',
            items: [
              '전체',
              '스타벅스 카드',
              '마이 스타벅스 리워드',
              '온라인',
              '2017 스타벅스 플래너'
            ]
          },
          {
            title: '새소식',
            items: [
              '전체',
              '상품 출시',
              '스타벅스의 문화',
              '스타벅스 사회공헌',
              '스타벅스 카드출시'
            ]
          },
          {
            title: '매장별 이벤트',
            items: ['일반 매장', '신규 매장']
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.nav__menu {
  width: 100%;
  max-height: 0;
  display: flex;
  justify-content: center;
  background: #2c2a29;
  transition: 0.6s all;
  overflow: hidden;

  .list__wrapper {
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    padding: 2rem;

    .items__wrapper {
      width: 220px;

      .item__list {
        .item__title {
          padding: 3px 0 12px;
        }

        .item__content {
          padding: 5px 0;
          font-size: 0.75rem;
          color: #999;
        }
      }
    }
  }
}

.nav__menu.active {
  max-height: 999px;
}
</style>
