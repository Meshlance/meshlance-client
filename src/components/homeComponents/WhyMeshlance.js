import { HERO_TEXT_BOX, BIO, HERO_CARD_BOARD, PROJECT_CARD, FIGURE, CARD_IMAGE, CARD_TEXT } from "../styledComponents/homeStyledComponents/styled-GiveYourIdeasTheSupport"
import { CONTAINER, ROW, HERO_SECTION_2, HERO_TEXT_3 } from "../styledComponents/homeStyledComponents/styled-WhyMeshlance"

const WhyMeshlance = () => {
    const projectCard = [
        {"id": 3, "name": "for enterprises", "image": "#", "alt": "project for enterprises", "url": "for-enterprises"},
        {"id": 4, "name": "for organizations", "image": "#", "alt": "project for organizations", "url": "for-oranizations"}
    ]

  return (
    <CONTAINER>
        <ROW>
            <HERO_SECTION_2>
                <HERO_TEXT_BOX>
                    <HERO_TEXT_3> Why Booklance? </HERO_TEXT_3>
                    <BIO>  
                        Booklance positions itself as a versatile software projects freelancer, offering services to
                        individuals, teams, enterprises, and organizations by creating, executing, and testing customized
                        software products, while also ensuring clients gain insights into the development process.
                    </BIO>
                    <br />
                    <BIO> - Meshlance Developers & Forum </BIO>
                </HERO_TEXT_BOX>
                <HERO_CARD_BOARD>
                    {
                        projectCard.map((value) => {
                            return(
                                <PROJECT_CARD key={ value.id }>
                                    <FIGURE> <CARD_IMAGE src={ value.image } alt={ value.alt } /> </FIGURE>
                                    <CARD_TEXT> { value.name } </CARD_TEXT>
                                </PROJECT_CARD>
                            )
                        })
                    }
                </HERO_CARD_BOARD>
            </HERO_SECTION_2>
        </ROW>
    </CONTAINER>
  )
}

export default WhyMeshlance