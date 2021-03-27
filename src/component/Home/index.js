import * as Styles from '../../style/Home/Home'

export default function Home() {
    return (
        <Styles.Container>
            <Styles.BannerContainer>
                <Styles.Banner>
                    <Styles.BannerTitle>Hi, Azka!</Styles.BannerTitle>
                    <Styles.BannerInformation>You have 6 Pokemon(s) in your Pokedex</Styles.BannerInformation>  
                </Styles.Banner>
            </Styles.BannerContainer>
            <Styles.Title>All Pokemon</Styles.Title>
        </Styles.Container>
    )
}