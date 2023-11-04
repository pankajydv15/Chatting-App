// import { emptyChatImage } from '../../../constants/data';
import { Box, Typography, styled, Divider } from '@mui/material';

const Component = styled(Box)`
     background: #ffffff;
     padding: 30px 0;
     text-align: center;
     height: 100vh;
`;

const Container = styled(Box)`
     padding:  0 200px ;
`;

const Image = styled('img')({
    height: 250,
    width: 450,
    marginTop: 100
});


const Title = styled(Typography)`
    font-size: 32px;
    margin: 0px 0 1px 0;
    font-family: inherit;
    font-weight: 400;
    color: #41525d;
`;

const SubTitle = styled(Typography)`
    font-size: 20px;
    margin: 0px 0 1px 0;
    color: #667781;
    font-weight: 600;
    font-family: inherit;
    
`;
const SubTitle02 = styled(Typography)`
    font-size: 14px;
    margin: 0px 0 1px 0;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
    
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
`;

const EmptyChat = () => {
    return (
        <Component>
            <Container>
                <Image src="https://img.freepik.com/free-vector/business-people-arranging-appointment-digital-booking-app_74855-20006.jpg?size=626&ext=jpg&ga=GA1.1.969494356.1694080918&semt=ais" alt=""/>
                <Title>ChatEase</Title>
                <SubTitle>" 𝔏𝔢𝔱'𝔰 𝔰𝔱𝔞𝔯𝔱 𝔠𝔥𝔞𝔱𝔱𝔦𝔫𝔤! "</SubTitle>
                <SubTitle02> Pick a person from left menu and start your conversation. </SubTitle02>
                <SubTitle02>Now send and recieve messages without keeping your phone online. </SubTitle02>
                <StyledDivider sx={{ borderBottomWidth: 8 }}/>
            </Container>
        </Component>
    )
}

export default EmptyChat;