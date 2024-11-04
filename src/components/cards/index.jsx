/* eslint-disable react/prop-types */

const Card = (props) => {
    const {untitled, height, children} = props
    return(
        <>
            {
                (!untitled)?
                <div className="text-lg text-gray-02 mb-2">Title</div>
                :
                <></>
            }
            <div className={`bg-white rounded-lg px-6 py-5 shadow-xl`}>
                <div className={`h-${height}`}>
                    {(children==null)? <>Description</> : children}
                </div>
            </div>
        </>
    )
}

export default Card