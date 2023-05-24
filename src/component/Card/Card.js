import './Card.css';
const Card = (props) => {
    const style={
        backgroundImage:`url(${props.img})`
    }
    return (
        <>
            <div className='col-lg-4'>
                <div className='card-i' style={{backgroundColor:props.color}}>
                    <div className='card-header'style={style} >
                        
                    </div>
                    <div className='card-body'>
                        <div className="card-body-header">
                            <h6>{props.title}</h6>
                            <p>...</p>
                        </div>
                        <div className='card-body-body'>
                            <h1>{props.current}hrs</h1>
                            <p>{props.prev}hrs</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;