import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';

export default function Google({ action, }) {
    let dispatch = useDispatch()
    function handleClick(credential) {
        dispatch(action({ credential }))
    }
    return (
        <GoogleOAuthProvider clientId={"credentials"}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    handleClick(credentialResponse.credential)
                }}
                onError={() => {
                    console.log('Error server!');
                }}
            />
        </GoogleOAuthProvider>
    )
}