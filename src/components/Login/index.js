import { signInWithGoogle } from '../../firebase';
import './index.scss'


const Login = () => {
    return (
        <div className="dashboard">
            <h1 style={{color:'purple'}}>Add your Projects to your portfolio</h1>
            <button onClick={signInWithGoogle} className='flat-button'>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;