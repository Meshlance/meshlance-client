import { CONTAINER, ROW, HERO_SECTION, 
    HERO_TEXT_BOX, HERO_TEXT, BIO_BOX, BIO, BUTTON_BOX, SEE_PRICING, BOOK_A_PROJECT, 
    HERO_CARD_BOARD, PROJECT_CARD, FIGURE, CARD_IMAGE, CARD_TEXT,
} from "../styledComponents/homeStyledComponents/styled-GiveYourIdeasTheSupport"


const GiveYourIdeasTheSupport = () => {

    const projectCard = [
        {"id": 1, "name": "for individual", "image": "#", "alt": "project for individual", "url": "for-individual"},
        {"id": 2, "name": "for teams", "image": "#", "alt": "project for teams", "url": "for-teams"}
    ]

  return (
    <CONTAINER>
        <ROW>
            <HERO_SECTION>
                <HERO_TEXT_BOX>
                    <HERO_TEXT> We give your ideas the support needed to complete live projects. </HERO_TEXT>
                    <BIO_BOX>
                        <BIO> Requirement Analysis - Design - Implementation </BIO>
                        <BIO> Testing - Deployment - Evaluation - Re-Engineering </BIO>
                    </BIO_BOX>
                    <BUTTON_BOX>
                        <SEE_PRICING variant="outline"> see pricing </SEE_PRICING>
                        <BOOK_A_PROJECT> book a project </BOOK_A_PROJECT>
                    </BUTTON_BOX>
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
            </HERO_SECTION>
        </ROW>
    </CONTAINER>
  )
}

export default GiveYourIdeasTheSupport