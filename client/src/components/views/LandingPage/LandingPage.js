import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../_actions/user_action';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/header';
function LandingPage() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickHandler1 = () => {
        dispatch(logoutUser())
            // axios.get(`/api/users/logout`)
            .then(response => {
                if (response.payload.success) {
                    navigate('/login');
                } else {
                    alert('로그아웃 실패 했습니다.')
                }
            })
    }

    const onClickHandler2 = () => {
        dispatch(logoutUser())
        navigate('/login');
    }
    return (

        <div className='center'>
            <Header></Header>
            <a onClick={onClickHandler2}
                style={{
                    color: 'black',
                    marginLeft: '1210px'
                }}>
                로그인
            </a>
            <a onClick={onClickHandler1}
                style={{
                    color: 'black',
                    marginLeft: '1210px'
                }}>
                로그아웃
            </a>
           
            <NavBar></NavBar>

            <div
                style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                    , height: '100vh'
                }}>
                <h2>main page</h2>


            </div>
            <Footer></Footer>
        </div>
    )
}

export default LandingPage