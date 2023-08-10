import Spinner from 'react-bootstrap/Spinner';


const Loader = () => {

    return (
        <div className='loader'>
            <Spinner animation="border" variant="info"/>
        </div>
    )
}

export default Loader