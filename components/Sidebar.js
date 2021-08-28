import styled from "styled-components"
import {Avatar, IconButton,Button} from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';


function Sidebar(){

const createChat = () => {
    const input = prompt("Please enter your email address");
    if(!input) return null;
}

    return(
        <Container>
            <Header>
                <UserAvatar />
                <IconButton>                   
                    <MoreVertIcon />
                </IconButton>
                <IconButton> 
                <ChatIcon />
                </IconButton>
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput />

            </Search>
            <SideBarButton onClick={createChat}>Start a new chat</SideBarButton>
       
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
`;

const SearchInput = styled.input`
outline-width: 0;
border: none;
flex:1;
`;

const SideBarButton = styled(Button)`
width:100%;

&&&{
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
}

`;

const Header = styled.div`
display: flex;
position: sticky;
top: 0;
background-color:white;
z-index:1;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`;

const Search = styled.div`
display: flex;
align-items: center;
padding: 5px;
border-radius: 2px;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;
:hover {
    opacity:0.8;
}
`
;

