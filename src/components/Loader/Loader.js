import { MutatingDots } from  'react-loader-spinner'

const Loader = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    return(
        <div style={style}>
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
    )
}

export default Loader;