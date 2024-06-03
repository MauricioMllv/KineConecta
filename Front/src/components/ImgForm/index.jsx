import img from '../../assets/img/contacto.png'

const Img = () => {
    return (
        <div className='flex justify-center m-4 mb-10 max-w-md'>
            <img src={img} className='w-2/3' />
        </div>
    );
};

export default Img;