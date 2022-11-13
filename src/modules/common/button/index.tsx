type buttonProps = {
    name: string
    id?: string
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    isDisabled?: boolean | false
}
const Button: React.FC<buttonProps> = ({
    name,
    id,
    children,
    onClick,
    isDisabled,
}) => (
    <>
        <button
            disabled={isDisabled ? true : false}
            name={name}
            id={id}
            className='bg-gray-700 text-white hover:bg-white hover:text-black rounded-lg w-1/4 p-5 m-10 disabled:bg-gray-200 disabled:text-black'
            onClick={onClick}
        >
            {children}
        </button>
    </>
)

export default Button
