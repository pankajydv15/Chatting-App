import { Box, InputBase, styled } from '@mui/material';
import { EmojiEmotionsOutlined, Attachment, Mic } from '@mui/icons-material';


const Container = styled(Box)`
    height: 61px;
    background: linear-gradient(45deg, #B4B4B3 30%, #93B1A6 90%);
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #000;
    }
`;

const Search = styled(Box)`
    background-color: #ffffff;
    border-radius: 18px;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;  
`;


const Footer = () => {

    return (

        <Container>
            <EmojiEmotionsOutlined />
            <Attachment />
            <Search>
                <InputField 
                    placeholder='type a message'
                />
            </Search>
            <Mic />
        </Container>
    )
}

export default Footer;