import { Link } from "react-router-dom"
import styled from "styled-components"

const links = [
    {
        path: 'twitter.com/TechieHyena',
        name: 'Twitter',
        caption: 'TechieHyena',
        image: 'Twitter-Logo-Square.png'
    },
    {
        path: 't.me/techietheyeen',
        name: 'Telegram',
        caption: 'techietheyeen',
        image: 'TG.png'
    },
    {
        path: 'mailto:techiehyena@gmail.com',
        name: 'Email',
        caption: 'techiehyena@gmail.com',
        image: 'email-icon.png'
    },
    {
        path: null,
        name: 'Discord',
        caption: 'Techie#0621',
        image: 'discord.png'
    },
    {
        path: 'youtube.com/channel/UCYW-bCxtc9JZZ6oiE9lTwuQ',
        name: 'YouTube',
        caption: 'TechieHyena',
        image: 'YT.png'
    },
]

const About = () => {
    return <div style={{color: 'white'}}>
        <h1>Nerdy Photographer Yeen 📸 | 21 | Non-Binary She/Her - They/Them🏳️‍⚧️</h1>
        <h2>Links</h2>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '15px'
        }}>
            {links.map((link, idx) => {
            return <EXTLink
                        path={link.path}
                        name={link.name}
                        caption={link.caption}
                        image={link.image}
                        key={idx}/>
        })}
        </div>
    </div>
}

const EXTLink = (link) => {
    return <EXTL>
        <img src={link.image} alt={link.caption} style={{ height: '75px', aspectRatio: '1' }} />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <p style={{fontSize: '24px'}}>{link.name}</p>
            <p>{link.caption}</p>
        </div>
    </EXTL>
}

const EXTL = styled.div`
    display: flex;
    gap: 10px;

    & * {
        margin: 0;
    }
`

export default About
