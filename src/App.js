import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
             height = "100vh"
             projectID="a15649ec-93b1-42c2-af7e-963cca3130e1"
             userName= {localStorage.getItem('username')}
             userSecret= {localStorage.getItem('password')}
             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        
        
        />
    );
}
export default App;