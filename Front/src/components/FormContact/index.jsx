import Forms from '../Forms'
import ImgForm from '../ImgForm'

const FormContact = () => {
    return (
        <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
                <Forms />
                <ImgForm />
            </div>
        </div>
    );
};

export default FormContact;