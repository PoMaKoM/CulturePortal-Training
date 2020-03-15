import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TimelineComponent } from './timeline.component';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

// tslint:disable: max-line-length
const director: InfoDirector = {
  'id': 'rt7jvgzf88n',
  'avatar': 'http://mogilevkino.by/public/images/1560928039%D0%A2%D1%83%D1%80%D0%BE%D0%B2.jpg',
  'gallery': [
    {
      'description': 'Виктор Туров фото 1',
      'link': 'https://zviazda.by/sites/default/files/1025776887.jpg'
    },
    {
      'description': 'Виктор Туров фото 2',
      'link': 'https://pic.rutube.ru/video/cf/81/cf81465f54a86ad124e44c89b82d2a73.jpg?size=m'
    },
    {
      'description': 'Виктор Туров фото 3',

      'link': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Alexey_Kuzmich_Portrait_of_national_actor_Victor_Turov_1989.JPG/1200px-Alexey_Kuzmich_Portrait_of_national_actor_Victor_Turov_1989.JPG'
    },
    {
      'description': 'Виктор Туров Фильм Через кладбище',
      'link': 'https://i.ytimg.com/vi/pTwHQE4NYJo/hqdefault.jpg'
    },
    {
      'description': 'Виктор Туров почтовая карточка',
      'link': 'https://bomarka.com/content/images/17/35696650875939.jpg'
    }
  ],
  'be': {
    'name': 'Віктар Цімафеевіч Тураў',
    'description': 'Савецкі і беларускі кінарэжысёр, сцэнарыст, педагог. Народны артыст СССР',
    'biography': [
      {
        'period': '1959',
        'description': 'Стаў рэжысёрам на кінастудыі «Беларусьфільм»'
      }, {
        'period': '1961',
        'description': 'Скончыў рэжысёрскі факультэт Усесаюзнага дзяржаўнага інстытута кінематаграфіі'
      }, {
        'period': '1976-1981',
        'description': 'Першы сакратар праўлення Саюза кінематаграфістаў Беларусі'
      }, {
        'period': '1977',
        'description': 'Стаў членам КПСС'
      }, {
        'period': '1984',
        'description': 'Лаўрэат Дзяржаўнай прэміі СССР за фільм «Людзі на балоце»'
      }, {
        'period': '1986',
        'description': 'Народны артыст CССР'
      }, {
        'period': '1994',
        'description': 'Фільм «Праз могілкі» рашэннем ЮНЕСКА быў унесены ў спіс 100 найбольш значных фільмаў свету пра вайну'
      }, {
        'period': '1995',
        'description': 'Уключаны ЮНЕСКА ў лік 50 кінематаграфістаў свету, з якіх складаўся Ганаровы камітэт па святкаванню 100-годдзя кінематаграфіі'
      }, {
        'period': '1996',
        'description': 'Лаўрэат Дзяржаўнай прэміі Рэспублікі Беларусь за вялікі ўклад у кінематаграфію'
      }
    ],
    'dates': {
      'birth': {
        'date': '25.10.1936',
        'place': {
          'location': 'Магілёў, БССР',
          'lat': '53.894548',
          'lng': '30.330654'
        }
      },
      'death': {
        'date': '31.10.1996',
        'place': 'Мінск, Беларусь'
      }
    },
    'nationality': 'СССР, Беларусь',
    'buried': 'Усходнія могілкі',
    'profession': [
      'Кінарэжысёр', 'Сцэнарыст'
    ],
    'films': [
      {
        'name': 'Цераз могілкі',
        'year': 1964
      },
      {
        'name': 'Я родам з дзяцінства',
        'year': 1966
      },
      {
        'name': 'Вайна пад стрэхамі',
        'year': 1967
      },
      {
        'name': 'Сыны ідуць у бой',
        'year': 1969
      },
      {
        'name': 'Жыццё і смерць двараніна Чартапханава',
        'year': 1971
      },
      {
        'name': 'Час яе сыноў',
        'year': 1974
      },
      {
        'name': 'Нядзельная ноч',
        'year': 1976
      },
      {
        'name': 'Кропка адліку',
        'year': 1979
      },
      {
        'name': 'Людзі на балоце',
        'year': 1981
      },
      {
        'name': 'Пераправа',
        'year': 1988
      },
      {
        'name': 'Высокая кроў',
        'year': 1989
      },
      {
        'name': 'Чорны бусел',
        'year': 1993
      },
      {
        'name': 'Шляхціц Завальня',
        'year': 1994
      }
    ],
    'other': 'Імем Віктара Турава названы вуліцы ў Мінску і Магілёве',
    'video': {
      'link': 'https://www.youtube.com/watch?v=2juET6V3YpM',
      'screenshot': 'https://i.ytimg.com/vi/2juET6V3YpM/maxresdefault.jpg',
      'title': 'Дакументальны фільм пра Віктара Турава'
    }
  },
  'ru': {
    'name': 'Виктор Тимофеевич Туров',
    'description': 'Советский и белорусский кинорежиссёр, сценарист, педагог. Народный артист СССР',
    'biography': [
      {
        'period': '1959',
        'description': 'Стал режиссером на киностудии «Беларусьфильм»'
      }, {
        'period': '1961',
        'description': 'Окончил режиссерский факультет Всесоюзного государственного института кинематографии'
      }, {
        'period': '1976-1981',
        'description': 'Первый секретарь правления Союза кинематографистов Беларуси'
      }, {
        'period': '1977',
        'description': 'Стал членом КПСС'
      }, {
        'period': '1984',
        'description': 'Лауреат Государственной премии СССР за фильм «Люди на болоте»'
      }, {
        'period': '1986',
        'description': 'Народный артист CССР'
      }, {
        'period': '1994',
        'description': 'Фильм «Через кладбище» решением ЮНЕСКО был внесен в список 100 наиболее значимых фильмов мира о войне'
      }, {
        'period': '1995',
        'description': 'Включен ЮНЕСКО в число 50 кинематографистов мира, из которых состоял Почетный комитет по празднованию 100-летия кинематографии'
      }, {
        'period': '1996',
        'description': 'Лауреат Государственной премии Республики Беларусь за большой вклад в кинематографию'
      }
    ],
    'dates': {
      'birth': {
        'date': '25.10.1936',
        'place': {
          'location': 'Могилев, БССР',
          'lat': '53.894548',
          'lng': '30.330654'
        }
      },
      'death': {
        'date': '31.10.1996',
        'place': 'Минск, Беларусь'
      }
    },
    'nationality': 'СССР, Беларусь',
    'buried': 'Восточное кладбище',
    'profession': [
      'Кинорежиссер', 'Сценарист'
    ],
    'films': [
      {
        'name': 'Через кладбище',
        'year': 1964
      },
      {
        'name': 'Я родом из детства',
        'year': 1966
      },
      {
        'name': 'Война под крышами',
        'year': 1967
      },
      {
        'name': 'Сыновья уходят в бой',
        'year': 1969
      },
      {
        'name': 'Жизнь и смерть дворянина Чертопханова',
        'year': 1971
      },
      {
        'name': 'Время её сыновей',
        'year': 1974
      },
      {
        'name': 'Воскресная ночь',
        'year': 1976
      },
      {
        'name': 'Точка отсчёта',
        'year': 1979
      },
      {
        'name': 'Люди на болоте',
        'year': 1981
      },
      {
        'name': 'Переправа',
        'year': 1988
      },
      {
        'name': 'Высокая кровь',
        'year': 1989
      },
      {
        'name': 'Черный аист',
        'year': 1993
      },
      {
        'name': 'Шляхтич Завальня',
        'year': 1994
      }
    ],
    'other': 'Именем Виктора Турова названы улицы в Минске и Могилеве',
    'video': {
      'link': 'https://www.youtube.com/watch?v=2juET6V3YpM',
      'screenshot': 'https://i.ytimg.com/vi/2juET6V3YpM/maxresdefault.jpg',
      'title': 'Документальный фильм о Викторе Турове'
    }
  },
  'en': {
    'name': 'Viktor Timofeevich Turov',
    'description': "Soviet and Belarusian film director, screenwriter, teacher. People's Artist of the USSR",
    'biography': [
      {
        'period': '1959',
        'description': 'Became a director at the Belarusfilm film studio'
      }, {
        'period': '1961',
        'description': 'Graduated from the directing department of the All-Union State Institute of Cinematography'
      }, {
        'period': '1976-1981',
        'description': 'First Secretary of the Board of the Union of Cinematographers of Belarus'
      }, {
        'period': '1977',
        'description': 'Became a member of the CPSU'
      }, {
        'period': '1984',
        'description': 'Laureate of the USSR State Prize for the film «People in the Swamp»'
      }, {
        'period': '1986',
        'description': "People's Artist of the USSR"
      }, {
        'period': '1994',
        'description': 'The film «Through the cemetery» by UNESCO decision was included in the list of 100 most significant films of the world about the war'
      }, {
        'period': '1995',
        'description': 'UNESCO is included in the list of 50 cinematographers of the world, of which the Honorary Committee for the celebration of the 100th anniversary of cinema was composed'
      }, {
        'period': '1996',
        'description': 'Laureate of the State Prize of the Republic of Belarus for his great contribution to cinema'
      }
    ],
    'dates': {
      'birth': {
        'date': '25.10.1936',
        'place': {
          'location': 'Mogilev, BSSR',
          'lat': '53.894548',
          'lng': '30.330654'
        }
      },
      'death': {
        'date': '31.10.1996',
        'place': 'Minsk, Belarus'
      }
    },
    'nationality': 'USSR, Belarus',
    'buried': 'East cemetery',
    'profession': [
      'director', 'screenwriter'
    ],
    'films': [
      {
        'name': 'Through the cemetery',
        'year': 1964
      },
      {
        'name': 'I come from childhood',
        'year': 1966
      },
      {
        'name': 'War under the roofs',
        'year': 1967
      },
      {
        'name': 'Sons go to battle',
        'year': 1969
      },
      {
        'name': 'Life and death of the nobleman Chertophanov',
        'year': 1971
      },
      {
        'name': 'The time of her sons',
        'year': 1974
      },
      {
        'name': 'Sunday night',
        'year': 1976
      },
      {
        'name': 'Reference point',
        'year': 1979
      },
      {
        'name': 'People in the swamp',
        'year': 1981
      },
      {
        'name': 'Crossing',
        'year': 1988
      },
      {
        'name': 'High blood',
        'year': 1989
      },
      {
        'name': 'Black stork',
        'year': 1993
      },
      {
        'name': 'Shlyahtich Zavalnya',
        'year': 1994
      }
    ],
    'other': 'Streets in Minsk and Mogilev are named after Victor Turov',
    'video': {
      'link': 'https://www.youtube.com/watch?v=2juET6V3YpM',
      'screenshot': 'https://i.ytimg.com/vi/2juET6V3YpM/maxresdefault.jpg',
      'title': 'Documentary film about Victor Turov'
    }
  }
};

const lang: string = 'ru';

storiesOf('Details', module).addDecorator(moduleMetadata({
    declarations: [TimelineComponent],
    imports: []
  })).add('Timeline', () => {
    return {
      template: '<app-timeline [director]=director [language]=lang></app-timeline>',
      props: {
        director,
        lang
      }
    };
  });
