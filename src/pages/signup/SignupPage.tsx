import shootLogo from '../assets/shootLogo.png';
import colors from '../../styles/color';

const SignupPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img 
                src={shootLogo} 
                alt="shootLogo" 
                style={{ width: "315px", height: "66.23px" }} 
            />
            <div className='flex flex-col items-center justify-center mt-[15.54px] w-[494px] gap-[80px]'>
                <div>SHOOT integrating with your FIGMA account</div>
                <button 
                    style={{ 
                        width: '100%', 
                        height: '53px', 
                        backgroundColor: colors.grayscale[80]
                    }}
                >
                    Connect FIGMA
                </button>
            </div>
        </div>
    );
};

export default SignupPage;
