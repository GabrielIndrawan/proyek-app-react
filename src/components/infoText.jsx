const InfoText = (props) => {
    const {children} = props
    return (
        <label className="block text-gray-500 text-xl font-regular text-center mb-2">
            {children}
        </label>
    )
}

export default InfoText