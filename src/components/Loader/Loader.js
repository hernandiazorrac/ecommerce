import { MutatingDots } from  'react-loader-spinner'
import './Loader.css'

const Loader = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"};
    return(
    <div className='loaderBg'>
        <div style={style} className="bg-white px-4 py-3 loader">
            <strong>Cargando...</strong>
            <MutatingDots
            height="100"
            width="100"
            color="#FF6A76"
            secondaryColor= '#78CFEF'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}/>
        </div>
    </div>
    )
}

export default Loader;