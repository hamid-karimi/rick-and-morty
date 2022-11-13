type TextProps = {
    title: string
    content: string | number
}
const TextContainer: React.FC<TextProps> = ({ title, content }) => (
    <>
        <p><span className='font-semibold text-gray-400'>{title} </span>{content}</p>
    </>
)

export default TextContainer