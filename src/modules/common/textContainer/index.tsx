import {textProps} from './types'
const TextContainer: React.FC<textProps> = ({title, content}) => (
  <>
    <p>
      <span className='font-semibold text-gray-400'>{title} </span>
      {content}
    </p>
  </>
)

export default TextContainer
