
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../_actions/user_action';

function LandingPage() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickHandler = () => {
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
    return (
        <div style={{
            display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler} >
                로그아웃
            </button>
        </div>
    )
}

export default LandingPage