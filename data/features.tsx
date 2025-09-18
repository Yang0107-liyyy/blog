import Translate, { translate } from '@docusaurus/Translate'
import TypingSvg from '@site/static/svg/undraw_typing.svg'
import LoadingSvg from '@site/static/svg/undraw_loading.svg'
import BookSvg from '@site/static/svg/undraw_book.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.title1',
      message: '前端开发学习者',
    }),
    description: (
      <Translate id="homepage.feature.learner">
        作为一名前端开发学习者，拥有扎实的 HTML、CSS、JavaScript 基础，并能使用 React 进行项目开发，期待在实践中积累经验、持续成长。
      </Translate>
    ),
    header: <BookSvg className="h-auto w-full" height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.title2',
      message: '较高自学能力',
    }),
    description: (
      <Translate id="homepage.feature.ability">
        作为一名前端新人，通过自学能较快掌握一些核心技能，能主动寻找和解决问题。
      </Translate>
    ),
    header: <LoadingSvg className="h-auto w-full" height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.title3',
      message: '对前端充满热情',
    }),
    description: (
      <Translate id="homepage.feature.passionate">
        对前端开发保持高度热情，我持续学习新技术，希望能够在实践中应用从而积累经验，提高自身能力。
      </Translate>
    ),
    header: <TypingSvg className="h-auto w-full" height={150} role="img" />,
  },
]

export default FEATURES
