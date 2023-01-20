

const RandoDisplay = ({ gif }) => {


    return gif.data ? (
        <div>
            <img src={gif.data.images.downsized.url} alt={gif.data.title} className='display' width = "320" height = "200" />
            <h4>Powered by Giphy</h4>
        </div>
    ) : (
        <h4>Powered by Giphy</h4>
    )
}

export default RandoDisplay;