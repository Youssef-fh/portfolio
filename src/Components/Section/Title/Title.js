import './Title.css';

const Title = (props) => {
    return (
        <div className='pt-5 text-center text-primary'>
            <h1>{props.children}</h1>
        </div>
    )
}

export default Title