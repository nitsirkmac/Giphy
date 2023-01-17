

const RandoDisplay = ({ gif }) => {


    return gif.data ? (
        <div>
            <h1>Random Gif Display</h1>
            <img src={gif.data.images.downsized.url} alt={gif.data.title} className='display' width = "320" height = "200" />
        </div>
    ) : (
        <h4>Powered by Giphy</h4>
    )
}

export default RandoDisplay;